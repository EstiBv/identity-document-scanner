import img from "../../assets/scan/id-card.png";
import React from "react";
import { Link } from "react-router-dom";
import { IImage } from "../modelsInterface/IImage";

export default React.memo(function CameraError(props: IImage) {
  return (
    <div className="Camera" role="main">
      <div className="Camera__mainError">
        <h2 className="Camera__mainError--title">Take a picture</h2>
        <p className="Camera__mainError--paragraph">
          Fit your ID card inside the frame.
        </p>
        <p className="Camera__mainError--paragraph">
          The picture will be taken automatically.
        </p>
        <Link to="/scanRejected">
          <section className="Camera__mainError--cardContainer">
            <img
              // include props.img in scr
              src={img}
              alt="ID card"
              className="Camera__mainError--cardContainerBg"
            />
          </section>
        </Link>
        <article className="Camera__main--msgContainer">
          <div className="Camera__main--msgIcon"></div>
          <p className="Camera__main--msgPicture"> Too much glare</p>
        </article>
        <Link
          to="/scanRejected"
          className="Camera__mainError--btnCancel"
          aria-labelledby="Cancel"
        >
          {" "}
          Cancel
        </Link>
      </div>
    </div>
  );
});
