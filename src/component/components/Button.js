import React, {Fragment} from 'react';
import AbstractComponent from "../Abstract";


class Button extends AbstractComponent {
    template() {
        return (
            <Fragment>
                <div className="row">
                    <button className="btn btn-small primary" type="button">Button</button>
                    <button className="btn btn-small primary disabled" type="button">Button</button>

                    <button className="btn btn-small secondary" type="button">Button</button>
                    <button className="btn btn-small secondary disabled" type="button">Button</button>

                    <button className="btn btn-small ghost" type="button">Button</button>
                    <button className="btn btn-small ghost disabled" type="button">Button</button>
                </div>

                <div className="row">
                    <button className="btn btn-medium primary" type="button">Button</button>
                    <button className="btn btn-medium primary disabled" type="button">Button</button>


                    <button className="btn btn-medium secondary" type="button">Button</button>
                    <button className="btn btn-medium secondary disabled" type="button">Button</button>

                    <button className="btn btn-medium ghost" type="button">Button</button>
                    <button className="btn btn-medium ghost disabled" type="button">Button</button>
                </div>

                <div className="row">
                    <button className="btn btn-large primary" type="button">Button</button>
                    <button className="btn btn-large primary disabled" type="button">Button</button>

                    <button className="btn btn-large secondary" type="button">Button</button>
                    <button className="btn btn-large secondary disabled" type="button">Button</button>

                    <button className="btn btn-large ghost" type="button">Button</button>
                    <button className="btn btn-large ghost disabled" type="button">Button</button>
                </div>
            </Fragment>
        );
    }
}

export default Button;
