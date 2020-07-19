import React, { Component } from 'react';
import {InputText} from 'primereact/inputtext';

class SeachItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }
    render() {
        return (
        <div className="search-item">
            <div className="search-input">
            <span className="p-float-label">
                <InputText id="in" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />
            </span>
            </div>
        </div>
    );
        
    }
}

export default SeachItem;
