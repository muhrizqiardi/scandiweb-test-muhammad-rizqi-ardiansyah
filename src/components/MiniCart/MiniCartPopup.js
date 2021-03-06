import { kebabCase } from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MiniCartItem from "./MiniCartItem";
import {
  MiniCartAction,
  MiniCartList,
  MiniCartTitle,
  MiniCartTotal,
  MiniCartWrapper,
} from "./styles";
import getSymbolFromCurrency from "currency-symbol-map";

class MiniCartPopup extends React.Component {
  getTotal(currency) {
    let total = 0;
    for (const item of this.props.cart) {
      total +=
        item.prices.filter((price) => price.currency === currency)[0].amount *
        item.quantity;
    }
    return total;
  }

  render() {
    return (
      <MiniCartWrapper>
        <MiniCartTitle>
          My Bag,{" "}
          <span className="item-count">
            {this.props.cart.length} item
            {this.props.cart.length > 1 ? "s" : ""}
          </span>
        </MiniCartTitle>
        <MiniCartList>
          {this.props.cart.map((cartItem) => {
            return (
              <MiniCartItem
                apolloClient={this.props.apolloClient}
                cartItem={cartItem}
                key={kebabCase(`${cartItem.cartId} ${cartItem.id}`)}
              />
            );
          })}
        </MiniCartList>
        <MiniCartTotal className="cart-total">
          <span>Total</span>
          <span>
            {getSymbolFromCurrency(this.props.currency)}
            {Math.round(this.getTotal(this.props.currency))}
          </span>
        </MiniCartTotal>
        <MiniCartAction className="cart-action">
          <Link to="/cart" className="view-bag-button">
            View Bag
          </Link>
          <a href="/" className="check-out-button">
            Check Out
          </a>
        </MiniCartAction>
      </MiniCartWrapper>
    );
  }
}

export default connect(
  ({ cart, currency }) => ({ cart: cart, currency: currency }),
  null
)(MiniCartPopup);
