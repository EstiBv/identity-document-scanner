import img from "../../assets/scan/id-card.png";
import { Link } from "react-router-dom";
import React from "react";
import { IImage } from "../modelsInterface/IImage";

export default React.memo(function CameraTaken(props: IImage) {
  return (
    <div className="Camera" id="2" role="main">
      <div className="Camera__mainTaken">
        <h2 className="Camera__mainTaken--title">Take a picture</h2>
        <p className="Camera__mainTaken--paragraph">
          Fit your ID card inside the frame.
        </p>
        <p className="Camera__mainTaken--paragraph">
          The picture will be taken automatically.
        </p>
        <Link to="/scanAccepted">
          <section className="Camera__mainTaken--cardContainer">
            {/* include props.img in src */}
            <img
              src={img}
              alt="ID card template"
              className="Camera__mainTaken--cardContainerBg"
            />
          </section>
        </Link>
        <div className="Camera__mainTaken--msgContainer">
          <div
            className="Camera__mainTaken--msgIcon"
            aria-label="image icon check"
          ></div>
          <p className="Camera__mainTaken--msgPicture"> Picture taken!</p>
        </div>
        <Link
          to="/scanAccepted"
          className="Camera__mainTaken--btnCancel"
          aria-labelledby="Cancel"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
});
