function Search({ searchTerm, onSearchChange }) {
    return (
    <div className="searchbar">
      <input
        type="text"
        id="search"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => {
          onSearchChange(e.target.value);
          console.log("Searching... ", e.target.value);
        }}
      />
    </div>
    )
}
export default Search