import { useState } from "react";
import './style.css';

export default function Events() {
  const [currentSlide, changeCurrentSlide] = useState(1);
  const slides = [
    {
      key: 1,
      img: 'images/event-slide-1.png',
      title: 'PyCon APAC 2024',
      badgeText: 'UPCOMING',
      badgeType: 'danger',
      description: "PyCon APAC 2024 will be hosted by PyCon ID.",
      info: [
        "2024 October Oct 25-27",
        "Yogyakarta, Indonesia"
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

  const events: any = [
    {
        date: '25-26 Feb',
        title: 'PyCon PH',
        location: 'Makati Sports Club, Makati City, Philippines',
        link: 'https://pycon-2024.python.ph',
    },
    {
        date: '24-25 Aug',
        title: 'PyCon MY',
        link: 'https://pycon.my/'
    },
    {
        date: '21-22 Sep',
        title: 'PyCon TW',
        link: 'https://tw.pycon.org/2024/'
    },
    {
        date: '20-23 Sep',
        title: 'PyCon India',
        location: 'Bengaluru, India',
        link: 'https://in.pycon.org/2024'
    },
    {
        date: '27-29 Sep (Tentative)',
        title: 'PyCon JP',
    },
    {
        date: '25-27 Oct',
        title: 'PyCon APAC',
        location: 'Yogyakarta, Indonesia',
        link: 'https://pycon.id',
    },
    {
      date: '25-27 Oct',
      title: 'PyCon KR',
      location: 'Suwon, South Korea',
      link: 'https://2024.pycon.kr/',
    },
    {
        date: 'Near end of Year (Tentative)',
        title: 'PyCon KR',
    }
  ];

  const eventsNextYear: any = [];

  return (
    <div className="events-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xs-12">
            <div className="left-text-content">
              <div className="section-heading">
                <h1 className="text-white">Events</h1>
                <br />
                <h4 className="text-white">Regional PyCon 2024 in APAC Schedule</h4>
                <br />
              </div>
              <div className="medium-text text-white" style={{opacity: '60%'}}>
                <ul>
                  {events.map((event: any, index: number) => (
                    <li>{event.date}: <strong>{event.title}</strong> {event.location} {event.link && <a href={event.link}>🔗</a>}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {eventsNextYear.length > 0 && (
          <div className="row">
            <div className="col-lg-6 col-xs-12">
              <div className="left-text-content">
                <div className="section-heading">
                  <br />
                  <h4 className="text-white">Regional PyCon 2025 in APAC Schedule</h4>
                  <br />
                </div>
                <div className="medium-text text-white" style={{opacity: '60%'}}>
                  <ul>
                    {eventsNextYear.map((event: any, index: number) => (
                      <li key={index}>{event.date}: <strong>{event.title}</strong> {event.location} {event.link && <a href={event.link}>🔗</a>}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
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
                    <a href="https://pycon.id">
                      <button className="button-primary">Learn More</button>
                    </a>
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
