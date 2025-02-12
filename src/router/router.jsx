import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AuthPage from "../pages/auth/AuthPage";
import ErrorPages from "../pages/ErrorPage/ErrorPages";
import Home from "../pages/Home/Home";
import AddFoundAndLostItemPage from "../pages/AddFound&LostPage.jsx/AddFoundAndLostItemPage";
import Register from "../pages/auth/Register/Register";
import Login from "../pages/auth/Login/Login";
import PrivateRoute from "../provider/PrivateRoute";
import AllItem from "../pages/AllLostAndFoundItem/AllItem";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import ManageMyItems from "../pages/ManageMyItems/ManageMyItem";
import AllRecoveredItemsPage from "../pages/AllRecoveredItemsPage/AllRecoveredItemsPage";
import Contact from "../pages/Contact/Contact";
import AboutUs from "../pages/AboutUs/AboutUs";
import TermsAndCondition from "../pages/TermsAndCondition/TermsAndCondition";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      // Home page
      {
        path: "/",
        element: <Home></Home>,
      },

      // All Item Page
      {
        path: "/allItem",
        element: <AllItem></AllItem>,
      },
      // About Us
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      // contact Page
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      // privacy Page
      {
        path: "/terms",
        element: <TermsAndCondition></TermsAndCondition>,
      },
      // All Item Page
      {
        path: "/privacy",
        element: <h1>privacy</h1>,
      },

      // Add Lost And Found Item Page
      {
        path: "/addItem",
        element: (
          <PrivateRoute>
            <AddFoundAndLostItemPage></AddFoundAndLostItemPage>
          </PrivateRoute>
        ),
      },

      // Details Page
      {
        path: "/item/:id",
        element: (
          <PrivateRoute>
            <DetailsPage></DetailsPage>
          </PrivateRoute>
        ),
      },

      // All Recover Item Page
      {
        path: "/allRecover",
        element: (
          <PrivateRoute>
            <AllRecoveredItemsPage></AllRecoveredItemsPage>
          </PrivateRoute>
        ),
      },

      // Manage My Item
      {
        path: "/myItems",
        element: (
          <PrivateRoute>
            <ManageMyItems></ManageMyItems>
          </PrivateRoute>
        ),
        // <h1>Manage My Item</h1>,
      },

      // Auth Page
      {
        path: "/auth",
        element: <AuthPage></AuthPage>,
        children: [
          {
            path: "/auth/login",
            element: <Login></Login>,
          },
          {
            path: "/auth/register",
            element: <Register></Register>,
          },
        ],
      },
    ],
  },

  // Error page
  {
    path: "*",
    element: <ErrorPages></ErrorPages>,
  },
]);

export default router;
