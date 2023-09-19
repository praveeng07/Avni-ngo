import Card from "./Card"

const Volunteer = ({image, name, job, socials}) => {
  return (
    <Card className="volunteer">
        <div className="volunteer__img">
            <img src={image} alt={name}/>
        </div>
<h3>{name}</h3>
<p>{job}</p>
<div className="volunteer__socials">
    {
        socials.map(({icon, link}, index)=> {
            return <a key={index} href={link} target="__blank" rel="noreffer noopener" >{icon}</a>
        })
    }
</div>
    </Card>
  )
}

export default Volunteer