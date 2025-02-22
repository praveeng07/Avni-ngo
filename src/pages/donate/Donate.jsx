import Header from "../../components/Header"
import HeaderImage from '../../images/header_bg_4.jpg'
import './donate.css'


const Donate = () => {
  return (
    <>
    <Header title="Donate" image={HeaderImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis veritatis velit, iusto consequatur nisi ipsa asperiores in voluptate quos autem
         aliquam, beatae, debitis voluptatem. Architecto alias harum adipisci possimus velit!
    </Header>
    <section className="donate">
        <div className="container donate__container">
        
        <div className="donate__section-content">
          <h1>We accept all types of payments</h1>
          
        </div>
        </div>
        </section>
    </>
  )
}

export default Donate