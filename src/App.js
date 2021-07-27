import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./App.scss";

// PAGES
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";

/**
 * Default App Component
 */
function App() {
  return (
    <div className="App">
          <Router>
            <Route path="/" component={HomePage} />
            <Route component={NotFound} />
          </Router>
        </div>
  );
}

export default App;