
const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChanged,
  onIsStockOnlyChanged,
}) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(event) => onFilterTextChanged(event.target.value)}
      />
      <label>
        <input
          onChange={(event) => onIsStockOnlyChanged(event.target.checked)}
          type="checkbox"
          checked={inStockOnly}
        />
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
