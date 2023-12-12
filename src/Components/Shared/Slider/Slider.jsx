import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import wacth1 from "../../../assets/watchbanner.jpg";
import watch2 from "../../../assets/watchbanner2.jpg";
import headphone from "../../../assets/headphone.jpg";
import laptop1 from "../../../assets/laptop1.jpg";
import laptop2 from "../../../assets/laptop2.jpg";
import laptop3 from "../../../assets/laptop3.jpg";
import phone from "../../../assets/phone2.jpg";
import speaker from "../../../assets/speaker.png";

const images = [
  wacth1,
  watch2,
  headphone,
  laptop1,
  laptop2,
  laptop3,
  phone,
  speaker,
];

const Slider = () => {
  const [opacities, setOpacities] = useState([]);

  const [sliderRef] = useKeenSlider({
    slides: images.length,
    loop: true,
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map(
        (slide) => slide.portion
      );
      setOpacities(new_opacities);
    },
  });

  return (
    <div>
      <div ref={sliderRef} className="fader bg-amber-600">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="fader__slide relative"
            style={{ opacity: opacities[idx] }}
          >
            <img src={src} />
            <div>
              <div className="absolute top-[70%] left-10 text-white space-y-5 bg-black p-6 rounded-xl bg-opacity-20">
                <h2 className="text-2xl font-medium">New Product</h2>
                <button className="btn btn-outline border-2 rounded-full hover:bg-red-600 hover:text-white px-6 text-lg  border-red-600 text-red-600">Buy now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
