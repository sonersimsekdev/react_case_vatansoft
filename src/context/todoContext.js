import {createContext, useState} from "react";

const TodoContext = createContext()
const TodoProvider = ({ children }) => {
  
  const [todo, setTodo] = useState('light')
  const [language, setLanguage] = useState('en')
  
  const data = {
    todo,
    setTodo,
    language,
    setLanguage
  }
  
  return (
    <TodoContext.Provider value={data}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodo = () => useContext(TodoContext)
export default TodoProvider