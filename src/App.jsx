import { createContext, useEffect, useState } from 'react';
import Router from './Router';
import { ToastContainer, toast } from 'react-toastify';
import { GET_USER_LOGOUT_URL, GET_USER_URL } from './utils/constant';
import useFetch from './hooks/useFetch';
import Loading from './components/Loading';
import { API_CLIENT } from './utils/api';

export const AuthContext = createContext({
  user: {
    auth: false,
    name: '',
  },
  setUser: () => {},
  logOut: () => {},
});

function App() {
  const [user, setUser] = useState({ auth: false, name: '' });
  const { data, loading, error } = useFetch(GET_USER_URL);
  const logOut = async () => {
    try {
      const res = await API_CLIENT.post(GET_USER_LOGOUT_URL);
      setUser({ auth: false, name: '' });
      toast.success(res.data.message, { toastId: 10 });
    } catch (err) {
      if (err?.response?.status == '401') {
        toast.error('Please Login', { toastId: 20 });
      } else if (err.request) {
        toast.error('Server Error', { toastId: 30 });
      }
    }
  };
  useEffect(() => {
    if (data) {
      setUser({ auth: true, name: data.name });
    } else if (error) {
      toast.error(error, { toastId: 0 });
    }
  }, [data, error]);
  return loading ? (
    <Loading />
  ) : (
    <AuthContext.Provider value={{ user, setUser, logOut }}>
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
