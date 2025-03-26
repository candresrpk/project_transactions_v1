import "./search.css";

const Search = ({ search, SearchTransaction }) => {
  return (
    <input
      className="search"
      type="text"
      placeholder="Which transactions would yo like to search: "
      onChange={SearchTransaction}
      value={search}
    />
  );
};

export { Search };
