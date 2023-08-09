import { useEffect, useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation, useNavigate } from "react-router-dom";

function Payment(props) {
  const navigate = useNavigate();
  const { state } = useLocation();
  const paymentAmount = state?.paymentAmount;
  const { stripePromise } = props;
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    console.log("paymentAmount", paymentAmount);
    // Create PaymentIntent as soon as the page loads
    createPaymentIntent(paymentAmount);
  }, []);

  async function createPaymentIntent(paymentAmount) {
    try {
      if (paymentAmount) {
        const { data } = await axios.get(
          "http://localhost:4242/create-payment-intent",
          {
            params: {
              amount: Number(paymentAmount),
            },
          }
        );
        if (data?.clientSecret) {
          setClientSecret(data?.clientSecret);
        }
      }
    } catch (error) {
      console.log("createPaymentIntent error", error);
    }
  }

  return (
    <>
      <h1>Payment</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
