import ProductCategory from "./ProductCategory";

function Accessories({ addToCart }) {
  return (
    <ProductCategory
      title="Accessories"
      description="Find the useful extras that make your devices work even better for you."
      products={[
        {
          name: "Wall Charger",
          price: 19,
          label: "01 / ACCESSORY",
          description: "A compact charger for your everyday setup.",
          image: "/products/charger.svg",
          alt: "Illustration of a compact wall charger",
        },
        {
          name: "Charging Cable",
          price: 12,
          label: "02 / ACCESSORY",
          description: "A simple, durable cable for charging your devices.",
          image: "/products/cable.svg",
          alt: "Illustration of a coiled charging cable",
        },
      ]}
      onAddToCart={addToCart}
    />
  );
}

export default Accessories;