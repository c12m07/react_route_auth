import { Link } from "react-router-dom";

const Registered = () => {
  return (
    <div>
      <h1 className="RegisteredTitle">Usuario registrado correctamente!</h1>

      <Link to="/" className="Btn">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Registered;
