import { createContext,useState, useEffect, useContext } from "react";
import axios from "axios";

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(data);
      
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ users, isLoading, error }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;

export const useUsers = () => {
    const context = useContext(UsersContext);
    if (!context) {
        throw new Error("must be used within a UsersProvider");
    }
    return context;
}

