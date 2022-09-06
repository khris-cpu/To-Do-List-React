import React , {useState} from 'react'
import './App.css';
import TodoList from './components/TodoList';
import styled from 'styled-components'

const Container = styled.div`
    background-color: white;
    box-shadow: 10px 10px 36px -10px rgba(0,0,0,0.75);
    border-radius: 6px;
    margin: 12px;
    padding: 12px;
    transition: all .2s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
`

const Input = styled.input`
  height: 15px;
  margin: 15px;
  border-radius: 5rem;
  border-style: solid;
  border-color: #eeeeee;
  box-shadow: 10px 10px 36px -10px rgba(0,0,0,0.75);
  padding: 15px;
  font-size: large;
`

const Button = styled.button`
  padding: 15px;
  background-color: #4CAF50;
  color: white;
  font-size: medium;
  border-style: none;
  border-radius: 15rem;
  box-shadow: 10px 10px 36px -10px rgba(0,0,0,0.75);
  outline: none;

  &:active{
    background-color: #4C9F50;
  }
`

function App() {

  const [todoList , setTodoList] = useState([""])
  const [text, setText] = useState("")
  
  const onTextChange = ({target : {value}}) => {
   
    console.log(value);
    setText(value);
  
  }

  const addTask = () => {
    setTodoList([
      ...todoList,
      text
    ])
    setText("")
  }

  const removeTodo = (index) => {
    console.log(index);

    let todo = [...todoList]

    todo.splice(index,1)
    setTodoList(todo)
  }

  return (
    <Container>
      <Input type="text" value={text} onChange={onTextChange} />
      <Button onClick={addTask}>Add Task</Button>
      <div>
        <TodoList todoList={todoList} removeTodo ={removeTodo} />
      </div>
    </Container>
  );
}

export default App;