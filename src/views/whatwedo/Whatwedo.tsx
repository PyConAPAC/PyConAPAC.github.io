import './style.css';
import ScrollReveal from '../../components/scrollReveal/ScrollReveal';

export default function WhatWeDo() {
  return (
    <>
      <div className="row what-we-do-container">
        <div className="col-lg-6 col-md-6 col-xs-12" style={{paddingLeft: 'unset'}}>
          <div className="what-we-do-images mobile-off">
            <ScrollReveal 
                delay={0} 
                interval={300} 
                distance="100px" 
                origin="bottom"
            >
              <div>
                <img 
                  src="images/what-we-do-1.png" 
                  alt="Image"
                  className="w-full what-we-do-image"
                />
                <img 
                  src="images/what-we-do-2.png" 
                  alt="Image"
                  className="w-full what-we-do-image"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal 
              delay={300} 
              interval={600} 
              distance="100px" 
              origin="bottom"
            >
              <div>
                <img 
                  src="images/what-we-do-3.png" 
                  alt="Image"
                  className="w-full"
                />
                <img 
                  src="images/what-we-do-4.png" 
                  alt="Image"
                  className="w-full"
                />
                <img 
                  src="images/what-we-do-5.png" 
                  alt="Image"
                  className="w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-xs-12">
          <div className="what-de-do-desc right-text-content">
            <div className="section-heading">
              <h1 className="text-white">What We Do</h1>
              <br />
            </div>
            <div className="medium-text text-white" style={{opacity:'60%'}}>
              Vestibulum id ligula porta felis euismod semper. 
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. 
              Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, 
              vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. 
              Vestibulum id ligula porta felis euismod semper.
            </div>
            <div>
              <ScrollReveal 
                delay={0} 
                interval={100} 
                distance="100px" 
                origin="bottom"
              >
                <svg className="what-we-do-icons" width="161" height="161" viewBox="0 0 161 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.3" filter="url(#filter0_f_2_504)">
                <circle cx="80.5156" cy="80.3123" r="30" fill="#8619F7"/>
                </g>
                <path d="M72.4387 65.3123V67.656C72.4387 68.2915 72.957 69.1749 73.5925 69.6392L79.3617 72.9925C79.9972 73.4568 81.0339 73.4568 81.6694 72.9925L87.4387 69.6392C88.0742 69.1794 88.5925 68.2915 88.5925 67.656V65.3123H72.4387ZM78.2079 74.543V75.6969C78.2079 76.3324 78.7262 76.8507 79.3617 76.8507H81.6694C82.3049 76.8507 82.8233 76.3324 82.8233 75.6969V74.543H78.2079ZM80.5156 76.9949C80.2361 76.9949 79.9612 77.0941 79.8305 77.3555L77.3064 82.4757L71.6814 83.305C71.393 83.3456 71.1226 83.5349 71.0324 83.8099C70.9423 84.0893 71.0414 84.4003 71.2488 84.6031L75.3233 88.6055L74.3497 94.1945C74.3001 94.4829 74.4399 94.7804 74.6742 94.9517C74.9131 95.123 75.2061 95.159 75.4675 95.0238L80.5156 92.3555L85.5637 95.0238C85.6763 95.0824 85.8025 95.0959 85.9242 95.0959C86.0865 95.0959 86.2217 95.0508 86.3569 94.9517C86.5913 94.7804 86.731 94.4829 86.6814 94.1945L85.7079 88.6055L89.7824 84.6031C89.9897 84.4003 90.0889 84.0893 89.9988 83.8099C89.9086 83.5349 89.6742 83.3456 89.3858 83.305L83.7247 82.4757L81.2007 77.3555C81.07 77.0941 80.795 76.9949 80.5156 76.9949Z" fill="#8619F7"/>
                <defs>
                <filter id="filter0_f_2_504" x="0.515625" y="0.312256" width="160" height="160" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_2_504"/>
                </filter>
                </defs>
                </svg>
              </ScrollReveal>
              <div className="large-text-bold text-white" style={{lineHeight: '28px'}}>
                Workshops & Seminars
              </div>
              <div className="small-text text-white" style={{opacity: '60%'}}>
                Etiam porta sem malesuada magna mollis euismod ulla vitae elit. 
                Duis mollis, est non commodo luctus.
              </div>
            </div>
            <div>
              <ScrollReveal 
                delay={100} 
                interval={200} 
                distance="100px" 
                origin="bottom"
              >
                <svg className="what-we-do-icons" width="161" height="161" viewBox="0 0 161 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M74.2656 67.8122C73.5756 67.8122 73.0156 68.3722 73.0156 69.0622V70.3122H71.7656C70.3844 70.3122 69.2656 71.4309 69.2656 72.8122V75.3122V76.5622V90.3122C69.2656 91.6909 70.3869 92.8122 71.7656 92.8122H89.2656C90.6444 92.8122 91.7656 91.6909 91.7656 90.3122V76.5622V75.3122V72.8122C91.7656 71.4309 90.6469 70.3122 89.2656 70.3122H88.0156V69.0622C88.0156 68.3722 87.4556 67.8122 86.7656 67.8122C86.0756 67.8122 85.5156 68.3722 85.5156 69.0622V70.3122H75.5156V69.0622C75.5156 68.3722 74.9556 67.8122 74.2656 67.8122ZM71.7656 76.5622H89.2656L89.2681 90.3122H71.7656V76.5622ZM84.0166 79.9484C83.7 79.9484 83.382 80.0703 83.1401 80.3122L79.8906 83.5617L78.5161 82.1872C78.0324 81.7034 77.2494 81.7034 76.7656 82.1872C76.2819 82.6709 76.2819 83.4539 76.7656 83.9377L79.0068 86.1789C79.4943 86.6664 80.2869 86.6664 80.7744 86.1789L84.8906 82.0627C85.3744 81.5789 85.3744 80.7959 84.8906 80.3122C84.6488 80.0703 84.3332 79.9484 84.0166 79.9484Z" fill="#FFB82F"/>
                <g opacity="0.3" filter="url(#filter0_f_2_507)">
                <circle cx="80.5156" cy="80.3123" r="30" fill="#FFB82F"/>
                </g>
                <defs>
                <filter id="filter0_f_2_507" x="0.515625" y="0.312256" width="160" height="160" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_2_507"/>
                </filter>
                </defs>
                </svg>
              </ScrollReveal>
              <div className="large-text-bold text-white" style={{lineHeight: '28px'}}>
                Community Events
              </div>
              <div className="small-text text-white" style={{opacity: '60%'}}>
                Etiam porta sem malesuada magna mollis euismod ulla vitae elit. 
                Duis mollis, est non commodo luctus.
              </div>
            </div>
            <div>
              <ScrollReveal 
                delay={200} 
                interval={300} 
                distance="100px" 
                origin="bottom"
              >
                <svg className="what-we-do-icons" width="161" height="161" viewBox="0 0 161 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.3" filter="url(#filter0_f_2_484)">
                <circle cx="80.5156" cy="80.3123" r="30" fill="#F43236"/>
                </g>
                <g clipPath="url(#clip0_2_484)">
                <path d="M70.131 69.9276C68.86 69.9276 67.8233 70.9643 67.8233 72.2353V84.9276C67.8233 86.1987 68.86 87.2353 70.131 87.2353H65.5156C65.5156 89.196 67.0165 90.6969 68.9772 90.6969H92.0541C94.0147 90.6969 95.5156 89.196 95.5156 87.2353H90.9002C92.1713 87.2353 93.2079 86.1987 93.2079 84.9276V72.2353C93.2079 70.9643 92.1713 69.9276 90.9002 69.9276H70.131ZM70.131 72.2353H90.9002V84.9276H70.131V72.2353ZM78.2079 74.543V81.4661L80.0469 79.9517L81.0925 82.5118L82.03 82.043L80.8762 79.519L83.2921 79.2666L78.2079 74.543Z" fill="#F43236"/>
                </g>
                <defs>
                <filter id="filter0_f_2_484" x="0.515625" y="0.312256" width="160" height="160" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_2_484"/>
                </filter>
                <clipPath id="clip0_2_484">
                <rect width="30" height="30" fill="white" transform="translate(65.5156 65.3123)"/>
                </clipPath>
                </defs>
                </svg>
              </ScrollReveal>
              <div className="large-text-bold text-white" style={{lineHeight: '28px'}}>
                Virtual Events
              </div>
              <div className="small-text text-white" style={{opacity: '60%'}}>
                Etiam porta sem malesuada magna mollis euismod ulla vitae elit. 
                Duis mollis, est non commodo luctus.
              </div>
            </div>
            <div>
              <ScrollReveal 
                delay={300} 
                interval={400} 
                distance="100px" 
                origin="bottom"
              >
                <svg className="what-we-do-icons" width="161" height="161" viewBox="0 0 161 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.3" filter="url(#filter0_f_2_511)">
                <circle cx="80.5156" cy="80.3123" r="30" fill="#2F80ED"/>
                </g>
                <g clipPath="url(#clip0_2_511)">
                <path d="M75.9002 66.4661C73.9892 66.4661 72.4387 68.0166 72.4387 69.9276C72.4387 71.8387 73.9892 73.3892 75.9002 73.3892C77.8113 73.3892 79.3618 71.8387 79.3618 69.9276C79.3618 68.0166 77.8113 66.4661 75.9002 66.4661ZM75.9002 73.3892C75.5532 73.3892 75.2016 73.3802 74.8546 73.4973C75.5487 74.4213 75.9002 75.5797 75.9002 76.8507C75.9002 77.3104 75.7921 77.7612 75.7921 78.2209C76.716 76.8372 78.2079 75.9267 79.9387 75.6969C79.1319 74.3131 77.631 73.3892 75.9002 73.3892ZM85.131 66.4661C83.22 66.4661 81.6695 68.0166 81.6695 69.9276C81.6695 71.8387 83.22 73.3892 85.131 73.3892C87.0421 73.3892 88.5925 71.8387 88.5925 69.9276C88.5925 68.0166 87.0421 66.4661 85.131 66.4661ZM85.131 73.3892C83.4002 73.3892 81.8993 74.3131 81.0925 75.6969C82.8233 75.9267 84.3152 76.8372 85.2392 78.2209C85.2392 77.7612 85.131 77.3104 85.131 76.8507C85.131 75.5797 85.4826 74.4213 86.1767 73.4973C85.8296 73.3802 85.4781 73.3892 85.131 73.3892ZM70.131 73.3892C68.22 73.3892 66.6695 74.9397 66.6695 76.8507C66.6695 78.7618 68.22 80.3122 70.131 80.3122C72.0421 80.3122 73.5925 78.7618 73.5925 76.8507C73.5925 74.9397 72.0421 73.3892 70.131 73.3892ZM70.131 80.3122C67.5934 80.3122 65.5156 82.3901 65.5156 84.9276V87.4517C65.5156 87.4517 66.6695 88.3892 70.131 88.3892C73.5925 88.3892 74.7464 87.4517 74.7464 87.4517V84.9276C74.7464 82.3901 72.6686 80.3122 70.131 80.3122ZM90.9002 73.3892C88.9892 73.3892 87.4387 74.9397 87.4387 76.8507C87.4387 78.7618 88.9892 80.3122 90.9002 80.3122C92.8113 80.3122 94.3618 78.7618 94.3618 76.8507C94.3618 74.9397 92.8113 73.3892 90.9002 73.3892ZM90.9002 80.3122C88.3627 80.3122 86.2849 82.3901 86.2849 84.9276V87.4517C86.2849 87.4517 87.4387 88.3892 90.9002 88.3892C94.3618 88.3892 95.5156 87.4517 95.5156 87.4517V84.9276C95.5156 82.3901 93.4378 80.3122 90.9002 80.3122ZM80.5156 78.0046C78.6046 78.0046 77.0541 79.555 77.0541 81.4661C77.0541 83.3772 78.6046 84.9276 80.5156 84.9276C82.4267 84.9276 83.9772 83.3772 83.9772 81.4661C83.9772 79.555 82.4267 78.0046 80.5156 78.0046ZM80.5156 84.9276C77.9781 84.9276 75.9002 87.0055 75.9002 89.543V92.0671C75.9002 92.0671 77.0541 93.0046 80.5156 93.0046C83.9772 93.0046 85.131 92.0671 85.131 92.0671V89.543C85.131 87.0055 83.0532 84.9276 80.5156 84.9276Z" fill="#2F80ED"/>
                </g>
                <defs>
                <filter id="filter0_f_2_511" x="0.515625" y="0.312256" width="160" height="160" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_2_511"/>
                </filter>
                <clipPath id="clip0_2_511">
                <rect width="30" height="30" fill="white" transform="translate(65.5156 65.3123)"/>
                </clipPath>
                </defs>
                </svg>
              </ScrollReveal>
              <div className="large-text-bold text-white" style={{lineHeight: '28px'}}>
                Gatherings
              </div>
              <div className="small-text text-white" style={{opacity: '60%'}}>
                Etiam porta sem malesuada magna mollis euismod ulla vitae elit. 
                Duis mollis, est non commodo luctus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}