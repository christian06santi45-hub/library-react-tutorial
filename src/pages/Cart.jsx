import React from "react";

const Cart = ({ cart }) => {
console.log("CART DATA", cart)

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>

            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>

              <div className="cart__body">
                {cart.map((book) => {
                  const price =
                    book.salePrice || book.originalPrice;

                  return (
                    <div className="cart__item" key={book.id}>
                      <div className="cart__book">
                        <img
                          src={book.url}
                          className="cart__book--img"
                          alt={book.title}
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {book.title}
                          </span>
                          <span className="cart__book--price">
                            ${price.toFixed(2)}
                          </span>
                          <button className="cart__book--remove">
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          className="cart__input"
                        />
                      </div>

                      <div className="cart__total">
                        ${price.toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="total">
              <div className="total__item total__sub--total">
                <span>Subtotal</span>
                <span>$0.00</span>
              </div>
              <div className="total__item total__sub--tax">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div className="total__item total__sub--price">
                <span>Total</span>
                <span>$0.00</span>
              </div>

              <button
                className="btn btn__checkout no-cursor"
                onClick={() =>
                  alert("Haven't got around to doing this :(")
                }
              >
                Proceed to Checkout
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;