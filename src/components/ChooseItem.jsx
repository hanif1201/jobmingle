import PropTypes from "prop-types";

const ChooseItem = ({ image, text }) => {
  return (
    <>
      <div className="choose__section__content">
        <img src={image} alt="" className="choose__image" />
        <h3 className="choose__title">{text}</h3>
      </div>
    </>
  );
};

ChooseItem.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ChooseItem;
