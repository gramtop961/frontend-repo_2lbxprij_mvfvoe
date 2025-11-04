import React from 'react';
import { Headphones, Shield, ArrowRight } from 'lucide-react';

const Platform = () => {
  return (
    <section id="platform" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Platform
          </h2>
          <p className="mt-3 text-gray-600">
            Everything you need to ship an AI chat + voice agent that feels human and works at scale.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-violet-100 text-violet-700 p-2">
                <Headphones className="size-5" />
              </div>
              <h3 className="font-semibold text-gray-900">Realtime Voice + Chat</h3>
            </div>
            <p className="mt-3 text-gray-600 text-sm">
              Low-latency streaming, interruptions, emotions, and memory for natural conversations.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-100 text-blue-700 p-2">
                <Shield className="size-5" />
              </div>
              <h3 className="font-semibold text-gray-900">Secure & Compliant</h3>
            </div>
            <p className="mt-3 text-gray-600 text-sm">
              Enterprise-grade auth, PII redaction, and audit logs to meet your compliance needs.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-amber-100 text-amber-700 p-2">
                <ArrowRight className="size-5" />
              </div>
              <h3 className="font-semibold text-gray-900">Integrations</h3>
            </div>
            <p className="mt-3 text-gray-600 text-sm">
              Connect CRM, calendar, knowledge bases, and webhooks to automate your workflows.
            </p>
          </div>
        </div>

        {/* Main CTA with two sub-CTAs */}
        <div className="mt-10 rounded-2xl border border-gray-100 p-6 md:p-8 bg-gradient-to-br from-violet-50 to-blue-50">
          <div className="md:flex md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Build with our platform</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Ship a custom agent in minutes with SDKs, templates, and examples.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
              <a href="#resources" className="inline-flex items-center gap-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 font-semibold">
                Get Started <ArrowRight className="size-4" />
              </a>
              <a href="#resources" className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 px-4 py-2 font-semibold">
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