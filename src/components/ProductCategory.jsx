import { useState } from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter";
import SearchBar from "./SearchBar";
import formatCurrency from "../utils/formatCurrency";

function ProductCard({ product, category, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    onAddToCart(product, quantity, category);
  };

  return (
    <article className="group animate-fade-up [animation-duration:400ms] nth-2:[animation-delay:90ms] nth-3:[animation-delay:160ms] nth-4:[animation-delay:240ms] flex flex-col rounded-3xl border border-zinc-200 bg-white p-4 shadow-card transition duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-lift sm:p-5">
      <div className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 p-0">
        <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-700 shadow-sm backdrop-blur transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5">{product.label}</span>
        <img className="h-full w-full object-cover transition duration-500 ease-out-expo group-hover:scale-105" src={product.image} alt={product.alt} />
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{category}</p>
        <h2 className="mt-2 text-xl font-bold text-zinc-950 transition-colors duration-300 ease-out-expo group-hover:text-brand-700">{product.name}</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-600">{product.description}</p>
        <div className="my-5 flex flex-wrap items-baseline justify-between gap-3">
          <span className="text-sm tabular-nums text-zinc-600">{formatCurrency(product.price)} each</span>
          <span className="text-2xl font-bold tabular-nums text-zinc-950">
            {formatCurrency(product.price * quantity)}
          </span>
        </div>
        <div className="mt-auto flex flex-col gap-4 border-t border-zinc-100 pt-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-sm font-medium text-zinc-600">
            <span>Qty</span>
            <Counter
              value={quantity}
              onChange={setQuantity}
              ariaLabel={`Quantity for ${product.name}`}
            />
          </div>
          <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold group/btn transition duration-300 ease-out-expo active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 bg-brand-600 text-white shadow-sm hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/30 w-full whitespace-nowrap sm:w-auto sm:flex-1" type="button" onClick={handleAdd}>
            Add to cart <span className="inline-block transition-transform duration-300 ease-out-expo group-hover/btn:rotate-90" aria-hidden="true">+</span>
          </button>
        </div>
      </div>
    </article>
  );
}

function ProductCategory({ title, description, products, onAddToCart }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredProducts = products.filter((product) =>
    [product.name, product.label, product.description, title]
      .join(" ")
      .toLocaleLowerCase()
      .includes(normalizedQuery),
  );

  return (
    <section className="text-zinc-900">
      <div className="mb-8 lg:mb-10">
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">THE BITAR COLLECTION</p>
        <h1 className="animate-fade-up [animation-delay:80ms] mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">{title}</h1>
        <p className="animate-fade-up [animation-delay:160ms] mt-3 max-w-2xl text-lg leading-7 text-zinc-600">{description}</p>
      </div>

      <div className="mb-8 animate-fade-up [animation-delay:200ms]">
        <SearchBar query={query} onQueryChange={setQuery} />
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              category={title}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      ) : (
        <div className="animate-scale-in rounded-3xl border border-dashed border-zinc-300 bg-white p-10 text-center" role="status">
          <div className="relative mx-auto mb-5 grid size-14 place-items-center rounded-full bg-zinc-100 text-zinc-600"><span className="pointer-events-none absolute -inset-1 rounded-full border border-brand-600/15 motion-safe:animate-pulse" aria-hidden="true" /><svg className="size-5" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="m3 3 18 18M9.5 4.1a6.5 6.5 0 0 1 7.8 7.8M5.7 5.7a6.5 6.5 0 0 0 9.2 9.2M16 16l4 4" /></svg></div>
          <h2 className="text-xl font-bold text-zinc-950 sm:text-2xl">No matching products</h2>
          <p className="mt-3 text-base leading-7 text-zinc-600">Try a different search, or browse the full collection.</p>
          <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 border border-zinc-300 bg-white text-zinc-900 hover:border-zinc-400 hover:bg-zinc-100 mt-6" type="button" onClick={() => setQuery("")}>
            Clear search
          </button>
        </div>
      )}

      <p className="reveal mt-8 text-center text-sm leading-6 text-zinc-600">
        Looking for something else? <Link className="inline-flex min-h-11 items-center font-semibold text-brand-700 underline-offset-4 hover:underline" to="/contact">Contact our team</Link>
      </p>
    </section>
  );
}

export default ProductCategory;
