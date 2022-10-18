import { useContext } from "react"
import { Outlet } from "react-router-dom"
import FormContext from "../context/FormContext"
import Form from "./form"

function ProtectedRoute() {
  const context = useContext(FormContext)

  return (
    context.validForm === true ? <Outlet /> : <Form />
  )
}

export default ProtectedRoute
