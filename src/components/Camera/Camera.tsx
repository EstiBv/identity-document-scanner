import CameraTaken from "./CameraTaken";
import CameraError from "./CameraError";
import { MouseEvent, useState, useEffect } from "react";
import { IData } from "../modelsInterface/IData";
import getDataApi from "../services/GetData";
import Loader from "./Loader";

const Camera: React.FC = () => {
  // states
  const [data, setData] = useState<IData | undefined>();
  const [isLoading, setIsLoading] = useState<boolean | undefined>(false);
  const [loader, setLoader] = useState<boolean | undefined>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [image, setImage] = useState<CanvasRenderingContext2D | String>("");

  // useEffect
  useEffect(() => {
    getDataApi().then((data) => {
      setData(data);
      setImage(urlCamera.url);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // get Data from Api
  const resultDataApi = data?.outcome;
  // url
  let urlCamera = { url: "" };

  // event camera
  const handleCamera = (ev: MouseEvent) => {
    // Get access to the camera
    let video: HTMLVideoElement = document.getElementsByTagName("video")[0];

    if (
      video &&
      navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia
    ) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
          video.play();
        });

      let canvas = document.getElementById("canvas") as HTMLCanvasElement;
      let context: CanvasRenderingContext2D = canvas.getContext("2d")!;
      context.drawImage(video, 0, 0, 289, 175);
      // try to get image
      context.createImageData(289, 175);
      context.fill();
      // try to get url image by props
      urlCamera.url = canvas.toDataURL("image/png");
      urlCamera.url.replace(/^data:image\/(png|jpg);base64,/, "");
      setLoader(true);
    }
    setTimeout(() => {
      setIsLoading(true);
      setLoader(false);
    }, 8000);
  };

  const renderResult = () => {
    if (isLoading === true && resultDataApi === "Approved") {
      return <CameraTaken img={urlCamera.url} />;
    } else if (isLoading === true && resultDataApi !== "Approved") {
      return <CameraError img={urlCamera.url} />;
    }
  };

  return (
    <div className="Camera" role="main">
      {renderResult()}
      <div className="Camera">
        <div className="Camera__main">
          <h2 className="Camera__main--title">Take a picture</h2>
          <p className="Camera__main--paragraph">
            Fit your ID card inside the frame.
          </p>
          <p className="Camera__main--paragraph">
            The picture will be taken automatically.
          </p>

          <section
            className="Camera__main--cardContainer"
            onClick={handleCamera}
          >
            <video id="video" width="289" height="175" autoPlay></video>
            <canvas id="canvas" width="289" height="175"></canvas>
          </section>
          <div className="Camera__main--msgContainer">
            {loader === true ? <Loader /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Camera;
