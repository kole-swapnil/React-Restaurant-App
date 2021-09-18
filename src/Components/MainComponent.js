import React, { Component } from 'react';
import Menu from '../Components/MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect} from 'react-router-dom';
import Contact from './ContactComp';

class MainComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
        dishes: DISHES,
        selectedDish: null
        };
    }

    render() {
        console.log(this.state.dishes);
        return (
        <div>
            <Header/>
            <Switch>
                <Route path="/home" component={Home} />
                <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
                <Route exact path="/contactus" component={Contact}/>
                <Redirect to="/home" />
            </Switch>
            <Footer/>
        </div>  
        );
    }
}

export default MainComponent;
