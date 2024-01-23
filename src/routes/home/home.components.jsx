import DirectoryItem from "../../components/directory-item/directory-item.component";
import { HomeContainer } from "./home.styles";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "Mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <HomeContainer>
      {categories.map((category) => {
        return (
          <DirectoryItem
            key={category.id}
            directory={category}
            className="category-container"
          />
        );
      })}
    </HomeContainer>
  );
};

export default Home;
