import { createContext } from "react";

const FormContext = createContext({
  logIn: [null, () => {}]
})

export default FormContext
