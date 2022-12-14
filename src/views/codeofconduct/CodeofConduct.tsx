import './style.css';
import ScrollReveal from '../../components/scrollReveal/ScrollReveal';

export default function CodeofConduct() {
  return (
    <div className="container text-center text-white">
      <h1>Code of Conduct</h1>
      <br />
      <ScrollReveal 
        delay={0} 
        interval={200} 
        distance="100px" 
        origin="bottom"
      >
        <div className="medium-text" style={{opacity: '60%'}}>
                We value the participation of each member of the Python community and want all members to have an enjoyable and fulfilling experience.
                Accordingly, all members are expected to show respect and courtesy to other members at all PyCon APAC events, whether officially sponsored by PyCon APAC or not.
        </div>
      </ScrollReveal>
      <br />
      <ScrollReveal 
        delay={200} 
        interval={400} 
        distance="100px" 
        origin="bottom"
      >
        <div className="medium-text" style={{opacity: '60%'}}>
                To make clear what is expected, all delegates/attendees, speakers, exhibitors, organizers, and volunteers at any PyCon APAC event are required to conform to the following <a href="https://www.python.org/psf/conduct">Code of Conduct</a>.
        </div>
      </ScrollReveal>
    </div>
  )
}