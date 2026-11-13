function SearchBar({ query, onQueryChange }) {
  return (
    <form className="flex flex-col gap-3 sm:flex-row" role="search" onSubmit={(event) => event.preventDefault()}>
      <label className="group relative flex min-w-0 flex-1 items-center rounded-full transition-shadow duration-300 ease-out-expo focus-within:shadow-lg focus-within:shadow-brand-600/10">
        <span className="pointer-events-none absolute left-4 text-zinc-500 transition-colors duration-300 ease-out-expo group-focus-within:text-brand-600" aria-hidden="true"><svg className="size-5" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" /></svg></span>
        <input
          className="h-12 w-full rounded-full border border-zinc-300 bg-white pl-12 pr-12 text-base text-zinc-900 placeholder:text-zinc-500 transition-all duration-300 ease-out-expo focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/15 [&::-webkit-search-cancel-button]:appearance-none"
          type="search"
          placeholder="Search this collection..."
          aria-label="Search this collection"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
        />
        {query && (
          <button
            className="absolute right-2 grid size-8 animate-scale-in place-items-center rounded-full text-xl text-zinc-600 transition duration-300 ease-out-expo hover:rotate-90 hover:bg-zinc-100 hover:text-zinc-950"
            type="button"
            aria-label="Clear search"
            onClick={() => onQueryChange("")}
          >
            ×
          </button>
        )}
      </label>
      <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ease-out-expo active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 bg-zinc-950 text-white hover:bg-zinc-800 h-12 shrink-0" type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
