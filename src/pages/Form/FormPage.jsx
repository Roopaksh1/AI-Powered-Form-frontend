import { Navigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { GET_FORM_URL } from '../../utils/constant';
import Loading from '../../components/Loading';
import Form from '../../components/Form';

const FormPage = () => {
  const { userID, formID } = useParams();
  const { data, loading, error } = useFetch(
    GET_FORM_URL + '/' + userID + '/' + formID
  );

  return loading ? (
    <Loading />
  ) : error ? (
    <Navigate to={'/404'} />
  ) : (
    <Form schema={data.form[0].formSchema} />
  );
};

export default FormPage;
