import React, {Component} from 'react'
import {connect} from 'react-redux'
import actions from '../../store/actions/header'

import {Carousel} from 'antd'
import img1 from '../../style/images/timg1.jpg'
import img2 from '../../style/images/timg2.jpg'
import img3 from '../../style/images/timg3.jpg'
import img4 from '../../style/images/timg4.jpg'
import img5 from '../../style/images/timg5.jpg'

class Banner extends Component {
    componentDidMount(){
        this.props.bannerRef(this.refs.carousel);
    }
    render() {
        return (<Carousel effect="fade" ref="carousel">
            <div className="banner">
                <img src={img1} alt=""/>
            </div>
            <div className="banner">
                <img src={img2} alt=""/>
            </div>
            <div className="banner">
                <img src={img3} alt=""/>
            </div>
            <div className="banner">
                <img src={img4} alt=""/>
            </div>
            <div className="banner">
                <img src={img5} alt=""/>
            </div>
        </Carousel>);
    }
}

export default connect(state=>({}),actions)(Banner);