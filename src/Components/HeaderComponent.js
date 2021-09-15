import React, { Component } from "react";
import { Jumbotron, Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">SPICYO</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>SPICYO</h1>
                                <p>We take inspiration from the World's best cuisines and create unique food experience for everyone</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        )
    }
}

export default Header;