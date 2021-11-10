import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './Components/Main'
import Product from './Components/Product'
import ProductDetail from './Components/ProductDetail'
import Tester from './Components/Tester'

class Routes extends React.Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={ Main } />
                    <Route exact path="/products" component={ Product } />
                    <Route exact path="/products/detail/:id" component={ ProductDetail } />
                    <Route exact path="/tester" component={ Tester } />
                </Switch>
            </Router>
        )
    }
}

export default Routes