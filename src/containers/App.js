import React, {Component} from 'react';
import ErrorBoundry from '../components/ErrorBoundry';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css'


class App extends Component{

	constructor(){
        
        super()

		this.state = {
          friends: [],
	      searchField: ''
		}
	}

	componentDidMount(){ //component is instantiated and created in the dom
      
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {return response.json();})
      .then(users => {this.setState({friends: users});})

	}

	onSearchChange = (event) => {

      this.setState({searchField: event.target.value});

      
	}


    
    render() {

    const {friends, searchField} = this.state; 	

    const filteredFriends = friends.filter(friend => {
      	return friend.name.toLowerCase().includes(searchField.toLowerCase())
      });

      if(!friends.length) {
      	return <h1 className="f1">Loading...</h1>
      }	else {
        
             return(
			 <div className="tc">
			 <h1 className="f1">Find My Friends</h1>
			 <SearchBox searchChange = {this.onSearchChange} />
			 <Scroll>
			 <ErrorBoundry>	
		     <CardList friends={filteredFriends} />
		     </ErrorBoundry>
		     </Scroll>
		     </div>
	        );
 
      }


    }
	
}

export default App;