import { useContext, useState } from 'react';
import FormContext from '../../context/FormContext';
import { useNavigate } from 'react-router-dom';
import Input from './Input'
import ProtectedRoute from '../ProtectedRoute';

const Form = () => {

  const [user, setUser] = useState({campo: '', valido: null});
  const [email, setEmail] = useState({campo: '', valido: null});
  const [contra, setContra] = useState({campo: '', valido: null});
  const [contra2, setContra2] = useState({campo: '', valido: null});
	const navigate = useNavigate();
	const context = useContext(FormContext);
	const { validForm } = context;
	const [formValidate, setFormValidate] = validForm;

  const expresions = {
		user: /^[a-zA-Z0-9_-]{4,16}$/,
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		password: /^.{4,12}$/,
	}

	const validarPassword2 = () => {
    if(contra2.campo.length > 0){
      if(contra.campo !== contra2.campo){
        setContra2((prevState) => {
					return{...prevState, valido: 'false'}
				})
      } else {
        setContra2((prevState) => {
					return{...prevState, valido: 'true'}
				})
      }
    }
  }

	const onSubmit = (e) => {
		e.preventDefault();

		if (
			user.valido === 'true' && 
			email.valido === 'true' && 
			contra.valido === 'true' && 
			contra2.valido === 'true' 
		) {
			setFormValidate(true);
			console.log('entra');
			console.log(formValidate);
			formValidate === true ? <ProtectedRoute /> : <Form />
		} else {
			alert('Rellenar el formulario correctamente')
		}
	}


  return (
    <div>
      <form className="Form" onSubmit={onSubmit}>
        <Input
					state={user}
					setState={setUser}
					tipo="text"
					label="Usuario"
					placeholder="Ingresa tu Usuario"
					name="usuario"
					leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
					regularExp={expresions.user}
				/> 

        <Input
					state={email}
					setState={setEmail}
					tipo="email"
					label="Email"
					placeholder="Ingresa tu Email"
					name="email"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					regularExp={expresions.email}
				/>   

        <Input
					state={contra}
					setState={setContra}
					tipo="password"
					label="Contraseña"
					placeholder="Ingresa tu Contraseña"
					name="contra"
					leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
					regularExp={expresions.password}
				/>  

        <Input
					state={contra2}
					setState={setContra2}
					tipo="password"
					label="Repetir Contraseña"
					placeholder="Repite tu Contraseña"
					name="contraRep"
					leyendaError="Ambas contraseñas deben ser iguales."
          funcion={validarPassword2}
				/>  

        <div className="FormGrid">
          <button type="submit" className="Btn"> Registrar Usuario</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
