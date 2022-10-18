import React from 'react';

const Input = ({ state, setState, tipo, label, placeholder, name, 
    leyendaError, 
    regularExp, 
    funcion
  }) => {
	const onChange = (e) => {
		setState({...state, campo: e.target.value});
	}

	const validacion = () => {
		if(regularExp){
			if(regularExp.test(state.campo)){
				setState({...state, valido: 'true'});
			} else {
				setState({...state, valido: 'false'});
			}
		}


    let textName = "." + name
    let validLabel = document.querySelector(textName);
    let validInput = document.getElementById(name);
    let textError = ".Text" + name;
    let validText = document.querySelector(textError);

    if(funcion){
      funcion();
    }
    if(state.valido === 'true'){
      validLabel.style.color = '#1ed12d';
      validInput.style.border = '3px solid #1ed12d';
      validText.style.display = 'none';
    }
    if(state.valido === 'false'){
      validLabel.style.color = '#bb2929';
      validInput.style.border = '3px solid #bb2929';
      validText.style.display = 'block';
    }

	}

	return (
		<div>
			<label
        className={"FormLabel " + name}
        htmlFor={name} 
        valido={state.valido}
      >
        {label}
      </label>
      <input 
        type={tipo}
        className="InptForm"
        id={name}
        placeholder={placeholder} 
        value={state.campo}
        onChange={onChange}
        onKeyUp={validacion}
        onBlur={validacion}
        valido={state.valido}
        autoComplete="off"
        required
      />
			<p
        className={"ErrorText Text" + name}
        valido={state.valido}
      >
        {leyendaError}
      </p>
		</div>
	);
}
 
export default Input;