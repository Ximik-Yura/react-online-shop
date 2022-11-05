import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";
import styles from "./Сard.module.scss";

function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const {isItemAdded} = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, title, imageUrl, price };

  const onClickPlus = () => {
    onPlus(obj);
  };
  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={600}
          height={285}
          viewBox="0 0 600 285"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="14" y="0" rx="10" ry="10" width="115" height="150" />
          <rect x="0" y="187" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="250" rx="5" ry="5" width="80" height="24" />
          <rect x="114" y="245" rx="10" ry="10" width="32" height="32" />
          <rect x="0" y="218" rx="5" ry="5" width="90" height="15" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img
                src={isFavorite ? "img/liked.svg" : "img/unliked.svg"}
                alt="Unliked"
              />
            </div>
          )}

          <img width={115} height={150} src={imageUrl} alt="Books" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Ціна:</span>
              <b>{price} грн.</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={
                  isItemAdded(id) ? "img/btn-checked.svg" : "img/btn-plus.svg"
                }
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
