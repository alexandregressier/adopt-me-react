const Pet = () =>
  React.createElement("div", {}, [
    React.createElement("h1", {}, "Daïla"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "Golden Retriever"),
  ])

const App = () =>
  React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet),
      React.createElement(Pet),
      React.createElement(Pet),
      
    ]
  )

ReactDOM.render(React.createElement(App), document.getElementById("root"))