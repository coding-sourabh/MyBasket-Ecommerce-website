import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://s3-us-west-2.amazonaws.com/media.forumbee.com/i/f80e233b-d02b-42d9-a744-fe2b7942e965/h/547.png"
        />

        <div className="checkout__title">
          <h3>{user?.email}</h3>
          {/* question mark very imp. here if suppose it takes time to load from firebase then it will just prevent the error or something like that */}
          <h2>Your shopping basket</h2>
        </div>

        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
