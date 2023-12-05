import { useContext, useRef } from 'react';
import upload_logo from '../../assets/images/upload_logo.png';
import { AuthContext } from '../../App';
import { Navigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { API_CLIENT } from '../../utils/api';
import { GET_QUERY_RESPONSE_URL } from '../../utils/constant';
import { toast } from 'react-toastify';
import Tesseract from 'tesseract.js';
import FormList from './FormList';
import { useState } from 'react';

const Dashboard = () => {
  useTitle('Dashboard | AI Forms');
  const [form, setForm] = useState([]);
  const { user } = useContext(AuthContext);
  const textQuery = useRef('');
  const imageQuery = useRef('');

  const getFormDetails = async () => {
    if (textQuery.current.value != '') {
      API_CLIENT.get(
        GET_QUERY_RESPONSE_URL + '/query/' + textQuery.current.value
      )
        .then((res) => {
          setForm([...form, res.data.formSchema]);
        })
        .catch((err) => {
          if (err?.response?.status == '401') {
            toast.error('Please Login', { toastId: 200 });
          } else if (err?.response?.status == '404') {
            toast.error('Query Not Found', { toastId: 200 });
          } else if (err.request) {
            toast.error('Server Error', { toastId: 300 });
          }
        });
    } else {
      const file = imageQuery.current.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        Tesseract.recognize(reader.result, 'eng').then(
          async ({ data: { text } }) => {
            API_CLIENT.get(GET_QUERY_RESPONSE_URL + '/query/' + text.substring(0, 30))
              .then((res) => {
                setForm([...form, res.data.formSchema]);
              })
              .catch((err) => {
                if (err?.response?.status == '401') {
                  toast.error('Please Login', { toastId: 200 });
                } else if (err?.response?.status == '404') {
                  toast.error('Query Not Found', { toastId: 200 });
                } else if (err.request) {
                  toast.error('Server Error', { toastId: 300 });
                }
              });
          }
        );
      };
    }
  };

  return !user.auth ? (
    <Navigate to={'/login'} />
  ) : (
    <div className='flex flex-col justify-center items-center font-Roboto'>
      <div className='flex flex-col items-center border-2 bg-slate-100 w-[100%] min-h-[40vh]'>
        <h2 className='text-xl mt-4'>Start a new form</h2>
        <div className='flex flex-col items-center gap-6 mt-8 md:flex-row md:justify-between md:w-[60vw]'>
          <div className='flex items-center justify-center '>
            <input
              type='text'
              placeholder='Enter your Query'
              className='rounded-md mt-1 p-1 pl-2 w-[15rem]'
              ref={textQuery}
            />
          </div>
          <div className='text-2xl ml-8 mr-8 flex items-center'>
            <h2 className='text-xl'>OR</h2>
          </div>
          <div className='relative flex items-center justify-center w-[20rem] h-[10rem] border-2 border-dashed border-blue-400 rounded-[20px] bg-sky-100 hover:bg-sky-200'>
            <div className='text-center p-[1.5rem]'>
              <img src={upload_logo} className='w-[100px]' />
              <h3 className='text-sm text-gray-400'>Upload file here</h3>
            </div>
            <input
              type='file'
              className='absolute top-2 left-2 opacity-0 w-[100%] h-[100%] cursor-pointer hover:opacity-50'
              accept='image/*'
              ref={imageQuery}
            />
          </div>
        </div>
        <div className='text-center text-xl flex items-center justify-center w-[10rem] h-[2rem] my-5 rounded-md bg-sky-400 hover:bg-sky-500'>
          <button type='button' onClick={getFormDetails}>
            Generate
          </button>
        </div>
      </div>
      <FormList form={form} setForm={setForm} />
    </div>
  );
};

export default Dashboard;
