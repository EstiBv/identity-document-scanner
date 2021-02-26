import { Link } from "react-router-dom";
const ScanAccepted = (): JSX.Element => {
  return (
    <div className="scanAccepted">
      <header className="scanAccepted__headerHome">
        <h2 className="scanAccepted__headerHome--logo">BankClient</h2>
      </header>
      <main className="scanAccepted__mainHome">
        <h2 className="scanAccepted__mainHome--title">Scan your ID</h2>
        <p className="scanAccepted__mainHome--paragraph">
          Take a picture. It may take time to validate your personal
          information.
        </p>
        <Link to="/" className="scanAccepted__mainHome--linkRoute">
          <section className="scanAccepted__mainHome--cardContainer">
            <div
              className="scanAccepted__mainHome--cardBg"
              aria-label="image identity card template"
            ></div>
            <div className="scanAccepted__mainHome--msgScan">Accepted</div>
          </section>
        </Link>
      </main>
    </div>
  );
};
export default ScanAccepted;
