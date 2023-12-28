// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

// Swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Required modules
import { Pagination } from "swiper";

// Icons
import { BsArrowRight } from "react-icons/bs";

// Next Image
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[488px]"
    >
      {
        workSlides.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                {
                  slide.images.map((image, index) => {
                    return (
                      <div key={index}>
                        {/* Image */}
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                        />
                      </div>
                    )
                  })
                }
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default WorkSlider;

