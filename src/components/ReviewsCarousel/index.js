import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {val: 0}

  leftButton = () => {
    const {val} = this.state
    if (val !== 0) {
      this.setState(prevState => ({
        val: prevState.val - 1,
      }))
    }
  }

  rightButton = () => {
    const {val} = this.state
    if (val !== 3) {
      this.setState(prevState => ({
        val: prevState.val + 1,
      }))
    }
  }

  render() {
    const {val} = this.state
    const {reviewsList} = this.props
    return (
      <div className="main-container">
        <h1 className="main-heading">Reviews</h1>

        <div className="side-container">
          <button
            type="button"
            onClick={this.leftButton}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-edit"
            />
          </button>
          <div>
            <img
              src={reviewsList[val].imgUrl}
              className="profile-edit"
              alt={reviewsList[val].username}
            />
            <p>{reviewsList[val].username}</p>
          </div>
          <button
            type="button"
            onClick={this.rightButton}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-edit"
            />
          </button>
        </div>
        <p className="comp">{reviewsList[val].companyName}</p>
        <p className="comp">{reviewsList[val].description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
