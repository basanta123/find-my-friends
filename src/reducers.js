import {
	CHANGE_SEARCHFIELD,
	REQUEST_FRIENDS_PENDING,
	REQUEST_FRIENDS_SUCCESS,
	REQUEST_FRIENDS_FAILED
} from './constants'; 

const initialStateSearch = {

	searchField: ''
}

export const searchFriends = (state = initialStateSearch, action = {}) =>{

	switch(action.type){

		case CHANGE_SEARCHFIELD:

		return Object.assign({}, state, {searchField: action.payload});

		default:

		return state;
	}

	
}



const initialState = {

	isPending: false,
	friends: [],
	error: ''
}

export const requestFriends = (state = initialState, action = {}) =>{

	switch(action.type){

		case REQUEST_FRIENDS_PENDING:

		return Object.assign({}, state, {isPending: false});

		case REQUEST_FRIENDS_SUCCESS:

		return Object.assign({}, state, {friends:action.payload,isPending: false});

		case REQUEST_FRIENDS_FAILED:

		return Object.assign({}, state, {error:action.payload,isPending: false});


		default:

		return state;
	}

	
}

