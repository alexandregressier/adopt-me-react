import {useEffect, useState} from "react"
import useBreeds from "./useBreeds"
import Results from "./Results"

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"]

const SearchParams = () => {
  const [location, setLocation] = useState("")
  const [animal, setAnimal] = useState("")
  const [breed, setBreed] = useState("")
  const [pets, setPets] = useState([])
  const [breeds] = useBreeds(animal)

  useEffect(() => {
    requestPets()
  }, [])

  async function requestPets() {
    const response = await fetch(`http://pets-v2.dev-apis.com/pets?location=${location}&animal=${animal}&breed=${breed}`)
    const json = await response.json()
    setPets(json.pets)
  }

  return <div className="search-params">
    <form
      onSubmit={e => {
        e.preventDefault()
        requestPets()
      }}
    >
      <label htmlFor="location">
        Location
        <input
          id="location"
          type="text"
          placeholder="Location"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
      </label>
      <label htmlFor="animal">
        Animal
        <select
          id="animal"
          value={animal}
          onChange={e => {
            setAnimal(e.target.value)
            setBreed("")
          }}
          onBlur={e => {
            setAnimal(e.target.value)
            setBreed("")
          }}
        >
          <option/>
          {ANIMALS.map(animal =>
            <option key={animal} value={animal}>
              {animal}
            </option>,
          )}
        </select>
      </label>
      <label htmlFor="breed">
        Breed
        <select
          id="breed"
          value={breed}
          onChange={e => setBreed(e.target.value)}
          onBlur={e => setBreed(e.target.value)}
        >
          <option/>
          {breeds.map(breed =>
            <option key={breed} value={breed}>
              {breed}
            </option>,
          )}
        </select>
      </label>
      <button type="submit">Search</button>
    </form>
    <Results pets={pets}/>
  </div>
}

export default SearchParams