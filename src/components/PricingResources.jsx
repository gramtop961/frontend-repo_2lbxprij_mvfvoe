import React from 'react';
import { Check, ArrowRight, BookOpen } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$29',
    period: '/mo',
    features: ['1 agent', '1,000 conversations', 'Email support'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$99',
    period: '/mo',
    features: ['5 agents', '10,000 conversations', 'Priority support', 'Custom voice'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['Unlimited agents', 'SLA & SSO', 'Private cloud', 'Dedicated manager'],
    highlight: false,
  },
];

const PricingResources = () => {
  return (
    <section id="pricing" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Pricing</h2>
          <p className="mt-3 text-gray-600">Simple, transparent pricing that scales with you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={
                'rounded-2xl border p-6 shadow-sm ' +
                (tier.highlight
                  ? 'border-violet-200 bg-gradient-to-br from-violet-50 to-blue-50'
                  : 'border-gray-100 bg-white')
              }
            >
              <div className="flex items-baseline gap-2">
                <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
              </div>
              <div className="mt-2 flex items-end gap-1">
                <div className="text-3xl font-extrabold text-gray-900">{tier.price}</div>
                <div className="text-gray-500">{tier.period}</div>
              </div>
              <ul className="mt-4 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="mt-0.5 size-4 text-violet-600" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#resources"
                className={
                  'mt-6 inline-flex items-center gap-2 rounded-lg px-4 py-2 font-semibold ' +
                  (tier.highlight
                    ? 'bg-violet-600 text-white hover:bg-violet-700'
                    : 'bg-gray-900 text-white hover:bg-black')
                }
              >
                Choose {tier.name} <ArrowRight className="size-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Resources */}
        <div id="resources" className="mt-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Resources</h2>
            <p className="mt-3 text-gray-600">Build faster with guides, docs, and examples.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Documentation',
                desc: 'SDKs, API reference, and quickstarts to get productive.',
                href: '#',
              },
              {
                title: 'Templates',
                desc: 'Ready-to-deploy agents for support, sales, and more.',
                href: '#',
              },
              {
                title: 'Changelog',
                desc: 'What’s new, improvements, and fixes every week.',
                href: '#',
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group rounded-2xl bg-gray-50 hover:bg-gray-100 transition border border-gray-100 p-6 block"
              >
                <div className="flex items-center gap-2 text-gray-900">
                  <BookOpen className="size-5 text-violet-600" />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-violet-700">
                  Explore <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>

          {/* Footer inside this section to keep within 4 components total */}
          <footer className="mt-20 border-t border-gray-100 pt-8 text-sm text-gray-600">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-700">© {new Date().getFullYear()} AIAgent Co. All rights reserved.</div>
              <div className="flex items-center gap-4">
                <a href="#platform" className="hover:text-gray-900">Platform</a>
                <a href="#solutions" className="hover:text-gray-900">Solutions</a>
                <a href="#pricing" className="hover:text-gray-900">Pricing</a>
                <a href="#resources" className="hover:text-gray-900">Resources</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default PricingResources;