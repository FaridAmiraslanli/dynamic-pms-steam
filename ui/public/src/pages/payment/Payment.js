import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss"
import {Box, Typography} from "@mui/material"

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
        const res = await axios.get(
          "http://localhost:4242/create-payment-intent",
          {
            params: {
              amount: Number(paymentAmount),
            },
          }
        );
        if (res.data?.clientSecret) {
          setClientSecret(res.data?.clientSecret);
        }
        console.log("res0", res)

      }
    } catch (error) {
      console.log("createPaymentIntent error", error);
    }
  }

  return (
    <Box className="payment">
      <Typography as="h1" color="white" sx={{ fontSize: "30px" }}>
        Payment -{paymentAmount === 20 && "150 credits"}
        {paymentAmount === 40 && "500 credits"}
        {paymentAmount === 90 && "1500 credits"}
      </Typography>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </Box>
  );
}

export default Payment;
