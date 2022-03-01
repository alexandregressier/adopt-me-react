import {useState, useEffect} from "react"

const breedsCache = {}

export default function useBreeds(animal) {
  const [breeds, setBreeds] = useState([])
  const [status, setStatus] = useState("unloaded")

  useEffect(() => {
    if (!animal) {
      setBreeds([])
    } else if (breedsCache[animal]) {
      setBreeds(breedsCache[animal])
    } else {
      requestBreedList()
    }

    async function requestBreedList() {
      setBreeds([])
      setStatus("loading")
      const response = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)
      const json = await response.json()
      breedsCache[animal] = json.breeds || []
      setBreeds(breedsCache[animal])
      setStatus("loaded")
    }
  }, [animal])

  return [breeds, status]
}