import { createContext, useEffect, useState } from 'react';
import Router from './Router';
import { ToastContainer, toast } from 'react-toastify';
import { API_CLIENT } from './utils/api';
import { GET_USER_URL } from './utils/constant';
import useFetch from './hooks/useFetch';

export const AuthContext = createContext({
  user: {
    auth: false,
    name: '',
  },
  setUser: () => {},
});

function App() {
  const [user, setUser] = useState({ auth: false, name: '' });
  const { data, loading, error } = useFetch(GET_USER_URL);
  if (data) {
    setUser({ auth: true, name: data.name });
  } else if (error) {
    toast.error(error, { toastId: 0 });
  }
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router />
      <ToastContainer
        position='top-center'
        autoClose={1500}
        pauseOnFocusLoss={false}
      />
    </AuthContext.Provider>
  );
}

export default App;
