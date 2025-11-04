import React from 'react';
import { Check, MessageSquare, ArrowRight } from 'lucide-react';

const SolutionCard = ({ title, desc }) => (
  <div className="group relative">
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10" aria-hidden="true" />
    <div className="relative rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-100 p-6 shadow-sm transition transform-gpu group-hover:-translate-y-0.5 group-hover:shadow-lg">
      <div className="flex items-center gap-2 text-violet-700">
        <Check className="size-5" />
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="mt-3 text-gray-600 text-sm">{desc}</p>
    </div>
  </div>
);

const Solutions = () => {
  return (
    <section id="solutions" className="relative bg-gray-50">
      <div className="pointer-events-none absolute inset-x-0 -top-16 mx-auto h-64 w-[80%] rounded-full bg-gradient-to-r from-fuchsia-400/10 via-cyan-400/10 to-blue-400/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Solutions</h2>
          <p className="mt-3 text-gray-600">
            Flexible building blocks to cover inbound support, outbound sales, and internal ops.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Customer Support',
              desc: 'Resolve tickets instantly across web, WhatsApp, and voice with your knowledge base.',
            },
            {
              title: 'Sales Concierge',
              desc: 'Qualify leads, book meetings, and handle objections with live handoff to reps.',
            },
            {
              title: 'Ops Automation',
              desc: 'Automate FAQs, order status, returns, and account updates across channels.',
            },
          ].map((item) => (
            <SolutionCard key={item.title} title={item.title} desc={item.desc} />
          ))}
        </div>

        {/* Main CTA with two sub-CTAs */}
        <div className="mt-10 rounded-2xl border border-gray-100 p-6 md:p-8 bg-white/90 backdrop-blur-sm shadow-sm">
          <div className="md:flex md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">See solutions in action</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Explore example agents for support, sales, and operations.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-600 hover:from-cyan-400 hover:to-fuchsia-500 text-white px-4 py-2 font-semibold transform-gpu hover:-translate-y-0.5">
                Try a Demo <ArrowRight className="size-4" />
              </a>
              <a href="#resources" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white hover:bg-black px-4 py-2 font-semibold transform-gpu hover:-translate-y-0.5">
                Templates <MessageSquare className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
