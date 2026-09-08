import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Play } from 'lucide-react';
import { DONATE_URL, LOGO_URL } from '../constants';

export const ThirdPhase: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0; // restart from the beginning
      v.muted = false;
      v.play().catch(() => {});
    }
    setStarted(true);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#141414] text-white flex flex-col">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-orange to-red-500 z-20"></div>

      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] bg-[image:radial-gradient(ellipse_at_top,rgba(240,119,51,0.18),transparent_65%)]"></div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto w-full px-4 sm:px-6 py-16 md:py-20">

        {/* Brand */}
        <Link to="/" className="flex flex-col items-center gap-3 mb-10 group">
          <img
            src={LOGO_URL}
            alt="MPC"
            className="h-16 w-16 object-contain rounded-full bg-white p-1.5 shadow-lg transition-transform group-hover:scale-105"
          />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-400">
            Mission Passion &amp; Compassion
          </span>
        </Link>

        {/* Eyebrow */}
        <span className="text-brand-orange text-sm font-bold tracking-[0.2em] uppercase mb-4">
          A Message From Pastora Hillary
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-center leading-[1.05] tracking-tight mb-5">
          Watch &amp; Partner With Us
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-300 text-center max-w-2xl leading-relaxed mb-12">
          Take a few minutes to hear our heart — then join us in taking the Gospel
          and human dignity to the ends of the earth.
        </p>

        {/* Video with glow */}
        <div className="relative w-full max-w-4xl">
          <div className="absolute -inset-3 md:-inset-5 bg-brand-orange/20 blur-3xl rounded-[2rem] -z-10"></div>
          <div
            className="relative w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/15"
            style={{ paddingBottom: '56.25%' }}
          >
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full bg-black object-cover"
              src="/assets/hillary_mensagem3.mp4"
              poster="/assets/hillary_poster.jpg"
              autoPlay
              muted={!started}
              loop={!started}
              playsInline
              preload="auto"
              controls={started}
            />

            {/* Cover overlay (teaser plays muted behind) */}
            {!started && (
              <button
                type="button"
                onClick={handleStart}
                aria-label="Watch the video"
                className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 bg-black/45 hover:bg-black/35 transition-colors cursor-pointer group"
              >
                <span className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-orange text-white shadow-2xl shadow-black/40 transition-transform group-hover:scale-110">
                  <Play size={38} className="fill-white ml-1.5" />
                </span>
                <span className="text-2xl md:text-3xl font-bold tracking-tight drop-shadow-lg">
                  Watch the Video
                </span>
              </button>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center mt-12">
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl shadow-brand-orange/20 transition-all transform hover:-translate-y-1 hover:shadow-2xl"
          >
            <Heart size={20} className="fill-white" />
            Donate Now
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <span className="mt-4 text-xs text-gray-500 tracking-wide">
            Secure giving via Donorbox
          </span>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-6 text-center">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Mission Passion and Compassion
        </p>
      </footer>
    </section>
  );
};
