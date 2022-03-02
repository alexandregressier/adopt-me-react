import {useParams} from "react-router-dom"

const Details = () => {
  const {id} = useParams()
  return <div>
    <h1>Details for {id}</h1>
  </div>
}

export default Details