import { useState } from "react";
import Counter from "./Counter";
import formatCurrency from "../utils/formatCurrency";

function Products({ addToCart }) {
  const [phoneQuantity, setPhoneQuantity] = useState(1);
  const [audioQuantity, setAudioQuantity] = useState(1);

  const products = [
    {
      id: "catalog-everyday-phone",
      name: "Everyday Phone",
      category: "Mobile",
      price: 20,
      image: "/products/smartphone.svg",
      alt: "Illustration of a black smartphone",
    },
    {
      id: "catalog-wireless-audio",
      name: "Wireless Audio",
      category: "Accessories",
      price: 30,
      image: "/products/earbuds.svg",
      alt: "Illustration of wireless earbuds",
    },
  ];

  return (
    <section className="text-zinc-900">
      <div className="mb-8 lg:mb-10">
        <div>
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">THE COLLECTION</p>
          <h1 className="animate-fade-up [animation-delay:80ms] mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">Our products</h1>
        </div>
        <p className="animate-fade-up [animation-delay:160ms] mt-3 max-w-2xl text-lg leading-7 text-zinc-600">Everyday essentials, picked with you in mind.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
        <article className="group animate-fade-up [animation-duration:400ms] nth-2:[animation-delay:90ms] flex flex-col rounded-3xl border border-zinc-200 bg-white p-4 shadow-card transition duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-lift sm:p-5">
          <div className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 p-0">
            <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-700 shadow-sm backdrop-blur transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5">01 / DEVICE</span>
            <span className="contents" aria-hidden="true">
              <img className="h-full w-full object-cover transition duration-500 ease-out-expo group-hover:scale-105" src={products[0].image} alt={products[0].alt} />
            </span>
          </div>
          <div className="flex flex-1 flex-col pt-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">MOBILE</p>
              <h2 className="mt-2 text-xl font-bold text-zinc-950 transition-colors duration-300 ease-out-expo group-hover:text-brand-700">Everyday Phone</h2>
            </div>
            <div className="my-5 flex flex-wrap items-baseline justify-between gap-3">
              <span className="text-sm tabular-nums text-zinc-600">{formatCurrency(products[0].price)} each</span>
              <strong className="text-2xl font-bold tabular-nums text-zinc-950">{formatCurrency(products[0].price * phoneQuantity)}</strong>
            </div>
          </div>
          <div className="mt-auto flex flex-col gap-4 border-t border-zinc-100 pt-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <Counter value={phoneQuantity} onChange={setPhoneQuantity} ariaLabel="Phone quantity" />
            <button
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold group/btn transition duration-300 ease-out-expo active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 bg-brand-600 text-white shadow-sm hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/30 w-full whitespace-nowrap sm:w-auto sm:flex-1"
              type="button"
              onClick={() => addToCart(products[0], phoneQuantity, products[0].category)}
            >
              Add to cart <span className="inline-block transition-transform duration-300 ease-out-expo group-hover/btn:rotate-90" aria-hidden="true">+</span>
            </button>
          </div>
        </article>

        <article className="group animate-fade-up [animation-duration:400ms] nth-2:[animation-delay:90ms] flex flex-col rounded-3xl border border-zinc-200 bg-white p-4 shadow-card transition duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-lift sm:p-5">
          <div className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 p-0">
            <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-700 shadow-sm backdrop-blur transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5">02 / ACCESSORY</span>
            <span className="contents" aria-hidden="true">
              <img className="h-full w-full object-cover transition duration-500 ease-out-expo group-hover:scale-105" src={products[1].image} alt={products[1].alt} />
            </span>
          </div>
          <div className="flex flex-1 flex-col pt-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">ACCESSORIES</p>
              <h2 className="mt-2 text-xl font-bold text-zinc-950 transition-colors duration-300 ease-out-expo group-hover:text-brand-700">Wireless Audio</h2>
            </div>
            <div className="my-5 flex flex-wrap items-baseline justify-between gap-3">
              <span className="text-sm tabular-nums text-zinc-600">{formatCurrency(products[1].price)} each</span>
              <strong className="text-2xl font-bold tabular-nums text-zinc-950">{formatCurrency(products[1].price * audioQuantity)}</strong>
            </div>
          </div>
          <div className="mt-auto flex flex-col gap-4 border-t border-zinc-100 pt-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <Counter value={audioQuantity} onChange={setAudioQuantity} ariaLabel="Audio quantity" />
            <button
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold group/btn transition duration-300 ease-out-expo active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 bg-brand-600 text-white shadow-sm hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/30 w-full whitespace-nowrap sm:w-auto sm:flex-1"
              type="button"
              onClick={() => addToCart(products[1], audioQuantity, products[1].category)}
            >
              Add to cart <span className="inline-block transition-transform duration-300 ease-out-expo group-hover/btn:rotate-90" aria-hidden="true">+</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Products;
