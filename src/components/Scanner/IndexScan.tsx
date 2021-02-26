import img from "../../assets/scan/ID-bg.svg";
import { Link } from "react-router-dom";
const IndexScanner: React.FC<{}> = () => {
  return (
    <div className="scanEmpty">
      <header className="scanEmpty__headerHome">
        <h2 className="scanEmpty__headerHome--logo">BankClient</h2>
      </header>
      <main className="scanEmpty__mainHome">
        <h2 className="scanEmpty__mainHome--title">Scan your ID</h2>
        <p className="scanEmpty__mainHome--paragraph">
          Take a picture. It may take time to validate your personal
          information.
        </p>
        <section className="scanEmpty__mainHome--cardContainer">
          <div className="scanEmpty__mainHome--cardBg">
            <img
              src={img}
              alt="ID card template"
              className="scanEmpty__mainHome--cardSVG"
            />
          </div>
        </section>
        <Link
          to="/camera"
          className="scanEmpty__mainHome--btnPrimary"
          aria-label="enter"
        >
          Take picture
        </Link>
      </main>
    </div>
  );
};
export default IndexScanner;
