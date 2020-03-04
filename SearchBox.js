import React from 'react';

const SearchBox=({searchChange})=>{
	return(

		<input className="pa3 bg-lightest-blue" 
		onChange={searchChange} type='search' placeholder='search robots' />

		);
}

export default SearchBox; 