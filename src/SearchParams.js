const SearchParams = () => {
  const location = "Seattle, WA"

  return <div className="search-params">
    <form>
      <label htmlFor="location">
        Location
        <input type="text" id="location" value={location} placeholder="Location"/>
      </label>
    </form>
  </div>
}

export default SearchParams