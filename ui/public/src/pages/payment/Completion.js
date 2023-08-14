import { Fragment, useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

function Completion(props) {
  const [messageBody, setMessageBody] = useState("");
  const { stripePromise } = props;
  const navigate = useNavigate();

  useEffect(() => {
    // navigate("/home")
    if (!stripePromise) return;

    stripePromise.then(async (stripe) => {
      const url = new URL(window.location);
      const clientSecret = url.searchParams.get("payment_intent_client_secret");
      const { error, paymentIntent } = await stripe.retrievePaymentIntent(
        clientSecret
      );

      setMessageBody(
        error ? (
          `> ${error.message}`
        ) : (
          <>
            &gt; Payment {paymentIntent.status}:{" "}
            <a
              href={`https://dashboard.stripe.com/test/payments/${paymentIntent.id}`}
              target="_blank"
              rel="noreferrer"
            >
              {paymentIntent.id}
            </a>
          </>
        )
      );
    });
  }, [stripePromise]);

  return (
    <div className="payment">
      <h1>Thank you!</h1>
      <a href="/">home</a>
      <div
        id="messages"
        role="alert"
        style={messageBody ? { display: "block" } : {}}
      >
        {messageBody}
      </div>
    </div>
  );
}

export default Completion;
