// src/components/Contact10.tsx
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

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
        {/* …your header & corporate info here… */}

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

export { Contact10 };
