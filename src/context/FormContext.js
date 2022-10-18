import { createContext } from "react";

const FormContext = createContext({
  validForm: [null, () => {}]
})

export default FormContext
