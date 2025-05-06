"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import copilot1 from "@/assets/mspp/copilot1.png";
import copilot2 from "@/assets/mspp/copilot2.png";
import copilot3 from "@/assets/mspp/copilot3.png";

const features = [
  {
    id: "feature-1",
    tabLabel: "Discover & Design",
    title: "Discover & Design",
    description:
      "We partner with you to unearth the high‑value scenarios where an AI agent can streamline workflows and elevate user experiences. By tapping into your organization’s knowledge repositories—Microsoft Graph, Dataverse, your intranet and public websites—we design a conversational intelligence layer that understands context and intent. Our experts define the precise triggers, custom topics, and workflow automations needed to turn natural language interactions into real‑world actions. With access to numerous prebuilt connectors, we architect seamless data and service integrations without writing a single line of traditional code.",
    image: copilot1,
  },
  {
    id: "feature-2",
    tabLabel: "Build & Deploy",
    title: "Build & Deploy",
    description:
      "Leveraging Power Platform Copilot Studio, we rapidly assemble, test, and refine your AI agent so it’s ready to go wherever your teams collaborate. Whether embedded in Microsoft Teams, SharePoint, 365 Copilot Chat, a customer portal or any social channel, your agent will deliver consistent, brand‑aligned conversations and automated tasks. We tailor prebuilt templates for HR, finance, IT support or custom business processes—then customize them to your terminology, tone, and security requirements. The result is a fully operational agent that engages users, completes routine tasks, and scales at the speed of your business.",
    image: copilot2,
  },
  {
    id: "feature-3",
    tabLabel: "Govern & Scale",
    title: "Govern & Scale",
    description:
      "As your adoption grows, we establish the governance, security and lifecycle management frameworks you need to maintain control and compliance. From a single pane in the Power Platform admin center, you’ll define access policies, data‑loss prevention rules, and environment‑specific guidelines. We integrate audit logging via Microsoft Purview and real‑time alerts through Sentinel so you can monitor usage, detect anomalies, and continuously optimize performance. With best‑practice application lifecycle management in place, your AI agents evolve alongside your organization—securely, efficiently, and at enterprise scale.",
    image: copilot3,
  },
];

const Feature78 = () => {
  const [selection, setSelection] = useState(features[0].id);
  return (
    <section className="pt-0 pb-40">
      <div className="flex flex-col">
        <div className="container">
          <div className="lg:max-w-3xl">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight leading-normal md:text-3xl lg:text-4xl">
              Transform your workforce with AI Agents
            </h2>
            <a
              href="#"
              className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
            >
              Book a demo{" "}
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        <div>
          <Tabs value={selection} onValueChange={setSelection}>
            <div className="relative mt-6">
              <div className="overflow-auto">
                <div className="container min-w-fit">
                  <TabsList>
                    {features.map((feature) => (
                      <TabsTrigger key={feature.id} value={feature.id}>
                        {feature.tabLabel}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--color-background)_0%,transparent_10%,transparent_90%,var(--color-background)_100%)] md:hidden" />
              </div>
            </div>
            <div className="container">
              {features.map((feature) => (
                <TabsContent key={feature.id} value={feature.id}>
                  <div className="mt-12 flex flex-col lg:col-span-2 lg:grid lg:grid-cols-2">
                    <div className="overflow-clip rounded-3xl md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                      <img
                        src={feature.image.src}
                        alt={feature.tabLabel}
                        className="aspect-[16/9] h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col justify-center pt-8 lg:px-10">
                      <h3 className="mb-4 text-xl font-semibold tracking-tight leading-normal md:text-2xl lg:text-3xl">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { Feature78 };
