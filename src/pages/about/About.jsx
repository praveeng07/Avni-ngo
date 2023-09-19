import HeaderImage from '../../images/header_bg_1.jpg'
import Header from '../../components/Header'
import './about.css'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'


const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid pariatur, doloremque labore aspernatur corporis eveniet explicabo modi velit nesciunt voluptate nostrum molestias illum temporibus quia sed voluptatum libero natus?
    </Header>

    <section className='about__story'>
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt='Our Story Image'/>
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, quidem corrupti dicta similique vitae illo libero. Temporibus itaque quia impedit
             tempora rem quaerat officiis repellendus, quas illo adipisci quam esse.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, quidem corrupti dicta similique vitae illo libero. Temporibus itaque quia impedit
             tempora rem quaerat officiis repellendus, quas illo adipisci quam esse.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, quidem corrupti dicta similique vitae illo libero. Temporibus itaque quia impedit
             tempora rem quaerat officiis repellendus, quas illo adipisci quam esse.
          </p>
        </div>
      </div>

    </section>
    <section className='about__vision'>
      <div className="container about__story-container">
     
        <div className="about__section-content">
          <h1>Vision</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, quidem corrupti dicta similique vitae illo libero. Temporibus itaque quia impedit
             tempora rem quaerat officiis repellendus, quas illo adipisci quam esse.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, quidem corrupti dicta similique vitae illo libero. Temporibus itaque quia impedit
             tempora rem quaerat officiis repellendus, quas illo adipisci quam esse.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, quidem corrupti dicta similique vitae illo libero. Temporibus itaque quia impedit
             tempora rem quaerat officiis repellendus, quas illo adipisci quam esse.
          </p>
        </div>
           
        <div className="about__section-image">
          <img src={VisionImage} alt='Our Vision Image'/>
        </div>
      </div>

    </section>

    <section className='about__mission'>
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt='Our Mission Image'/>
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, quidem corrupti dicta similique vitae illo libero. Temporibus itaque quia impedit
             tempora rem quaerat officiis repellendus, quas illo adipisci quam esse.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, quidem corrupti dicta similique vitae illo libero. Temporibus itaque quia impedit
             tempora rem quaerat officiis repellendus, quas illo adipisci quam esse.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, quidem corrupti dicta similique vitae illo libero. Temporibus itaque quia impedit
             tempora rem quaerat officiis repellendus, quas illo adipisci quam esse.
          </p>
        </div>
      </div>
      </section>
   </>
  )
}

export default About