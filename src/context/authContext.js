import {createContext, useState} from "react";

const AuthContext = createContext()
const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(false)
  
  const data = {
    user,
    setUser,
  }
  
  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
export default AuthProvider