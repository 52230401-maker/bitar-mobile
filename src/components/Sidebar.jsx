import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const productLinks = [
  { label: "Smartphones", to: "/products/smartphones" },
  { label: "Smartwatches", to: "/products/smartwatches" },
  { label: "Accessories", to: "/products/accessories" },
  { label: "AirPods", to: "/products/airpods" },
];

function Sidebar({ currentUser, onLogout }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [productsOpen, setProductsOpen] = useState(() =>
    location.pathname.startsWith("/products"),
  );

  return (
    <aside className="sticky top-0 z-40 grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-2 gap-y-4 bg-zinc-950 px-4 pt-4 text-white lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-72 lg:flex-col lg:items-stretch lg:gap-0 lg:overflow-x-hidden lg:overflow-y-auto lg:p-6 lg:animate-fade-in">
      <div className="pointer-events-none absolute -left-24 -top-24 hidden size-72 rounded-full bg-brand-600/20 blur-3xl lg:block" aria-hidden="true" />
      <Link className="relative z-10 group order-1 flex min-h-11 min-w-0 items-center gap-2 lg:gap-3" to="/home" aria-label="Bitar Mobile home">
        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-600 text-xl font-extrabold text-white shadow-lg shadow-brand-600/30 sm:size-11 lg:size-12 transition-transform duration-300 ease-out-expo group-hover:-rotate-6 group-hover:scale-105">B</span>
        <span className="min-w-0">
          <strong className="block font-display text-xs font-extrabold min-[360px]:text-sm leading-tight tracking-tight sm:text-lg lg:text-xl">Bitar Mobile</strong>
          <small className="mt-1 hidden text-[9px] font-medium tracking-[0.15em] text-brand-300 lg:block">YOUR TECH, YOUR WAY</small>
        </span>
      </Link>

      <p className="relative z-10 order-2 mb-3 mt-10 hidden px-3 text-[10px] font-semibold tracking-[0.18em] text-zinc-500 lg:block">MENU</p>
      <nav className="relative z-10 order-3 col-span-2 -mx-4 min-w-0 lg:mx-0 lg:mb-8 lg:flex lg:shrink-0 lg:flex-col lg:gap-1" aria-label="Main navigation">
        <div className="flex gap-1 overflow-x-auto px-2 pb-4 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:contents">
          <NavLink className="group flex min-h-11 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-1.5 py-2 text-sm lg:gap-3 lg:px-3 lg:py-2.5 font-medium text-zinc-400 transition-colors duration-200 ease-out-expo hover:bg-white/5 hover:text-white aria-[current=page]:bg-white aria-[current=page]:hover:bg-white aria-[current=page]:text-zinc-950 lg:rounded-xl lg:order-1" to="/home">
            <span className="shrink-0 transition duration-200 ease-out-expo group-hover:scale-110 group-hover:text-brand-400 group-aria-[current=page]:text-brand-600 group-aria-[current=page]:group-hover:text-brand-600" aria-hidden="true"><svg aria-hidden="true" className="size-4 lg:size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z" /></svg></span>
            Home
          </NavLink>

          <div className={`shrink-0 lg:contents${productsOpen ? " text-white" : ""}`}>
            <button
              className="flex min-h-11 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-1.5 py-2 text-sm lg:gap-3 lg:px-3 lg:py-2.5 font-medium text-zinc-400 transition-colors duration-200 ease-out-expo hover:bg-white/5 hover:text-white aria-[current=page]:bg-white aria-[current=page]:hover:bg-white aria-[current=page]:text-zinc-950 lg:rounded-xl group lg:order-2 lg:w-full"
              type="button"
              aria-expanded={productsOpen}
              aria-controls="product-submenu"
              onClick={() => setProductsOpen((isOpen) => !isOpen)}
            >
              <span className="shrink-0 transition duration-200 ease-out-expo group-hover:scale-110 group-hover:text-brand-400 group-aria-[current=page]:text-brand-600 group-aria-[current=page]:group-hover:text-brand-600" aria-hidden="true"><svg aria-hidden="true" className="size-4 lg:size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg></span>
              <span>Products</span>
              <span className="ml-auto hidden transition-transform duration-300 ease-out-expo group-aria-expanded:rotate-180 lg:inline" aria-hidden="true"><svg aria-hidden="true" className="size-4 lg:size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></span>
            </button>
          </div>

          <NavLink className="group flex min-h-11 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-1.5 py-2 text-sm lg:gap-3 lg:px-3 lg:py-2.5 font-medium text-zinc-400 transition-colors duration-200 ease-out-expo hover:bg-white/5 hover:text-white aria-[current=page]:bg-white aria-[current=page]:hover:bg-white aria-[current=page]:text-zinc-950 lg:rounded-xl lg:order-4" to="/cart">
            <span className="shrink-0 transition duration-200 ease-out-expo group-hover:scale-110 group-hover:text-brand-400 group-aria-[current=page]:text-brand-600 group-aria-[current=page]:group-hover:text-brand-600" aria-hidden="true"><svg aria-hidden="true" className="size-4 lg:size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7h14l2 14H3L5 7Z" /><path d="M9 7V6a3 3 0 0 1 6 0v1" /></svg></span>
            My Cart
          </NavLink>
          <NavLink className="group flex min-h-11 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-1.5 py-2 text-sm lg:gap-3 lg:px-3 lg:py-2.5 font-medium text-zinc-400 transition-colors duration-200 ease-out-expo hover:bg-white/5 hover:text-white aria-[current=page]:bg-white aria-[current=page]:hover:bg-white aria-[current=page]:text-zinc-950 lg:rounded-xl lg:order-5" to="/contact">
            <span className="shrink-0 transition duration-200 ease-out-expo group-hover:scale-110 group-hover:text-brand-400 group-aria-[current=page]:text-brand-600 group-aria-[current=page]:group-hover:text-brand-600" aria-hidden="true"><svg aria-hidden="true" className="size-4 lg:size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></span>
            Contact
          </NavLink>
        </div>
        {productsOpen && (
          <div className="animate-slide-down flex gap-2 overflow-x-auto border-t border-white/10 px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:order-3 lg:mb-2 lg:ml-5 lg:flex-col lg:gap-1 lg:border-l lg:border-t-0 lg:py-1 lg:pl-3 lg:pr-0" id="product-submenu">
            <NavLink className="group inline-flex min-h-11 shrink-0 items-center whitespace-nowrap border-l-2 border-transparent aria-[current=page]:border-brand-500 rounded-full px-3 py-2.5 text-sm text-zinc-400 transition-colors duration-200 ease-out-expo hover:bg-white/5 hover:text-white aria-[current=page]:bg-white/10 aria-[current=page]:font-semibold aria-[current=page]:text-white lg:rounded-xl" end to="/products">All products</NavLink>
            {productLinks.map((item) => (
              <NavLink className="group inline-flex min-h-11 shrink-0 items-center whitespace-nowrap border-l-2 border-transparent aria-[current=page]:border-brand-500 rounded-full px-3 py-2.5 text-sm text-zinc-400 transition-colors duration-200 ease-out-expo hover:bg-white/5 hover:text-white aria-[current=page]:bg-white/10 aria-[current=page]:font-semibold aria-[current=page]:text-white lg:rounded-xl" key={item.to} to={item.to}>{item.label}</NavLink>
            ))}
          </div>
        )}
      </nav>

      <div className="relative z-10 order-2 flex min-w-0 items-center gap-2 lg:order-4 lg:mt-auto lg:flex-col lg:items-stretch lg:gap-3 lg:rounded-2xl lg:border lg:border-white/10 lg:bg-white/5 lg:p-4">
        {currentUser ? (
          <>
            <span className="hidden text-[10px] font-semibold tracking-[0.18em] text-zinc-400 lg:block">SIGNED IN</span>
            <Link className="flex min-h-11 min-w-0 items-center gap-3 rounded-xl lg:w-full" to="/account" aria-label="View my account">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-600 text-base font-bold text-white" aria-hidden="true">
                {currentUser.name?.charAt(0).toUpperCase() || "U"}
              </span>
              <span className="hidden min-w-0 flex-1 lg:block">
                <strong className="block truncate text-sm font-semibold text-white">{currentUser.name || "Account"}</strong>
                <small className="mt-1 block truncate text-xs text-zinc-400">{currentUser.email}</small>
              </span>
            </Link>
            <button
              className="group inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold transition duration-200 ease-out-expo active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:px-5 sm:py-3 sm:text-sm lg:w-full text-zinc-300 hover:bg-white/5 hover:text-brand-300"
              type="button"
              onClick={() => {
                onLogout();
                navigate("/login");
              }}
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <span className="hidden text-[10px] font-semibold tracking-[0.18em] text-zinc-400 lg:block">YOUR ACCOUNT</span>
            <Link className="group inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold transition duration-200 ease-out-expo active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:px-5 sm:py-3 sm:text-sm lg:w-full border border-white/20 text-white hover:border-brand-400/60 hover:bg-white/5" to="/login">Log in</Link>
            <Link className="group inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold transition duration-200 ease-out-expo active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:px-5 sm:py-3 sm:text-sm lg:w-full bg-brand-600 text-center text-white hover:bg-brand-500 hover:text-zinc-950" to="/signup">
              Create account <span className="hidden transition-transform duration-200 ease-out-expo group-hover:translate-x-1 sm:inline-block" aria-hidden="true">→</span>
            </Link>
          </>
        )}
      </div>
      <span className="relative z-10 order-5 mt-6 hidden text-center text-[9px] font-medium tracking-[0.15em] text-zinc-500 lg:block">BITAR MOBILE · LEBANON</span>
    </aside>
  );
}

export default Sidebar;
