import React from "react"
import {render} from "react-dom"
import Pet from "./Pet"

const App = () =>
  React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Daïla",
        animal: "Dog",
        breed: "Golden Retriever",
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel",
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "Cat",
        breed: "Mix",
      }),
    ],
  )

render(React.createElement(App), document.getElementById("root"))