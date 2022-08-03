//import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" alt="logo" />
          <div>
            <h3>Religion Books</h3>
            <p className="opacity-5">
              Магазин християнської та культурно-просвітницької літератури{" "}
            </p>
          </div>
        </div>
        <ul class="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/basket.svg" alt="basket" />
            <span> 0 грн</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <h1 className="mb-40">Вся література</h1>
        <div className="d-flex">
          <div className="card">
            <img
              width={133}
              height={190}
              src="/img/Books/Bible1.jpg"
              alt="Bible"
            />

            <h5>Біблія в перекладі Огієнка</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна: </span>
                <b>199 грн</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={190}
              src="/img/Books/molM.png"
              alt="Molitovnyk_dlja_molody"
            />

            <h5>Молитовник для молоді (видавництва "Братське")а</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна: </span>
                <b>99 грн</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={190}
              src="/img/Books/mb.png"
              alt="mykBed"
            />

            <h5>
              Від Мегалі Екклісія руських князів до церкви Успіння Пресвятої
              Богородиці на вул. Руській
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна: </span>
                <b>149 грн</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={190}
              src="/img/Books/Christ2.png"
              alt="ChrictAll"
            />

            <h5>Христос – це все - прп. Порфирій Кавсокалівіт</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна: </span>
                <b>99 грн</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
