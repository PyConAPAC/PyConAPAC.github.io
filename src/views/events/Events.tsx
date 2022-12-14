import { useState } from "react";
import './style.css';

export default function Events() {
  const [currentSlide, changeCurrentSlide] = useState(1);
  const slides = [
    {
      key: 1,
      img: 'images/event-slide-1.png',
      title: 'Pycon APAC 2022',
      badgeText: 'UPCOMING',
      badgeType: 'danger',
      description: "The conference is held on multiple virtual platforms. All speeches are live streamed on YouTube while attendees are encouraged to join our Gather Town and Discord space. The Gather Town platform allows attendees to participate in our special events (Swag giveaway!) and meet with sponsors, speakers, and other Pythonistas!",
      info: [
        "2022 September 3-4",
        "Online on YouTube, Gather Town and Discord"
      ]
    },
/*    {
      key: 2,
      img: 'images/event-slide-1.png',
      title: 'Pycon APAC 2022',
      badgeText: 'UPCOMING',
      badgeType: 'info',
      description: "Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna,vel scelerisque nisl consectetur et. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper.",
      info: [
        "2022 September 1, 8:00AM - 5:00PM CST",
        "Taipei International Convention Center (TICC)"
      ]
    },
    {
      key: 3,
      img: 'images/event-slide-1.png',
      title: 'Pycon APAC 2022',
      badgeText: 'UPCOMING',
      badgeType: 'warning',
      description: "Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna,vel scelerisque nisl consectetur et. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper.",
      info: [
        "2022 September 1, 8:00AM - 5:00PM CST",
        "Taipei International Convention Center (TICC)"
      ]
    },
    {
      key: 4,
      img: 'images/event-slide-1.png',
      title: 'Pycon APAC 2022',
      badgeText: 'UPCOMING',
      badgeType: 'success',
      description: "Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna,vel scelerisque nisl consectetur et. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper.",
      info: [
        "2022 September 1, 8:00AM - 5:00PM CST",
        "Taipei International Convention Center (TICC)"
      ]
    },*/
  ]

  const setCurrentSlide = (data: any, idx: number):void => {
    data.preventDefault();
    changeCurrentSlide(idx);
  }

  const nextPrevSlide = (idx: number) => {
    console.log('nextPrevSlide', idx)
    if (idx > slides.length) {
      changeCurrentSlide(1);
    }else if (idx < 1) {
      changeCurrentSlide(slides.length);
    } else {
      changeCurrentSlide(idx);
    }
  }

  return (
    <div className="events-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xs-12">
            <div className="left-text-content">
              <div className="section-heading">
                <h1 className="text-white">Events</h1>
                <br />
              </div>
              <div className="medium-text text-white" style={{opacity: '60%'}}>
                Vestibulum id ligula porta felis euismod semper. 
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="events-slides-container mt-8">
        <div className="container">
          {slides.map((slide, index) => (
            <div key={`event-slide-${index}`} id={`event-slide-${index}`}>
              <div style={{ display: slide.key === currentSlide ? 'block' : 'none' }} className="slides slide-fade" aria-label="1 / 4">
                <div className="row" data-slide="1">
                  <div className="col-lg-6 col-xs-12">
                    <img src={slide.img} className="slide-img w-full" alt="Slide 1" />
                  </div>
                  <div className="col-lg-6 col-xs-12 mt-3">
                    <div className={`text-white badge bg-${slide.badgeType}`}>
                      {slide.badgeText}
                    </div>
                    <div>&nbsp;</div>
                    <h3 className="text-white">{slide.title}</h3>
                    <br />
                    <div className="medium-text text-white" style={{opacity: '60%'}}>
                      {slide.description}
                    </div>
                    <br />
                    <br />
                    {slide.info.map((i) => (
                      <>
                        <div className="medium-text-bold text-white mb-2">
                          &#x2022; {i}
                        </div>
                        <br />
                      </>
                    ))}
                    <br className="mobile-off" />
                    <br className="mobile-off" />
                    <button className="button-primary">Register Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4 slide-changer">
            <div className="pagination">
              {slides.map((slide, index) => (
                <span 
                  key={index}
                  onClick={(e) => setCurrentSlide(e, slide.key)} 
                  className={`${slide.key === currentSlide ? 'active' : ''} dot`} 
                  role="button"
                />
              ))} 
            </div>
            <div className="nav-carousels mobile-off">
              <div 
                onClick={() => nextPrevSlide(currentSlide - 1)} 
                title="Previous slide" className="nav-carousel text-center" 
                role="button"
              >
                &#10094;
              </div>
              <div 
                onClick={() => nextPrevSlide(currentSlide + 1)} 
                title="Next slide" 
                className="nav-carousel text-center" 
                role="button"
              >
                &#10095;
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}