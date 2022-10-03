import Card from "../components/Card";

function Favorites(items ) {
  return (
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            My Favorites
          </h1>
          <div className="d-flex flex-wrap">
          {items
              .map((item) => (
              <Card
                key={item.title}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl} 
                favorited={true}
                />
            ))}
        </div>
      </div>
      </div>
  )
}

export default Favorites; 