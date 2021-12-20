import { 
    BrowserRouter as Router,
    Switch, 
    Route,
} from "react-router-dom";

import TemplateDefault from "./templates/Default"

import Currency from "./pages/Currency";
import Home from "./pages/Home";
    

function App() {
    
    return (
        <TemplateDefault>
            <Router>
                <Switch>
                    <Route path="/dolarhoje">
                        <Currency />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </TemplateDefault>
    )
}

export default App