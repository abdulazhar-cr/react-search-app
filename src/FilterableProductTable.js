import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterableProductTable = ({ products }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const onFilterTextChanged = (changedValue) => {
    console.log("Value recieved from Search bar component", changedValue);
    setFilterText(changedValue);
  };
  const onIsStockOnlyChanged = (changedValue) => {
    console.log("Value recieved from Search bar component", changedValue);
    setInStockOnly(changedValue);
  };
  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChanged={onFilterTextChanged}
        onIsStockOnlyChanged={onIsStockOnlyChanged}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};

export default FilterableProductTable;
