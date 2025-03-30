import { SiGoogleforms } from "react-icons/si";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BsPencilSquare } from "react-icons/bs";
import { FaSearchDollar } from "react-icons/fa";
import { RiPieChartBoxLine } from "react-icons/ri";
import { TbPlayerTrackNext } from "react-icons/tb";

import FormVideo from "/formVideo.mp4"
import TableVideo from "/expensesViewVideo.mp4"
import EditDeleteVideo from "/editDeleteVideo.mp4"
import SearchExpenseVideo from "/expenseSearchVideo.mp4"
import DashboardVideo from "/dashboardVideo.mp4"
import SearchInsightVideo from "/searchInsightsVideo.mp4"

const appFeatures = [
    {
        icon: SiGoogleforms,  // ✅ Store as a reference
        heading: "Log Expenses",
        subheading: "Easily add your daily expenses with a simple form.",
        video: FormVideo,
    },
    {
        icon: HiOutlineViewGrid,
        heading: "View All Expenses",
        subheading: "Display all recorded expenses in a clean, structured format.",
        video: TableVideo,
    },
    {
        icon: BsPencilSquare,
        heading: "Edit & Delete Expenses",
        subheading: "Modify or remove any expense entry effortlessly.",
        video: EditDeleteVideo,
    },
    {
        icon: FaSearchDollar,
        heading: "Smart Expense Search",
        subheading: "Search expenses with filtering, sorting, and a custom date range for precise insights..",
        video: SearchExpenseVideo,
    },
    {
        icon: RiPieChartBoxLine,
        heading: "Interactive Dashboard",
        subheading: "Visualize spending with real-time pie charts, showcasing category and sub-category based expense details.",
        video: DashboardVideo,
    },
    {
        icon: TbPlayerTrackNext,
        heading: "Search Expense Insights",
        subheading: "Find financial insights for any specific month or year effortlessly, filtering data from multiple selected sub-categories",
        video: SearchInsightVideo,
    }
];

export default appFeatures;
