const TablePagination = ({
  totalPages,
  dataPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const totalNumofPages = Math.ceil(totalPages / dataPerPage);
  const pageNumbers = [...Array(totalNumofPages)].map((_, index) => index + 1);

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div
        className="flex gap-1.5 justify-center
      w-full 
      mt-4 lg:mt-6"
      >
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-black 
          px-3 py-0 
          text-[1rem] text-gray-200 
          rounded-md 
          cursor-pointer 
          border border-gray-200"
        >
          Prev
        </button>

        {pageNumbers.slice(0, 5).map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className="bg-black 
            w-10 h-10 
            lg:w-8 lg:h-8 
            font-medium text-lg text-gray-200 
            border border-gray-200 rounded-md 
            cursor-pointer"
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalNumofPages}
          className="bg-black 
          px-3 py-0 
          text-[1rem]  text-gray-200
          rounded-md border border-gray-200
          cursor-pointer"
        >
          Next
        </button>
      </div>
      <p className="text-lg text-white">
        Page {currentPage} of {totalNumofPages}
      </p>
    </div>
  );
};

export default TablePagination;
