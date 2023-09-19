import {Link} from 'react-router-dom'
import Logo from '../images/logo.jpg'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
           <article>
            <Link to="/" className='logo'>
                <img src={Logo} alt='Footer Logo'/>
            </Link>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repudiandae exercitationem, numquam quo ab distinctio optio officiis ea quisquam aut eaque molestiae vitae a, vel voluptas quae esse dolorem cum.
            </p>
            <div className="footer__socials">
                <a href='https://linkedin.com/' target='__blank' rel='nonreferrer noopener'><FaLinkedin/></a>
                <a href='https://facebook.com/' target='__blank' rel='nonreferrer noopener'><FaFacebookF/></a>
                <a href='https://twitter.com/' target='__blank' rel='nonreferrer noopener'><AiOutlineTwitter/></a>
                <a href='https://instagram.com/' target='__blank' rel='nonreferrer noopener'><AiFillInstagram/></a>
            </div>
           </article>
           <article>
            <h4>Permalinks</h4>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/volunteers">Volunteers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
           </article>
           <article>
            <h4>Insights</h4>
            <Link to="/s">About</Link>
            <Link to="/s">Case Studies</Link>
            <Link to="/s">Events</Link>
            <Link to="/s">Communities</Link>
            <Link to="/s">FAQs</Link>
           </article>
           <article>
            <h4>Get In Touch</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/s">Support</Link>
           </article>
        </div>
        <div className="footer__copyright">
            <small>2023 Avni Ngo &copy;All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer