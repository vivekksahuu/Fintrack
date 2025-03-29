import { Outlet } from "react-router";
import AppNavBar from "./../components/application-page/AppNavBar";
const AppRootLayout = () => {
  return (
    <>
      <AppNavBar />
      <Outlet />
    </>
  );
};

export default AppRootLayout;
