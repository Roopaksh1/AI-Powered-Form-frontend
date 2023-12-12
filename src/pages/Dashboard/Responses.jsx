const Responses = ({ response, setView = null }) => {
  const closeForm = () => {
    setView(null);
  };
  const formatResponse = (res) => {
    const arr = [];
    for (const que in res) {
      const response = (
        <div>
          <p className=' font-semibold'>&bull; {que}</p>
          <p className='pl-2'>{res[que]}</p>
        </div>
      );
      arr.push(response);
    }
    return arr;
  };

  const mapResponse = (res) => {
    return response.map((res, index) => {
      return (
        <>
          <h3 className=' font-extrabold text-xl'>Response {index + 1}</h3>
          {formatResponse(res)}
        </>
      );
    });
  };

  return (
    <div className='fixed top-0 left-0 min-w-[100vw] min-h-[100vh] bg-[#00000080] overflow-auto flex justify-center items-center'>
      <div className='flex flex-col bg-white p-2 gap-2 rounded-xl w-[70vw] h-[90vh] md:h-[95vh] sm:w-[45vw] overflow-y-auto'>
        {setView ? (
          <p className='text-end text-red-600'>
            <button onClick={closeForm}>
              <i className='fa-solid fa-xmark'></i>
            </button>
          </p>
        ) : null}
        {mapResponse()}
      </div>
    </div>
  );
};

export default Responses;
