import ProductCategory from "./ProductCategory";

function SmartWatches({ addToCart }) {
  return (
    <ProductCategory
      title="Smartwatches"
      description="Discover wearable technology designed to fit your everyday routine."
      products={[
        {
          name: "Everyday Smartwatch",
          price: 129,
          label: "01 / SMARTWATCH",
          description: "A versatile companion for your everyday routine.",
          image: "/products/smartwatch.svg",
          alt: "Illustration of a black smartwatch",
        },
        {
          name: "Active Smartwatch",
          price: 179,
          label: "02 / SMARTWATCH",
          description: "A lightweight watch with a comfortable sport-style band.",
          image: "/products/smartwatch-active.svg",
          alt: "Illustration of a sport-style smartwatch",
        },
      ]}
      onAddToCart={addToCart}
    />
  );
}

export default SmartWatches;