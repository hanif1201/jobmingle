import ChooseItem from "./ChooseItem";
import "./Styles/Choose.css";
import choose001 from "../assets/choose001.png";
import choose002 from "../assets/choose002.png";
import choose003 from "../assets/choose003.png";

const Choose = () => {
  const text01 =
    "We are Completely committed to helping you secure your dream remote job, enabling you live the life you were meant to live.";

  const text02 =
    "We offer the finest digital courses designed to equip you with the skills of your choice, placing you among the top 1% in  the country";

  const text03 =
    "At JobMingle, we prioritize you in every decision we make , ensuring that you receive the best possible experience when using our product";

  return (
    <div className="choose__section">
      <h1 className="choose__section__title">Why Choose Us?</h1>
      <div className="choose">
        <ChooseItem text={text01} image={choose001} />

        <ChooseItem text={text02} image={choose002} />
        <ChooseItem text={text03} image={choose003} />
      </div>
    </div>
  );
};

export default Choose;
