import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: [
                {
                  id: 0,
                  name:'Tanzanian Soup',
                  image: 'assets/images/rs1.png',
                  category: 'mains',
                  label:'Hot',
                  price:'4.99',
                  description:'A unique combination of soups from all across Tanzania topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        
                },
               {
                  id: 1,
                  name:'Noodles',
                  image: 'assets/images/rs2.png',
                  category: 'mains',
                  label:'',
                  price:'1.99',
                  description:'Deep fried noodles coated with mildly spiced Chickpea flour with a sweet-tangy tamarind sauce'                        
                },
               {
                  id: 2,
                  name:'Eggonest',
                  image: 'assets/images/rs3.png',
                  category: 'appetizer',
                  label:'New',
                  price:'1.99',
                  description:'More than just an omlet and served with indian spices'                        
                },
               {
                  id: 3,
                  name:'Sushi Custard',
                  image: 'assets/images/rs4.png',
                  category: 'dessert',
                  label:'',
                  price:'2.99',
                  description:'A delectable, semi-sweet Tokyo Style Cheese Custard'                        
                }
            ]
        }
    }

    render() {
        const menu = this.state.dishes.map(dish => {
            return(
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name}/>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            )
        });

        return(
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;