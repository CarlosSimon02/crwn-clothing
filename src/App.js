function App() {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 1,
      title: "Sneakers",
    },
    {
      id: 1,
      title: "Womens",
    },
    {
      id: 1,
      title: "Mens",
    },
  ];

  return (
    <div className="categories-cotainer">
      {categories.map(({ id, title }) => {
        return (
          <div key={id} className="category-container">
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
