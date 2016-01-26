import React from 'react';

export default class Hello extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = {
            name: 'Joe Bruin'
        };
    }
    
    render() {
        return <h1>Hello {this.props.name}</h1>;
    }
}
