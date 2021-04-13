import React from "react";

function Food({ name, image }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={image} alt="" />
    </div>
  );
}

const foodILike = [
  {
    name: "kimchi",
    image: "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
  },
  {
    name: "Samgyeopsal",
    image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      {foodILike.map((dish) => (
        <Food name={dish.name} image={dish.image} />
      ))}
    </div>
  );
}

export default App;
