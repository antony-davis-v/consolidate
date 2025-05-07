import { Check, ChevronRight } from "lucide-react";

import chart1 from '@/assets/fanda/chart1.png';
import chart2 from '@/assets/fanda/chart2.png';
import chart3 from '@/assets/fanda/chart3.png';
import chart4 from '@/assets/fanda/chart4.png';
import chart5 from '@/assets/fanda/chart5.png';
import chart6 from '@/assets/fanda/chart6.png';
import chart7 from '@/assets/fanda/chart7.png';


const Feature22 = () => {
  return (
    <section className="pt-0 pb-40">
      <div className="container">
        <div className="grid sm:grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-6 md:gap-y-6 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12">
          <div className="rounded-lg border">
            <div className="relative p-1">
              <img
                src= {chart1.src}
                alt="placeholder"
                className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
              />
            </div>
            <div>
              <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                <h3 className="mb-3 font-medium">
                  Forecasting & Budgeting Analytics
                </h3>
                <p className="text-sm text-muted-foreground">
                  Drive agile decision-making with forward-looking forecasts and
                  adaptive budgets that empower your organization to swiftly
                  respond to market shifts
                </p>
              </div>
              <div className="h-px border-t border-dashed"></div>
              <ul className="text-muted-foreground">
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Revenue & Expense Forecasting
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Scenario & Variance Analysis
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Cash Flow Budgeting
                </li>
              </ul>
              <div className="h-px border-t border-dashed"></div>
              <a
                href="https://outlook.office365.com/book/Valuenode@valuenode.com/s/WVupA6gsR0KVVu36Q0-McA2"
                className="my-3 text-muted-foreground flex items-center gap-2 px-4 font-medium sm:my-4 sm:px-5 md:px-6"
              >
                Book a demo
                <ChevronRight className="mt-0.5 size-4" />
              </a>
            </div>
          </div>
          <div className="rounded-lg border">
            <div className="relative p-1">
              <img
                src={chart2.src}
                alt="placeholder"
                className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
              />
            </div>
            <div>
              <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                <h3 className="mb-3 font-medium">
                  Financial Close & Reporting Automation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Accelerate and simplify your close process with automated
                  workflows and real-time reporting, freeing leadership to focus
                  on strategic growth
                </p>
              </div>
              <div className="h-px border-t border-dashed"></div>
              <ul className="text-muted-foreground">
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Automated Reconciliations & Consolidations
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Compliance & Audit-Ready Reporting
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Streamlined Period-End Close
                </li>
              </ul>
              <div className="h-px border-t border-dashed"></div>
              <a
                href="https://outlook.office365.com/book/Valuenode@valuenode.com/s/WVupA6gsR0KVVu36Q0-McA2"
                className="my-3 text-muted-foreground flex items-center gap-2 px-4 font-medium sm:my-4 sm:px-5 md:px-6"
              >
               Book a demo
                <ChevronRight className="mt-0.5 size-4" />
              </a>
            </div>
          </div>
          <div className="rounded-lg border">
            <div className="relative p-1">
              <img
                src={chart3.src}
                alt="placeholder"
                className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
              />
            </div>
            <div>
              <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                <h3 className="mb-3 font-medium">Working Capital Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Uncover hidden liquidity opportunities to strengthen cash flow
                  and fuel growth, optimizing every facet of your working
                  capital structure
                </p>
              </div>
              <div className="h-px border-t border-dashed"></div>
              <ul className="text-muted-foreground">
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Receivables & Payables Management
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Cash Conversion Cycle Monitoring
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Liquidity & Cost Control
                </li>
              </ul>
              <div className="h-px border-t border-dashed"></div>
              <a
                href="https://outlook.office365.com/book/Valuenode@valuenode.com/s/WVupA6gsR0KVVu36Q0-McA2"
                className="my-3 text-muted-foreground flex items-center gap-2 px-4 font-medium sm:my-4 sm:px-5 md:px-6"
              >
                Book a demo
                <ChevronRight className="mt-0.5 size-4" />
              </a>
            </div>
          </div>
          <div className="rounded-lg border">
            <div className="relative p-1">
              <img
                src={chart4.src}
                alt="placeholder"
                className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
              />
            </div>
            <div>
              <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                <h3 className="mb-3 font-medium">
                  Profitability & Cost Analytics
                </h3>
                <p className="text-sm text-muted-foreground">
                  Pinpoint cost efficiencies and margin opportunities to drive
                  strategic profitability, fueling sustainable growth and
                  competitive advantage
                </p>
              </div>
              <div className="h-px border-t border-dashed"></div>
              <ul className="text-muted-foreground">
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Margin & Break-Even Analysis
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Pricing Strategy & Optimization
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Activity-Based Costing
                </li>
              </ul>
              <div className="h-px border-t border-dashed"></div>
              <a
                href="https://outlook.office365.com/book/Valuenode@valuenode.com/s/WVupA6gsR0KVVu36Q0-McA2"
                className="my-3 text-muted-foreground flex items-center gap-2 px-4 font-medium sm:my-4 sm:px-5 md:px-6"
              >
                Book a demo
                <ChevronRight className="mt-0.5 size-4" />
              </a>
            </div>
          </div>
          <div className="rounded-lg border">
            <div className="relative p-1">
              <img
                src={chart5.src}
                alt="placeholder"
                className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
              />
            </div>
            <div>
              <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                <h3 className="mb-3 font-medium">
                  Operational Performance Analytics
                </h3>
                <p className="text-sm text-muted-foreground">
                  Transform operational efficiency with data-driven insights
                  that reveal, measure, and optimize the processes most critical
                  to your success
                </p>
              </div>
              <div className="h-px border-t border-dashed"></div>
              <ul className="text-muted-foreground">
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  KPI Dashboards & Benchmarking
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Workflow & Process Optimization
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Real-Time Performance Monitoring
                </li>
              </ul>
              <div className="h-px border-t border-dashed"></div>
              <a
                href="https://outlook.office365.com/book/Valuenode@valuenode.com/s/WVupA6gsR0KVVu36Q0-McA2"
                className="my-3 text-muted-foreground flex items-center gap-2 px-4 font-medium sm:my-4 sm:px-5 md:px-6"
              >
                Book a demo
                <ChevronRight className="mt-0.5 size-4" />
              </a>
            </div>
          </div>
          <div className="rounded-lg border">
            <div className="relative p-1">
              <img
                src={chart6.src}
                alt="placeholder"
                className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
              />
            </div>
            <div>
              <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                <h3 className="mb-3 font-medium">
                  Solvency & Resilience Analytics
                </h3>
                <p className="text-sm text-muted-foreground">
                  Safeguard long-term stability and foster resilience with
                  analytics that monitor solvency metrics, identify critical
                  risks, and drive sustainable growth
                </p>
              </div>
              <div className="h-px border-t border-dashed"></div>
              <ul className="text-muted-foreground">
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Liquidity Stress Testing
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Risk Management & Scenario Planning
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Long-Term Financial Health Indicators
                </li>
              </ul>
              <div className="h-px border-t border-dashed"></div>
              <a
                href="https://outlook.office365.com/book/Valuenode@valuenode.com/s/WVupA6gsR0KVVu36Q0-McA2"
                className="my-3 text-muted-foreground flex items-center gap-2 px-4 font-medium sm:my-4 sm:px-5 md:px-6"
              >
                Book a demo
                <ChevronRight className="mt-0.5 size-4" />
              </a>
            </div>
          </div>
          <div className="rounded-lg border">
            <div className="relative p-1">
              <img
                src={chart7.src}
                alt="placeholder"
                className="max-h-96 w-full rounded-t-lg object-cover sm:max-h-72 md:max-h-64"
              />
            </div>
            <div>
              <div className="mb-3 px-4 pt-5 sm:px-5 md:px-6 md:pt-6">
                <h3 className="mb-3 font-medium">
                  Capital Investment Analytics
                </h3>
                <p className="text-sm text-muted-foreground">
                  Make high-impact investment decisions using advanced analytics
                  that optimize capital allocation and forecast ROI, maximizing
                  shareholder value
                </p>
              </div>
              <div className="h-px border-t border-dashed"></div>
              <ul className="text-muted-foreground">
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  ROI & Payback Evaluations
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Risk & Sensitivity Modeling
                </li>
                <div className="h-px border-t border-dashed"></div>
                <li className="flex items-start gap-2 px-4 py-3 sm:px-5 md:px-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  Capital Budgeting & Allocation
                </li>
              </ul>
              <div className="h-px border-t border-dashed"></div>
              <a
                href="https://outlook.office365.com/book/Valuenode@valuenode.com/s/WVupA6gsR0KVVu36Q0-McA2"
                className="my-3 text-muted-foreground flex items-center gap-2 px-4 font-medium sm:my-4 sm:px-5 md:px-6"
              >
                Book a demo
                <ChevronRight className="mt-0.5 size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature22 };
