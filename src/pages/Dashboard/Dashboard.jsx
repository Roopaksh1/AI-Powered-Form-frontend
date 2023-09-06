import upload_logo from "../../assets/images/upload_logo.png";

const Dashboard = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center border-2 bg-slate-100 w-[100%] min-h-[40vh]'>
        <h2 className='text-xl mt-4'>Start a new form</h2>
        <div className='inline-flex items-center justify-center mt-8'>
          <div className='flex items-center justify-center '>
            <input
              type='text'
              placeholder='Enter your Query'
              className='rounded-md mt-1 p-1 pl-2 w-[15rem]'
            />
          </div>
          <div className='text-2xl ml-8 mr-8 flex items-center'><h2 className="text-xl">OR</h2></div>
          <div className='relative flex items-center justify-center w-[20rem] h-[10rem] border-2 border-dashed border-blue-400 rounded-[20px] bg-sky-100 hover:bg-sky-200'>
            <div className='text-center p-[1.5rem]'>
              <img src={upload_logo} className='w-[100px]' />
              <h3 className='text-sm text-gray-400'>Upload file here</h3>
            </div>
            <input
              type='file'
              className='absolute top-2 left-2 opacity-0 w-[100%] h-[100%] cursor-pointer hover:opacity-50'
            />
          </div>
        </div>
        <div className="flex items-center justify-center w-[10rem] h-[2rem] mt-3 rounded-md bg-sky-400 hover:bg-sky-500"><button type="button" className="w-[100%] text-center text-xl">Generate</button></div>

      </div>
      <div className=' m-16 flex w-[75%] shadow-md min-h-[20vh] flex-col items-center justify-center border-t rounded-lg'>
        <h3 className='text-sm text-center lg:text-start md:text-xl lg:text-xl text-gray-800'>
          No forms yet
        </h3>
      </div>
    </div>
  );
};

export default Dashboard;
