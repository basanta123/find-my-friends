import React from 'react';

const SearchBox = ({searchChange}) => {

	return (
	<div className="pa2">	
     <input
     className="pa3 ba b--green bg-lightest-blue" 
     type="search" 
     onChange={searchChange}
     placeholder="Search My Friend"/>
    </div>
	)
}

export default SearchBox