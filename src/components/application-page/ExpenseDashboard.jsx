import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { categoriesData } from "./../../assets/CateoryData";
import "../../component-styles/application-page-styles/ExpenseDashboard.css";

const COLORS = [
  "#FF4500", // Bright Orange-Red
  "#1E90FF", // Vivid Dodger Blue
  "#32CD32", // Lush Lime Green
  "#FFD700", // Bold Gold
  "#8A2BE2", // Deep Blue Violet
  "#FF1493", // Hot Pink
  "#20B2AA", // Light Sea Green
  "#DC143C", // Crimson Red
  "#7FFF00", // Electric Green
  "#6495ED", // Soft Cornflower Blue
  "#FF8C00", // Dark Orange
  "#8B0000", // Deep Maroon
  "#00CED1", // Bright Turquoise
];

const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ExpenseDashboard = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (e) => {
    const categoryName = e.target.value;
    setSelectedCategory(categoryName);
  };

  const currentDate = new Date();
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());

  const incrementDate = () => {
    setMonth((prevIndex) => (prevIndex + 1) % monthArray.length);
    if (month == 11) {
      setYear((prevIndex) => prevIndex + 1);
    }
  };

  const decrementDate = () => {
    setMonth(
      (prevIndex) => (prevIndex - 1 + monthArray.length) % monthArray.length
    );
    if (month == 0) {
      setYear((prevIndex) => prevIndex - 1);
    }
  };

  const handleYearChange = (e) => {
    setYear(Number(e.target.value));
  };

  const filteredMonthData = data.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate.getMonth() === month && itemDate.getFullYear() === year;
  });

  const filteredYearData = data.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate.getFullYear() === year;
  });

  // Group and sum amounts by category
  const categoryBasedData = Object.values(
    filteredMonthData.reduce((acc, { category, amount }) => {
      const numericAmount = Number(amount);

      if (!acc[category]) {
        acc[category] = { category, amount: 0 };
      }
      acc[category].amount += numericAmount; // Sum up amounts
      return acc;
    }, {})
  );

  const subCategoryBasedData = Object.values(
    filteredMonthData
      .filter(
        (item) => selectedCategory === "" || item.category === selectedCategory
      )
      .reduce((acc, { subCategory, amount }) => {
        const numericAmount = Number(amount);
        if (!acc[subCategory])
          acc[subCategory] = { name: subCategory, amount: 0 };
        acc[subCategory].amount += numericAmount;
        return acc;
      }, {})
  );

  if (!data || data.length === 0) {
    return (
      <div className="flex-center h-[80vh]">
        <p className="text-white text-center text-xl">No data available</p>;
      </div>
    );
  }

  return (
    <div
      className="min-h-screen 
    py-6 px-5 
    flex flex-col gap-10"
    >
      <div
        className="flex flex-col lg:flex-row 
        justify-between 
        gap-4 lg:gap-0
        text-sm lg:text-[1rem]
       "
      >
        <p
          className="bg-white/10 backdrop-blur-md 
        border border-white/20 rounded-xl  
         text-white text-center 
         px-3 py-3 lg:p-5  
                 
       "
        >
          Current Month Spending:{" "}
          <span>
            {filteredMonthData.reduce(
              (acc, red) => acc + parseInt(red.amount),
              0
            )}
          </span>
        </p>

        <p
          className="bg-white/10 backdrop-blur-md 
        border border-white/20 rounded-xl  
         text-white text-center 
         px-3 py-3 lg:p-5  
                 
       "
        >
          Current Year Spending:{" "}
          <span>
            {filteredYearData.reduce(
              (acc, red) => acc + parseInt(red.amount),
              0
            )}
          </span>
        </p>

        <p
          className="bg-white/10 backdrop-blur-md 
        border border-white/20 rounded-xl  
         text-white text-center 
         px-3 py-3 lg:p-5  
                 
       "
        >
          Total Spend:{" "}
          <span>
            {data.reduce((acc, red) => acc + parseInt(red.amount), 0)}
          </span>
        </p>

        <p
          className="bg-white/10 backdrop-blur-md 
        border border-white/20 rounded-xl 
        text-center         text-white
        py-3 lg:p-5 
        
"
        >
          Expense Tracking Start Date: <span>{data[0].date}</span>
        </p>
      </div>

      <div
        className="flex justify-around items-center gap-4
      text-sm lg:text-lg p-4  mx-auto text-white"
      >
        <p className="cursor-pointer" onClick={decrementDate}>{`<`}</p>

        <div className="flex-center">
          <p className="text-center ">{`${monthArray[month]}-`}</p>
          <input
            type="text"
            value={year}
            onChange={handleYearChange}
            className=" text-center 
            !text-black 
            !w-16 !p-0 
            rounded outline-none 
            bg-white 
            "
          />
        </div>

        <p className="cursor-pointer " onClick={incrementDate}>{`>`}</p>
      </div>

      <div
        className="flex
      flex-col lg:flex-row
      gap-6 lg:gap-0
      lg:justify-evenly
      "
      >
        {/* Chart Container */}
        <div
          className="w-full max-w-md 
        bg-white/10 backdrop-blur-md 
        border border-white/20 rounded-xl 
        text-center p-5 
        text-white
        shadow-lg "
        >
          <h2 className="text-center text-lg lg:text-xl font-semibold text-white">
            Category Based
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
            className="text-[1rem]"
          >
            <PieChart>
              <Pie
                data={categoryBasedData}
                cx="50%"
                cy="50%"
                outerRadius={100} // Increased radius
                dataKey="amount"
                nameKey="category"
              >
                {categoryBasedData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend align="left" iconSize={5} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div
          className=" w-full max-w-md 
        bg-white/10 backdrop-blur-md shadow-lg
        border border-white/20 rounded-xl 
        text-white text-center 
        p-5"
        >
          <h2 className="text-center text-lg lg:text-xl font-semibold text-white">
            Sub-Category Based
          </h2>

          <div className="flex justify-around items-center gap-4 lg:gap-0 p-4">
            <div className="subCategoryContainer">
              <select
                name="category"
                onChange={handleCategoryChange}
                value={selectedCategory}
                className="w-full text-lg lg:text-sm"
              >
                <option value="" hidden>
                  Select Category
                </option>
                {categoriesData.map((option, index) => (
                  <option value={option.name} key={index}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="border rounded-full px-3 py-1">
              <button onClick={() => setSelectedCategory("")}>Reset</button>
            </div>
          </div>

          <ResponsiveContainer
            width="100%"
            height={300}
            className="text-[1rem]"
          >
            <PieChart>
              <Pie
                data={subCategoryBasedData}
                cx="50%"
                cy="50%"
                outerRadius={100} // Increased radius
                dataKey="amount"
                nameKey="category"
              >
                {subCategoryBasedData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend align="left" iconSize={5} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ExpenseDashboard;
