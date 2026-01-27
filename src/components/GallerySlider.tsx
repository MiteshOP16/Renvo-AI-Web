import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import gallery1 from "@/assets/Image 1.jpeg";
import gallery2 from "@/assets/Image 2.jpeg";
import gallery3 from "@/assets/Image 3.jpeg";
import gallery4 from "@/assets/Image 4.jpeg";
import gallery5 from "@/assets/Image 5.jpeg";

const GallerySlider = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery1, gallery2, gallery3];

  return (
    <section className="py-8 bg-muted/50">
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={20}
        slidesPerView="auto"
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        className="gallery-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <div className="w-48 h-60 md:w-56 md:h-72 lg:w-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
              <img
                src={image}
                alt={`AI Generated Art ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GallerySlider;
