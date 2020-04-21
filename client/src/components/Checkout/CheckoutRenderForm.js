import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckoutShipping } from "./CheckoutShipping";
import { ReduxUserInformation } from "./CheckoutContact";
import { ReduxPayment } from "./CheckoutPaymentForm";
import v4 from "uuid/dist/esm-browser/v4";
import { setAuthorizationToken } from "../../store/login";
import { OrderIcon, OrderItem, OrderSummary } from "./OrderSummary";
import axios from "axios";
import { setServerCart } from "../../store/shopping-cart";
import { OrderForm } from "../Forms/OrderForm/OrderForm";
import { Spinner } from "../Spinner/Spinner";
import { EmptyCart } from "../ShoppingBag/EmptyCart";
import {
  CheckoutWrapper,
  PagesHeader,
  SummaryWrapper
} from "./checkout.styles";
import { OrderMobile } from "./OrderMobile";

export const CheckoutForm = () => {
  const token = useSelector(state => state.login.token);
  const user = useSelector(state => state.user);
  setAuthorizationToken(token);
  const dispatch = useDispatch();
  const [contactOpen, setContactOpen] = useState(true);
  const [shippingOpen, setShippingOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [contactInformation, setContactInformation] = useState({});
  const [shippingInformation, setShippingInformation] = useState({});
  const [paymentInformation, setPaymentInformation] = useState({});
  const [isOrderFormOpen, setOrderForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [totalPrices, setTotalPrices] = useState([]);
  const [isMobile, setMobile] = useState({});
  const handleToggleContact = () => setContactOpen(!contactOpen);
  const handleToggleShipping = () => setShippingOpen(!shippingOpen);
  const handleWindowSizeChange = () => {
    setMobile({ width: window.innerWidth });
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
  }, []);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/cart")
      .then(resp => {
        setProducts(resp.data.products);
        const PriceArray = resp.data.products.map(item => {
          parseInt(item);
          return item.cartQuantity * item.product.currentPrice;
        });
        setTotalPrices(
          PriceArray.reduce(function(a, b) {
            return a + b;
          })
        );
        resp.data === null
          ? dispatch(setServerCart([]))
          : dispatch(setServerCart(resp.data.products));
      })
      .catch(err => {
        console.error("Request Error", err);
        dispatch(setServerCart([]));
      })
      .finally(() => setLoading(false));
  }, [token, dispatch]);
  const ListProduct = products.map(item => {
    return (
      <OrderItem
        key={v4()}
        itemNo={item.product.itemNo}
        id={item.id}
        name={item.product.name}
        previousPrice={item.product.currentPrice}
        cartQuantity={item.cartQuantity}
        total={item.cartQuantity * item.product.currentPrice}
        img={item.product.imageUrls[0]}
      />
    );
  });
  const cartProps = useSelector(state => {
    return state.shoppingCart.srvCart;
  });
  const ListIcons = products.map(item => {
    return (
      <OrderIcon
        key={v4()}
        itemNo={item.product.itemNo}
        img={item.product.imageUrls[0]}
      />
    );
  });

  const onSubmitContact = formData => {
    setContactInformation(formData);
    handleToggleContact();
    setShippingOpen(!shippingOpen);
  };
  const onSubmitShipping = formData => {
    setShippingInformation(formData);
    handleToggleShipping();
    setPaymentOpen(!paymentOpen);
  };
  const onSubmitPayment = formData => {
    setPaymentInformation(formData);
    setOrderForm(true);
    axios
      .post("http://localhost:5000/orders", newOrder)
      .then(newOrder => {
        /*Do something with newProduct*/
        console.log("NewOrder", newOrder);
      })
      .catch(err => {
        /*Do something with error, e.g. show error to user*/
      });
    axios
      .delete("http://localhost:5000/cart/")
      .then(() => {
        dispatch(setServerCart([]));
      })
      .catch(err => console.error("Request Error", err));
  };

  const newOrder = {
    customerId: "5d99ce196d40fb1b747bc5f5",
    deliveryAddress: {
      country: "Ukraine",
      city: shippingInformation.shipping,
      location: shippingInformation.location,
      address: contactInformation.address
    },
    email: contactInformation.email,
    mobile: contactInformation.phone,
    firstName: contactInformation.firstName,
    lastName: contactInformation.lastName,
    getMyself: contactInformation.getMyself,
    contact: contactInformation,
    payment: paymentInformation,
    shipping: shippingInformation.shipping,
    paymentInfo: paymentInformation.payment,
    status: "not shipped",
    letterSubject: "Thank you for order! You are welcome!",
    letterHtml:
      "<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>"
  };
  return cartProps.length > 0 ? (
    loading ? (
      <CheckoutWrapper spinner={"spinner"}>
        <Spinner />
      </CheckoutWrapper>
    ) : window.matchMedia("(max-width: 800px)").matches ||
      isMobile.width < 800 ? (
      <Fragment>
        <PagesHeader>CHECKOUT</PagesHeader>
        <CheckoutWrapper flexDirection={"column"}>
          <SummaryWrapper width={"full"}>
            <OrderMobile
              icons={ListProduct}
              totalPrices={totalPrices}
              onSubmit={onSubmitPayment}
            />
          </SummaryWrapper>
        </CheckoutWrapper>
      </Fragment>
    ) : (
      <Fragment>
        <PagesHeader>CHECKOUT</PagesHeader>
        <CheckoutWrapper>
          <SummaryWrapper>
            {contactOpen && (
              <ReduxUserInformation
                onSubmit={onSubmitContact}
                initialValues={{
                  firstName: user.firstName,
                  lastName: user.lastName,
                  email: user.email
                }}
              />
            )}
            {shippingOpen && <CheckoutShipping onSubmit={onSubmitShipping} />}
            {paymentOpen && <ReduxPayment onSubmit={onSubmitPayment} />}
          </SummaryWrapper>
          <SummaryWrapper>
            {" "}
            <OrderSummary icons={ListProduct} totalPrices={totalPrices} />{" "}
          </SummaryWrapper>
        </CheckoutWrapper>
      </Fragment>
    )
  ) : (
    <SummaryWrapper width={"full"}>
      {isOrderFormOpen && (
        <OrderForm
          onClose={() => setOrderForm(false)}
          icons={ListIcons}
          email={contactInformation.email || paymentInformation.email}
        />
      )}
      {window.matchMedia("(max-width: 800px)").matches ||
      isMobile.width < 800 ? (
        isOrderFormOpen ? null : (
          <EmptyCart text={"Your Shopping Bag is currently empty."} />
        )
      ) : (
        <EmptyCart text={"Your Shopping Bag is currently empty."} />
      )}
    </SummaryWrapper>
  );
};
