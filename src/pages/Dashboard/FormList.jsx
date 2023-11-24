import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { GET_FORM_URL, HOST_URL } from '../../utils/constant';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import { capitalize } from '../../utils/capitalize';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useContext } from 'react';
import { AuthContext } from '../../App';
import Form from '../../components/Form';

const FormList = () => {
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState([]);
  const [view, setView] = useState(null);
  const { data, loading, error } = useFetch(GET_FORM_URL);
  useEffect(() => {
    if (data) {
      setForm(data.forms);
    } else if (error) {
      toast.error(error, { toastId: 66 });
    }
  }, [data, error]);

  const formMap = () => {
    return form.map((f) => {
      return (
        <div
          key={f._id}
          className='border-2 p-2 font-bold text-xl flex justify-between md:hover:shadow-md md:text-2xl font-Roboto'
        >
          {capitalize(f.title)}
          <div className='text-sm font-Roboto'>
            <button
              className='mr-2 md:hover:bg-[#efedf2] md:p-1'
              onClick={() => setView(<Form schema={f} setView={setView} />)}
            >
              <i className='fa-solid fa-eye text-green-400'></i>
              <br />
              View
            </button>
            <CopyToClipboard
              text={HOST_URL + user.id + '/' + f._id}
              onCopy={() => toast.success('Link Copied', { toastId: 9809 })}
            >
              <button className='mr-2 md:p-1 md:hover:bg-[#efedf2]'>
                <i className='fa-solid fa-copy'></i>
                <br />
                Share
              </button>
            </CopyToClipboard>
            <button className='md:hover:bg-[#efedf2] md:p-1'>
              <i className='fa-solid fa-trash text-red-500'></i>
              <br />
              Delete
            </button>
          </div>
        </div>
      );
    });
  };
  return loading ? (
    <Loading />
  ) : form.length == 0 ? (
    <div className=' m-16 flex w-[75%] shadow-md min-h-[20vh] flex-col items-center justify-center border-t rounded-lg'>
      <h3 className='text-sm text-center lg:text-start md:text-xl lg:text-xl text-gray-800'>
        No forms yet
      </h3>
    </div>
  ) : (
    <div className='mt-2 w-full p-2 md:w-[50%] flex flex-col gap-3'>
      {formMap()}
      {view}
    </div>
  );
};

export default FormList;
