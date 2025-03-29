const categories = [
    {
        name: "Groceries",
        subcategories: [
            "Vegetables",
            "Fruits",
            "Dried Fruits & Nuts",
            "Dairy",
            "Eggs",
            "Meat",
            "Snacks",
            "Powders",
            "Drinks",
            "Rice & Wheat",
            "Pulses & Lentils",
            "Flour",
            "Sweetener",
            "Oils & Ghee",
            "Spices",
            "Salt & Condiments",
            "Ready-to-Cook Meals",
            "Sauces & Spreads",
        ],
    },
    {
        name: "Food",
        subcategories: [
            "Fast Food",
            "Snacks",
            "Beverages",
            "Cafe",
            "Hotel",
            "Restaurant",
            "Tobacco",
        ],
    },
    {
        name: "Transportation",
        subcategories: [
            "Bikes",
            "Cars",
            "Public Transport",
            "Fuel",
            "Fees",
            "Ride-Sharing",
            "Maintenance",
        ],
    },
    {
        name: "Bills & Utilities",
        subcategories: [
            "Electricity",
            "Water",
            "Internet",
            "Recharge",
            "Gas",
            "Rent",
            "Maintenance",
        ],
    },
    {
        name: "Education",
        subcategories: [
            "Fees",
            "Project",
            "Courses",
            "Books",
            "Stationery",
        ],
    },
    {
        name: "Clothing & Accessories",
        subcategories: [
            "Topwear",
            "Bottomwear",
            "Jackets",
            "Footwear",
            "Watches",
            "Accessories",
        ],
    },
    {
        name: "Entertainment",
        subcategories: ["Movies", "Events", "Clubs", "App", "Subscriptions"],
    },
    {
        name: "Health & Fitness",
        subcategories: [
            "Membership",
            "Consultations",
            "Medicines",
            "Supplements",
            "Therapy",
            "Equipments",
        ],
    },
    {
        name: "Personal Care & Beauty",
        subcategories: ["Salon", "Skincare", "Cosmetics", "Hair Product"],
    },
    {
        name: "Travel & Vacations",
        subcategories: ["Tickets", "Bookings", "Shopping"],
    },
    {
        name: "Finance",
        subcategories: ["Savings", "Investments", "EMI", "Insurance", "Card Payments"],
    },
    {
        name: "Gifts & Donations",
        subcategories: ["Charity", "Donation", "Gifts"],
    },
    {
        name: "Miscellaneous",
        subcategories: ["Home Decor", "Pet", "Office Supplies", "Bags", "Bottles", "Tiffins", "Others"],
    },
    {
        name: "Electronics & Accesories",
        subcategories: [
            "Mobiles",
            "Computers",
            "Audio",
            "Camera",
            "Gaming",
            "Wearables",
            "Home Appliances",
            "Kitchen Appliances",
            "Personal Care Appliances",
            "Batteries & Power Banks",
            "Storage Devices",
            "Networking Devices",
            "Others"
        ]
    }

];

// Sort categories alphabetically before exporting
export const categoriesData = categories.sort((a, b) => a.name.localeCompare(b.name));