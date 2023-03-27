import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./componants/Header";
import Footer from "./componants/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./componants/AboutUs";
import ContactUs from "./componants/ContactUs";
import Error from "./componants/Error";
import RestaurantMenu from "./componants/RestaurantMenu";
import Body from "./componants/Body";
import Profile from "./componants/Profile";
import Shimmer from "./componants/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import  store  from "./utils/store";
import Cart from "./componants/Cart";
import Gridtest from "./componants/Gridtest"
import Login from "./componants/Auth/Login/Login";
import Signup from "./componants/Auth/Signup/Signup";
import { Auth0Provider } from "@auth0/auth0-react";

const Instamart = lazy(() => import("/componants/Instamart"));
const AppLayout = () => {
  const[user,setUser]=useState({
    name:"urmi hirapara",
          email:"urvihirapara@gmail.com",
  });

  return (
    <Auth0Provider
    domain="dev-ydt74zv6r8upzuvv.us.auth0.com"
    clientId="TUgi787BL1GEbc4ENpyMQA0VUMu0uOar"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>    
    <UserContext.Provider value={{user:user,setUser:setUser}}>
    <Header  />
      <Outlet />
      <Footer />
      </UserContext.Provider>
    </Provider>
   </Auth0Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/aboutus",
        element: <AboutUs />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: <Body user={{
          name:"urmi hirapara",
          email:"urvihirapara@gmail.com",
        }} />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
     
      {
        path: "/restaurantmenu/:resId",
        element: <RestaurantMenu />,
      },
     
      {
        path: "/Instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/gridwithtailwind",
        element: <Gridtest />,
      },
     
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
