import { useState } from "react";

import { CiSearch } from "react-icons/ci";

import "../../component-styles/application-page-styles/ExpenseTable.css";
import TablePagination from "./TablePagination";
import { categoriesData } from "./../../assets/CateoryData";
import useAdvancedSearch from "./../../hooks/useAdvanceSearch";

const ExpenseTable = ({ data, onDelete, onEdit }) => {
  //image and description state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const [customView, setCustomView] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(15);
  const lastPostIndex = currentPage * dataPerPage;
  const firstPostIndex = lastPostIndex - dataPerPage;
  const {
    selectedCategory,
    setSelectedCategory,
    selectedSubCategory,
    setSelectedSubCategory,
    sortBy,
    setSortBy,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    subCategories,
    filteredData,
  } = useAdvancedSearch(data);
  const currentPosts = filteredData.slice(firstPostIndex, lastPostIndex);

  const handleClick = () => {
    setCustomView(!customView);
  };

  const handleDataReset = (e) => {
    e.preventDefault();

    setSelectedCategory("");
    setSelectedSubCategory("");
    setSortBy("");
    setStartDate("");
    setEndDate("");
  };

  // Open Modal
  const openModal = (type, content) => {
    setModalContent({ type, content });
    setModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setModalOpen(false);
    setModalContent({ type: "", content: "" });
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="p-6">
      <div
        className="border border-gray-500 rounded-lg
      bg-gray-900 
      text-white 
      mb-8 "
      >
        <form action="">
          {customView ? (
            <div
              className="flex flex-col 
            gap-6 lg:gap-8
            w-full p-3 "
            >
              <div
                className="flex  gap-6
            lg:flex-row flex-col
            lg:justify-evenly "
              >
                <select
                  name="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="" hidden>
                    Filter Category by
                  </option>
                  {categoriesData.map((item, index) => (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>

                <select
                  name="subcategory"
                  value={selectedSubCategory}
                  onChange={(e) => setSelectedSubCategory(e.target.value)}
                >
                  <option value="" hidden>
                    Filter Sub-Category by
                  </option>
                  {subCategories.map((subCat, subIndex) => (
                    <option key={subIndex} value={subCat}>
                      {subCat}
                    </option>
                  ))}
                </select>

                <select
                  name="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="" hidden>
                    Sort by
                  </option>
                  <option value="amount-asc">Amount: Ascending</option>
                  <option value="amount-desc">Amount: Descending</option>
                  <option value="date-oldest">Date: Oldest</option>
                  <option value="date-newest">Date: Newest</option>
                </select>

                <div
                  className="text-white text-sm
                  flex flex-col gap-2  
              "
                >
                  <p className="text-left md:hidden">Custom Date Range</p>
                  <div className=" flex gap-2">
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="border p-2 uppercase rounded"
                    />
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="border p-2 uppercase rounded"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-center gap-8">
                <button
                  className="px-6 py-2 
                text-white text-sm
                gradient-border rounded-xl "
                  onClick={handleDataReset}
                >
                  Reset
                </button>

                <button
                  className="px-6 py-2 
                text-white text-sm
                gradient-border rounded-xl"
                  onClick={handleClick}
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <div className="flex-center gap-1" onClick={handleClick}>
              <p className=" cursor-pointer text-center text-lg py-2">
                Expense Search
              </p>
              <p className="text-xl">
                <CiSearch />
              </p>
            </div>
          )}
        </form>
      </div>

      {/* Table for lg and above */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full border border-gray-500 bg-gray-900 text-white">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="thead">Title</th>
              <th className="thead">Category</th>
              <th className="thead">Sub-Category</th>
              <th className="thead">Amount</th>
              <th className="thead">Date</th>
              <th className="thead">Image</th>
              <th className="thead">Description</th>
              <th className="thead">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((expense) => (
              <tr
                key={expense.id}
                className="border border-gray-700 text-center"
              >
                <td className="tdata">{expense.title}</td>
                <td className="tdata">{expense.category}</td>
                <td className="tdata">{expense.subCategory}</td>
                <td className="tdata">{expense.amount}</td>
                <td className="tdata">{expense.date}</td>
                <td className="tdata">
                  <button
                    className="text-blue-400"
                    onClick={() => openModal("image", expense.image)}
                  >
                    View Image
                  </button>
                </td>

                <td className="tdata">
                  <button
                    className="text-blue-400"
                    onClick={() =>
                      openModal("description", expense.description)
                    }
                  >
                    View Description
                  </button>
                </td>

                <td className="tdata">
                  <button
                    className=" mb-1.5 mr-1.5 
                    bg-blue-600 
                    hover:bg-blue-700 
                    text-white 
                    px-3 py-1 
                    rounded"
                    onClick={() => {
                      onEdit(expense);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                    onClick={() => {
                      onDelete(expense.id);
                      handleRefresh();
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <TablePagination
          totalPages={filteredData.length}
          dataPerPage={dataPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>

      {/* Card View for md and below */}
      <div className="lg:hidden">
        {currentPosts.map((expense) => (
          <div
            key={expense.id}
            className="bg-gray-900 shadow-lg
            text-white 
            p-4 mb-4
            rounded-lg"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{expense.title}</h2>
              <p className="text-gray-400">{expense.date}</p>
            </div>

            <p className="text-gray-300 mt-4">
              <span className="font-semibold">Category:</span>{" "}
              {expense.category} - {expense.subCategory}
            </p>

            <p className="text-gray-300 mt-4">
              <span className="font-semibold">Amount:</span> {expense.amount}
            </p>

            <div className="mt-3 flex flex-col gap-3">
              <button
                className="text-blue-400 text-left"
                onClick={() => openModal("image", expense.image)}
              >
                View Image
              </button>
              <button
                className=" text-blue-400 text-left"
                onClick={() => openModal("description", expense.description)}
              >
                View Description
              </button>
            </div>

            <div className="mt-4 flex space-x-2">
              <button
                className="bg-blue-600 hover:bg-blue-700 
                text-white 
                px-3 py-1 
                rounded"
                onClick={() => {
                  onEdit(expense);
                }}
              >
                Edit
              </button>

              <button
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                onClick={() => {
                  onDelete(expense.id);
                  handleRefresh();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        <TablePagination
          totalPages={filteredData.length}
          dataPerPage={dataPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 
        flex items-center justify-center 
        bg-black bg-opacity-50"
        >
          <div className="bg-gray-800 p-6 rounded-lg w-96 text-center">
            {modalContent.type === "description" ? (
              <>
                <p className="text-white">
                  {modalContent.content
                    ? modalContent.content
                    : "No Description was added"}
                </p>
              </>
            ) : (
              <img
                src={modalContent.content}
                alt="Image"
                className="w-full rounded-lg"
              />
            )}
            <button
              className="mt-4 
              bg-red-600 hover:bg-red-700 
              text-white 
              px-4 py-2 
              rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseTable;
