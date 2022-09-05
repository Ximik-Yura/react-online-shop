function Cards() {
  return (
    <div>
      <div className="card">
        <div className="favorite">
          <img src="/img/heard-unlike.svg" alt="Unliked" />
        </div>
        <img
          width={133}
          height={190}
          src="/img/Books/molM.png"
          alt="Molitovnyk_dlja_molody"
        />

        <h5>Молитовник для молоді (видавництва "Братське")</h5>
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
        <div className="favorite">
          <img src="/img/heard-unlike.svg" alt="Unliked" />
        </div>{" "}
        <img width={133} height={190} src="/img/Books/mb.png" alt="mykBed" />
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
        <div className="favorite">
          <img src="/img/heard-unlike.svg" alt="Unliked" />
        </div>
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
  );
}

export default Cards;
