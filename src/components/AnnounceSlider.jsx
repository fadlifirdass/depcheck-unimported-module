import React from 'react'
import Slider from 'react-slick'

const AnnounceSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHiver: true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className='container mt-2'>
            <Slider {...settings}>
              <div>
                <img src="https://storage.99usahaku.com/bootstrap/campaigns/5c88a2881aca4fce05175e1c/1665626869182.webp" alt="image" />
              </div>
              <div>
                <img src="https://storage.99usahaku.com/bootstrap/campaigns/5c88a2881aca4fce05175e1c/1665626679483.webp" alt="image" />
              </div>
              <div>
                <img src="https://storage.99usahaku.com/bootstrap/campaigns/5c88a2881aca4fce05175e1c/1678332186768.webp" alt="image" />
              </div>
              <div>
                <img src="https://storage.99usahaku.com/bootstrap/campaigns/5c88a2881aca4fce05175e1c/1665626869182.webp" alt="image" />
              </div>
              <div>
                <img src="https://storage.99usahaku.com/bootstrap/campaigns/5c88a2881aca4fce05175e1c/1665626814939.webp" alt="image" />
              </div>
            </Slider>
        </div>
      )
    }
    
    export default AnnounceSlider
