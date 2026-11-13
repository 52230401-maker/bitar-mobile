import { Link } from "react-router-dom";

function MyAccount({ user }) {
  if (!user) {
    return (
      <section className="min-w-0">
        <div className="rounded-3xl border border-zinc-200 bg-white shadow-card animate-fade-up mx-auto max-w-xl p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">YOUR ACCOUNT</p>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-zinc-950">Sign in to view your account</h1>
          <p className="mt-4 text-base leading-7 text-zinc-600">Log in or create an account to see your profile information here.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 bg-zinc-950 text-white hover:bg-zinc-800" to="/login">Log in</Link>
            <Link className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 border border-zinc-300 bg-white text-zinc-900 hover:border-zinc-400 hover:bg-zinc-100" to="/signup">Create account</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-w-0">
      <div className="mb-8 lg:mb-10 animate-fade-up">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">YOUR ACCOUNT</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">My account</h1>
        <p className="mt-3 max-w-2xl text-lg text-zinc-600">View your profile information.</p>
      </div>

      <article className="rounded-3xl border border-zinc-200 bg-white shadow-card animate-fade-up max-w-3xl p-6 sm:p-10">
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="grid size-16 shrink-0 place-items-center rounded-full bg-zinc-950 text-2xl font-bold text-white sm:size-20 animate-scale-in [animation-delay:80ms]" aria-hidden="true">
            {user.name?.charAt(0).toUpperCase() || "U"}
          </span>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">BITAR MOBILE MEMBER</p>
            <h2 className="mt-2 break-words text-xl sm:text-2xl font-bold text-zinc-950">{user.name || "Account"}</h2>
          </div>
        </div>

        <dl className="mb-6 mt-8 divide-y divide-zinc-200 border-y border-zinc-200">
          <div className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6 animate-fade-up [animation-delay:80ms]">
            <dt className="text-sm text-zinc-600">Full name</dt>
            <dd className="min-w-0 break-words font-medium text-zinc-950">{user.name || "Not provided"}</dd>
          </div>
          <div className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6 animate-fade-up [animation-delay:160ms]">
            <dt className="text-sm text-zinc-600">Email address</dt>
            <dd className="min-w-0 break-words font-medium text-zinc-950">{user.email || "Not provided"}</dd>
          </div>
          <div className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6 animate-fade-up [animation-delay:240ms]">
            <dt className="text-sm text-zinc-600">Location</dt>
            <dd className="min-w-0 break-words font-medium text-zinc-950">{user.location || "Not provided"}</dd>
          </div>
        </dl>

        <Link className="font-semibold text-brand-700 underline-offset-4 hover:underline group inline-flex min-h-11 items-center gap-2" to="/home"><span className="inline-block transition-transform duration-200 ease-out-expo group-hover:-translate-x-1" aria-hidden="true">←</span> Back to home</Link>
      </article>
    </section>
  );
}

export default MyAccount;