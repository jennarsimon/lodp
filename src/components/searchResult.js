import React, { Component } from 'react';
import './index.css';
/**
 * Each search result component should have a :
 * Category
 * Title
 * File type 
 * Description
 * 
 */
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';

export const result = props =>{ //Exporting the search result component

}



export const TagsInput = props =>{
  const [tags, setTags] = React.useState([]);
  //Displaying info
  const displayInfo = indexToRemove => {
      console.log(result);
    setTags(tags.filter((_, index) => index !== indexToRemove)); //keep elements in array that do not have the index to remove within the array
  }
  const addTags = event => {
    //setTags([...tags,event.target.value])
    if(event.target.value !== "") { //Enter pressed and no empty space input
      setTags([...tags,event.target.value]); //Adds tag only when enter key is pressed (line 40) //This makes set Tags all the previous tags '...tags' and the value of the added tag 'event.target.value'
      props.selected([...tags,event.target.value]); //Parent component has access to updated list of tags everytime a tag is added bc props
      event.target.value = ""; //Clears input bar after tags  added
    }
  };

  return (

<div className="tags-input">
        <ul>
          {

              <result 
              
              onClick ={() => displayInfo(index)}>title</result>


            tags.map((tag, index) => (<li key={index}>
              
              <StyledButton variant="primary">{tag}</StyledButton>{' '}
            
            <i className="material-icons" 
            
            onClick={() => removeTags(index)} 
            > close</i> 
            </li>))}
        </ul>
        <input type="text" placeholder="Press enter to add tags to your posts!"
         onKeyUp={e => e.key == "Enter" ? addTags(e) : null}/>  
      </div>
  )
}

// will re-write this in the submit post function to make selected const accessible
function TagFeature() {
  //export function TagFeature = (props) => {
    // return(

   //  )
   // }=

  const selected = tags => {
    console.log(tags); 
    document.getElementById("latest post tags").innerHTML = tags
  }
  
  return (
    <div className="App">
      <p id="latest post tags" style={{"z-index": "-1", "color": "white"}}></p>

      <TagsInput selected={selected}/>

    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <TagFeature /> {/* doe that mean that this also has to change to Tag? was originally App */}
  </React.StrictMode>, 
  document.getElementById('root')
);
//const rootElement = document.getElementById("root");
