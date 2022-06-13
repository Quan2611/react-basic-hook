import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useEffect, useState } from 'react';
import Todo from './views/Todo';

function App() {


  let [name, setName] = useState('Quan')
  const [address, setAddress] = useState('')

  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'watching TV', type: 'Quan' },
    { id: 'todo2', title: 'doing homework', type: 'Quan' },
    { id: 'todo3', title: 'playing video game', type: 'Tung' },
    { id: 'todo4', title: 'reading book', type: 'Tung' }
  ])

  useEffect(() => {
    console.log('run use effect');
  })

  const handleOnChange = (event) => {
    setAddress(event.target.value)
  }

  const handleOnClick = (event) => {
    if (!address) {
      alert('Please input sth bitch');
      return;
    }
    let newTodo = {
      id: Math.floor(Math.random() * 10000) + 1,
      title: address,
      type: 'Quan'
    }
    setTodos([...todos, newTodo])
    setAddress('')
  }

  const deleteDataTodo = (id) => {
    let currentsTodo = todos
    currentsTodo = currentsTodo.filter(item => item.id != id)
    setTodos(currentsTodo)
  }
  return (
    <div className="App">

      <header className="App-header">

        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World with React and {name}! </h1>
        <Todo
          todos={todos}
          title={'All to do'}
          deleteDataTodo={deleteDataTodo}
        />

        <Todo
          todos={todos.filter(item => item.type === 'Quan')}
          title={"Quan's to do"}
          deleteDataTodo={deleteDataTodo}
        />
        <input value={address} onChange={(event) => handleOnChange(event)}></input>
        <button type='button' onClick={(event) => handleOnClick(event)}>Click me</button>
      </header>
    </div>
  );
}

export default App;
