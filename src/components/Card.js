function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heard-unlike.svg" alt="Unliked" />
      </div>
      <img width={133} height={190} src="/img/Books/Bible_1.jpg" alt="Bible" />

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
  );
}

export default Card;
