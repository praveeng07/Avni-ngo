import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import { volunteers } from '../../data'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import Volunteer from '../../components/Volunteer'
import './volunteers.css'


const Volunteers = () => {
  return (
    <>
    <Header title="Our Volunteers" image={HeaderImage}>
   <b> At MyNGO, our volunteers are the driving force behind our impact. They are the changemakers, the problem-solvers, and the passionate individuals who dedicate their time and skills to making a difference. Whether it’s advocating for social justice, participating in environmental clean-ups, educating communities, or supporting humanitarian efforts, our volunteers are at the forefront of every initiative.</b>
    </Header>
    <section className='volunteers'>
      <div className="container volunteers__container">
        {
          volunteers.map(({id, image, name, job, socials}) => {
           return <Volunteer key={id} image={image} name={name} job={job} socials={
              [
                // {icon: <BsInstagram/>, link :socials[0]},
                // {icon: <AiOutlineTwitter/>, link :socials[1]},
                // {icon: <FaFacebookF/>, link :socials[2]},
                // {icon: <FaLinkedinIn/>, link :socials[3]},
                // { icon: <FaWhatsapp />, link: socials[4] } 
              ]
            }/>

        
          })
        }
      </div>
    </section>
    </>

  )
}

export default Volunteers