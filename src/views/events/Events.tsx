import { useState } from "react";
import {slides, currentYear, events, upcomingEvents} from './EventData';
import './style.css';

export default function Events() {
  const [currentSlide, changeCurrentSlide] = useState(1);

  const setCurrentSlide = (data: any, idx: number):void => {
    data.preventDefault();
    changeCurrentSlide(idx);
  }

  const nextPrevSlide = (idx: number) => {
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
        date: '27-29 Sep',
        title: 'PyCon JP',
        location: 'Tokyo, Japan',
        link: 'https://2024.pycon.jp',
    },
    {
        date: '25-27 Oct',
        title: 'PyCon APAC',
        location: 'Yogyakarta, Indonesia',
        link: 'https://pycon.id',
    },
    {
      date: '26-27 Oct',
      title: 'PyCon KR',
      location: 'Suwon, South Korea',
      link: 'https://2024.pycon.kr/',
    },
    {
        date: '16-17 Nov',
        title: 'PyCon HK',
        location: 'Hong Kong',
        link: 'https://pycon.hk/2024/',
    },
    {
        date: '22-26 Nov',
        title: 'PyCon AU',
        location: 'Melbourne, Australia',
        link: 'https://2024.pycon.org.au/',
    }    
    
  ];

  const eventsNextYear: any = [
   {
        date: '1-2 March',
        title: 'PyCon APAC',
        location: 'Ateneo de Manila University,Quezon City, Philippines',
   },
    {
      date: '26-27 Sep',
      title: 'PyCon JP',
      location: 'Hiroshima, Japan',
      link: 'https://2025.pycon.jp/',
    },
    {
      date: '11-12 Oct(tentative)',
      title: 'PyCon HK',
      location: 'City University of Hong Kong, Hong Kong',  
      link: 'https://pycon.hk',
    }
  ];

  return (
    <div className="events-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xs-12">
            <div className="left-text-content">
              <div className="section-heading">
                <h1 className="text-white">Events</h1>
                <br />
                <h4 className="text-white">Regional PyCon {currentYear} in APAC Schedule</h4>
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
        {upcomingEvents.length > 0 && (
          <div className="row">
            <div className="col-lg-6 col-xs-12">
              <div className="left-text-content">
                <div className="section-heading">
                  <br />
                  <h4 className="text-white">Regional PyCon {currentYear+1} in APAC Schedule</h4>
                  <br />
                </div>
                <div className="medium-text text-white" style={{opacity: '60%'}}>
                  <ul>
                    {upcomingEvents.map((event: any, index: number) => (
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
                    <a href="https://pycon-apac.python.ph">
                      <button className="button-primary">Learn More</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {slides.length > 1 && (
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
        )}
        </div>
      </div>
    </div>
  )
}
