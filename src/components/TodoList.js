import React from 'react'
import Todo from './Todo'

const TodoList = ({todoList, removeTodo}) => {
    return (
        <div>
            {
            todoList.map((todo,index) => {
                return (
                    <Todo value={todo} key={index} onClickRemove={() => removeTodo(index)}/>
                )
            })
            }
        </div>
    )
}

export default TodoList