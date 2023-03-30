import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const data = [
  {
    id: 1,
    title: "Card 1",
    image: "https://picsum.photos/id/1000/300/200",
  },
  {
    id: 2,
    title: "Card 2",
    image: "https://picsum.photos/id/1001/300/200",
  },
  {
    id: 3,
    title: "Card 3",
    image: "https://picsum.photos/id/1002/300/200",
  },
  {
    id: 4,
    title: "Card 4",
    image: "https://picsum.photos/id/1003/300/200",
  },
];

const MySwiper = () => {
  return (
    <div className="mx-auto">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data.map((item) => (
          <div key={item.id}>
            <div className="card w-full sm:w-[440px] h-auto sm:h-[310px] shadow-xl">
              <div className="card-body">
                <img src={item.image} alt="" />
                <h4 className="text-lg font-bold mt-2">{item.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MySwiper;
