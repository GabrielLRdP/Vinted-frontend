import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (elements == null) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(error.message);
      return;
    }

    const response = await axios.post(
      "https://site--backend--n5fkvp4ymxn4.code.run/payment"
    );

    const clientSecret = response.data.client_secret;

    const stripeResponse = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "http://localhost:5173/",
      },
      redirect: "if_required",
    });

    if (stripeResponse.error) {
      setErrorMessage(stripeResponse.error.message);
    }
    if (stripeResponse.paymentIntent.status === "succeeded") {
      setCompleted(true);
    }

    setIsLoading(false);
  };

  return completed ? (
    <p>Paiement effectué</p>
  ) : (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || !elements || isLoading}>
        Pay
      </button>
      {/* Éventuel message d'erreur */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;
