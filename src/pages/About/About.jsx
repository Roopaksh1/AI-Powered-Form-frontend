import useTitle from '../../hooks/useTitle';

const About = () => {
  useTitle('About | AI Forms');
  return (
    <div className='mt-5 flex flex-col justify-center items-center gap-5 p-4'>
      <div>
        <img src='favicon.ico' alt='logo' />
      </div>
      <p className='md:text-2xl text-center md:border-b-4 self-stretch pb-6 border-b-2 text-xl'>
        <span className='font-bold'>AI Forms</span> has been developed to make
        the process of creating forms easier using AI.
      </p>
      <h3 className='font-bold text-2xl'>Features</h3>
      <ul className='list-disc md:text-lg list-inside'>
        <li>
          Enter the type of form you want inside the textbox and we&apos;ll
          generate the form using AI.
        </li>
        <li className='mt-2'>
          You can also provide an image, we&apos;ll extract the text from that
          image and generate the form based on it.
        </li>
        <li className='mt-2'>
          We&apos;ll provide graphical representation of the data so that you
          can analyze it easily.
        </li>
      </ul>
    </div>
  );
};

export default About;
