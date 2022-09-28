function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина{" "}
          <img
            onClick={onClose}
            className="cu-p"
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} грн.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>

            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Загалом:</span>
                  <div></div>
                  <b>1 498 грн. </b>
                </li>
                <li>
                  <span>ПДВ 5%:</span>
                  <div></div>
                  <b>107 грн. </b>
                </li>
              </ul>
              <button className="greenButton">
                Оформити замовлення <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div class="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              class="mb-20"
              width="120px"
              height="120px"
              src="/img/empty-cart.jpg"
              alt="Empty"
            />
            <h2>Корзина пуста</h2>
            <p class="opacity-6">
              Додайте бодай одну книгу, щоб зробити замовлення.
            </p>
            <button onClick={onClose} class="greenButton">
              <img src="/img/arrow.svg" alt="Arrow" />
              Повернутися назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
