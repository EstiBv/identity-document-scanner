import "../stylesheets/App.scss";
import { Route, Switch } from "react-router-dom";
import Camera from "./Camera/Camera";
import CameraError from "./Camera/CameraError";
import CameraTaken from "./Camera/CameraTaken";
import IndexScan from "./Scanner/IndexScan";
import ScanRejected from "./Scanner/ScanRejected";
import ScanAccepted from "./Scanner/ScanAccepted";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={IndexScan} />
      <Route path="/camera">
        <Camera />
      </Route>
      <Route path="/cameraError" component={CameraError} />
      <Route path="/cameraTaken" component={CameraTaken} />
      <Route path="/scanRejected" component={ScanRejected} />
      <Route path="/scanAccepted" component={ScanAccepted} />
    </Switch>
  );
};

export default App;
