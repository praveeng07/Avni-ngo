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
    At MyNGO, we believe in the power of collective action to drive meaningful change. Our mission is to create a sustainable, just, and empowered society by advocating for human rights, protecting the environment, and uplifting marginalized communities. Through grassroots efforts, policy advocacy, and global collaboration, we strive to make a real difference in people’s lives.

With a strong network of passionate changemakers, dedicated volunteers, and committed partners, we are working toward a future where equality, sustainability, and justice are not just ideals but a reality for all.

    </Header>

    <section className='about__story'>
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt='Our Story Image'/>
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
          It all started with a vision—a world where every voice is heard, every community is empowered, and every person has access to basic human rights and a clean, sustainable environment. What began as a small initiative has now grown into a global movement, thanks to the unwavering dedication of our supporters.</p>

<p>From organizing community-led environmental cleanups to advocating for policy changes that protect human rights, MyNGO has been at the forefront of impactful change. Over the years, we have expanded our reach, launching programs that provide education, healthcare, and economic opportunities to those in need.
          </p>
         <p>Our journey has been driven by the belief that small actions lead to big transformations. Every individual, no matter where they come from, has the power to contribute to a better world.</p>
      
        </div>
      </div>

    </section>
    <section className='about__vision'>
      <div className="container about__story-container">
     
        <div className="about__section-content">
          <h1>Vision</h1>
          <p>
          At MyNGO, we envision a world where justice, sustainability, and human dignity are at the core of society. We strive to create an inclusive future where every individual, regardless of their background, has access to fundamental rights, opportunities, and a clean, thriving environment. Our vision is to build self-sufficient communities, advocate for policies that prioritize people over profit, and promote sustainable practices that protect our planet for generations to come. By empowering individuals, fostering collaboration, and driving systemic change, we aim to transform today’s challenges into opportunities for a better, more equitable world.
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
          As we look ahead, our commitment to change remains stronger than ever. With new challenges emerging every day—climate change, social inequalities, and human rights violations—our work is far from over.
          </p>
          <p>
          We continue to expand our programs, collaborate with global and local partners, and harness the power of technology to amplify our impact. Our journey has been one of passion, resilience, and hope, and we invite you to be a part of it.
          </p>
          <p>
          Together, we can create a world where justice prevails, communities flourish, and future generations inherit a planet worth living on.
          </p>
         <p><b>
         Join us in this movement—because change begins with us.
         </b>
         </p>
        </div>
      </div>
      </section>
   </>
  )
}

export default About