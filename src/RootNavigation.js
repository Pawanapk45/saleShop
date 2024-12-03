import React from "react";
import { useAuth } from "./navigations/AuthContext ";
import AppNavigation from "./navigations/appNavigation/AppNavigation";
import AuthNavigation from "./navigations/authNavigation/AuthNavigation";


const RootNavigation = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <AppNavigation /> : <AuthNavigation />;
};

export default RootNavigation;
