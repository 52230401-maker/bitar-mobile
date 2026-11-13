import { Link } from "react-router-dom";
import bitarLogo from "../../bitar mob logo.jpeg";

function Home() {
  return (
    <div className="min-w-0">
      <section className="relative grid gap-10 overflow-hidden rounded-3xl bg-zinc-950 p-8 pb-16 sm:p-12 sm:pb-20 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:p-16 lg:pb-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-brand-600/30 blur-3xl motion-safe:animate-glow" />
        <div className="relative z-10 min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300 animate-fade-up">WELCOME TO BITAR MOBILE</p>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-up [animation-delay:80ms]">Find your next<br />favorite device.</h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-300 animate-fade-up [animation-delay:160ms]">
            The latest phones and everyday essentials, thoughtfully chosen for
            the way you stay connected.
          </p>
          <Link className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 bg-white text-zinc-950 hover:bg-zinc-200 mt-8 group animate-fade-up [animation-delay:240ms] duration-200 ease-out-expo" to="/products">
            Explore products <span className="inline-block transition-transform duration-200 ease-out-expo group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="relative z-10 flex items-center justify-center animate-scale-in [animation-delay:160ms]">
          <div className="aspect-[16/9] w-full max-w-72 lg:aspect-square overflow-hidden rounded-2xl bg-black ring-1 ring-white/10 sm:max-w-80 motion-safe:animate-float">
            <img className="h-full w-full object-contain" src={bitarLogo} alt="Bitar Mobile — your local mobile shop" />
          </div>
        </div>
        <span className="absolute bottom-6 left-8 text-[10px] font-semibold tracking-[0.18em] text-zinc-500 sm:bottom-8 sm:left-12 lg:left-16">01 / BITAR MOBILE</span>
      </section>

      <section className="reveal mb-8 mt-16 grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">MADE FOR EVERY DAY</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Good tech. No fuss.</h2>
        </div>
        <p className="max-w-xl text-base leading-7 text-zinc-600">
          Browse a considered collection of mobile devices and accessories,
          with a friendly team ready to help you find the right fit.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3 lg:gap-8" aria-label="Why shop with us">
        <article className="group reveal rounded-3xl border border-zinc-200 bg-white shadow-card p-5 transition duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-lift sm:p-6">
          <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold tabular-nums text-brand-700 transition-colors duration-200 ease-out-expo group-hover:bg-brand-600 group-hover:text-white">01</span>
          <h3 className="mt-5 text-xl font-bold text-zinc-950">Carefully selected</h3>
          <p className="mt-3 text-base leading-7 text-zinc-600">Useful technology and accessories for everyday life.</p>
        </article>
        <article className="group reveal rounded-3xl border border-zinc-200 bg-white shadow-card p-5 transition duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-lift sm:p-6">
          <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold tabular-nums text-brand-700 transition-colors duration-200 ease-out-expo group-hover:bg-brand-600 group-hover:text-white">02</span>
          <h3 className="mt-5 text-xl font-bold text-zinc-950">Here to help</h3>
          <p className="mt-3 text-base leading-7 text-zinc-600">Get in touch with our team whenever you need a hand.</p>
        </article>
        <article className="group reveal rounded-3xl border border-zinc-200 bg-white shadow-card p-5 transition duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-lift sm:p-6">
          <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold tabular-nums text-brand-700 transition-colors duration-200 ease-out-expo group-hover:bg-brand-600 group-hover:text-white">03</span>
          <h3 className="mt-5 text-xl font-bold text-zinc-950">All in one place</h3>
          <p className="mt-3 text-base leading-7 text-zinc-600">Explore products, keep track of your cart, and shop simply.</p>
        </article>
      </section>
    </div>
  );
}

export default Home;
