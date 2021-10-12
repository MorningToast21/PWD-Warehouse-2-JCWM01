import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavbarText,
    DropdownToggle,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import Axios from 'axios'
import {API_URL} from '../constants/API'
import logo from "../assets/logo.png"
import { IoMdBasket,IoMdTime,IoIosArrowDown } from "react-icons/io"

import "../../src/assets/styles/navbar.css"

import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { searchProduct } from '../redux/actions/user';


class MyNavbar extends React.Component{
    state = {
        searchProduct:"",
    }

    inputHandler = (event) => {
        const value = event.target.value;
        const name = event.target.name;
  
        this.setState({[name] : value})
    }

    searchProductHandler = () => {
        console.log("search clicked", this.state.searchProduct)
        this.props.searchProduct(this.state)
    }

    render(){
        return(

            <Navbar color="white" light className="navbar px-3 d-flex justify-content-between" fixed="top" >
                <Link to="/" className="col-4 link">
                   <img src={logo} alt="home" className="navbar-logo"/>
                </Link>
                <div>
                    
                </div>
                {/* search bar */}
                <form class="form-inline my-2 my-lg-0 col-4 d-flex align-items-center">
                    <input class="form-control" name="searchProduct"  onChange={this.inputHandler} type="search" placeholder="Search products..." />

                    <Link  to="/products" >
                        <button onClick={this.searchProductHandler} class="btn btn-dark ms-2" type="submit"><p>Search</p></button>
                    </Link> 

                </form>
                <Nav className="navbar col-4 d-flex justify-content-between align-items-center flex-direction-row ">
                    <>
                    <div className="col-6 d-flex justify-content-end flex-direction-row middle-nav">
                        <div className="mx-2 d-flex justify-content-between align-items-center flex-direction-row">
                            <IoMdBasket className="icon" /> 
                            <Link to="/cart" className="link">Cart</Link>
                        </div>
                        <div className="mx-2 d-flex justify-content-between align-items-center flex-direction-row">
                            <IoMdTime className="icon" />
                            <Link to="/history" className="link">History</Link>
                        </div>
                        <div className="mx-2 d-flex justify-content-between align-items-center flex-direction-row">
                            <button className="button">Log out</button>
                        </div>
                    </div>
                    <div className="col-5">
                        <UncontrolledDropdown className="centered dropdown">
                            <DropdownToggle>
                                <h4>Hello, Almas!</h4>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem><h4>Profile</h4></DropdownItem>
                                <DropdownItem><h4>Admin</h4></DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                        
                    </>
                    
                </Nav>
            </Navbar>
            

        )
        
    }
}

const mapStateToProps =(state)=> {
    return{
        userGlobal: state.user,
    }
};

const mapDispatchToProps = {
    searchProduct, 
}

export default connect(mapStateToProps,mapDispatchToProps)(MyNavbar);