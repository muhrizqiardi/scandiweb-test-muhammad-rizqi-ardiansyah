import styled from "styled-components";

export const ProductPageWrapper = styled.div`
  padding: 80px 100px;
`;

export const ProductPageDescription = styled.div`
  font-family: Roboto, Arial, Helvetica, sans-serif;
`;

export const ProductPageSkeletonWrapper = styled.div`
  padding: 80px 100px;
  .product-page-skeleton {
    img {
      width: 100%;
    }
  }
`;

export const ProductPageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 50px;
`;

export const ProductPageGalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 20px;
  .gallery-image img {
    width: 100%;
    height: 360px;
    background-color: lightgray;
    object-fit: contain;
  }
`;

export const ProductPageImageSelector = styled.div`
  height: 360px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  input[type="radio"] {
    display: none;
  }
  input[type="radio"]:checked + label img {
    border: 3px solid #5ece7b;
  }
  label img {
    width: 73px;
    height: 73px;
    margin-bottom: 10px;
    cursor: pointer;
    border: 3px solid transparent;
    object-fit: cover;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const ProductPageDetailWrapper = styled.form`
  width: 360px;
  display: flex;
  flex-direction: column;
  opacity: ${({ inStock }) => (inStock ? "1" : "0.3")};
`;

export const BrandName = styled.div`
  margin-bottom: 4px;
  font-size: 32px;
  font-weight: 500;
`;

export const ProductName = styled.div`
  margin-bottom: 32px;
  font-size: 32px;
`;

export const AttributeSelector = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .attribute-item-radio {
    width: 0;
    height: 0;
    background: none;
    border: none;
    display: none;
  }
  .attribute-item-radio {
    + .attribute-item-label {
      height: 40px;
      padding: 0 15px;
      margin: 0 10px 10px 0;
      border: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    &:hover + .attribute-item-label {
      background-color: lightgray;
    }
    &:checked + .attribute-item-label {
      background-color: black;
      color: white;
    }
    &:disabled + .attribute-item-label {
      cursor: default;
    }
    &:disabled:hover + .attribute-item-label {
      background-color: unset;
    }
    &.not-available {
      filter: opacity(0.4);
      &:hover {
        background-color: white;
        cursor: not-allowed;
      }
    }
    > * {
      cursor: pointer;
    }
    input[type="radio"] {
      width: 0;
      height: 0;
      border: none;
      opacity: 0;
    }
  }
`;

export const SwatchView = styled.div`
  width: 13px;
  height: 13px;
  margin-right: 10px;
  border-radius: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ itemValue }) =>
    itemValue === "#000000" ? "white" : "black"};
  background-color: ${({ itemValue }) => itemValue};
  .attribute-item-radio:checked + .attribute-item-label > & {
    border-color: white;
  }
`;

export const AddToCartButton = styled.button`
  height: 52px;
  margin: 20px 0;
  background-color: #5ece7b;
  color: white;
  font-family: inherit;
  font-weight: 500;
  border: none;
  cursor: pointer;
  &:disabled {
    background-color: darkgray;
    cursor: default;
  }
`;

export const PriceTitle = styled.div`
  margin-bottom: 5px;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
`;

export const AttributeTitle = styled.div`
  margin-bottom: 5px;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Price = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
