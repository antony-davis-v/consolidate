import React, { useState } from 'react';

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact10 = () => {


const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
});
const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('sending');
  try {
    const res = await fetch('/send_email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (err) {
    console.error(err);
    setStatus('error');
  }
};

  return (
    <section className="relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-white py-32 lg:mx-4 dark:from-amber-950">
      <div className="container max-w-2xl">
        <div className="text-center">
          <h1 className="text-center text-3xl font-semibold tracking-tight leading-normal md:text-4xl lg:text-5xl">
            Contact us
          </h1>
          <p className="mt-4 text-center leading-snug font-medium text-muted-foreground lg:mx-auto">
            We're here to assist—explore our offerings or learn more.
          </p>
        </div>
        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          <div>
            <h2 className="font-semibold">Corporate office</h2>
            <p className="mt-3 text-muted-foreground">
              WeWork Rajapushpa Summit
              <br />
              Financial District
              <br />
              Hyderabad 500032
              <br />
              Telangana, India
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Email us</h2>
            <p className="mt-3 text-muted-foreground">
              contact [at]
              <br />
              valuenode [dot] com
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Call us </h2>
            <p className="mt-3 text-muted-foreground">+91 7337223434</p>
          </div>
        </div>

        <DashedLine className="my-12" />

        {/* Inquiry Form */}
        <div className="mx-auto">
          <h2 className="text-lg font-semibold">Inquiries</h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="First and last name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Work email address</Label>
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="me@company.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="+[Country code] [Phone number]"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company name</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Your message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                className="min-h-[120px] resize-none"
                required
              />
            </div>

            {status === 'success' && (
              <p className="text-green-600">Your message has been sent!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600">Oops, something went wrong.</p>
            )}

            <div className="flex justify-end">
              <Button size="lg" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Submit'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

interface DashedLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const DashedLine = ({
  orientation = "horizontal",
  className,
}: DashedLineProps) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "relative text-muted-foreground",
        isHorizontal ? "h-px w-full" : "h-full w-px",
        className
      )}
    >
      <div
        className={cn(
          isHorizontal
            ? [
                "h-px w-full",
                "bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "[mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]",
              ]
            : [
                "h-full w-px",
                "bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_8px)]",
                "[mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]",
              ]
        )}
      />
    </div>
  );
};

export { Contact10 };
