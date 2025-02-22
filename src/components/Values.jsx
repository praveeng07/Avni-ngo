import Image from '../images/plant.jpg'
import Sectionhead from './Sectionhead'
import {GiCutDiamond} from 'react-icons/gi'
import { values } from '../data'
import Card from './Card'

const Values = () => {
  return (
    <section className='values' >
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt='Values pic'/>
                </div>
            </div>
                <div className="values__right">
                    <Sectionhead icon={<GiCutDiamond/>} title="values"/>
                    <p>
At AvniNGO, our values shape everything we do. We believe in sustainability, ensuring that our actions protect the environment for future generations. Equality and justice drive our efforts to create a fair society where everyone has access to opportunities. With ,<b>integrity and transparency</b>, we build trust in our mission, ensuring accountability in all our initiatives. Through <b>community empowerment</b>, we uplift individuals, giving them the tools to create lasting change in their own lives and beyond.                    </p>
                      <div className="values__wrapper">
                        {
                            values.map(({id, icon, title, desc}) => {
                                return <Card key={id} className="values__value">
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            })
                        }
                      </div>
                </div>
        </div>
        </section>
  )
}

export default Values