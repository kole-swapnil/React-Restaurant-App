import React, { Component } from 'react';
import Menu from '../Components/MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';


class MainComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
        dishes: DISHES,
        selectedDish: null
        };
        this.onDishSelect = this.onDishSelect.bind(this);
    }

    onDishSelect(dishId) {
        this.setState({
            selectedDish: dishId
        })
    }

    render() {
        console.log(this.state.dishes);
        return (
        <div>
            <Header/>
            <Menu dishes={this.state.dishes} onClick={(dishId) => {this.onDishSelect(dishId)}}/>
            <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
            <Footer/>
        </div>  
        );
    }
}

export default MainComponent;
