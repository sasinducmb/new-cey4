import PropTypes from "prop-types";
import { useState } from "react";

const ShopCategories = ({ categories, getSortParams }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [materialExpanded, setMaterialExpanded] = useState(false);
  // Define the product materials array
  const productMaterials = [
    { name: "Coir", values: ["Coir", "Coconut"] }, // Both map to Coir
    { name: "Clay", values: ["Clay"] },
    { name: "Brass", values: ["Brass"] },
    { name: "Wooden", values: ["Wooden"] },
    { name: "Reed", values: ["Reed"] },
    { name: "Palmyra", values: ["Palmyra"] },
    { name: "Cane", values: ["Cane"] },
    { name: "Fabric", values: ["Fabric"] },
    { name: "Areca", values: ["Areca"] },
    { name: "Paper", values: ["Paper"] },
    { name: "Spices", values: ["Spices"] },
  ];

  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title mx-2">
        Categories{" "}
        <button
          className="category-toggle-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            "−"
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-down"
              viewBox="0 0 16 16"
            >
              <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
            </svg>
          )}
        </button>
      </h4>
      <div className="sidebar-widget-list mt-3 mx-2">
        {categories ? (
          <ul className="category-list">
            <li>
              <div className="sidebar-widget-list-left">
                <button
                  onClick={(e) => {
                    getSortParams("category", "");
                  }}
                >
                  <span className="checkmark" /> All Categories
                </button>
              </div>
            </li>
            <div
              className={`expandable-categories ${
                isExpanded ? "expanded" : "collapsed"
              }`}
            >
              {categories.map((category, key) => (
                <li key={key}>
                  <div className="sidebar-widget-list-left">
                    <button
                      onClick={(e) => {
                        getSortParams("category", category);
                        // setIsExpanded(false); // Optionally collapse after selection
                      }}
                    >
                      <span className="checkmark" /> {category}
                    </button>
                  </div>
                </li>
              ))}
            </div>
          </ul>
        ) : (
          "No categories found"
        )}
      </div>
      {/* Product Materials Section */}

      <h4 className="pro-sidebar-title mt-3 mx-2">
        Product Materials{" "}
        <button
          className="material-toggle-btn"
          onClick={() => setMaterialExpanded(!materialExpanded)}
        >
          {materialExpanded ? "−" :(
             <svg
             xmlns="http://www.w3.org/2000/svg"
             width="16"
             height="16"
             fill="currentColor"
             className="bi bi-caret-down"
             viewBox="0 0 16 16"
           >
             <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
           </svg>
          )}
        </button>
      </h4>
      <div className="sidebar-widget-list mt-3 mx-2">
        <ul className="material-list">
          <li>
            <div className="sidebar-widget-list-left">
              <button onClick={() => getSortParams("material", "all")}>
                <span className="checkmark" /> All
              </button>
            </div>
          </li>
          <div
            className={`expandable-materials ${
              materialExpanded ? "expanded" : "collapsed"
            }`}
          >
            {productMaterials.map((material, key) => (
              <li key={key}>
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={() => {
                      getSortParams("material", material.values);
                      // Pass the array of values ["Coir", "Coconut"] for filtering
                      // setMaterialExpanded(false); // Optionally collapse after selection
                    }}
                  >
                    <span className="checkmark" /> {material.name}
                  </button>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

ShopCategories.propTypes = {
  categories: PropTypes.array,
  getSortParams: PropTypes.func,
};

export default ShopCategories;
