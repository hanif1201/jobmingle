import PropTypes from "prop-types";

import "./Styles/Partner.css";

const PartnerItem = ({ image }) => {
  return (
    <>
      <div className="partner__section__content">
        <img src={image} alt="" className="partner__image" />
      </div>
    </>
  );
};

PartnerItem.propTypes = {
  image: PropTypes.string.isRequired,
};

export default PartnerItem;
