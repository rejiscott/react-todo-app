import React, { useState } from 'react';
import './App.css';


function App() {

  //state hook - useState
  const[newItem, setNewItem] = useState("");
  const[items, setItems] = useState([]);
  const numberOfColorBoxes = 400;
  //helper functions
  function addItem() {

    if (!newItem) {
      alert("enter an item.")
      return;
    }
    
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }

    setItems(oldList => [...oldList, item ])
    setNewItem("")
  }

  function deleteItem(id){
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
    console.log(items)
  }
  
  let backBoxes=[]
  
  for (let i = 0; i < numberOfColorBoxes; i++) {
    backBoxes.push(<div className='colorBox'></div>)
}
  return (
    <div className="App">
      <div className='bgAnimation' >
        {backBoxes }
      </div>
      <section id='top-container'>
        <div className='h1-remover' >
        <h1>Todo List</h1>
        </div>
      </section>
      
      <section id='form'>
        <input 
        type='text'
        placeholder='Add an item...'
        value={newItem}
        onChange= {e => setNewItem(e.target.value)}
        />
        <button className='add-button' onClick={() => addItem()}>Add</button>
      </section>
      <section id='items'>
        <ul>
          {items.map(item =>{
            return(
              <div className='item-div' >
              <li className='item' key = {item.id}>{item.value} <button className='delete-button' onClick={() => deleteItem(item.id)}>delete</button></li>
              </div>
            )
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
 