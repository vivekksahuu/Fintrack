import { useState, useEffect } from "react";
import { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";

const ExpenseForm = lazy(() =>
  import("./components/application-page/ExpenseForm")
);
const ExpenseTable = lazy(() =>
  import("./components/application-page/ExpenseTable")
);
const ExpenseDashboard = lazy(() =>
  import("./components/application-page/ExpenseDashboard")
);

const ErrorPage = lazy(() => import("./components/application-page/ErrorPage"));

const LandingPage = lazy(() => import("./components/landing-page/LandingPage"));

import AppRootLayout from "./route-layout/AppRootLayout";

const App = () => {
  const [expenseData, setExpenseData] = useState(() => {
    const storeExpense = localStorage.getItem("expenseData");
    return storeExpense ? JSON.parse(storeExpense) : [];
  });

  const [editData, setEditData] = useState(null);

  useEffect(() => {
    localStorage.setItem("expenseData", JSON.stringify(expenseData));
  }, [expenseData]);

  const handleFormSubmit = (formData) => {
    if (editData) {
      //Update existing row
      setExpenseData((prevData) =>
        prevData.map((item) =>
          item.id === editData.id ? { ...item, ...formData } : item
        )
      );
      setEditData(null); // Clear the edit state
    } else {
      setExpenseData((prevData) => [
        ...prevData,
        { ...formData, id: crypto.randomUUID() },
      ]);
    }
  };

  const handleEdit = (rowData) => {
    //Populate the form with that row data
    setEditData(rowData);
  };

  const handleDataDeletion = (id) => {
    setExpenseData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<LandingPage />} />

        <Route path="/app/*" element={<AppRootLayout />}>
          <Route
            path="form"
            element={
              <Suspense
                fallback={
                  <div className="h-[90vh] flex-center text-xl text-white">
                    Loading Form...
                  </div>
                }
              >
                <ExpenseForm onSubmit={handleFormSubmit} editData={editData} />
              </Suspense>
            }
          />
          <Route
            path="dashboard"
            element={
              <Suspense
                fallback={
                  <div className="h-[90vh] flex-center text-xl text-white">
                    Loading Dashboard...
                  </div>
                }
              >
                <ExpenseDashboard data={expenseData} />
              </Suspense>
            }
          />
          <Route
            path="expenses"
            element={
              <Suspense
                fallback={
                  <div className="h-[90vh] flex-center text-xl text-white">
                    Loading Table...
                  </div>
                }
              >
                <ExpenseTable
                  data={expenseData}
                  onEdit={handleEdit}
                  onDelete={handleDataDeletion}
                />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense>
                <ErrorPage />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Suspense>
              <ErrorPage />
            </Suspense>
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
