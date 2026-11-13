import { toast } from "react-toastify";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    toast.success("Message submitted.");
  };

  return (
    <section className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-8">
      <div className="min-w-0 animate-fade-up">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">WE’RE EASY TO REACH</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">Let’s talk<br />technology.</h1>
        <p className="mb-8 mt-3 max-w-2xl text-lg leading-8 text-zinc-600 lg:mb-10">
          Have a question or need a recommendation? Send us a message and our
          team will be happy to help.
        </p>
        <div className="group mb-4 flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 sm:p-5 animate-fade-up [animation-delay:80ms] transition duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-lift">
          <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-xl bg-zinc-100 text-zinc-700 transition-colors duration-200 ease-out-expo group-hover:bg-zinc-950 group-hover:text-white"><svg aria-hidden="true" className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z" /></svg></span>
          <div className="min-w-0">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">CALL US</span>
            <a className="mt-1 flex min-h-11 items-center text-lg font-semibold tabular-nums text-zinc-950 underline-offset-4 hover:underline sm:text-xl" href="tel:+96176560139">+961 76 56 01 39</a>
          </div>
        </div>
        <div className="group mb-4 flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 sm:p-5 animate-fade-up [animation-delay:160ms] transition duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-lift">
          <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-xl bg-zinc-100 text-zinc-700 transition-colors duration-200 ease-out-expo group-hover:bg-zinc-950 group-hover:text-white"><svg aria-hidden="true" className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z" /></svg></span>
          <div className="min-w-0">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">ALSO REACH US</span>
            <a className="mt-1 flex min-h-11 items-center text-lg font-semibold tabular-nums text-zinc-950 underline-offset-4 hover:underline sm:text-xl" href="tel:+96181964081">+961 81 35 86 71</a>
          </div>
        </div>
      </div>

      <form className="rounded-3xl border border-zinc-200 bg-white shadow-card min-w-0 p-6 sm:p-10 animate-fade-up [animation-delay:80ms]" onSubmit={handleSubmit}>
        <h2 className="mb-6 text-xl sm:text-2xl font-bold text-zinc-950">Send a message</h2>
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-zinc-800" htmlFor="contact-name">Your name</label>
          <input className="block w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-500 transition duration-200 ease-out-expo hover:border-zinc-400 focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/15" id="contact-name" name="name" type="text" placeholder="e.g. Alex Morgan" required />
        </div>
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-zinc-800" htmlFor="contact-email">Email address</label>
          <input className="block w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-500 transition duration-200 ease-out-expo hover:border-zinc-400 focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/15" id="contact-email" name="email" type="email" placeholder="you@example.com" required />
        </div>
        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-zinc-800" htmlFor="contact-message">How can we help?</label>
          <textarea className="block w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-500 transition duration-200 ease-out-expo hover:border-zinc-400 focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/15 min-h-36 resize-y" id="contact-message" name="message" rows="5" placeholder="Write your message here..." required />
        </div>
        <button className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ease-out-expo active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 bg-zinc-950 text-white hover:bg-zinc-800 w-full" type="submit">Send message <span className="inline-block transition-transform duration-200 ease-out-expo group-hover:translate-x-1" aria-hidden="true">→</span></button>
      </form>
    </section>
  );
}

export default Contact;
