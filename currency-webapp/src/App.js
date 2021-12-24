import { 
    BrowserRouter as Router,
    Switch, 
    Route,
} from "react-router-dom";

import TemplateDefault from "./templates/Default"

import Currency from "./pages/CurrencyDolar"
import CurrencyEuro from "./pages/CurrencyEuro"
import CurrencyBTC from "./pages/CurrencyBTC"
import Home from "./pages/Home"
    

function App() {
    
    return (
        <Router>
            <TemplateDefault>
                <Switch>
                    <Route path="/bitcoinhoje">
                        <CurrencyBTC />
                    </Route>
                    <Route path="/eurohoje">
                        <CurrencyEuro />
                    </Route>
                    <Route path="/dolarhoje">
                        <Currency />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </TemplateDefault>
        </Router>
    )
}

export default App