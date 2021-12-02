import { 
    BrowserRouter as Router,
    Switch, 
    Route,
} from "react-router-dom";
import Currency from "./Currency";
    

function App() {
    
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Currency />
                </Route>
            </Switch>
        </Router>
    )
}

export default App