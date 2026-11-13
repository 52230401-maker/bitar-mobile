const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const sampleProductPrices = {
  "Everyday Smartphone": 399,
  "Classic Smartphone": 329,
  "Everyday Smartwatch": 129,
  "Active Smartwatch": 179,
  "Wall Charger": 19,
  "Charging Cable": 12,
  "Wireless Earbuds": 129,
  "Wireless Earbuds Case": 39,
  "Everyday Phone": 20,
  "Wireless Audio": 30,
};

export function getProductPrice(product) {
  const price = Number(product.price);

  if (Number.isFinite(price)) {
    return price;
  }

  return sampleProductPrices[product.name] ?? null;
}

function formatCurrency(amount) {
  if (!Number.isFinite(amount)) {
    return "Price unavailable";
  }

  return usdFormatter.format(amount);
}

export default formatCurrency;
