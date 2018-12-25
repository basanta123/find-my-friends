import {
	CHANGE_SEARCHFIELD,
	REQUEST_FRIENDS_PENDING,
	REQUEST_FRIENDS_SUCCESS,
	REQUEST_FRIENDS_FAILED
} from './constants'; 

 export const setSearchField = (text) => ({

	type: CHANGE_SEARCHFIELD,																																																																																																																																																																	
	payload: text

})

export const requestFriends = () => (dispatch) => {  //higher order function																																																																																																																																																																																																																																																																															
   dispatch({type: REQUEST_FRIENDS_PENDING});

   fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {return response.json();})
      .then(data => dispatch({type: REQUEST_FRIENDS_SUCCESS, payload: data}))
       .catch(error => dispatch({type: REQUEST_FRIENDS_FAILED, payload: error}))

}

