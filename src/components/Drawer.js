import React from "react";
import axios from "axios";

import Info from "./Info";
import AppContext from "../context";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [] }) {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://6323ebdbbb2321cba920f100.mockapi.io/orders",
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://6323ebdbbb2321cba920f100.mockapi.io/cart/" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Помилка при створенні заказу :(");
    }
    setIsLoading(false);
  };

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
          <div className="d-flex flex-column flex">
            <div className="items">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
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
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Оформити замовлення <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          // <div className="cartEmpty d-flex align-center justify-center flex-column flex">
          //   <img
          //     className="mb-20"
          //     width="120px"
          //     height="120px"
          //     src="/img/empty-cart.jpg"
          //     alt="Empty"
          //   />
          //   <h2>Корзина пуста</h2>
          //   <p className="opacity-6">
          //     Додайте бодай одну книгу, щоб зробити замовлення.
          //   </p>
          //   <button onClick={onClose} className="greenButton">
          //     <img src="/img/arrow.svg" alt="Arrow" />
          //     Повернутися назад
          //   </button>
          // </div>
          <Info
            title={isOrderComplete ? "Замовлення оформлене!" : "Корзина пуста"}
            description={
              isOrderComplete
                ? `Ваше замовлення #${orderId} скоро буде передане курєрській доставці`
                : "Додайте бодай одну книгу, щоб зробити замовлення."
            }
            image={
              isOrderComplete
                ? "/img/complete-order.jpg"
                : "/img/empty-cart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
