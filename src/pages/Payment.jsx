import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51P16VhRqqmbICiGymmy6kaYFMVzr0tBdu7IZ3h0Dg2ScSNPvslhiYN04v7yVGKV1IfkKDidyQrlNomCo9XIDa5Zp00OUdJsCei"
);

const Payment = () => {
  const location = useLocation();
  const { title, price } = location.state;
  const transportFees = 0.8;
  const insuranceFees = 0.4;
  let total = price / 100 + transportFees + insuranceFees;
  total = total.toFixed(2);

  const options = {
    // Type de transaction
    mode: "payment",
    // Montant de la transaction
    amount: price,
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
    <main className="main-payment-page">
      <div className="container">
        <div className="payment-recap">
          <h3 className="payment-title">Récapituratif de la commande</h3>
          <section className="payment-details">
            <div className="payment-element">
              <p>Commande</p>
              <p>{price / 100} €</p>
            </div>
            <div className="payment-element">
              <p>Frais protection acheteurs</p>
              <p>{insuranceFees} €</p>
            </div>
            <div className="payment-element">
              <p>Frais de port</p>
              <p>{transportFees} €</p>
            </div>
          </section>
          <section className="total-and-description">
            <div className="payment-element total">
              <p>Total</p>
              <p>{total} €</p>
            </div>
            <p className="description">
              Il ne vous reste plus qu'une étape pour vous offir {title}. Vous
              allez payer {total} € (frais de port et frais de protection
              inclus)
            </p>
          </section>

          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </main>
  );
};

export default Payment;
