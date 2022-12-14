import './preheader.css';
import ScrollReveal from '../../components/scrollReveal/ScrollReveal';

export default function Preheader() {
  return (
    <>
      <div className="text-center">
        <div className="banner-first-section">
          <h1 className="text-white">PyCon APAC Organizers</h1>
          <h1 className="text-white"></h1>
          <div className="medium-text text-white" style={{opacity: '60%', margin: '15px 0 50px 0'}}>
            <div>We are a group of PyCon organizers in APAC.</div>
            <div>Every year, we hold a regional counterpart of PyCon in Asia-Pacific and we call it PyCon APAC.</div>
          </div>
          <div className="d-flex justify-content-center">
            <button className="button-primary-lg">Learn More</button>
            <div>&nbsp;&nbsp;&nbsp;</div>
            <button className="button-secondary-lg">How to Join</button>
          </div>
          <div className="banner-images-section">
            <div className="banner-images-item">
              <ScrollReveal 
                delay={0} 
                interval={500} 
                distance="100px" 
                origin="bottom"
              >
                <img 
                  src="images/banner-img-1.png" 
                  alt="Image"
                  className="banner-images-item-1 w-full"
                />
              </ScrollReveal>
            </div>
            <div className="banner-images-item">
              <ScrollReveal 
                delay={500} 
                interval={1000} 
                distance="100px" 
                origin="bottom"
              >
                <img 
                  src="images/banner-img-2.png" 
                  alt="Image"
                  className="banner-images-item-2 mt-12 mb-4 w-full"
                />
              </ScrollReveal>
              <ScrollReveal 
                delay={1000} 
                interval={1500} 
                distance="100px" 
                origin="bottom"
              >
                <img 
                  src="images/banner-img-3.png" 
                  alt="Image"
                  className="banner-images-item-2 w-full"
                />
             </ScrollReveal>
            </div>
            <div className="banner-images-item text-right mobile-off">
              <ScrollReveal 
                delay={500} 
                interval={1000} 
                distance="100px" 
                origin="bottom"
              >
                <img 
                  src="images/banner-img-4.png" 
                  alt="Image"
                  className="mt-8 mb-4 w-full"
                />
              </ScrollReveal>
              <ScrollReveal 
                delay={1000} 
                interval={1500} 
                distance="100px" 
                origin="bottom"
              >
                <img 
                  src="images/banner-img-5.png" 
                  alt="Image"
                  className="w-50"
                />
              </ScrollReveal>
            </div>
            <div className="banner-images-item text-right mobile-off">
              <ScrollReveal 
                delay={500} 
                interval={1000} 
                distance="100px" 
                origin="bottom"
              >
                <img 
                  src="images/banner-img-6.png" 
                  alt="Image"
                  className="h-25 mt-4 mb-4 w-fit-avail"
                />
              </ScrollReveal>
              <ScrollReveal 
                delay={1000} 
                interval={1500} 
                distance="100px" 
                origin="bottom"
              >
                <img 
                  src="images/banner-img-7.png" 
                  alt="Image"
                  className="h-25 w-fit-avail"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
        <div className="container banner-bottom-section">
          <ScrollReveal 
            delay={0} 
            interval={200} 
            distance="150px" 
            origin="bottom"
          >
            <div className="banner-bottom-section-item">
              <div>
                <h1 className="text-white banner-bottom-section-value">12</h1>
                <div className="medium-text-bold text-white" style={{opacity: '60%'}}>Countries</div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal 
            delay={200} 
            interval={400} 
            distance="150px" 
            origin="bottom"
          >
            <div className="banner-bottom-section-item">
              <div>
                <h1 className="text-white banner-bottom-section-value">50+</h1>
                <div className="medium-text-bold text-white" style={{opacity: '60%'}}>Organizers</div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal 
            delay={400} 
            interval={600} 
            distance="150px" 
            origin="bottom"
          >
            <div className="banner-bottom-section-item">
              <div>
                <h1 className="text-white banner-bottom-section-value">20</h1>
                <div className="medium-text-bold text-white" style={{opacity: '60%'}}>Groups</div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal 
            delay={600} 
            interval={800} 
            distance="150px" 
            origin="bottom"
          >
            <div className="banner-bottom-section-item">
              <div>
                <h1 className="text-white banner-bottom-section-value">50+</h1>
                <div className="medium-text-bold text-white" style={{opacity: '60%'}}>Events Conducted</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </>
  )
}