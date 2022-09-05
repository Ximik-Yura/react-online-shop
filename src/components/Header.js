function Header() {
  return (
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
  );
}

export default Header;
