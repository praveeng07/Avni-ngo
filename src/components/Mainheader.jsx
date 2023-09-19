import {Link} from 'react-router-dom'
import Image from '../images/main__header.jpg'
const Mainheader = () => {
  return (
    <header className="main__header">
    <div className='container main__header-container'>
      <div className='main__header-left'>
        <h4>#Itstimetomakechange</h4>
        <h1>Join The Revolution</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum pariatur ab inventore sequi minima optio quibusdam dolore reiciendis doloremque, placeat ducimus laudantium ipsum quae facere perspiciatis assumenda quod, numquam explicabo?
        </p>
        <Link to='/blog' className='btn lg'>Get Started</Link>
      </div>
      <div className='main__header-right'>
        <div className="main__header-circle"></div>
        <div className='main__header-image'>
          <img src={Image} alt='Main Header Image'/>
        </div>
      </div>
    </div>
    </header>
  )
}

export default Mainheader