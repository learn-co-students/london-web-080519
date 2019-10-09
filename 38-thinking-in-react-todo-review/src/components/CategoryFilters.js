import React from "react";
import { CATEGORIES } from "../data";

// App
// CategoryFilters receives { currentCategory, changeCategory } as props
const CategoryFilters = ({ currentCategory, changeCategory }) => {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map(category => (
        <button
          className={category === currentCategory ? "selected" : undefined}
          onClick={() => changeCategory(category)}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;
