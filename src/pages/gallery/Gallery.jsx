import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'

import './gallery.css'

const Gallery = () => {
  const galleryLength = 13;
  const images = []

  for(let i=1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }


  return (
    <>
    <Header title="Our Gallery" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam commodi illo voluptatum inventore ab nam eveniet similique accusamus! Nobis, eligendi hic nihil
       doloremque repudiandae corrupti libero! Consequatur, consequuntur? Nisi, libero!
    </Header>
    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((image, index) => {
            return <article key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`}/>
            </article>
          })
        }
      </div>
    </section>

    </>
  )
}

export default Gallery