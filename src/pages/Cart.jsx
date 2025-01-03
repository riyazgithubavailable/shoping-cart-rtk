import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  clearCart,
  decreaseCart,
  getTotals,
  removeProduct,
} from "../redux/features/cartSlice";

import { Link } from "react-router-dom";
import Navbaar from "../components/Navbaar";
import GooglePayButton from "@google-pay/button-react";


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addProduct(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeProduct(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <Navbaar />
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is currently empty</p>
            <div className="start-shopping">
              <Link to="/home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
            <div className="cart-items">
              {cart.cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.image} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.name}</h3>
                      <p>{cartItem.desc}</p>
                      <button
                        className="btn"
                        onClick={() => handleRemoveFromCart(cartItem)}
                      >
                        Remove 
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">₹{cartItem.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleAddToCart(cartItem)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    ₹{cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <button
                className="clear-btn btn"
                onClick={() => handleClearCart()}
              >
                Clear Cart
              </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="amount">₹{cart.cartTotalAmount}</span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <div className="google-pay-button-container">
                  <GooglePayButton
                    environment="TEST"
                    paymentRequest={{
                      apiVersion: 2,
                      apiVersionMinor: 0,
                      allowedPaymentMethods: [
                        {
                          type: "CARD",
                          parameters: {
                            allowedAuthMethods: [
                              "PAN_ONLY",
                              "CRYPTOGRAM_3DS",
                            ],
                            allowedCardNetworks: ["MASTERCARD", "VISA"],
                          },
                          tokenizationSpecification: {
                            type: "PAYMENT_GATEWAY",
                            parameters: {
                              gateway: "example",
                              gatewayMerchantId: "exampleGateMerchantId",
                            },
                          },
                        },
                      ],
                      merchantInfo: {
                        merchantId: "12345678901234567890",
                        merchantName: "Test Merchant",
                      },
                      transactionInfo: {
                        totalPriceStatus: "FINAL",
                        totalPriceLabel: "Total",
                        totalPrice: cart.cartTotalAmount.toFixed(2),
                        currencyCode: "INR",
                        countryCode: "IN",
                      },
                      shippingAddressRequired: true,
                      callbackIntents: ["PAYMENT_AUTHORIZATION"],
                    }}
                    onLoadPaymentData={(paymentRequest) => {
                      console.log("Payment Data Loaded:", paymentRequest);
                    }}
                    onPaymentAuthorized={(paymentData) => {
                      console.log("Payment Authorized:", paymentData);
                    
                      return { transactionState: "SUCCESS" };
                    }}
                    existingPaymentMethodRequired={false}
                    buttonColor="black"
                    buttonType="checkout"
                  />
                </div>
                <div className="continue-shopping">
                  <Link to="/home">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
