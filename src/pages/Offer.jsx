import { useParams } from "react-router-dom";

const Offer = () => {
  const { offerId } = useParams();
  return <main>{offerId}</main>;
};

export default Offer;
