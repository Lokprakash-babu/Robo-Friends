import React, { Component } from 'react';
import CardComps from './CardComponent';
// import { robots } from './robots';
import SearchBox from './SearchBox';
import './app.css'

class App extends Component{
	constructor(){
		super()
		this.state={
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){

		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=>this.setState({robots: users}));

	}

	OnSearchChange=(event)=>{
		this.setState({searchfield: event.target.value})
		
	}
	render(){
		const filteredRobots=this.state.robots.filter(robot=>{return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())})
			return(
				<div className="tc">
					<h1 className='f1'>Robo Friends</h1>
					<SearchBox searchChange={this.OnSearchChange}/>
					<CardComps robots={filteredRobots}/>
				</div>
				);		
			}
	}

export default App;