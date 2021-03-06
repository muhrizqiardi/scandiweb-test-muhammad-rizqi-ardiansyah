import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { gql } from "@apollo/client";
import Loading from "../Loading";
import cartItemSkeleton from "../../assets/skeleton/cart-item-skeleton.png";
import {
  CartItemWrapper,
  CartItemCol1,
  CartItemCol2,
  CartItemCol3,
  CartItemGallery,
  ItemBrand,
  ItemPrice,
  ItemName,
  AttributeSelector,
  CartItemSkeletonWrapper,
  AttributeTitle,
} from "./styles";
import AttributeItem from "./AttributeItem";
import { kebabCase, find } from "lodash";
import { connect } from "react-redux";
import { decrementItem, incrementItem } from "../../store/actions";
import getSymbolFromCurrency from "currency-symbol-map";

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetail: null,
      currentImage: 0,
    };

    this.getProductDetail = this.getProductDetail.bind(this);
  }

  componentDidMount() {
    this.getProductDetail(this.props.cartItem.id);
  }

  getProductDetail(productId = "") {
    let queryResult;
    this.setState({ loading: true });
    const GET_PRODUCT_DETAIL = gql`
      query GetProductDetail {
        product(id: "${productId}") {
          id
          name
          inStock
          gallery
          description
          attributes {
            id
            name
            type
            items {
              displayValue
              value
              id
            }
          }
          prices {
            currency
            amount
          }
          brand
        }
      }    
    `;
    this.props.apolloClient
      .query({
        query: GET_PRODUCT_DETAIL,
        fetchPolicy: "network-only",
      })
      .then((result) => {
        queryResult = result.data;
        if (queryResult.product !== null) {
          this.setState(
            {
              productDetail: queryResult,
            },
            () => {
              this.setState({ loading: false });
            }
          );
        } else {
          this.setState(
            {
              productDetail: false,
            },
            () => {
              this.setState({ loading: false });
            }
          );
        }
      })
      .catch((error) => console.log(error));
  }

  render() {
    return this.props.loading ? (
      <Loading />
    ) : this.state.productDetail ? (
      <>
        <Helmet>
          <title>{`Cart Page | ScandiStore`}</title>
        </Helmet>
        <CartItemWrapper>
          <CartItemCol1>
            <ItemBrand>{this.state.productDetail.product.brand}</ItemBrand>
            <ItemName>{this.state.productDetail.product.name}</ItemName>
            <ItemPrice>
              {getSymbolFromCurrency(this.props.currency)}
              {Math.round(
                this.props.cartItem.prices.filter(
                  (price) => price.currency === this.props.currency
                )[0].amount * this.props.cartItem.quantity
              )}
            </ItemPrice>
            {this.state.productDetail.product.attributes.map((attribute) => {
              return (
                <>
                  <AttributeTitle className="attribute-title">
                    {attribute.name}:
                  </AttributeTitle>
                  <AttributeSelector className="attribute-selector">
                    {attribute.items.map((item) => {
                      const radioGroupName = kebabCase(
                        `${this.props.cartItem.cartId} ${this.props.cartItem.id} ${this.state.productDetail.product.name} ${attribute.name} radio group`
                      );
                      const attributeItemId = kebabCase(
                        `${this.props.cartItem.cartId} ${this.props.cartItem.id} ${this.state.productDetail.product.name} ${attribute.name} ${item.displayValue}`
                      );
                      const checkedValue = find(
                        this.props.cartItem.attributes,
                        {
                          attributeName: attribute.name,
                        }
                      ).attributeValue;
                      return (
                        <AttributeItem
                          radioGroupName={radioGroupName}
                          attributeItemId={attributeItemId}
                          attribute={attribute}
                          item={item}
                          key={attributeItemId}
                          checkedValue={checkedValue ?? false}
                        />
                      );
                    })}
                  </AttributeSelector>
                </>
              );
            })}
          </CartItemCol1>
          <CartItemCol2>
            <div className="qty-counter">
              <button
                onClick={() => {
                  this.props.incrementItem(this.props.cartItem.cartId);
                }}
              >
                +
              </button>
              <span>{this.props.cartItem.quantity}</span>
              <button
                onClick={() => {
                  this.props.decrementItem(this.props.cartItem.cartId);
                }}
              >
                -
              </button>
            </div>
          </CartItemCol2>
          <CartItemCol3>
            <CartItemGallery>
              {this.state.productDetail.product.gallery.length > 1 &&
              this.state.currentImage !== 0 ? (
                <div className="gallery-arrow-container">
                  <div
                    className="gallery-arrow-left"
                    onClick={() => {
                      this.setState((state) => {
                        if (state.currentImage === 0) {
                          return {
                            currentImage:
                              this.state.productDetail.product.gallery.length -
                              1,
                          };
                        } else {
                          return {
                            currentImage: state.currentImage - 1,
                          };
                        }
                      });
                    }}
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 18L9 12L15 6"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              ) : (
                <></>
              )}
              <img
                src={
                  this.state.productDetail.product.gallery[
                    this.state.currentImage
                  ]
                }
                alt={this.state.productDetail.product.name}
              />
              {this.state.productDetail.product.gallery.length > 1 &&
              this.state.currentImage !==
                this.state.productDetail.product.gallery.length - 1 ? (
                <div className="gallery-arrow-container">
                  <div
                    className="gallery-arrow-right"
                    onClick={() => {
                      this.setState((state) => {
                        if (
                          state.currentImage >=
                          this.state.productDetail.product.gallery.length - 1
                        ) {
                          return {
                            currentImage: 0,
                          };
                        } else {
                          return {
                            currentImage: state.currentImage + 1,
                          };
                        }
                      });
                    }}
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </CartItemGallery>
          </CartItemCol3>
        </CartItemWrapper>
      </>
    ) : (
      <CartItemSkeletonWrapper>
        <img src={cartItemSkeleton} alt="Cart Item Skeleton Loading" />
      </CartItemSkeletonWrapper>
    );
  }
}

export default connect(null, { incrementItem, decrementItem })(CartItem);
