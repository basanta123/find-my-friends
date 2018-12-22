import React from 'react';

import Card from './Card';

const CardList = ({friends}) => {

const CardArray = friends.map((user, i) => {
 
  return (
  <Card 
  key={i}  
  id={friends[i].id} 
  name={friends[i].name} 
  email={friends[i].email}/>
  );

})	

	return (
       
       <div>
         {CardArray}
	    </div>
	);
}

export default CardList;