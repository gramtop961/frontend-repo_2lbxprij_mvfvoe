import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, MessageSquare } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Color glow accents to enhance 3D vibe */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-cyan-500/10 blur-3xl" />

      {/* subtle gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
            <span className="size-1.5 rounded-full bg-cyan-400" />
            Realtime AI Voice & Chat Agent
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Build an AI Agent that talks, thinks, and converts
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed">
            Launch a production-ready AI assistant with natural conversation, multi-channel
            support, and analytics — embedded on your site or connected to your stack.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#platform"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 hover:from-cyan-400 hover:to-fuchsia-500 transition text-white px-5 py-3 font-semibold shadow-lg shadow-cyan-500/20 transform-gpu hover:-translate-y-0.5"
            >
              <Rocket className="size-5" />
              Start Building
            </a>
            <a
              href="#resources"
              className="inline-flex items-center gap-2 rounded-xl backdrop-blur-md bg-white/10 hover:bg-white/15 transition text-white px-5 py-3 font-semibold ring-1 ring-white/15 transform-gpu hover:-translate-y-0.5"
            >
              <MessageSquare className="size-5" />
              See Live Demo
            </a>
          </div>

          {/* Glass info bar for added depth */}
          <div className="mt-8 grid w-full max-w-xl grid-cols-2 gap-3">
            {[
              { k: 'Latency', v: '< 250ms' },
              { k: 'Channels', v: 'Web, Voice, WhatsApp' },
            ].map((m) => (
              <div
                key={m.k}
                className="rounded-xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-3 text-sm text-white/80 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]"
              >
                <span className="text-white font-semibold">{m.k}</span>
                <span className="mx-2 text-white/30">•</span>
                <span>{m.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
