import './style.css';
import ScrollReveal from '../../components/scrollReveal/ScrollReveal';

export default function About() {
  return (
    <div className="container">       
      <div className="row about-container">
        <div className="col-lg-6 col-md-6 col-xs-12">
          <div className="left-text-content">
            <div className="section-heading">
              <h1 className="text-white">What is PyCon APAC?</h1>
              <br/>
            </div>
            <div className="medium-text text-white" style={{opacity: '60%'}}>
              <strong>PyCon APAC</strong> was a <strong><i>volunteer-run, not-for-profit</i></strong> annual conference centered around the Python Programming language. The goal of the conference is to provide a venue where the Python programming language and surrounding technologies can be explored, discussed and exercised.
              <br/>
              <br/>
              <strong>PyCon APAC</strong> was the <strong>regional</strong> counterpart of <strong><a href="https://pycon.org">PyCon</a> in Asia-Pacific</strong>. It is hosted in one (1) of the following countries every year: Singapore, Malaysia, Indonesia, Philippines, Thailand, South Korea, Hong Kong, Vietnam, Japan, Taiwan, India and Bangladesh.
              <br/>
              <br/>
              Starting 2026, PyCon APAC takes on a new identity as PythonAsia, with the first edition hosted in the Philippines (<a href="https://2026.pythonasia.org">2026.pythonasia.org</a>). Each year, the conference rotates to a different host country, organized by the local Python community in collaboration with PAO. Other national and regional Python conferences across Asia continue to be called PyCon (e.g. PyCon Japan, PyCon Korea, PyCon Thailand); PythonAsia refers specifically to this conference, the regional counterpart of PyCon in Asia-Pacific.
            </div>
           </div>
        </div>
        <div className="col-lg-6 col-md-6 col-xs-12">
          <br className="mobile-on" />
          <div className="right-text-content">
            <ScrollReveal 
              delay={0} 
              interval={300} 
              distance="100px" 
              origin="bottom"
            >
              <img 
                src="images/about-img-lg.png" 
                alt="About Us"
                className="w-full object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  )
}