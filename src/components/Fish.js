import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    addToOrder:  PropTypes.func,
  }
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  }
   render() {
     const { image, name, price, desc, status } = this.props.details;
     const isAvailable = status === "available";
    return (
      <li className="menu-fish">
         <img src={this.props.details.image} alt={this.props.details.name} />
         <h3 className="fish-name">{name}
          <span className="price">{formatPrice(price)}</span>
         </h3>
         <p className="desc">{desc}</p>
         <button disabled={!isAvailable} onClick={this.handleClick}>{isAvailable ? 'Add To Order' : 'Sold out!'}</button>
      </li>
    )
  }
}

export default Fish;