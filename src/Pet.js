import {Link} from "react-router-dom"

const Pet = ({name, animal, breed, images, location, id}) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg"
  if (images.length > 0) {
    hero = images[0]
  }
  return <div>
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{animal} – {breed} – {location}</h2>
      </div>
    </Link>
  </div>
}

export default Pet