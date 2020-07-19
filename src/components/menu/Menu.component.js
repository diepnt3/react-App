import  React, { Component } from 'react';
import netflix from '../../asset/images/netflix.svg';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
    }

    filterMovie = (event) => {
        setTimeout(() => {
            let results;

            if (event.query.length === 0) {
                results = [...this.brands];
            }
            else {
                results = this.brands.filter((brand) => {
                    return brand.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            this.setState({ filteredBrands: results });
        }, 250);
    }
    render() {
        return (
            <div className="menu">
                <div className="container">
                <div className="p-grid p-justify-between p-align-center">
                    <Link className="menu__logo" to="/">
                        <img src={netflix}></img>
                    </Link>
                    <div className="p-col-6 p-md-5  p-lg-6 search-item">
                    <div className="p-inputgroup">
                            <InputText id="in" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} placeholder="Search"/>
                            <Button icon="pi pi-search" className="p-button-warning"/>
                        </div>
                        
                    </div>
                    <div className="menu__action">
                        <a>
                            login
                        </a>
                        <a>
                            sign up
                        </a>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Menu;