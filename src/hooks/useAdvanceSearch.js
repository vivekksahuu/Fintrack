import { useState, useMemo } from "react";
import { categoriesData } from "./../assets/CateoryData";

const useAdvancedSearch = (dataArray) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const subCategories = useMemo(() => {

    if (!selectedCategory) return [];
    const categoryObj = categoriesData.find((cat) => cat.name === selectedCategory);
    return categoryObj ? categoryObj.subcategories : [];
  }, [selectedCategory]);


  const filteredData = useMemo(() => {
    let filtered = [...dataArray];

    if (selectedCategory) {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    if (selectedSubCategory) {
      filtered = filtered.filter((item) => item.subCategory === selectedSubCategory);
    }

    if (startDate || endDate) {
      filtered = filtered.filter((expense) => {
        const expenseDate = new Date(expense.date);
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;

        return (!start || expenseDate >= start) && (!end || expenseDate <= end);
      });
    }

    if (sortBy === "amount-asc") {
      filtered.sort((a, b) => a.amount - b.amount);
    } else if (sortBy === "amount-desc") {
      filtered.sort((a, b) => b.amount - a.amount);
    } else if (sortBy === "date-oldest") {
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date)); // Oldest first
    } else if (sortBy === "date-newest") {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date)); // Newest first
    }


    return filtered;
  }, [dataArray, selectedCategory, selectedSubCategory, sortBy, startDate, endDate]);

  return {
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
  };
};

export default useAdvancedSearch;
