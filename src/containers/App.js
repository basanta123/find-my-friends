import React, {Component} from 'react';
import { connect } from 'react-redux';
import ErrorBoundry from '../components/ErrorBoundry';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css'

import {setSearchField, requestFriends} from '../actions';



const mapStateToProps = state => {

	

	return {
		searchField: state.searchFriends.searchField,
		friends: state.requestFriends.friends,
		isPending: state.requestFriends.isPending,
		error: state.requestFriends.error
	}
}

const mapDispatchToProps = (dispatch) => {

	return {

	onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
	onRequestFriends: () => dispatch(requestFriends())

	}

}


class App extends Component{

	

	componentDidMount(){ //component is instantiated and created in the dom
      
      this.props.onRequestFriends();

	}

	
    render() {

    

    const {searchField, onSearchChange, friends, isPending} = this.props; 	

    const filteredFriends = friends.filter(friend => {
      	return friend.name.toLowerCase().includes(searchField.toLowerCase())
      });

      if(isPending) {
      	return <h1 className="f1">Loading...</h1>
      }	else {
        
             return(
			 <div className="tc">
			 <h1 className="f1">Find My Friends</h1>
			 <SearchBox searchChange = {onSearchChange} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);