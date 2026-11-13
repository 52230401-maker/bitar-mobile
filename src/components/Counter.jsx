import { useState } from "react";

function Counter({
  initialValue = 1,
  difference = 1,
  min = 1,
  value,
  onChange,
  ariaLabel = "Quantity",
}) {
  const [count, setCount] = useState(initialValue);
  const currentCount = value ?? count;

  const updateCount = (nextCount) => {
    const nextValue = Math.max(min, nextCount);

    if (value === undefined) {
      setCount(nextValue);
    }

    onChange?.(nextValue);
  };

  return (
    <div className="inline-flex items-center rounded-full border border-zinc-300 bg-white p-0.5" aria-label={ariaLabel}>
      <button
        className="group/step grid size-10 place-items-center rounded-full text-lg font-medium text-zinc-700 transition duration-150 ease-out-expo hover:bg-zinc-100 active:scale-90 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
        type="button"
        aria-label={`Decrease ${ariaLabel.toLowerCase()}`}
        disabled={currentCount <= min}
        onClick={() => updateCount(currentCount - difference)}
      >
        <span className="inline-block transition-transform duration-150 ease-out-expo group-hover/step:scale-110 group-disabled/step:scale-100">−</span>
      </button>
      <output className="min-w-9 text-center text-sm font-semibold tabular-nums text-zinc-950" aria-live="polite">
        {currentCount}
      </output>
      <button
        className="group/step grid size-10 place-items-center rounded-full text-lg font-medium text-zinc-700 transition duration-150 ease-out-expo hover:bg-zinc-100 active:scale-90 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
        type="button"
        aria-label={`Increase ${ariaLabel.toLowerCase()}`}
        onClick={() => updateCount(currentCount + difference)}
      >
        <span className="inline-block transition-transform duration-150 ease-out-expo group-hover/step:scale-110 group-disabled/step:scale-100">+</span>
      </button>
    </div>
  );
}

export default Counter;
