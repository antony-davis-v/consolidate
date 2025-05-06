"use client";

import {
  ArrowLeft,
  ArrowRight,
  Menu,
  Atom,
  DatabaseBackup,
  Rocket,
  BrainCircuit,
  ChartColumn,
  ChartNoAxesCombined,
  ClipboardMinus,
  CircleDollarSign,
  MonitorCog,
  HandCoins,
  BanknoteIcon,
  PiggyBank,
  CodeXml,
  DollarSign,
  ChartColumnDecreasing,
  Workflow,
  Dock,
  LayoutPanelLeft,
  Hexagon,
  X,
} from "lucide-react";
import { Fragment, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import logo1 from '@/assets/logos/icon final GB.png';
import img1 from "@/assets/dataandai/img1.png";
import img2 from "@/assets/dataandai/img2.png";
import img3 from "@/assets/dataandai/img3.png";


// Data Arrays
const DataandAI = [
  {
    title: "Data Solutions",
    description:"test",
    src: img1.src,
    features: [
      {
        id: "feature-1",
        title: "Data Engineering",
        description: "Transform how your organization works with our platform.",
        href: "/data-and-ai#dataeng",
        icon: DatabaseBackup,
      },
      {
        id: "feature-2",
        title: "Data Modelling",
        description: "Expert guidance for organizational change and adoption.",
        href: "/data-and-ai#dataeng",
        icon: Atom,
      },
      {
        id: "feature-3",
        title: "Data Visualization",
        description: "Roll out and scale across global teams seamlessly.",
        href: "/data-and-ai#dataeng",
        icon: ChartColumn,
      },
      {
        id: "feature-4",
        title: "AI Integration",
        description: "Roll out and scale across global teams seamlessly.",
        href:"/data-and-ai#dataeng",
        icon: BrainCircuit,
      },
    ],
  },
];

const FinanceIntelligence = [
  {
    title: "Strategic Finance Solutions",
    description:"test",
    src: img1.src,
    features: [
      {
        id: "feature-1",
        title: "Forecasting & Budgeting Analytics",
        description: "Transform how your organization works with our platform.",
        href: "/finance-intelligence",
        icon: ChartNoAxesCombined,
      },
      {
        id: "feature-2",
        title: "Financial Close & Reporting Automation",
        description: "Expert guidance for organizational change and adoption.",
        href: "/finance-intelligence",
        icon: ClipboardMinus,
      },
      {
        id: "feature-3",
        title: "Working Capital Analytics",
        description: "Roll out and scale across global teams seamlessly.",
        href: "/finance-intelligence",
        icon: CircleDollarSign,
      },
      {
        id: "feature-4",
        title: "Profitability & Cost Analytics",
        description: "Roll out and scale across global teams seamlessly.",
        href: "/finance-intelligence",
        icon: HandCoins,
      },
      {
        id: "feature-5",
        title: "Operational Performance Analytics",
        description: "Roll out and scale across global teams seamlessly.",
        href: "/finance-intelligence",
        icon: MonitorCog,
      },
      {
        id: "feature-6",
        title: "Solvency & Resilience Analytics",
        description: "Roll out and scale across global teams seamlessly.",
        href: "/finance-intelligence",
        icon: BanknoteIcon,
      },
      {
        id: "feature-7",
        title: "Capital Investment Analytics",
        description: "Roll out and scale across global teams seamlessly.",
        href: "/finance-intelligence",
        icon: PiggyBank,
      },
    ],
  },
];

const MicrosoftPowerPlatform = [
  {
    title: "Low code Solutions",
    description:"test",
    src: img2.src,
    features: [
      {
        id: "feature-1",
        title: "Co pilot",
        description: "Transform how your organization works with our platform.",
        href: "/microsoft-power-platform#copilot",
        icon: Hexagon,
      },
      {
        id: "feature-2",
        title: "Power BI",
        description: "Expert guidance for organizational change and adoption.",
        href: "/microsoft-power-platform#powerbi",
        icon: ChartColumnDecreasing,
      },
      {
        id: "feature-3",
        title: "Power Apps",
        description: "Roll out and scale across global teams seamlessly.",
        href: "/microsoft-power-platform#powerapps",
        icon: LayoutPanelLeft,
      },
      {
        id: "feature-4",
        title: "Power Automate",
        description: "Roll out and scale across global teams seamlessly.",
        href: "/microsoft-power-platform#powerautomate",
        icon: Workflow,
      },
      {
        id: "feature-5",
        title: "Power Pages",
        description: "Roll out and scale across global teams seamlessly.",
        href: "/microsoft-power-platform#powerpages",
        icon: Dock,
      },
    ],
  },
];

const OffShoreStaffing = [
  {
    title: "Staffing Solutions",
     description:"test",
     src: img3.src,
    features: [
      {
        id: "feature-1",
        title: "Technology",
        description: "Transform how your organization works with our platform.",
        href: "/offshore-staffing",
        icon: CodeXml,
      },
      {
        id: "feature-2",
        title: "Finance and Accounting",
        description: "Expert guidance for organizational change and adoption.",
        href: "/offshore-staffing",
        icon: DollarSign,
      },
    ],
  },
];
// ValuenodeMenu Component
interface ValuenodeMenuProps {
  data: {
    title: string;
    description: string;
    src: string;
    features: {
      id: string;
      title: string;
      description: string;
      href: string;
      icon: React.ElementType;
    }[];
  }[];
}

const menu = [
  "dataandai",
  "financeintelligence",
  "microsoftpowerplatform",
  "offshorestaffing",
];

const ValuenodeMenu = ({ data }: ValuenodeMenuProps) => (
  <div>
    <div className="space-y-6 lg:flex lg:items-start lg:space-y-0 lg:space-x-8">
      <div className="w-full shrink-0 lg:max-w-[18rem]">
        <a
          href="#"
          className="group relative flex h-full flex-row overflow-hidden rounded-lg p-0 text-primary-foreground lg:rounded-xl"
        >
          <div className="relative z-10 flex w-full flex-col-reverse text-left lg:flex-col">
            <div className="relative flex aspect-[4/3] max-h-[18rem] w-full flex-1 justify-center">
            {data.map((category) => (
              <div key={category.title} >
              <img
                src={category.src}
                alt="placeholder"
                className="h-full w-full object-cover object-center"
              />
              </div>
            ))}
            </div>
            <div className="relative z-20 mt-auto flex flex-col rounded-b-xl bg-primary p-6">
              <div className="flex items-center space-x-1 text-xs">
              {data.map((category) => (
          <div key={category.title} className="grid gap-y-2 lg:gap-y-6">
            <div className="border-border text-left lg:border-b lg:pb-3">
              <strong className="text-left text-xs font-medium tracking-wider text-muted-foreground uppercase">
                {category.title}
              </strong>
            </div>
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </div>
               ))}
                </div>
                {data.map((category) => (
              <div key={category.title} >
              <p className="mt-2 text-xs text-primary-foreground/85">
                {category.description}
              </p>
                </div>
                ))}
            </div>
          </div>
        </a>
      </div>
      <div className="grid w-full gap-y-12 lg:gap-y-6">
        {data.map((category) => (
          <div key={category.title} className="grid gap-y-2 lg:gap-y-6">
            <div className="border-border text-left lg:border-b lg:pb-3">
              <strong className="text-left text-xs font-medium tracking-wider text-muted-foreground uppercase">
                {category.title}
              </strong>
            </div>
            <menu className="grid md:grid-cols-3 md:gap-x-6 lg:gap-y-6">
              {category.features.map((feature) => (
                <NavigationMenuLink
                  key={feature.id}
                  href={feature.href}
                  className="group flex flex-row items-start space-x-4 border-b border-border py-5 text-left sm:py-7 lg:border-0 lg:py-0"
                >
                  <div className="flex aspect-square size-9 shrink-0 items-center justify-center">
                    <feature.icon className="size-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground/85 group-hover:text-foreground">
                      {feature.title}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground group-hover:text-foreground">
                      {feature.description}
                    </p>
                  </div>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
                </NavigationMenuLink>
              ))}
            </menu>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Updated Navbar4 Component to pass corresponding data to ValuenodeMenu
const Navbar4 = () => {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState<
    | "dataandai"
    | "financeintelligence"
    | "microsoftpowerplatform"
    | "offshorestaffing"
    | null
  >(null);
  return (
    <section className="fixed inset-x-0 top-0 z-20 bg-background">
      <div className="container">
        <NavigationMenu className="min-w-full">
          <div className="flex w-full justify-between gap-2 py-4">
            <a
              href="./"
              className="flex items-center "
            >
              <img
                src={logo1.src}
                className="max-h-4 md:max-h-5 lg:max-h-6"
                alt="Shadcn UI Navbar"
              />
            
            </a>
            <div className="flex items-center gap-2 xl:gap-8">
              <NavigationMenuList className="hidden lg:flex">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xs xl:text-sm">
                    Data and AI
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[calc(100vw-4rem)] p-12 2xl:min-w-[calc(1400px-4rem)]">
                    <ValuenodeMenu data={DataandAI} />
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xs xl:text-sm">
                    Finance Intelligence
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[calc(100vw-4rem)] p-12 2xl:min-w-[calc(1400px-4rem)]">
                    <ValuenodeMenu data={FinanceIntelligence} />
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xs xl:text-sm">
                    Microsoft Power Platform
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[calc(100vw-4rem)] p-12 2xl:min-w-[calc(1400px-4rem)]">
                    <ValuenodeMenu data={MicrosoftPowerPlatform} />
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xs xl:text-sm">
                    Offshore Staffing
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[calc(100vw-4rem)] p-12 2xl:min-w-[calc(1400px-4rem)]">
                    <ValuenodeMenu data={OffShoreStaffing} />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </div>
            <div className="flex items-center gap-2">
              <Button className="hidden md:block">Contact us</Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Main Menu"
                className="lg:hidden"
                onClick={() => {
                  if (open) {
                    setOpen(false);
                    setSubmenu(null);
                  } else {
                    setOpen(true);
                  }
                }}
              >
                {!open && <Menu className="size-4" />}
                {open && <X className="size-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="absolute inset-0 top-[68px] z-50 flex h-[calc(100vh-72px)] w-full flex-col overflow-scroll border-t border-border bg-background lg:hidden">
              {submenu && (
                <div className="mt-3 px-[1rem]">
                  <Button variant="link" onClick={() => setSubmenu(null)}>
                    <ArrowLeft className="mr-2 size-4 text-xs" />
                    Go back
                  </Button>
                </div>
              )}
              {submenu === null && (
                <div>
                  <button
                    type="button"
                    className="flex w-full items-center border-b border-border px-8 py-6 text-left"
                    onClick={() => setSubmenu("dataandai")}
                  >
                    <span className="flex-1 text-sm font-medium">
                      Data and AI
                    </span>
                    <span className="shrink-0">
                      <ArrowRight className="size-4" />
                    </span>
                  </button>
                  <button
                    type="button"
                    className="flex w-full items-center border-b border-border px-8 py-6 text-left"
                    onClick={() => setSubmenu("financeintelligence")}
                  >
                    <span className="flex-1 text-sm font-medium">
                      Finance Intelligence
                    </span>
                    <span className="shrink-0">
                      <ArrowRight className="size-4" />
                    </span>
                  </button>
                  <button
                    type="button"
                    className="flex w-full items-center border-b border-border px-8 py-6 text-left"
                    onClick={() => setSubmenu("microsoftpowerplatform")}
                  >
                    <span className="flex-1 text-sm font-medium">
                      Microsoft Power Platform
                    </span>
                    <span className="shrink-0">
                      <ArrowRight className="size-4" />
                    </span>
                  </button>
                  <button
                    type="button"
                    className="flex w-full items-center border-b border-border px-8 py-6 text-left"
                    onClick={() => setSubmenu("offshorestaffing")}
                  >
                    <span className="flex-1 text-sm font-medium">
                      Offshore Staffing
                    </span>
                    <span className="shrink-0">
                      <ArrowRight className="size-4" />
                    </span>
                  </button>
                </div>
              )}
              {submenu === "dataandai" && (
                <div className="container">
                  <h2 className="pt-4 pb-6 text-lg font-medium">Solutions</h2>
                  <ValuenodeMenu data={DataandAI} />
                </div>
              )}
              {submenu === "financeintelligence" && (
                <div className="container">
                  <h2 className="pt-4 pb-6 text-lg font-medium">Products</h2>
                  <ValuenodeMenu data={FinanceIntelligence} />
                </div>
              )}
              {submenu === "microsoftpowerplatform" && (
                <div className="container">
                  <h2 className="pt-4 pb-6 text-lg font-medium">Company</h2>
                  <ValuenodeMenu data={MicrosoftPowerPlatform} />
                </div>
              )}
              {submenu === "offshorestaffing" && (
                <div className="container">
                  <h2 className="pt-4 pb-6 text-lg font-medium">Customers</h2>
                  <ValuenodeMenu data={OffShoreStaffing} />
                </div>
              )}

              {/* Mobile menu footer */}
              <div className="mx-[2rem] mt-auto flex flex-col items-center gap-8 py-24">
                <Button>Book a meeting</Button>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-xs">Talk to an expert:</p>
                  <a
                    href="#"
                    className="text-xs text-foreground/85 hover:text-foreground"
                  >
                    Get in touch
                  </a>
                </div>
                <p className="text-xs">Copyright &copy; All Rights Reserved.</p>
              </div>
            </div>
          )}
        </NavigationMenu>
      </div>
    </section>
  );
};

export { Navbar4 };
