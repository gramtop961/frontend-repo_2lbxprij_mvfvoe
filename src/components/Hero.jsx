import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, MessageSquare } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-violet-400" />
            Realtime AI Voice & Chat Agent
          </span>
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
              className="inline-flex items-center gap-2 rounded-lg bg-violet-500 hover:bg-violet-600 transition text-white px-5 py-3 font-semibold"
            >
              <Rocket className="size-5" />
              Start Building
            </a>
            <a
              href="#resources"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-white px-5 py-3 font-semibold"
            >
              <MessageSquare className="size-5" />
              See Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;