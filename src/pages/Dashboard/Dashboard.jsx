import { useContext, useRef } from 'react';
import upload_logo from '../../assets/images/upload_logo.png';
import { AuthContext } from '../../App';
import { Navigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Form from './Form';

const Dashboard = () => {
  useTitle('Dashboard | AI Forms');
  const { user } = useContext(AuthContext);
  const textQuery = useRef('');
  const imageQuery = useRef('');

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
              ref={imageQuery}
            />
          </div>
        </div>
        <div className='text-center text-xl flex items-center justify-center w-[10rem] h-[2rem] my-5 rounded-md bg-sky-400 hover:bg-sky-500'>
          <button type='button'>Generate</button>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Dashboard;
