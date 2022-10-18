import { useContext } from "react";
import { Outlet } from 'react-router';
import Form from "./form";
import FormContext from "../context/FormContext";

const useAuth = () => {
  const context = useContext(FormContext);
  const user = context.logIn[0];
  return user;
}

function ProtectedRoute() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Form />
}

export default ProtectedRoute;
