function Search({ searchTerm, onSearchChange }) {
    //all things tied to the drink container is handled with props 
    // as a way to simplify data transfer across the same "page"
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