import './style.css';

export default function Footer() {
  return (
    <>
      <div className="container">
            <div className="footer-divider"></div>
            <div className="row footer-content">
                <div className="col-lg-5 col-xs-12">
                    <div className="left-text-content">
                        <img className="footer-logo" src="images/logo.png" alt="Python APAC" />
                        <div className="small-text text-white" style={{opacity: '60%'}}>
                            We are Pycon APAC Organizers from Singapore, Malaysia, Indonesia, Philippines,
                            Thailand, South Korea, Hong Kong, Vietnam, Japan, Taiwan, India and Bangladesh.
                        </div>
                        <br />
                        <div className="d-flex country-items">
                            <img className="country-item mobile-off" src="images/country-flag-1.png" title="Singapore" />
                            <img className="country-item mobile-off" src="images/country-flag-2.png" title="Malaysia" />
                            <img className="country-item mobile-off" src="images/country-flag-3.png" title="Indonesia" />
                            <img className="country-item mobile-off" src="images/country-flag-4.png" title="Philippines" />
                            <img className="country-item mobile-off" src="images/country-flag-5.png" title="Thailand" />
                            <img className="country-item mobile-off" src="images/country-flag-6.png" title="South Korea" />
                            <img className="country-item mobile-off" src="images/country-flag-7.png" title="Hong Kong" />
                            <img className="country-item mobile-off" src="images/country-flag-8.png" title="Vietnam" />
                            <img className="country-item mobile-off" src="images/country-flag-9.png" title="Japan" />
                            <img className="country-item mobile-off" src="images/country-flag-10.png" title="Taiwan" />
                            <img className="country-item mobile-off" src="images/country-flag-11.png" title="India" />
                            <img className="country-item mobile-off" src="images/country-flag-12.png" title="Bangladesh" />
                        </div>
                        <div className="d-flex footer-nav small-text">
                            <div className="footer-nav-item scroll-to-section">
                                <a href="#top" className="text-white mobile-off">Home</a>
                            </div>
                            <div className="footer-nav-item scroll-to-section">
                               <a href="#about" className="text-white mobile-off">About</a>
                            </div>
                            <div className="footer-nav-item scroll-to-section">
                               <a href="#what-we-do" className="text-white mobile-off">What We Do</a> 
                            </div>
                            <div className="footer-nav-item scroll-to-section">
                                <a href="#events" className="text-white mobile-off">Events</a> 
                            </div>
                            <div className="footer-nav-item scroll-to-section">
                               <a href="#code-of-conduct" className="text-white mobile-off">Code of Conduct</a> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1 col-xs-12"></div>
                <div className="col-lg-6 col-xs-12">
                    <div className="right-text-content">
                        <div className="social-icons">
                            <div className="medium-text-bold text-white footer-social-header mobile-off">
                                Follow Us
                            </div>
                            <div className="d-flex footer-socials">
{/*                                <a className="footer-social-item" rel="nofollow" href="">
                                    <img src="images/icons8-facebook.png" alt="Facebook" />
                                </a>*/}
                                <a className="footer-social-item" rel="nofollow" href="https://github.com/pyconapac">
                                    <img src="images/icons8-github.png" alt="Github" />
                                </a>
                                <a className="footer-social-item" rel="nofollow" href="https://twitter.com/pyconapac">
                                    <img src="images/icons8-twitter_circled.png" alt="Twitter" />
                                </a>
{/*                                <a className="footer-social-item" rel="nofollow" href="">
                                    <img src="images/icons8-instagram.png" alt="Instagram" />
                                </a>
                                <a className="footer-social-item" rel="nofollow" href="">
                                    <img src="images/icons8-linkedin_circled.png" alt="Linkedin" />
                                </a>*/}
                            </div>
                            <div className="medium-text-bold text-white">
                                Stay Connected
                            </div>
                            <div className="small-text text-white" style={{opacity: '60%'}}>
                                Join our mailing list to stay connect with our events, 
                                workshops and seminars, gatherings and latest updates.
                            </div>
                            <br />
                            <div className="form-input-group">
                                <input className="form-input" type="text" placeholder="Enter email here" />
                                <button className="button-primary sub-btn">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xs-12">
                    <div className="left-text-content">
                        <div className="small-text text-white footer-credit">
                            © 2022 Pycon APAC
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-divider"></div>
        </div>
        <div className="small-text text-white footer-credits">
            <div>Made with</div>
            <div className="hearbeat"> ❤️ </div> 
            <div>
                <a href="https://codemickeycode.com/">codemickeycode</a>, <a href="https://www.heyyeoh.com/">Heyyeoh</a> & <a>dnezle</a>
            </div>
        </div>
    </>
  )
}