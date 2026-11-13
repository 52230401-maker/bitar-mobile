import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Counter from "./Counter";
import formatCurrency, { getProductPrice } from "../utils/formatCurrency";

function Cart({ items, onQuantityChange, onRemove }) {
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const pricedItems = items.map((item) => ({
    ...item,
    unitPrice: getProductPrice(item),
  }));
  const hasUnpricedItems = pricedItems.some((item) => item.unitPrice === null);
  const cartTotal = pricedItems.reduce(
    (total, item) => total + (item.unitPrice ?? 0) * item.quantity,
    0,
  );

  const handleOrderRequest = () => {
    toast.info(
      <div className="animate-fade-in text-sm font-medium leading-6 text-zinc-900">
        <strong>Your order is under request</strong>
      </div>,
    );
  };

  return (
    <section className="text-zinc-900">
      <div className="animate-fade-up mb-8 flex flex-wrap items-center justify-between gap-4 lg:mb-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">YOUR SELECTION</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">My cart</h1>
        </div>
        <span className="animate-scale-in [animation-delay:80ms] rounded-full bg-zinc-950 px-4 py-1.5 text-xs font-semibold tracking-wider text-white tabular-nums">{itemCount} {itemCount === 1 ? "ITEM" : "ITEMS"}</span>
      </div>

      {items.length === 0 ? (
        <div className="animate-scale-in rounded-3xl border border-dashed border-zinc-300 bg-white p-10 text-center">
          <div className="motion-safe:animate-float mx-auto mb-6 grid size-14 place-items-center rounded-full bg-zinc-100 text-zinc-600" aria-hidden="true">
            <svg className="size-5" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7h14l1 14H4L5 7Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">NOTHING HERE JUST YET</p>
          <h2 className="mt-3 text-xl font-bold text-zinc-950 sm:text-2xl">Your cart is waiting.</h2>
          <p className="mt-3 text-base leading-7 text-zinc-600">Take a look around and find something you love.</p>
          <Link className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ease-out-expo active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 bg-zinc-950 text-white hover:bg-zinc-800 mt-6" to="/products/smartphones">Browse products</Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-start">
          <div className="min-w-0 space-y-6" aria-label="Cart items">
            {pricedItems.map((item) => (
              <article className="group animate-fade-up [animation-duration:400ms] nth-2:[animation-delay:80ms] nth-3:[animation-delay:160ms] nth-4:[animation-delay:240ms] transition duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-lift grid grid-cols-[auto_minmax(0,1fr)] gap-4 rounded-3xl border border-zinc-200 bg-white p-4 shadow-card sm:p-5" key={item.id}>
                <div className="aspect-[4/3] w-24 self-start overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 p-0 sm:w-28">
                  <img className="h-full w-full object-cover transition-transform duration-300 ease-out-expo group-hover:scale-105" src={item.image} alt={item.alt} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{item.category}</p>
                  <h2 className="mt-2 break-words text-lg font-bold text-zinc-950">{item.name}</h2>
                  <p className="mt-1 text-sm tabular-nums text-zinc-600">{formatCurrency(item.unitPrice)} each</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-medium text-zinc-600 sm:gap-3">
                    <span>Quantity</span>
                    <Counter
                      value={item.quantity}
                      onChange={(quantity) => onQuantityChange(item.id, quantity)}
                      ariaLabel={`Quantity for ${item.name}`}
                    />
                  </div>
                </div>
                <div className="col-span-2 flex items-center justify-between gap-3 border-t border-zinc-100 pt-3">
                  <strong className="order-2 text-right text-xl font-bold tabular-nums text-zinc-950">
                    {formatCurrency(item.unitPrice === null ? NaN : item.unitPrice * item.quantity)}
                  </strong>
                  <button
                    className="min-h-11 text-sm font-medium text-zinc-600 underline decoration-transparent underline-offset-4 transition-colors duration-300 ease-out-expo hover:text-red-600 hover:decoration-red-600"
                    type="button"
                    onClick={() => onRemove(item.id)}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>
          <aside className="animate-fade-up [animation-delay:120ms] rounded-3xl border border-zinc-200 bg-white p-6 shadow-card lg:sticky lg:top-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">ORDER SUMMARY</p>
            <h2 className="mt-3 text-xl font-bold text-zinc-950 sm:text-2xl">{itemCount} {itemCount === 1 ? "item" : "items"} selected</h2>
            <div className="mt-6 flex flex-wrap items-baseline justify-between gap-3 border-t border-zinc-200 pt-4">
              <span className="text-base text-zinc-600">Total</span>
              <strong className="text-3xl font-extrabold tabular-nums text-zinc-950">{hasUnpricedItems ? "Price unavailable" : formatCurrency(cartTotal)}</strong>
            </div>
            <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ease-out-expo active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 group/btn bg-brand-600 text-white shadow-sm hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/30 mt-6 w-full" type="button" onClick={handleOrderRequest}>
              Request order <span className="inline-block transition-transform duration-300 ease-out-expo group-hover/btn:translate-x-1" aria-hidden="true">→</span>
            </button>
            <Link className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ease-out-expo active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 border border-zinc-300 bg-white text-zinc-900 hover:border-zinc-400 hover:bg-zinc-100 group/btn mt-3 w-full" to="/contact">Ask about your order <span className="inline-block transition-transform duration-300 ease-out-expo group-hover/btn:translate-x-1" aria-hidden="true">→</span></Link>
            <Link className="mt-3 flex min-h-11 items-center justify-center text-center text-sm font-semibold text-brand-700 underline-offset-4 hover:underline" to="/products/smartphones">Continue shopping</Link>
          </aside>
        </div>
      )}
    </section>
  );
}

export default Cart;
