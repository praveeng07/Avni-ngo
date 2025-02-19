import {Link} from 'react-router-dom'
import Image from '../images/main__header.jpg'
const Mainheader = () => {
  return (
    <header className="main__header">
    <div className='container main__header-container'>
      <div className='main__header-left'>
        <h4>#Itstimetomakechange</h4>
        <h1>Join the Revolution: Empower Change with AvniNGO</h1>
        <p>
        At AvniNGO, we believe in the power of collective action. Our mission is to raise awareness, advocate for justice, and drive meaningful change in communities worldwide. Whether it's protecting the environment, championing human rights, or empowering underprivileged communities, we are committed to making a difference. Join us in shaping a brighter future for all.
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