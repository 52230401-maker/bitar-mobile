import { Link, useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value.trim();
    const name = email.split("@")[0].replace(/[._-]+/g, " ");

    onLogin({ name, email });
    navigate("/home");
  };

  return (
    <section className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-2 lg:gap-8">
      <aside className="animate-fade-up relative isolate flex flex-col overflow-hidden rounded-3xl bg-zinc-950 p-8 text-white sm:p-12">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 -z-10 size-80 rounded-full bg-brand-600/30 blur-3xl motion-safe:animate-glow" />
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">WELCOME BACK</p>
        <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Good to<br />see you.</h1>
        <p className="mt-5 max-w-sm text-lg leading-8 text-zinc-300">Sign in to pick up right where you left off.</p>
        <span className="mt-auto pt-10 text-[10px] font-semibold tracking-[0.18em] text-zinc-500 lg:pt-20">BITAR MOBILE · 01</span>
      </aside>
      <div className="rounded-3xl border border-zinc-200 bg-white shadow-card min-w-0 p-6 sm:p-10 animate-fade-up [animation-delay:80ms]">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">YOUR ACCOUNT</p>
        <h2 className="mt-3 text-xl sm:text-2xl font-bold text-zinc-950">Log in</h2>
        <p className="mt-3 text-base leading-7 text-zinc-600">Enter your details to continue.</p>
        <form className="mt-8 space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-zinc-800" htmlFor="login-email">Email address</label>
            <input className="block w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-500 transition duration-200 ease-out-expo hover:border-zinc-400 focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/15" id="login-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-zinc-800" htmlFor="login-password">Password</label>
            <input className="block w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-500 transition duration-200 ease-out-expo hover:border-zinc-400 focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/15" id="login-password" name="password" type="password" placeholder="Enter your password" autoComplete="current-password" required />
          </div>
          <button className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ease-out-expo active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 bg-zinc-950 text-white hover:bg-zinc-800 w-full" type="submit">Log in <span className="inline-block transition-transform duration-200 ease-out-expo group-hover:translate-x-1" aria-hidden="true">→</span></button>
        </form>
        <p className="mt-6 text-sm leading-6 text-zinc-600">New to Bitar Mobile? <Link className="font-semibold text-brand-700 underline-offset-4 hover:underline" to="/signup">Create an account</Link></p>
      </div>
    </section>
  );
}

export default Login;
