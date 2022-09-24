//import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://6323ebdbbb2321cba920f100.mockapi.io/Books_items').then((res) => {
        return res.json();
      }).then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj]);
    //setCartItems((prev) => [...prev, obj]);
  };

  console.log(cartItems);

  return (
    <div className="App clear">
      {cartOpened && 
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      }
      <Header
        onClickCart={() => setCartOpened(true)}
      />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Вся література</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Пошук..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log("Add in favorite")}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
