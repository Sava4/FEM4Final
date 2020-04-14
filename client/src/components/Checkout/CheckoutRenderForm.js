import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckoutShipping } from "./CheckoutShipping";
import { ReduxUserInformation } from "./CheckoutContact";
import { ReduxPayment } from "./PaymentForm";
import v4 from "uuid/dist/esm-browser/v4";
import setAuthorizationToken from "../../store/login";
import { OrderIcon, OrderItem, OrderSummary } from "./OrderSummary";
import axios from "axios";
import { setServerCart } from "../../store/shopping-cart";
import { OrderForm } from "../Forms/OrderForm/OrderForm";
import { Spinner } from "../Spinner/Spinner";
import { EmptyCart } from "../ShoppingBag/EmptyCart";
import {
  CheckoutWrapper,
  CustomForm,
  PagesHeader,
  SummaryWrapper
} from "./checkout.styles";
import { OrderMobile } from "./OrderMobile";

export const CheckoutForm = () => {
  const token = useSelector(state => state.login.token);
  setAuthorizationToken(token);
  const [contactOpen, setContactOpen] = useState(true);
  const handleToggleContact = () => setContactOpen(!contactOpen);
  const [shippingOpen, setShippingOpen] = useState(false);
  const handleToggleShipping = () => setShippingOpen(!shippingOpen);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const handleTogglePayment = () => setPaymentOpen(!paymentOpen);
  const dispatch = useDispatch();
  const [contactInformation, setContactInformation] = useState({});
  const [shippingInformation, setShippingInformation] = useState({});
  const [paymentInformation, setPaymentInformation] = useState({});
  const [isOrderFormOpen, setOrderForm] = useState(false);

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [totalPrices, setTotalPrices] = useState([]);
  const [isMobile, setMobile] = useState({});
  const handleWindowSizeChange = () => {
    setMobile({ width: window.innerWidth });
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
  }, []);
  console.log(isMobile);
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
  console.log(isMobile.width);
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
    // axios
    //     .post("http://localhost:5000/orders", newOrder)
    //     .then(newOrder => {
    //       /*Do something with newProduct*/
    //       console.log(newOrder);
    //     })
    //     .catch(err => {
    //       /*Do something with error, e.g. show error to user*/
    //     });
    setOrderForm(true);
    axios
      .delete("http://localhost:5000/cart/")
      .then(() => {
        dispatch(setServerCart([]));
      })
      .catch(err => console.error("Request Error", err));
  };
  console.log("contact", contactInformation);
  console.log("SHIPPING", shippingInformation);
  console.log("PAYMENT", paymentInformation);
  const newOrder = {
    customerId: "5d99ce196d40fb1b747bc5f5",
    deliveryAddress: {
      country: "Ukraine",
      city: "Kiev",
      address: "Kreshchatic Street 56//A",
      postal: "01044"
    },
    shipping: "Kiev 50UAH",
    paymentInfo: "Credit card",
    status: "not shipped",
    email: "saribeg@gmail.com",
    mobile: "+380630000000",
    letterSubject: "Thank you for order! You are welcome!",
    letterHtml:
      "<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>"
  };
  // const newOrder = {
  //   customId: "lolol",
  //   deliveryAddress: {
  //     country: "Ukraine",
  //     city: shippingInformation.shipping,
  //     location: shippingInformation.location,
  //     address: contactInformation.address,
  //   },
  //   email: contactInformation.email,
  //   mobile: contactInformation.phone,
  //   firstName: contactInformation.firstName,
  //   lastName: contactInformation.lastName,
  //   getMyself: contactInformation.getMyself,
  //   contact: contactInformation,
  //   payment: paymentInformation,
  //   shipping: shippingInformation.shipping,
  //   paymentInfo: paymentInformation.payment,
  //   status: "not shipped",
  //   letterSubject: "Thank you for order! You are welcome!",
  //   letterHtml:
  //       "<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>",
  // };
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
              onClick={console.log(paymentInformation)}
            />
          </SummaryWrapper>
        </CheckoutWrapper>
      </Fragment>
    ) : (
      <Fragment>
        <PagesHeader>CHECKOUT</PagesHeader>
        <CheckoutWrapper>
          <SummaryWrapper>
            {contactOpen && <ReduxUserInformation onSubmit={onSubmitContact} />}
            {shippingOpen && <CheckoutShipping onSubmit={onSubmitShipping} />}
            {paymentOpen && (
              <ReduxPayment
                onSubmit={onSubmitPayment}
                onClick={console.log(paymentInformation)}
              />
            )}
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
