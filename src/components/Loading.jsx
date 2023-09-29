const Loading = () => {
  return (
    <div className='flex flex-col gap-6 justify-center items-center h-[100vh]'>
      <i className='fa-solid fa-spinner animate-spin text-8xl'></i>
      <p className='text-3xl'>Loading</p>
    </div>
  );
};

export default Loading;
