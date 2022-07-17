import { useEffect, useState } from "react"

interface User {
  id: number,
  name: string,
  username: string,
  email: string
}

function App() {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    const loadUsers = async () => {  
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUsers(data)
    }

    loadUsers()
  }, [])
  
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  return (
    <ul>
      {users.filter((user: User) => user.id >= 5).map((user: User) => 
        <li key={user.id}>
          <p>{user.name}</p>
          <p>{user.username}</p>
          <small>{user.email}</small>
        </li>
      )}
    </ul>    
  )
}

export default App
