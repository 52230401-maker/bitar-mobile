import ProductCategory from "./ProductCategory";

function Airpods({ addToCart }) {
  return (
    <ProductCategory
      title="AirPods"
      description="Explore wireless audio for music, calls, and everything in between."
      products={[
        {
          name: "Wireless Earbuds",
          price: 129,
          label: "01 / AUDIO",
          description: "Compact wireless audio for calls and your favorite music.",
          image: "/products/earbuds.svg",
          alt: "Illustration of a pair of white wireless earbuds",
        },
        {
          name: "Wireless Earbuds Case",
          price: 39,
          label: "02 / AUDIO",
          description: "A pocket-sized charging case for listening on the go.",
          image: "/products/earbuds-case.svg",
          alt: "Illustration of a wireless earbuds charging case",
        },
      ]}
      onAddToCart={addToCart}
    />
  );
}

export default Airpods;