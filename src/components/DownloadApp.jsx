import "./Styles/DownloadApp.css";
import { AiOutlineApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

const DownloadApp = () => {
  return (
    <div className="downloadApp__section">
      <div className="downloadApp__section__content">
        <p className="download__section__paragraph">
          Join the exclusive set of individuals we are currently making their
          dream remote job a reality.
        </p>
        <button className="download__section__button">
          Download JobMingle App Now
          <FaGooglePlay className="googleplay" />
          <AiOutlineApple className="Appleplay" />
        </button>
      </div>
    </div>
  );
};

export default DownloadApp;
