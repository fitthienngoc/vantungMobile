import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actLogin } from '../../redux/actions/user';

function mapStateToProps(state) {
    return {
        users: state.users
    };
}



class ModalProductView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }




    render() {


        return (
            <div className="popup-wrapper active">
                <div className="bg-layer active" />
                <div className="popup-content active" data-rel={3}>
                    <div className="layer-tn-close" />
                    <div className="popup-container size-2">
                        <div className="popup-align">
                            <div className="row">
                                <div className="col-sm-6 col-xs-b30 col-sm-b0">
                                    <div className="main-product-slider-wrapper swipers-couple-wrapper">
                                        <div className="swiper-container swiper-control-top">
                                            <div className="swiper-button-prev hidden" />
                                            <div className="swiper-button-next hidden" />
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <div className="swiper-lazy-preloader" />
                                                    <div className="product-big-preview-entry swiper-lazy" data-background="static/theme1/img/product-preview-4.jpg" />
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="swiper-lazy-preloader" />
                                                    <div className="product-big-preview-entry swiper-lazy" data-background="static/theme1/img/product-preview-5.jpg" />
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="swiper-lazy-preloader" />
                                                    <div className="product-big-preview-entry swiper-lazy" data-background="static/theme1/img/product-preview-6.jpg" />
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="swiper-lazy-preloader" />
                                                    <div className="product-big-preview-entry swiper-lazy" data-background="static/theme1/img/product-preview-7.jpg" />
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="swiper-lazy-preloader" />
                                                    <div className="product-big-preview-entry swiper-lazy" data-background="static/theme1/img/product-preview-8.jpg" />
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="swiper-lazy-preloader" />
                                                    <div className="product-big-preview-entry swiper-lazy" data-background="static/theme1/img/product-preview-9.jpg" />
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="swiper-lazy-preloader" />
                                                    <div className="product-big-preview-entry swiper-lazy" data-background="static/theme1/img/product-preview-10.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="empty-space col-xs-b30 col-sm-b60" />
                                        <div className="swiper-container swiper-control-bottom" data-breakpoints={1} data-xs-slides={3} data-sm-slides={3} data-md-slides={4} data-lt-slides={5} data-slides-per-view={5} data-center={1} data-click={1}>
                                            <div className="swiper-button-prev hidden" />
                                            <div className="swiper-button-next hidden" />
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <div className="product-small-preview-entry">
                                                        <img src="static/theme1/img/product-preview-4_.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="product-small-preview-entry">
                                                        <img src="static/theme1/img/product-preview-5_.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="product-small-preview-entry">
                                                        <img src="static/theme1/img/product-preview-6_.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="product-small-preview-entry">
                                                        <img src="static/theme1/img/product-preview-7_.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="product-small-preview-entry">
                                                        <img src="static/theme1/img/product-preview-8_.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="product-small-preview-entry">
                                                        <img src="static/theme1/img/product-preview-9_.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="product-small-preview-entry">
                                                        <img src="static/theme1/img/product-preview-10_.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="simple-article size-3 grey col-xs-b5">SMART WATCHES</div>
                                    <div className="h3 col-xs-b25">watch 42mm smartwatch</div>
                                    <div className="row col-xs-b25">
                                        <div className="col-sm-6">
                                            <div className="simple-article size-5 grey">PRICE: <span className="color">$225.00</span></div>
                                        </div>
                                        <div className="col-sm-6 col-sm-text-right">
                                            <div className="rate-wrapper align-inline">
                                                <i className="fa fa-star" aria-hidden="true" />
                                                <i className="fa fa-star" aria-hidden="true" />
                                                <i className="fa fa-star" aria-hidden="true" />
                                                <i className="fa fa-star" aria-hidden="true" />
                                                <i className="fa fa-star-o" aria-hidden="true" />
                                            </div>
                                            <div className="simple-article size-2 align-inline">128 Reviews</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="simple-article size-3 col-xs-b5">ITEM NO.: <span className="grey">127-#5238</span></div>
                                        </div>
                                        <div className="col-sm-6 col-sm-text-right">
                                            <div className="simple-article size-3 col-xs-b20">AVAILABLE.: <span className="grey">YES</span></div>
                                        </div>
                                    </div>
                                    <div className="simple-article size-3 col-xs-b30">Vivamus in tempor eros. Phasellus rhoncus in nunc sit amet mattis. Integer in ipsum vestibulum, molestie arcu ac, efficitur tellus. Phasellus id vulputate erat.</div>

                                    <div className="row col-xs-b40">
                                        <div className="col-sm-3">
                                            <div className="h6 detail-data-title size-1">size:</div>
                                        </div>
                                        <div className="col-sm-5">
                                            <select style={{ fontSize: 'initial', border: '2px solid', borderRadius: 21, WebkitBorderRadius: 21 }} value="default" onChange={() => { console.log('xx') }}>
                                                <option disabled="disabled" value="default">Choose size</option>
                                                <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row col-xs-b40">
                                        <div className="col-sm-3">
                                            <div className="h6 detail-data-title">color:</div>
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="color-selection size-2">
                                                <div className="entry active" style={{ color: '#a7f050' }} />
                                                <div className="entry" style={{ color: '#50e3f0' }} />
                                                <div className="entry" style={{ color: '#eee' }} />
                                                <div className="entry" style={{ color: '#4d900c' }} />
                                                <div className="entry" style={{ color: '#edb82c' }} />
                                                <div className="entry" style={{ color: '#7d3f99' }} />
                                                <div className="entry" style={{ color: '#3481c7' }} />
                                                <div className="entry" style={{ color: '#bf584b' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row col-xs-b40">
                                        <div className="col-sm-3">
                                            <div className="h6 detail-data-title size-1">quantity:</div>
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="quantity-select">
                                                <span className="minus" />
                                                <span className="number">1</span>
                                                <span className="plus" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row m5 col-xs-b40">
                                        <div className="col-sm-6 col-xs-b10 col-sm-b0">
                                            <a className="button size-2 style-2 block" href="#">
                                                <span className="button-wrapper">
                                                    <span className="icon"><img src="static/theme1/img/icon-2.png" alt="" /></span>
                                                    <span className="text">add to cart</span>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="col-sm-6">
                                            <a className="button size-2 style-1 block noshadow" href="#">
                                                <span className="button-wrapper">
                                                    <span className="icon"><i className="fa fa-heart-o" aria-hidden="true" /></span>
                                                    <span className="text">add to favourites</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="h6 detail-data-title size-2">share:</div>
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="follow light">
                                                <a className="entry" href="#"><i className="fa fa-facebook" /></a>
                                                <a className="entry" href="#"><i className="fa fa-twitter" /></a>
                                                <a className="entry" href="#"><i className="fa fa-linkedin" /></a>
                                                <a className="entry" href="#"><i className="fa fa-google-plus" /></a>
                                                <a className="entry" href="#"><i className="fa fa-pinterest-p" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="button-tn-close" onClick={this.props.setPopup} />
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onLogin: (body) => {
            dispatch(actLogin(body))
        },


    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(ModalProductView);