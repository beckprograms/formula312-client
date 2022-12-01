import React from "react";
import "./styles.css";

const photo = [
  {
    src: "https://www.tidalwaveautospa.com/wp-content/uploads/2022/10/DJM_TidalWave_RedefineU_20220628-072.jpg",
    width: 1,
    height: 1,
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/57bf69aa9f7456b465a1ef78/1552972248385-JLADWPA6BC7YCPRKRFM4/service-page-mobile-car-wash-2500x1667.jpg?format=2500w",
    width: 3,
    height: 4,
  },
  {
    src: "https://itscarwash.com/wp-content/uploads/2022/02/Locate-a-Hand-Car-Wash-Near-You.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "https://blog.way.com/wp-content/uploads/2021/01/part-car-wash-detailing-station-4.jpg",
    width: 3,
    height: 4,
  },
];
const Content = {
  height: "300px",
  display: "inline-flex",
  width: "100%",
  overflowX: "scroll",
  img: {
    borderRadius: "10px",
  },
};
class ScrollableImages extends React.Component {
  render() {
    return (
      <div style={Content}>
        {photo.map((item) => (
          <img src={item.src} alt="pictures" style={{ padding: "1px" }} />
        ))}
      </div>
    );
  }
}

export default ScrollableImages;
