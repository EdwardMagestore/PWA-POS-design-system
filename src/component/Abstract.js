import React, {Component, Fragment} from 'react';

class Abstract extends Component {
    template() {
        return "";
    }

    render() {
        return (this.template());
    }
}

export default Abstract;
