import PartnerItem from "./PartnerItem";
import "./Styles/Partner.css";
import Binance from "../assets/Binance.png";
import Google from "../assets/Google.png";
import UNESCO from "../assets/UNESCO.png";

const Partner = () => {
  return (
    <div className="partner__section">
      <h1 className="partner__section__title">Our Partners and Sponsors</h1>
      <div className="partner">
        <PartnerItem image={Google} />
        <PartnerItem image={UNESCO} />
        <PartnerItem image={Binance} />
        <PartnerItem image={Google} />
        <PartnerItem image={UNESCO} />
        <PartnerItem image={Binance} />
      </div>
    </div>
  );
};

export default Partner;
