const SearchBar = ({value, onChange}) => {
    return (
        <div className="searchbar">
            <input 
                type="text" 
                placeholder="rechercher..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;