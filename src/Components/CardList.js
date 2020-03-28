import React from 'react';
import Card from './Card';
//This is a pure/dumb component that uses just props
const CardList = ({ Robots }) => {
	return(
		<div>
		{
			Robots.map((user, i) => {
		return (
			<Card key={Robots[i].id} 
			id={Robots[i].id} 
			name={Robots[i].name} 
			username={Robots[i].username} 
			email={Robots[i].email}
			/>
			);
		})
		}
		</div>
		);
}

export default CardList;