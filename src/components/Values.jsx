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
                    <img src={Image} alt='Values Image'/>
                </div>
            </div>
                <div className="values__right">
                    <Sectionhead icon={<GiCutDiamond/>} title="values"/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo inventore quidem saepe delectus illum! Quaerat nesciunt vel numquam nam? Quod ipsam temporibus tempora ex quos fugiat, assumenda repudiandae similique exercitationem!
                    </p>
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