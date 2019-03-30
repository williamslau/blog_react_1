import React from 'react';

let Frame = (title) => (Component) => {
    return class FrameOrderComponent extends Component {
        render() {
            return (<div className="frame">
                <h3>{title}</h3>
                <Component/>
            </div>);
        }
    }
};
export default Frame;