import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//included react-router-app , to route multiple pages in react.
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IMCKjLYvOcTW8sSAMXX1GKtkKPfIatGYkHDRITb4nXS9SxqrihdfEl8CpegvpBXfHxylUjr9DF0TWNh1u5j5WNQ001qcGTeW5"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will run only once when app component loads...
    auth.onAuthStateChanged((authUser) => {
      // whenever authentication state changes like login and logout of some user.
      // console.log("The User is >>>", authUser);

      if (authUser) {
        //the user just loged in or was logged in

        dispatch({
          // Put into the data layer with this logged in user = authUser
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out

        dispatch({
          // Set the user as null in data layer after logged out
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            {/*wrap payment inside Element for stripe usage*/}
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route Path="/">
            <Header />
            {/*Default Route always at the bottom otherwise not gonna reach here*/}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


// 48cae4  light
// 0096c7  dark