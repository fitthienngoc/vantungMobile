import React, { Component } from 'react';
import { connect } from 'react-redux';


function mapStateToProps(state) {
    return {
        // users: state.users
    };
}



class BannerSlideProduct2 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {


        return (
            <div className="swiper-slide">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-6">
                            <div className="cell-view ">
                                <div className="col-xs-b40 col-sm-b80" />
                                <div>
                                    <div className="simple-article grey size-5">BEST PRICE2 <span className="color">$199.00</span></div>
                                    <div className="col-xs-b5" />
                                </div>
                                <div>
                                    <h1 className="h1">smartphone x transform</h1>
                                    <div className="title-underline left"><span /></div>
                                </div>
                                <div>
                                    <div className="simple-article size-4 grey">In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum. Proin pharetra elit at feugiat commodo vel placerat tincidunt sapien nec</div>
                                    <div className="col-xs-b30" />
                                </div>
                                <div>
                                    <div className="buttons-wrapper">
                                        <a className="button size-2 style-2" href="#">
                                            <span className="button-wrapper">
                                                <span className="icon"><img src="static/theme1/img/icon-1.png" alt="" /></span>
                                                <span className="text">Learn More</span>
                                            </span>
                                        </a>
                                        <a className="button size-2 style-3" href="#">
                                            <span className="button-wrapper">
                                                <span className="icon"><img src="static/theme1/img/icon-3.png" alt="" /></span>
                                                <span className="text">Add To Cart</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xs-b40 col-sm-b80" />
                            </div>
                        </div>
                    </div>
                    <div className="slider-product-preview align-left">
                        <div className="product-preview-shortcode">
                            <div className="preview">
                                <div className="swiper-lazy-preloader" />
                                <div className="entry full-size swiper-lazy active" data-background="static/theme1/img/product-preview-1.jpg" />
                                <div className="entry full-size swiper-lazy" data-background="static/theme1/img/product-preview-2.jpg" />
                                <div className="entry full-size swiper-lazy" data-background="static/theme1/img/product-preview-3.jpg" />
                            </div>
                            <div className="sidebar valign-middle">
                                <div className="valign-middle-content">
                                    <div className="entry active"><img src="static/theme1/img/product-4.png" alt="" /></div>
                                    <div className="entry"><img src="static/theme1/img/product-5.png" alt="" /></div>
                                    <div className="entry"><img src="static/theme1/img/product-6.png" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="empty-space col-xs-b80 col-sm-b0" />
                </div>
            </div>

        )
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        // onLogin: (body) => {
        //     dispatch(actLogin(body))
        // },


    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(BannerSlideProduct2);