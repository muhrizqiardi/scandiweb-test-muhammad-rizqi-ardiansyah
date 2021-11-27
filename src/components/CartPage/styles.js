import styled from "styled-components";

export const CartPageWrapper = styled.main`
  padding: 80px 100px;
`;

export const CartPageTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 60px;
`;

export const CartItemWrapper = styled.div`
  height: 200px;
  padding: 16px;
  border-top: 1px solid #e5e5e5;
  display: grid;
  grid-template-columns: 1fr 45px 150px;
  gap: 20px;
`;

export const CartItemCol1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemBrand = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

export const ItemName = styled.div`
  font-size: 32px;
`;

export const ItemPrice = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const AttributeSelector = styled.div`
  margin-top: 32px;
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

export const CartItemCol2 = styled.div`
  .qty-counter {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    button {
      border: none;
      background: none;
      padding: 0;

      width: 45px;
      height: 45px;
      border: 1px solid black;
    }
  }
`;

export const CartItemCol3 = styled.div`
  width: 150px;
  height: 200px;
`;

export const CartItemGallery = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  img {
    width: 150px;
    height: 200px;
    object-fit: cover;
  }
  .gallery-arrow-container {
    width: 0px;
    height: 200px;
    overflow-x: visible;
    .gallery-arrow-left,
    .gallery-arrow-right {
      z-index: 2;
      width: 30px;
      height: 200px;
      position: relative;
      display: flex;
      align-items: center;
      left: 0;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      &:hover {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.4) 0%,
          rgba(255, 255, 255, 0) 100%
        );
      }
    }
    .gallery-arrow-right {
      left: unset;
      right: 30px;
      background: linear-gradient(
        270deg,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      &:hover {
        background: linear-gradient(
          270deg,
          rgba(0, 0, 0, 0.4) 0%,
          rgba(255, 255, 255, 0) 100%
        );
      }
    }
  }
`;