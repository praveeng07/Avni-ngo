import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import { volunteers } from '../../data'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import Volunteer from '../../components/Volunteer'
import './volunteers.css'


const Volunteers = () => {
  return (
    <>
    <Header title="Our Volunteers" image={HeaderImage}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rem distinctio iure iste cumque, dolor laborum asperiores quasi ullam.
           Sunt inventore officia ex voluptate cum facere aliquid voluptates, explicabo neque.
    </Header>
    <section className='volunteers'>
      <div className="container volunteers__container">
        {
          volunteers.map(({id, image, name, job, socials}) => {
           return <Volunteer key={id} image={image} name={name} job={job} socials={
              [
                {icon: <BsInstagram/>, link :socials[0]},
                {icon: <AiOutlineTwitter/>, link :socials[1]},
                {icon: <FaFacebookF/>, link :socials[2]},
                {icon: <FaLinkedinIn/>, link :socials[3]},
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