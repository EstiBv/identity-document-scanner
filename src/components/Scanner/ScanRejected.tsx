import { Link } from "react-router-dom";
const ScanRejected = (): JSX.Element => {
  return (
    <div className="scanRejected">
      <header className="scanRejected__headerHome">
        <h2 className="scanRejected__headerHome--logo">BankClient</h2>
      </header>
      <main className="scanRejected__mainHome">
        <h2 className="scanRejected__mainHome--title">Scan your ID</h2>
        <p className="scanRejected__mainHome--paragraph">
          Take a picture. It may take time to validate your personal
          information.
        </p>
        <section className="scanRejected__mainHome--cardContainer">
          <div
            className="scanRejected__mainHome--cardBg"
            aria-label="image identity card template"
          ></div>
          <div className="scanRejected__mainHome--msgScan">Rejected</div>
        </section>
        <Link to="/camera" className="scanRejected__mainHome--btnPrimary">
          Retake picture
        </Link>
      </main>
    </div>
  );
};
export default ScanRejected;
