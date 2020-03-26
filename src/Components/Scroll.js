import React from 'react';

//Children - So Scroll becomes parent of CardList therefore holds all the props of CardList

const Scroll = (props) => {
	return(
		<div style = {{overflowY:'scroll' , height: '500px'}}>
			{props.children}
		</div>
		);
};

export default Scroll;