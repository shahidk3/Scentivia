import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

// 32 manual products
const allProducts = [
  { id: 1, title: "Fresh Denial", description: "Rich velvety scent for romantic nights.", price: 299, category: "sex",  image: "/assets/sample.png"},
  { id: 2, title: "Clubbed Up", description: "Fresh burst for sunny days.", price: 299, category: "occasion",  image: "/assets/sample.png"},
  { id: 3, title: "Dark Fuel", description: "Perfect for mystery lovers.", price: 299, category: "mystrey box", image: "/assets/darkfuel.png"},
  { id: 4, title: "Gold Flex", description: "Warm amber embrace.", price: 299, category: "solid perfume",image: "/assets/goldflex.png"},
  { id: 5, title: "Wild Sports", description: "Soft romantic floral notes.", price: 299, category: "occasion", image: "/assets/sample.png"},
  { id: 6, title: "Spice Drop", description: "Fresh aquatic fragrance.", price: 299, category: "sex", image: "/assets/sample.png"},
  { id: 7, title: "Jet Fuel", description: "Warm, exotic, unforgettable.", price: 299, category: "mystrey box",image: "/assets/sample.png"},
  { id: 8, title: "Hot Wired", description: "Evening floral charm.", price: 299, category: "occasion", image: "/assets/hotwired.png"},
  { id: 9, title: "Raw Pulse", description: "Earthy and grounded.", price: 299,  category: "solid perfume",image: "/assets/rawpulse.png"},
  { id: 10, title: "Aced It", description: "Mystical & radiant.", price: 299, category: "sex", image: "/assets/sample.png"},
  { id: 11, title: "Pink Thunder", description: "Sweet everyday perfume.", price: 299, category: "occasion", image: "/assets/pink.png"},
  { id: 12, title: "Blush", description: "Dark and elegant.", price: 299, category: "mystrey box", image: "/assets/blue.png" },
  { id: 13, title: "Juicy Crime", description: "Juicy and sweet.", price: 299, category: "solid perfume",image: "/assets/jucy.png"},
  { id: 14, title: "Temptress", description: "Royal floral fragrance.", price: 299, category: "occasion",image: "/assets/sample.png"},
  { id: 15, title: "Sugar Spell", description: "For adventurous souls.", price: 299, category: "sex",image: "/assets/sample.png"},
  { id: 16, title: "Fifth Lie", description: "Seductive rose tones.", price: 299, category: "occasion", image: "/assets/sample.png"},
  { id: 17, title: "Orchid Kiss", description: "Tropical vibes.", price: 299, category: "solid perfume",image: "/assets/sample.png"},
  { id: 18, title: "Velvety Vice", description: "Hidden fragrance treasure.", price: 299, category: "mystrey box", image: "/assets/sample.png" },
  { id: 19, title: "Bloom Trap", description: "Cool and energizing.", price: 299, category: "sex",image: "/assets/sample.png"},
  { id: 20, title: "Midnight Dues", description: "Soft floral mornings.", price: 299, category: "occasion", image: "/assets/sample.png" },
  { id: 21, title: "Red Haze", description: "Bold and passionate.", price: 299, category: "sex",image: "/assets/sample.png"},
  { id: 22, title: "Blueprint", description: "Calming lavender scent.", price: 299, category: "solid perfume", image: "/assets/blueprint.png" },
  { id: 23, title: "Wardiya", description: "Hot and daring.", price: 299, category: "mystrey box",image: "/assets/sample.png"},
  { id: 24, title: "Smoke Frame", description: "Golden floral masterpiece.", price: 299, category: "occasion",image: "/assets/sample.png" },
  { id: 25, title: "Cheery Issue", description: "Amber in motion.", price: 299, category: "solid perfume", image: "/assets/cherry.png" },
  { id: 26, title: "Darkwear", description: "Ocean-inspired scent.", price: 299, category: "sex",image: "/assets/sample.png"},
  { id: 27, title: "Deal Done", description: "Floral with spice.", price: 299, category: "occasion",image: "/assets/sample.png"},
  { id: 28, title: "Neon Mirage", description: "Nature’s green luxury.", price: 299, category: "mystrey box",image: "/assets/neon.png"},
  { id: 29, title: "Citrus High", description: "Clean and timeless.", price: 299, category: "solid perfume", image: "/assets/citrys.png"},
  { id: 30, title: "Sugar Daddy", description: "Exotic rose spice.", price: 299, category: "sex", image: "/assets/sugardaddy.png" },
  { id: 31, title: "Mystery Box", description: "Dark and golden elegance.", price: 299, category: "occasion",image: "/assets/sample.png" },
  { id: 32, title: "Solid Perfumes", description: "Sweet honey warmth.", price: 299, category: "solid perfume", image: "/assets/solid.png"}
];

const Products = () => {
  const [filter, setFilter] = useState(allProducts);
  const [currentPage, setCurrentPage] = useState(1); // 1 or 2
  const productsPerPage = 20; // page1=20, page2=12
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Added to cart");
  };

  const filterProduct = (cat) => {
    if (cat === "all") {
      setFilter(allProducts);
    } else {
      setFilter(allProducts.filter((item) => item.category === cat));
    }
    setCurrentPage(1);
  };

  // pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filter.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filter.length / productsPerPage);

  return (
    <div className="container my-4 py-3">
      <div className="row">
        <div className="col-12 text-center mb-3">
          <h2 className="display-5">Latest Perfumes</h2>
          <hr />
        </div>
      </div>

      {/* category buttons */}
      <div className="buttons text-center py-3">
        {["all", "sex", "occasion", "mystrey box", "solid perfume"].map((cat) => (
          <button
            key={cat}
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* products grid */}
      <div className="row">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center"
          >
            <div
              className="card text-center h-100"
              style={{
                width: "100%",
                maxWidth: "360px",          // bigger card
                transition: "transform 0.28s ease, box-shadow 0.28s ease",
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.08)";
              }}
            >
              <img
                className="card-img-top"
                src={product.image}
                alt={product.title}
                style={{ height: "360px", objectFit: "cover", padding: "18px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text" style={{ fontSize: "0.95rem", minHeight: "48px" }}>
                  {product.description}
                </p>
              </div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">₹{product.price}</li>
              </ul>

              <div className="card-body">
               
                <button
                  className="btn btn-dark btn-lg m-1"
                  onClick={() => addProduct(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* pagination */}
      <div className="text-center mt-3">
        <button
          className="btn btn-outline-dark m-2"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
        >
          ← Prev
        </button>
        <button
          className="btn btn-outline-dark m-2"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Products;
