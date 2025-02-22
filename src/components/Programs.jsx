import {FaCrown} from 'react-icons/fa'
import Sectionhead from './Sectionhead'
import { programs } from '../data'
import Card from './Card'

const Programs = () => {
  return (
    <section className="programs">
        <div className="container programs_container">
          <Sectionhead icon={<FaCrown/>} title="Programs"/>
            <div className="programs_wrapper">
            {
                programs.map(({id,icon,title,info,path}) => {
                    return (
                        <Card className="programs__program" key={id}>
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{info}</small>
                            {/* <Link to={path} className='btn sm'>Learn More <AiFillCaretRight/></Link> */}
                        </Card>
                    )
                })
            }

        </div>
        </div>
    </section>
  )
}

export default Programs