import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="HomeTitle">BIENVENIDO!</h1>
      <p>¿ Deseas crear un usuario ?</p>
      <br />
      <Link to="/form" className="Btn">
        Crear Usuario
      </Link>
    </div>
  );
};

export default Home;
