// import { Link } from "wouter";

const Home = () => {
  return (
    <div>
      <h1 className="HomeTitle">BIENVENIDO!</h1>
      <p>¿ Deseas crear un usuario ?</p>
      <br />
      {/* <Link href="/form"> */}
        <a className="Btn">Crear Usuario</a>
      {/* </Link> */}
    </div>
  );
};

export default Home;
