import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
const App = () => (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
            </Switch>
        </BrowserRouter>
    </div>
);

export default App;
