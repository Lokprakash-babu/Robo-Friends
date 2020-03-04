import React from 'react';
import Card from './Card';

const CardComps=({robots})=>{
	const CardNum= robots.map((user, i)=>{
		return(<Card

		key={i}
		id={robots[i].id}
		name={robots[i].name}
		email={robots[i].email} />)
	})


	return(
		<div>
			{CardNum}
		</div>
		);
	}
export default CardComps;