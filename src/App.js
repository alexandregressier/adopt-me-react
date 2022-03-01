import {render} from "react-dom"
import Pet from "./Pet"

const App = () =>
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Daïla" animal="dog" breed="Golden Retriever"/>
    <Pet name="Pepper" animal="bird" breed="Cockatiel"/>
    <Pet name="Doink" animal="cat" breed="Mix"/>
  </div>

render(<App/>, document.getElementById("root"))