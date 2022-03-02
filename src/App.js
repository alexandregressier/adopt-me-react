import {render} from "react-dom"
import {StrictMode} from "react"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Details from "./Details"
import SearchParams from "./SearchParams"

const App = () =>
  <StrictMode>
    <BrowserRouter>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/" element={<SearchParams/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>

render(<App/>, document.getElementById("root"))