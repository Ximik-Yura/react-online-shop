function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between  mb-30">
          Корзина{" "}
          <img className="cu-p" src="/img/btn-remove.svg" alt="Remove" />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              className="cartItemImg"
              style={{ backgroundImage: "url(/img/Books/Bible_1.jpg" }}
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Біблія в перекладі Огієнка</p>
              <b>199 грн.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              className="cartItemImg"
              style={{ backgroundImage: "url(/img/Books/Bible_1.jpg" }}
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Біблія в перекладі Огієнка</p>
              <b>199 грн.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Загально</span>
                <div></div>
                <b>399 гн</b>
              </li>
              <li>
                <span>Податок 5 %</span>
                <div></div>
                <b>19,95 грн</b>
              </li>
            </ul>

            <button className="greenButton">
              Оформити замовлення <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
