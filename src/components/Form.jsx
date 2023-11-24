import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import { componentMapper } from '@data-driven-forms/mui-component-mapper';
import FormTemplate from '@data-driven-forms/mui-component-mapper/form-template/form-template';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const Form = ({ schema, setView = null }) => {
  const closeForm = () => {
    setView(null);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className='fixed top-0 left-0 min-w-[100vw] min-h-[100vh] bg-[#00000080] overflow-auto flex justify-center items-center'>
        <div className='flex flex-col bg-white p-2 gap-2 rounded-xl w-[70vw] h-[90vh] md:h-[95vh] sm:w-[45vw] overflow-y-auto'>
          {setView ? (
            <p className='text-end text-red-600'>
              <button onClick={closeForm}>
                <i className='fa-solid fa-xmark'></i>
              </button>
            </p>
          ) : null}
          <FormRenderer
            schema={schema}
            componentMapper={componentMapper}
            FormTemplate={FormTemplate}
            onSubmit={console.log}
          />
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Form;
