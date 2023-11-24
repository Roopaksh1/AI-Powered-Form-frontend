import { toast } from 'react-toastify';
import { API_CLIENT } from '../../utils/api';
import { POST_FORM_URL } from '../../utils/constant';
import { useRef } from 'react';

const Admin = () => {
  const category = useRef('');
  const name = useRef('');
  const component = useRef('');
  const label = useRef('');
  const isReq = useRef('');
  const password = useRef('');
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = {
      category: category.current.value,
      name: name.current.value,
      component: component.current.value,
      label: label.current.value,
      isRequired: isReq.current.checked,
    };
    API_CLIENT.post(POST_FORM_URL, {
      password: password.current.value,
      formData,
    })
      .then((res) => {
        if (res.status == 200) {
          toast.success('Database Updated', { toastId: 12333333 });
        }
      })
      .catch((err) => {
        if (err?.response?.status == '401') {
          toast.error('Unauthorized', { toastId: 123333 });
        } else if (err.request) {
          toast.error('Server Error', { toastId: 12333 });
        }
      });
  };
  return (
    <form className='max-w-sm mx-auto mt-10'>
      <div className='mb-5'>
        <label
          htmlFor='category'
          className='block mb-2 text-sm font-medium text-gray-900'
        >
          Category
        </label>
        <input
          ref={category}
          id='category'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          placeholder='category'
          required
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='name'
          className='block mb-2 text-sm font-medium text-gray-900'
        >
          Name
        </label>
        <input
          ref={name}
          id='name'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          placeholder='name'
          required
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='component'
          className='block mb-2 text-sm font-medium text-gray-900'
        >
          Component
        </label>
        <input
          ref={component}
          id='component'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          placeholder='Component'
          required
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='label'
          className='block mb-2 text-sm font-medium text-gray-900'
        >
          Label
        </label>
        <input
          ref={label}
          id='label'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          required
        />
      </div>
      <div className='flex items-start mb-5'>
        <div className='flex items-center h-5'>
          <input
            ref={isReq}
            id='isreq'
            type='checkbox'
            value=''
            className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300'
            required
          />
        </div>
        <label
          htmlFor='isreq'
          className='ms-2 text-sm font-medium text-gray-900'
        >
          is Required
        </label>
      </div>
      <div className='mb-5'>
        <label
          htmlFor='password'
          className='block mb-2 text-sm font-medium text-gray-900'
        >
          Password
        </label>
        <input
          ref={password}
          type='password'
          id='password'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          required
        />
      </div>
      <button
        type='submit'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
        onClick={onSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default Admin;
