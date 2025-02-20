import PropTypes from "prop-types";

const ShopCategories = ({ categories, getSortParams }) => {
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
      <h4 className="pro-sidebar-title">Categories </h4>
      <div className="sidebar-widget-list mt-3">
        {categories ? (
          <ul>
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
            {categories.map((category, key) => (
              <li key={key}>
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={(e) => {
                      getSortParams("category", category);
                    }}
                  >
                    <span className="checkmark" /> {category}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          "No categories found"
        )}
      </div>

      {/* Product Materials Section */}
      <h4 className="pro-sidebar-title mt-3">product Materials </h4>
      <div className="sidebar-widget-list mt-3">
        <ul>
          <li>
            <div className="sidebar-widget-list-left">
              <button onClick={() => getSortParams("material", "all")}>
                <span className="checkmark" /> All
              </button>
            </div>
          </li>
          {productMaterials.map((material, key) => (
            <li key={key}>
              <div className="sidebar-widget-list-left">
                <button
                  onClick={() => {
                    getSortParams("material", material.values);
                    // Pass the array of values ["Coir", "Coconut"] for filtering
                  }}
                >
                  <span className="checkmark" /> {material.name}
                </button>
              </div>
            </li>
          ))}
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
