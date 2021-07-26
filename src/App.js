import { 
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import "./App.scss";

// PAGES
import HomePage from "./pages/Home";

/**
 * Default App Component
 */
function App() {
  return (
    <Router>
      <div className="App">
          <Route path="/" component={HomePage} />
      </div>
    </Router>
  );
}

export default App;