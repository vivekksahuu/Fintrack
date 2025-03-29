import { useState, useEffect, useRef } from "react";

import "../../component-styles/application-page-styles/ExpenseForm.css";
import { categoriesData } from "./../../assets/CateoryData";

const ExpenseForm = ({ onSubmit, editData }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredSubcategories, setFilteredSubcategories] = useState([]);
  const fileInputRef = useRef(null);

  const [expenseDetail, setExpenseDetail] = useState({
    id: crypto.randomUUID(),
    title: "",
    category: "",
    subCategory: "",
    amount: "",
    date: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    if (editData) {
      setExpenseDetail(editData);

      setSelectedCategory(editData.category || "");

      const category = categoriesData.find(
        (cat) => cat.name === editData.category
      );
      setFilteredSubcategories(category ? category.subcategories : []);
    } else {
      setExpenseDetail({
        id: "",
        title: "",
        category: "",
        subCategory: "",
        amount: "",
        date: "",
        image: "",
        description: "",
      });
    }
  }, [editData]);

  const handleCategoryChange = (e) => {
    const categoryName = e.target.value;
    setSelectedCategory(categoryName);

    const category = categoriesData.find((cat) => cat.name === categoryName);
    setFilteredSubcategories(category ? category.subcategories : []);

    setExpenseDetail((prev) => ({
      ...prev,
      category: categoryName,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseDetail((prevDetail) => ({
      ...prevDetail,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setExpenseDetail({ ...expenseDetail, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(expenseDetail);
    setExpenseDetail({
      title: "",
      category: "",
      subCategory: "",
      amount: "",
      date: "",
      image: "",
      description: "",
    });
    setSelectedCategory("");
    setFilteredSubcategories([]);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className=" flex justify-around mt-6 lg:mt-6 mb-4 sm:mb-0">
      <div
        className="w-[95%] 
        flex-center flex-col 
        lg:justify-around 
        gap-4 lg:gap-8
        p-3 
        text-white 
        rounded-2xl 
        border border-white/50
         
      "
      >
        <div
          className="w-full flex justify-center py-2 border-b
        "
        >
          <p className="text-lg lg:text-2xl">Add Expense</p>
        </div>

        <form
          action=""
          className=" sm:w-full 
          sm:flex sm:justify-between sm:gap-10 sm:flex-wrap 
          sm:px-5"
          onSubmit={handleFormSubmit}
        >
          <div className="input-container">
            <p>Title</p>
            <label htmlFor="title">
              <input
                type="text"
                required
                name="title"
                value={expenseDetail.title}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="input-container">
            <p>Category</p>
            <label htmlFor="category">
              <select
                name="category"
                onChange={handleCategoryChange}
                value={selectedCategory}
              >
                <option value="" hidden>
                  Select Category
                </option>
                {categoriesData.map((option, index) => (
                  <option value={option.name} key={index} className="">
                    {option.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="input-container">
            <p>Sub-Category</p>
            <>
              <select
                name="subCategory"
                value={expenseDetail.subCategory}
                onChange={handleChange}
              >
                <option value="" hidden>
                  Select Subcategory
                </option>
                {filteredSubcategories.map((subCat, subIndex) => (
                  <option key={subIndex} value={subCat}>
                    {subCat}
                  </option>
                ))}
              </select>
            </>
          </div>

          <div className="input-container">
            <p>Amount</p>
            <label htmlFor="amount">
              <input
                type="number"
                required
                name="amount"
                value={expenseDetail.amount}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="input-container">
            <p>Date</p>
            <label htmlFor="date">
              <input
                type="date"
                name="date"
                value={expenseDetail.date}
                onChange={handleChange}
                className="uppercase"
                required
              />
            </label>
          </div>

          <div className="input-container">
            <p>Upload Bill/Reciept Image</p>
            <label htmlFor="image">
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                ref={fileInputRef}
              />
            </label>
          </div>

          <div className="input-container textarea-container">
            <p>Description</p>
            <textarea
              name="description"
              value={expenseDetail.description}
              onChange={handleChange}
              className="border border-white/50 h-25 px-2 py-1 text-sm leading-6"
            ></textarea>
          </div>
        </form>
        <div className="flex-center">
          <button
            type="submit"
            value="Submit"
            onClick={handleFormSubmit}
            className="gradient-border px-8 py-1 rounded"
          >
            {editData ? "Update" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseForm;
