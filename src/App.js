import { 
  BrowserRouter as Router,
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
    <Router>
      <div className="App">
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFound} />
        </Switch>
        </div>
    </Router>
  );
}

export default App;
