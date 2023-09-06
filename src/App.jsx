import { createContext, useEffect, useState } from 'react';
import Router from './Router';
import { ToastContainer, toast } from 'react-toastify';
import { API_CLIENT } from './utils/api';
import { GET_USER_URL } from './utils/constant';

export const AuthContext = createContext({
  user: {
    auth: false,
    name: '',
  },
  setUser: () => {},
});

function App() {
  const [user, setUser] = useState({ auth: false, name: '' });
  useEffect(() => {
    API_CLIENT.get(GET_USER_URL)
      .then((res) => {
        setUser({ auth: true, name: res.data.name });
      })
      .catch((err) => {
        if (err?.response?.status == '401') {
          setUser({ auth: false, name: '' });
        } else if (err.request) {
          toast.error('Server Error', { toastId: 0 });
        }
      });
  }, []);
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
