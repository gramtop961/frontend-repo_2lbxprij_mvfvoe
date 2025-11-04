import React from 'react';
import { Headphones, Shield, ArrowRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, hue }) => (
  <div className="group relative">
    <div
      className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-gradient-to-br from-${hue}-500/10 to-cyan-500/10`}
      aria-hidden="true"
    />
    <div className="relative rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm p-6 shadow-sm transition transform-gpu group-hover:-translate-y-0.5 group-hover:shadow-lg">
      <div className={`flex items-center gap-3 text-${hue}-700`}>
        <div className={`rounded-lg bg-${hue}-100 text-${hue}-700 p-2`}>
          <Icon className="size-5" />
        </div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="mt-3 text-gray-600 text-sm">{desc}</p>
    </div>
  </div>
);

const Platform = () => {
  return (
    <section id="platform" className="relative bg-white">
      {/* softly lit gradient background for depth */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-72 w-[80%] rounded-full bg-gradient-to-r from-cyan-400/10 via-fuchsia-400/10 to-blue-400/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Platform</h2>
          <p className="mt-3 text-gray-600">
            Everything you need to ship an AI chat + voice agent that feels human and works at scale.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={Headphones}
            title="Realtime Voice + Chat"
            desc="Low-latency streaming, interruptions, emotions, and memory for natural conversations."
            hue="violet"
          />
          <FeatureCard
            icon={Shield}
            title="Secure & Compliant"
            desc="Enterprise-grade auth, PII redaction, and audit logs to meet your compliance needs."
            hue="blue"
          />
          <FeatureCard
            icon={ArrowRight}
            title="Integrations"
            desc="Connect CRM, calendar, knowledge bases, and webhooks to automate your workflows."
            hue="amber"
          />
        </div>

        {/* Main CTA with two sub-CTAs */}
        <div className="mt-10 rounded-2xl border border-gray-100 p-6 md:p-8 bg-gradient-to-br from-violet-50 to-cyan-50 shadow-sm">
          <div className="md:flex md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Build with our platform</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Ship a custom agent in minutes with SDKs, templates, and examples.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
              <a
                href="#resources"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 hover:bg-black text-white px-4 py-2 font-semibold transform-gpu hover:-translate-y-0.5"
              >
                Get Started <ArrowRight className="size-4" />
              </a>
              <a
                href="#resources"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 px-4 py-2 font-semibold transform-gpu hover:-translate-y-0.5"
              >
                View Docs <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
