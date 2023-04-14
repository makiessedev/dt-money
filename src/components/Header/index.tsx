import logoImg from "../../assets/logo.svg";

function Header() {
  return (
    <header>
      <img src={logoImg} alt="money" />
      <button type="button">Nova Transação</button>
    </header>
  );
}

export { Header };
