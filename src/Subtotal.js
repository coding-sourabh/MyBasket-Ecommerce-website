import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();

  let totalPrice = 0;
  const [{ basket }, dispatch] = useStateValue();

  basket.forEach(function (item) {
    console.log(item.price);
    totalPrice += item.price;
  });

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Dynamically render the items here */}
              Subtotal ({basket.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input className="subtotal__input" type="checkbox" /> This order
              contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        className="subtotal__button"
        onClick={(e) => history.push("/payment")}
      >
        Procede to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
