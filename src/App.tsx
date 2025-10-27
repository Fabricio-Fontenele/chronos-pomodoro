import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

import "./styles/global.css";
import "./styles/theme.css";

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput
              labelText="Tasks"
              type="text"
              id="input"
              placeholder="Digite algo"
            />
          </div>

          <div className="formRow">
            <p> Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0 0</p>
          </div>
          <div className="formRow">
            <button type="submit">Start</button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default App;
