import React from "react"
import {render} from "react-dom"

const Pet = (props) =>
  React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ])

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