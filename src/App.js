import './App.css'
import React, { useState } from 'react'
import List from './List'

function App() {
  const [currentItem, setCurrentItem] = useState(null)
  const [itemList, updateItemList] = useState([])
  const onChangeHandler = (e) => {
    // console.log('Current Value ', e.target.value)
    setCurrentItem(e.target.value)
  }
  const addItemToList = () => {
    updateItemList([...itemList, { item: currentItem, key: Date.now() }])
    // console.log('Item List ', itemList)
    setCurrentItem('')
  }
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>To-Do App</h1>
          <div className="Wrapper">
            <div className="Input-wrapper">
              <input
                placeholder="Enter Data"
                value={currentItem}
                onChange={onChangeHandler}
              />
              <button onClick={addItemToList}>+</button>
            </div>
            <List itemList={itemList} updateItemList={updateItemList} />
          </div>
        </header>
      </div>
    </>
  )
}

export default App
