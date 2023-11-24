import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import { componentMapper } from '@data-driven-forms/mui-component-mapper';
import FormTemplate from '@data-driven-forms/mui-component-mapper/form-template/form-template';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const Form = ({ schema }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className='m-2 w-[50%]'>
        <FormRenderer
          schema={schema}
          componentMapper={componentMapper}
          FormTemplate={FormTemplate}
          onSubmit={console.log}
        />
      </div>
    </LocalizationProvider>
  );
};

export default Form;
