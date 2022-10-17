import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
             <img width={40} height={40} src="/img/logo.svg" alt="logo" />
            <div>
              <h3>Religion Books</h3>
              <p className="opacity-5">
                Магазин християнської та культурно-просвітницької літератури{" "}
              </p>
            </div>
          </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/basket.svg" alt="Кошик" />
          <span> 0 грн</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="favorites">
            <img width={18} height={18} src="/img/heart.svg" alt="Закладки" />
          </Link>
        </li>
        <li className="mr-20 cu-p">
          <img width={18} height={18} src="/img/user.svg" alt="Користувач" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
