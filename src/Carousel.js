import {Component} from "react"

class Carousel extends Component {
  state = {
    active: 0,
  }

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  }

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index
    })
  }

  render() {
    const {active} = this.state
    const {images} = this.props

    return <div className="carousel">
      <img src={images[active]} alt="animal"/>
      <div className="carousel-smaller">
        {images.map((image, index) =>
          <img
            onClick={this.handleIndexClick}
            key={image}
            src={image}
            data-index={index}
            className={index === active ? "active" : ""}
            alt="Animal thumbnail"
          />,
        )}
      </div>
    </div>
  }
}

export default Carousel