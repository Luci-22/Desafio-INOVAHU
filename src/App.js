import icon2 from "./icon-medics.svg";
import icon from "./icon-medic.svg";
import logo from "./webCleAside.png";
import "./App.css";
import { blurblur } from "./blur";
function App() {
  return (
    <div className="App-cont">
      <aside>
        <img src={logo} className="App-webs" alt="logo" />
      </aside>
      <div className="App-dale">
        <h1>Diário de Saúde</h1>
        <p>Crie o seu relatório diário de saúde</p>
        <form>
          <label>
            Nome completo
            <input id="name"></input>
          </label>
          <label>
            Data de Nascimento
            <input id="nasc" placeholder="dd/mm/aaaa"></input>
          </label>
          <label className="App-label">
            Para qual dia você deseja gerar o gráfico de saúde?
            <input className="Batman" placeholder="dd/mm/aaaa" onBlur={blurblur} ></input>
          </label>
          <div className="App-charadinha">
            <label>Selecione a hora preencher os dados</label>
            <div className="App-charadinha-segundo">
              <article>
                <input className="App-mark" type="checkbox" />
                <div>
                  <span>02:00</span>
                </div>
              </article>
              <article>
                <input className="App-mark" type="checkbox" />
                <div>
                  <span>06:00</span>
                </div>
              </article>
              <article>
                <input className="App-mark" type="checkbox" />
                <div>
                  <span>10:00</span>
                </div>
              </article>
              <article>
                <input className="App-mark" type="checkbox" />
                <div>
                  <span>14:00</span>
                </div>
              </article>
              <article>
                <input className="App-mark" type="checkbox" />
                <div>
                  <span>18:00</span>
                </div>
              </article>
              <article>
                <input className="App-mark" type="checkbox" />
                <div>
                  <span>22:00</span>
                </div>
              </article>
            </div>
            <div className="App-saídera">
              <label>
                <img src={icon} className="App-icon" alt="icon" />
                <span>BPM</span>
                <input className="App-minbox" />
              </label>
              <label>
                <img src={icon2} className="App-icon" alt="icon2" />
                <span>PRESSÃO ARTERIAL</span>
                <input className="App-minbox2" />
                <input className="App-minbox2" />
              </label>
              <div className="App-avante">
                <button>&#60; Anterior</button>
                <button>Próximo &#62;</button>
              </div>
            </div>
          </div>
          <button>Gerar Diário de Saúde</button>
        </form>
      </div>
    </div>
  );
}

export default App;
