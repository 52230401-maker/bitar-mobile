import ProductCategory from "./ProductCategory";

function Smartphones({ addToCart }) {
  return (
    <ProductCategory
      title="Smartphones"
      description="Explore phones to keep you connected, wherever the day takes you."
      products={[
        {
          name: "Everyday Smartphone",
          price: 399,
          label: "01 / SMARTPHONE",
          description: "A dependable everyday phone with a clean, modern design.",
          image: "/products/smartphone.svg",
          alt: "Illustration of a black smartphone",
        },
        {
          name: "Classic Smartphone",
          price: 329,
          label: "02 / SMARTPHONE",
          description: "A sleek device for staying in touch throughout the day.",
          image: "/products/smartphone-classic.svg",
          alt: "Illustration of a slim silver smartphone",
        },
      ]}
      onAddToCart={addToCart}
    />
  );
}

export default Smartphones;
