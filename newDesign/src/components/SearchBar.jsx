// import React, { useState } from 'react';

// const SearchBar = ({ onSearch, onFilter }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   // const [filters, setFilters] = useState({}); // Define filter options here

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   // const handleFilterChange = (event) => {
//   //   // Update filters state based on user interaction (checkboxes, dropdowns)
//   //   setFilters({ ...filters, [event.target.name]: event.target.value });
//   // };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSearch(searchTerm);
//     onFilter(filters);
//   };

//   return (
//     <form className="search-bar" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Search for jobs..."
//         value={searchTerm}
//         onChange={handleSearchChange}
//         className="search-input"
//       />
//       {/* Add filter options here (e.g., dropdowns, checkboxes) */}
//       <button type="submit" className="search-button">
//         Search
//       </button>
//     </form>
//   );
// };

// export default SearchBar;
