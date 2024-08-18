import { useState, useEffect } from "react";
// import "./ProductCards.css";

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleFavorite = (e) => {
    e.target.classList.toggle("favorited");
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="product-cards">
      <div className="container responsive-flex">
        {products.map((currElem) => (
          <div className="product" key={currElem.id}>
            <img src={currElem.image} alt={currElem.title} />
            <div className="product-info">
              <h3>{currElem.title}</h3>
              <div className="description">
                <span>{currElem.description}</span>
                <i className="fa-solid fa-heart" onClick={toggleFavorite}></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
