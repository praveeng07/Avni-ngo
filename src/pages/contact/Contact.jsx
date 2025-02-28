import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { BsInstagram } from 'react-icons/bs'  // Replaced Messenger with Instagram
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In deserunt mollitia doloremque blanditiis autem nobis inventore debitis repellat et obcaecati earum omnis,
        perspiciatis veniam, suscipit nemo quia laboriosam corporis dolores.
      </Header>
      <section className='contact'>
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href='mailto:avnifoundation.ngo@gmail.com' target='__blank' rel='noreferrer noopener'><MdEmail /></a>
            <a href='https://instagram.com/avni_foundation.ngo' target='__blank' rel='noreferrer noopener'><BsInstagram /></a> {/* Updated to Instagram */}
            <a href='https://wa.me/+918762469946' target='__blank' rel='noreferrer noopener'><IoLogoWhatsapp /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
