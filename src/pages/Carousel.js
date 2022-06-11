import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import getProductsForCategory from "../productList";
import { useState } from "react";

const RandomProductsCarousel = () => {
  const [randomProduct1] = useState(
    getProductsForCategory(1)[
      Math.floor(Math.random() * getProductsForCategory(1).length)
    ]
  );
  const [randomProduct2] = useState(
    getProductsForCategory(2)[
      Math.floor(Math.random() * getProductsForCategory(2).length)
    ]
  );
  const [randomProduct3] = useState(
    getProductsForCategory(3)[
      Math.floor(Math.random() * getProductsForCategory(3).length)
    ]
  );

  randomProduct1.newPrice = Math.round(
    parseInt(randomProduct1.price.substring(1) / 2)
  );
  randomProduct2.newPrice = Math.round(
    parseInt(randomProduct2.price.substring(1) / 2)
  );
  randomProduct3.newPrice = Math.round(
    parseInt(randomProduct3.price.substring(1) / 2)
  );

  const today = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[today.getMonth()];
  const formattedDate = `${today.getDate()} of ${monthName}`;

  return (
    <Carousel width={"53%"} autoPlay infiniteLoop>
      <div>
        <img src={randomProduct1.image} alt="" />
        <p className="legend">
          For the {formattedDate} {randomProduct1.name}: from{" "}
          <span style={{ textDecoration: "line-through" }}>
            {randomProduct1.price}
          </span>{" "}
          to ${randomProduct1.newPrice}.
        </p>
      </div>
      <div>
        <img src={randomProduct2.image} alt="" />
        <p className="legend">
          For the {formattedDate} {randomProduct2.name}: from{" "}
          <span style={{ textDecoration: "line-through" }}>
            {randomProduct2.price}
          </span>{" "}
          to ${randomProduct2.newPrice}.
        </p>
      </div>
      <div>
        <img src={randomProduct3.image} alt="" />
        <p className="legend">
          For the {formattedDate} {randomProduct3.name}: from{" "}
          <span style={{ textDecoration: "line-through" }}>
            {randomProduct3.price}
          </span>{" "}
          to ${randomProduct3.newPrice}.
        </p>
      </div>
    </Carousel>
  );
};
export default RandomProductsCarousel;
