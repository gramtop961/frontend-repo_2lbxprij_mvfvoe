import React from 'react';
import { Check, MessageSquare, ArrowRight } from 'lucide-react';

const Solutions = () => {
  return (
    <section id="solutions" className="relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Solutions
          </h2>
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
            <div key={item.title} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-violet-700">
                <Check className="size-5" />
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
              </div>
              <p className="mt-3 text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Main CTA with two sub-CTAs */}
        <div className="mt-10 rounded-2xl border border-gray-100 p-6 md:p-8 bg-white">
          <div className="md:flex md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">See solutions in action</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Explore example agents for support, sales, and operations.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 font-semibold">
                Try a Demo <ArrowRight className="size-4" />
              </a>
              <a href="#resources" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white hover:bg-black px-4 py-2 font-semibold">
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