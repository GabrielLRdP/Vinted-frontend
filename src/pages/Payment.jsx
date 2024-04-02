import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51P16VhRqqmbICiGymmy6kaYFMVzr0tBdu7IZ3h0Dg2ScSNPvslhiYN04v7yVGKV1IfkKDidyQrlNomCo9XIDa5Zp00OUdJsCei"
);

const Payment = ({ state }) => {
  //   const location = useLocation();
  //   const { title, price } = location.state;
  const options = {
    // Type de transaction
    mode: "payment",
    // Montant de la transaction
    amount: "10",
    // Devise de la transaction
    currency: "eur",
    // On peut customiser l'apparence ici
    appearance: {
      /*...*/
    },
  };
  return (
    // Le composant Elements doit contenir toute notre logique de paiement
    // On lui donner la preuve que nous sommes connectés et les options de paiement
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;
