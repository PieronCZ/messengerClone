import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./containers/Login";

export const Routes: FC = () => {
    return <Router>
        <Switch>
            {/* <Route path="/chats" component={Chats} /> */}
            <Route path="/" component={Login} />
        </Switch>
    </Router>
}
