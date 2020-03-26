import React from 'react';
import CardList from '../Components/CardList.js';
import SearchBox from '../Components/SearchBox.js';
import '../Containers/App.css';
import Scroll from '../Components/Scroll.js';

//State is what describes the app. It is the thing that can change.
//Usually lives in the parent Component.
//Therefore it is a smart component with the class format instead of function

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			Robots: [],
			searchfield: ''
		}
		console.log('constructor');
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users => this.setState({Robots : users}));
		console.log('componentDidMount');
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render(){
		const {Robots, searchfield} = this.state;
		const filterRobots = Robots.filter(Robot => {
			return Robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		console.log('render');
		return !Robots.length ? <h1 className ='tc'>Loading..........</h1> :
		(
		<div className ='tc'>
		<h1 className= 'f1'>RoboFriends</h1>
		<SearchBox searchChange={this.onSearchChange} />
		<Scroll>
		<CardList Robots = {filterRobots}/>
		</Scroll>
		</div>
		);	
	}
}

export default App;