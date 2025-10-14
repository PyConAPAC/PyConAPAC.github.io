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
              <div className="medium-text text-white">
                <div className="event-cards">
                  {events.map((event, index) => (
                      <a
                        key={index}
                        href={event.link}
                        className="event-card"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="event-date-card">{event.date}</div>
                        <div className="event-details">
                          <div className="event-title">
                            {countryCodeToFlag(event.countryCode)} {event.title}
                          </div>
                          <div className="event-location">{event.location}</div>
                        </div>
                      </a>
                  ))}
                </div>


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
                      <li key={index}>{event.date}:  <strong>{event.title}</strong> {event.location} {event.link && <a href={event.link}>🔗</a>}</li>
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
                    <a href="https://2026.pythonasia.org">
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


const countryCodeToFlag = (code: string) => {
  if (!code || code.length !== 2) return '';
  const offset = 127397;
  return String.fromCodePoint(...code.toUpperCase().split('').map(c => c.charCodeAt(0) + offset));
};