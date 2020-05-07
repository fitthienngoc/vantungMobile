import React from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import initialize from '../utils/initialize';
import AppLayout from '../components/layout';
// import {$} from 'jquery';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 15
        };
    }

    static getInitialProps(ctx) {
        initialize(ctx);
    }

    onChange(e) {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
        this.props.onFilter(name, value)
    }

    render() {
        return (
            <AppLayout>
                <div>
                    <div>
                        <div className="slider-wrapper">
                            <div className="swiper-button-prev visible-lg" />
                            <div className="swiper-button-next visible-lg" />
                            <div className="swiper-container" data-parallax={1} data-auto-height={1}>
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="cell-view ">
                                                        <div className="col-xs-b40 col-sm-b80" />
                                                        <div data-swiper-parallax-x={-600}>
                                                            <div className="simple-article color uppercase size-5">-30% off</div>
                                                            <div className="col-xs-b5" />
                                                        </div>
                                                        <div data-swiper-parallax-x={-500}>
                                                            <h1 className="h1">smart watchs in our store</h1>
                                                            <div className="title-underline left"><span /></div>
                                                        </div>
                                                        <div data-swiper-parallax-x={-400}>
                                                            <div className="simple-article size-4 grey">In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum. Proin pharetra elit at feugiat commodo vel placerat tincidunt sapien nec</div>
                                                            <div className="empty-space col-xs-b20" />
                                                            <div className="simple-article grey uppercase size-5">starting from <span className="color">$199.00</span></div>
                                                            <div className="empty-space col-xs-b30" />
                                                        </div>
                                                        <div data-swiper-parallax-x={-300}>
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
                                            <div className="slider-product-preview">
                                                <img src="static/theme1/img/product-preview-4.jpg" alt="" />
                                            </div>
                                            <div className="empty-space col-xs-b80 col-sm-b0" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-sm-6 col-sm-offset-6">
                                                    <div className="cell-view ">
                                                        <div className="col-xs-b40 col-sm-b80" />
                                                        <div data-swiper-parallax-x={-600}>
                                                            <div className="simple-article color uppercase size-5">-30% off</div>
                                                            <div className="col-xs-b5" />
                                                        </div>
                                                        <div data-swiper-parallax-x={-500}>
                                                            <h1 className="h1">smart watchs in our store</h1>
                                                            <div className="title-underline left"><span /></div>
                                                        </div>
                                                        <div data-swiper-parallax-x={-400}>
                                                            <div className="simple-article size-4 grey">In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum. Proin pharetra elit at feugiat commodo vel placerat tincidunt sapien nec</div>
                                                            <div className="empty-space col-xs-b20" />
                                                            <div className="simple-article grey uppercase size-5">starting from <span className="color">$199.00</span></div>
                                                            <div className="empty-space col-xs-b30" />
                                                        </div>
                                                        <div data-swiper-parallax-x={-300}>
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
                                                <img src="static/theme1/img/product-preview-4.jpg" alt="" />
                                            </div>
                                            <div className="empty-space col-xs-b80 col-sm-b0" />
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                        <div className="grey-background">
                            <div className="container">
                                <div className="empty-space col-xs-b30" />
                                <div className="row">
                                    <div className="col-md-6 col-xs-b30 col-md-b0">
                                        <div className="banner-shortcode style-6">
                                            <img className="image" src="static/theme1/img/product-130.jpg" alt="" />
                                            <div className="content">
                                                <div className="cell-view">
                                                    <h4 className="title h4 col-xs-b5"><span className="color">big summer sale</span> <br /> on all smartphones</h4>
                                                    <div className="description simple-article size-2 col-xs-b10">Quisque rhoncus orci vitae nisl rutrum rutrum lesuada laoreet urna sed</div>
                                                    <div className="subtitle simple-article size-5 grey uppercase col-xs-b20">Don't miss! <span className="color">up to 70%</span></div>
                                                    <a className="button size-2 style-3" href="#">
                                                        <span className="button-wrapper">
                                                            <span className="icon"><img src="static/theme1/img/icon-4.png" alt="" /></span>
                                                            <span className="text">learn more</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="banner-shortcode style-6">
                                            <img className="image" src="static/theme1/img/product-131.jpg" alt="" />
                                            <div className="content">
                                                <div className="cell-view">
                                                    <h4 className="title h4 col-xs-b5">new trends in laptops design</h4>
                                                    <div className="description simple-article size-2 col-xs-b10">Quisque rhoncus orci vitae nisl rutrum rutrum lesuada laoreet urna sed</div>
                                                    <div className="subtitle simple-article size-5 grey uppercase col-xs-b20">over <span className="color">150</span> models</div>
                                                    <a className="button size-2 style-3" href="#">
                                                        <span className="button-wrapper">
                                                            <span className="icon"><img src="static/theme1/img/icon-4.png" alt="" /></span>
                                                            <span className="text">learn more</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="empty-space col-xs-b35 col-md-b70" />
                                <div className="tabs-block">
                                    <div className="row">
                                        <div className="col-lg-4 col-xs-b15 col-lg-b0">
                                            <div className="h4">best proposes</div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="tabulation-menu-wrapper col-lg-text-right">
                                                <div className="tabulation-title simple-input">all</div>
                                                <ul className="tabulation-toggle">
                                                    <li><a className="tab-menu active">all</a></li>
                                                    <li><a className="tab-menu">featured</a></li>
                                                    <li><a className="tab-menu">on sale</a></li>
                                                    <li><a className="tab-menu">top rated</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="empty-space col-xs-b15 col-sm-b30" />
                                    <div className="tab-entry visible">
                                        <div className="slider-wrapper">
                                            <div className="swiper-button-prev hidden-xs" />
                                            <div className="swiper-button-next hidden-xs" />
                                            <div className="swiper-container arrows-align-top" data-breakpoints={1} data-xs-slides={1} data-sm-slides={2} data-md-slides={2} data-lt-slides={2} data-slides-per-view={3}>
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <div className="product-shortcode style-1 big">
                                                            <div className="product-label green">best price</div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-115.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">MODERN EDITION</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">modern beat ht</a></div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis ipsum</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry open-popup" data-rel={3}><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="price">
                                                                <div className="color-selection">
                                                                    <div className="entry active" style={{ color: '#a7f050' }} />
                                                                    <div className="entry" style={{ color: '#50e3f0' }} />
                                                                    <div className="entry" style={{ color: '#eee' }} />
                                                                </div>
                                                                <div className="simple-article size-4"><span className="dark">$155.00</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="product-shortcode style-1 big">
                                                            <div className="product-label red">20% discount</div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-116.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">MODERN EDITION</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">modern beat ht</a></div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis ipsum</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry open-popup" data-rel={3}><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="price">
                                                                <div className="color-selection">
                                                                    <div className="entry active" style={{ color: '#a7f050' }} />
                                                                    <div className="entry" style={{ color: '#50e3f0' }} />
                                                                    <div className="entry" style={{ color: '#eee' }} />
                                                                </div>
                                                                <div className="simple-article size-4"><span className="color">$24.00</span> <span className="line-through">$32.00</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="product-shortcode style-1 big">
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-117.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">MODERN EDITION</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">modern beat ht</a></div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis ipsum</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry open-popup" data-rel={3}><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="price">
                                                                <div className="color-selection">
                                                                    <div className="entry active" style={{ color: '#a7f050' }} />
                                                                    <div className="entry" style={{ color: '#50e3f0' }} />
                                                                    <div className="entry" style={{ color: '#eee' }} />
                                                                </div>
                                                                <div className="simple-article size-4"><span className="dark">$155.00</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="product-shortcode style-1 big">
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-115.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">MODERN EDITION</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">modern beat ht</a></div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis ipsum</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry open-popup" data-rel={3}><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="price">
                                                                <div className="color-selection">
                                                                    <div className="entry active" style={{ color: '#a7f050' }} />
                                                                    <div className="entry" style={{ color: '#50e3f0' }} />
                                                                    <div className="entry" style={{ color: '#eee' }} />
                                                                </div>
                                                                <div className="simple-article size-4"><span className="dark">$155.00</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="product-shortcode style-1 big">
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-116.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">MODERN EDITION</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">modern beat ht</a></div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis ipsum</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry open-popup" data-rel={3}><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="price">
                                                                <div className="color-selection">
                                                                    <div className="entry active" style={{ color: '#a7f050' }} />
                                                                    <div className="entry" style={{ color: '#50e3f0' }} />
                                                                    <div className="entry" style={{ color: '#eee' }} />
                                                                </div>
                                                                <div className="simple-article size-4"><span className="dark">$155.00</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-pagination relative-pagination visible-xs" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-entry">
                                        <div className="slider-wrapper">
                                            <div className="swiper-button-prev hidden-xs" />
                                            <div className="swiper-button-next hidden-xs" />
                                            <div className="swiper-container arrows-align-top" data-breakpoints={1} data-xs-slides={1} data-sm-slides={2} data-md-slides={2} data-lt-slides={2} data-slides-per-view={3}>
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <div className="product-shortcode style-1 big">
                                                            <div className="product-label red">20% discount</div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-116.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">MODERN EDITION</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">modern beat ht</a></div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis ipsum</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry open-popup" data-rel={3}><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="price">
                                                                <div className="color-selection">
                                                                    <div className="entry active" style={{ color: '#a7f050' }} />
                                                                    <div className="entry" style={{ color: '#50e3f0' }} />
                                                                    <div className="entry" style={{ color: '#eee' }} />
                                                                </div>
                                                                <div className="simple-article size-4"><span className="color">$24.00</span> <span className="line-through">$32.00</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="product-shortcode style-1 big">
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-115.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">MODERN EDITION</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">modern beat ht</a></div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis ipsum</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry open-popup" data-rel={3}><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="price">
                                                                <div className="color-selection">
                                                                    <div className="entry active" style={{ color: '#a7f050' }} />
                                                                    <div className="entry" style={{ color: '#50e3f0' }} />
                                                                    <div className="entry" style={{ color: '#eee' }} />
                                                                </div>
                                                                <div className="simple-article size-4"><span className="dark">$155.00</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-pagination relative-pagination visible-xs" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-entry">
                                        <div className="slider-wrapper">
                                            <div className="swiper-button-prev hidden-xs" />
                                            <div className="swiper-button-next hidden-xs" />
                                            <div className="swiper-container arrows-align-top" data-breakpoints={1} data-xs-slides={1} data-sm-slides={2} data-md-slides={2} data-lt-slides={2} data-slides-per-view={3}>
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <div className="product-shortcode style-1 big">
                                                            <div className="product-label green">best price</div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-115.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">MODERN EDITION</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">modern beat ht</a></div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis ipsum</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry open-popup" data-rel={3}><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="price">
                                                                <div className="color-selection">
                                                                    <div className="entry active" style={{ color: '#a7f050' }} />
                                                                    <div className="entry" style={{ color: '#50e3f0' }} />
                                                                    <div className="entry" style={{ color: '#eee' }} />
                                                                </div>
                                                                <div className="simple-article size-4"><span className="dark">$155.00</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="product-shortcode style-1 big">
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-117.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">MODERN EDITION</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">modern beat ht</a></div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis ipsum</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry open-popup" data-rel={3}><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="price">
                                                                <div className="color-selection">
                                                                    <div className="entry active" style={{ color: '#a7f050' }} />
                                                                    <div className="entry" style={{ color: '#50e3f0' }} />
                                                                    <div className="entry" style={{ color: '#eee' }} />
                                                                </div>
                                                                <div className="simple-article size-4"><span className="dark">$155.00</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="product-shortcode style-1 big">
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-116.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">MODERN EDITION</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">modern beat ht</a></div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis ipsum</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry open-popup" data-rel={3}><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="price">
                                                                <div className="color-selection">
                                                                    <div className="entry active" style={{ color: '#a7f050' }} />
                                                                    <div className="entry" style={{ color: '#50e3f0' }} />
                                                                    <div className="entry" style={{ color: '#eee' }} />
                                                                </div>
                                                                <div className="simple-article size-4"><span className="dark">$155.00</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-pagination relative-pagination visible-xs" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-entry">
                                        <div className="slider-wrapper">
                                            <div className="swiper-button-prev hidden-xs" />
                                            <div className="swiper-button-next hidden-xs" />
                                            <div className="swiper-container arrows-align-top" data-breakpoints={1} data-xs-slides={1} data-sm-slides={2} data-md-slides={2} data-lt-slides={2} data-slides-per-view={3}>
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <div className="product-shortcode style-1 big">
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-115.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">MODERN EDITION</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">modern beat ht</a></div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis ipsum</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry open-popup" data-rel={3}><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="price">
                                                                <div className="color-selection">
                                                                    <div className="entry active" style={{ color: '#a7f050' }} />
                                                                    <div className="entry" style={{ color: '#50e3f0' }} />
                                                                    <div className="entry" style={{ color: '#eee' }} />
                                                                </div>
                                                                <div className="simple-article size-4"><span className="dark">$155.00</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="product-shortcode style-1 big">
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-116.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">MODERN EDITION</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">modern beat ht</a></div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis ipsum</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry open-popup" data-rel={3}><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                            <div className="price">
                                                                <div className="color-selection">
                                                                    <div className="entry active" style={{ color: '#a7f050' }} />
                                                                    <div className="entry" style={{ color: '#50e3f0' }} />
                                                                    <div className="entry" style={{ color: '#eee' }} />
                                                                </div>
                                                                <div className="simple-article size-4"><span className="dark">$155.00</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-pagination relative-pagination visible-xs" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="empty-space col-xs-b35 col-md-b70" />
                                <div className="tabs-block">
                                    <div className="row">
                                        <div className="col-lg-4 col-xs-b15 col-lg-b0">
                                            <div className="h4">popular products</div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="tabulation-menu-wrapper col-lg-text-right">
                                                <div className="tabulation-title simple-input">all</div>
                                                <ul className="tabulation-toggle">
                                                    <li><a className="tab-menu active">smartphones</a></li>
                                                    <li><a className="tab-menu">laptops</a></li>
                                                    <li><a className="tab-menu">pc</a></li>
                                                    <li><a className="tab-menu">gadegets</a></li>
                                                    <li><a className="tab-menu">accessories</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="empty-space col-xs-b15 col-sm-b30" />
                                    <div className="tab-entry visible">
                                        <div className="row nopadding">
                                            <div className="col-lg-6">
                                                <div className="slider-wrapper side-borders grid-products-4-items">
                                                    <div className="swiper-container">
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                <div className="product-shortcode style-3 big">
                                                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                                                    <div className="swiper-container" data-loop={1} data-touch={0}>
                                                                        <div className="swiper-button-prev style-1" />
                                                                        <div className="swiper-button-next style-1" />
                                                                        <div className="swiper-wrapper">
                                                                            <div className="swiper-slide">
                                                                                <img src="static/theme1/img/product-118.jpg" alt="" />
                                                                            </div>
                                                                            <div className="swiper-slide">
                                                                                <img src="static/theme1/img/product-119.jpg" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                                                    <div className="h4 animate-to-green"><a href="#">smart watch zeseries</a></div>
                                                                    <div className="empty-space col-xs-b10" />
                                                                    <div className="description">
                                                                        <div className="simple-article size-2">Sed id purus ac arcu pulvinar euismod natoque</div>
                                                                    </div>
                                                                    <div className="simple-article size-5 grey col-xs-b20">BEST PRICE: <span className="color">$299.00</span></div>
                                                                    <div className="countdown-wrapper">
                                                                        <div className="countdown" data-end="Sep,1,2017" />
                                                                    </div>
                                                                    <div className="preview-buttons">
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
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="product-shortcode style-3 big">
                                                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                                                    <div className="swiper-container" data-loop={1} data-touch={0}>
                                                                        <div className="swiper-button-prev style-1" />
                                                                        <div className="swiper-button-next style-1" />
                                                                        <div className="swiper-wrapper">
                                                                            <div className="swiper-slide">
                                                                                <img src="static/theme1/img/product-118.jpg" alt="" />
                                                                            </div>
                                                                            <div className="swiper-slide">
                                                                                <img src="static/theme1/img/product-119.jpg" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                                                    <div className="h4 animate-to-green"><a href="#">smart watch zeseries</a></div>
                                                                    <div className="empty-space col-xs-b10" />
                                                                    <div className="description">
                                                                        <div className="simple-article size-2">Sed id purus ac arcu pulvinar euismod natoque</div>
                                                                    </div>
                                                                    <div className="simple-article size-5 grey col-xs-b20">BEST PRICE: <span className="color">$299.00</span></div>
                                                                    <div className="countdown-wrapper">
                                                                        <div className="countdown" data-end="Sep,1,2017" />
                                                                    </div>
                                                                    <div className="preview-buttons">
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-pagination relative-pagination" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="row nopadding">
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-120.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-121.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-122.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-123.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-entry">
                                        <div className="row nopadding">
                                            <div className="col-lg-6">
                                                <div className="slider-wrapper side-borders grid-products-4-items">
                                                    <div className="swiper-container">
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                <div className="product-shortcode style-3 big">
                                                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                                                    <div className="swiper-container" data-loop={1} data-touch={0}>
                                                                        <div className="swiper-button-prev style-1" />
                                                                        <div className="swiper-button-next style-1" />
                                                                        <div className="swiper-wrapper">
                                                                            <div className="swiper-slide">
                                                                                <img src="static/theme1/img/product-118.jpg" alt="" />
                                                                            </div>
                                                                            <div className="swiper-slide">
                                                                                <img src="static/theme1/img/product-119.jpg" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                                                    <div className="h4 animate-to-green"><a href="#">smart watch zeseries</a></div>
                                                                    <div className="empty-space col-xs-b10" />
                                                                    <div className="description">
                                                                        <div className="simple-article size-2">Sed id purus ac arcu pulvinar euismod natoque</div>
                                                                    </div>
                                                                    <div className="simple-article size-5 grey col-xs-b20">BEST PRICE: <span className="color">$299.00</span></div>
                                                                    <div className="countdown-wrapper">
                                                                        <div className="countdown" data-end="Sep,1,2017" />
                                                                    </div>
                                                                    <div className="preview-buttons">
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
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="product-shortcode style-3 big">
                                                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                                                    <div className="swiper-container" data-loop={1} data-touch={0}>
                                                                        <div className="swiper-button-prev style-1" />
                                                                        <div className="swiper-button-next style-1" />
                                                                        <div className="swiper-wrapper">
                                                                            <div className="swiper-slide">
                                                                                <img src="static/theme1/img/product-119.jpg" alt="" />
                                                                            </div>
                                                                            <div className="swiper-slide">
                                                                                <img src="static/theme1/img/product-118.jpg" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                                                    <div className="h4 animate-to-green"><a href="#">smart watch zeseries</a></div>
                                                                    <div className="empty-space col-xs-b10" />
                                                                    <div className="description">
                                                                        <div className="simple-article size-2">Sed id purus ac arcu pulvinar euismod natoque</div>
                                                                    </div>
                                                                    <div className="simple-article size-5 grey col-xs-b20">BEST PRICE: <span className="color">$299.00</span></div>
                                                                    <div className="countdown-wrapper">
                                                                        <div className="countdown" data-end="Sep,1,2017" />
                                                                    </div>
                                                                    <div className="preview-buttons">
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-pagination relative-pagination" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="slider-wrapper side-borders grid-products-4-items">
                                                    <div className="swiper-container">
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                <div className="product-shortcode style-3 big">
                                                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                                                    <div className="swiper-container" data-loop={1} data-touch={0}>
                                                                        <div className="swiper-button-prev style-1" />
                                                                        <div className="swiper-button-next style-1" />
                                                                        <div className="swiper-wrapper">
                                                                            <div className="swiper-slide">
                                                                                <img src="static/theme1/img/product-118.jpg" alt="" />
                                                                            </div>
                                                                            <div className="swiper-slide">
                                                                                <img src="static/theme1/img/product-119.jpg" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                                                    <div className="h4 animate-to-green"><a href="#">smart watch zeseries</a></div>
                                                                    <div className="empty-space col-xs-b10" />
                                                                    <div className="description">
                                                                        <div className="simple-article size-2">Sed id purus ac arcu pulvinar euismod natoque</div>
                                                                    </div>
                                                                    <div className="simple-article size-5 grey col-xs-b20">BEST PRICE: <span className="color">$299.00</span></div>
                                                                    <div className="countdown-wrapper">
                                                                        <div className="countdown" data-end="Sep,1,2017" />
                                                                    </div>
                                                                    <div className="preview-buttons">
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
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="product-shortcode style-3 big">
                                                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                                                    <div className="swiper-container" data-loop={1} data-touch={0}>
                                                                        <div className="swiper-button-prev style-1" />
                                                                        <div className="swiper-button-next style-1" />
                                                                        <div className="swiper-wrapper">
                                                                            <div className="swiper-slide">
                                                                                <img src="static/theme1/img/product-118.jpg" alt="" />
                                                                            </div>
                                                                            <div className="swiper-slide">
                                                                                <img src="static/theme1/img/product-119.jpg" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                                                    <div className="h4 animate-to-green"><a href="#">smart watch zeseries</a></div>
                                                                    <div className="empty-space col-xs-b10" />
                                                                    <div className="description">
                                                                        <div className="simple-article size-2">Sed id purus ac arcu pulvinar euismod natoque</div>
                                                                    </div>
                                                                    <div className="simple-article size-5 grey col-xs-b20">BEST PRICE: <span className="color">$299.00</span></div>
                                                                    <div className="countdown-wrapper">
                                                                        <div className="countdown" data-end="Sep,1,2017" />
                                                                    </div>
                                                                    <div className="preview-buttons">
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-pagination relative-pagination" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-entry">
                                        <div className="row nopadding">
                                            <div className="col-lg-6">
                                                <div className="row nopadding">
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-120.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-121.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-122.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-123.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="slider-wrapper side-borders grid-products-4-items">
                                                    <div className="swiper-container">
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                <div className="product-shortcode style-3 big">
                                                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                                                    <div className="swiper-container" data-loop={1} data-touch={0}>
                                                                        <div className="swiper-button-prev style-1" />
                                                                        <div className="swiper-button-next style-1" />
                                                                        <div className="swiper-wrapper">
                                                                            <div className="swiper-slide">
                                                                                <img src="static/theme1/img/product-118.jpg" alt="" />
                                                                            </div>
                                                                            <div className="swiper-slide">
                                                                                <img src="static/theme1/img/product-119.jpg" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                                                    <div className="h4 animate-to-green"><a href="#">smart watch zeseries</a></div>
                                                                    <div className="empty-space col-xs-b10" />
                                                                    <div className="description">
                                                                        <div className="simple-article size-2">Sed id purus ac arcu pulvinar euismod natoque</div>
                                                                    </div>
                                                                    <div className="simple-article size-5 grey col-xs-b20">BEST PRICE: <span className="color">$299.00</span></div>
                                                                    <div className="countdown-wrapper">
                                                                        <div className="countdown" data-end="Sep,1,2017" />
                                                                    </div>
                                                                    <div className="preview-buttons">
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
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="product-shortcode style-3 big">
                                                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                                                    <div className="swiper-container" data-loop={1} data-touch={0}>
                                                                        <div className="swiper-button-prev style-1" />
                                                                        <div className="swiper-button-next style-1" />
                                                                        <div className="swiper-wrapper">
                                                                            <div className="swiper-slide">
                                                                                <img src="static/theme1/img/product-118.jpg" alt="" />
                                                                            </div>
                                                                            <div className="swiper-slide">
                                                                                <img src="static/theme1/img/product-119.jpg" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                                                    <div className="h4 animate-to-green"><a href="#">smart watch zeseries</a></div>
                                                                    <div className="empty-space col-xs-b10" />
                                                                    <div className="description">
                                                                        <div className="simple-article size-2">Sed id purus ac arcu pulvinar euismod natoque</div>
                                                                    </div>
                                                                    <div className="simple-article size-5 grey col-xs-b20">BEST PRICE: <span className="color">$299.00</span></div>
                                                                    <div className="countdown-wrapper">
                                                                        <div className="countdown" data-end="Sep,1,2017" />
                                                                    </div>
                                                                    <div className="preview-buttons">
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-pagination relative-pagination" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-entry">
                                        <div className="row nopadding">
                                            <div className="col-lg-6">
                                                <div className="row nopadding">
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-120.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-121.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-122.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-123.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="row nopadding">
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-120.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-121.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-122.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-123.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-entry">
                                        <div className="row nopadding">
                                            <div className="col-lg-6">
                                                <div className="slider-wrapper side-borders grid-products-4-items">
                                                    <div className="swiper-container">
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                <div className="product-shortcode style-3 big">
                                                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                                                    <div className="swiper-container" data-loop={1} data-touch={0}>
                                                                        <div className="swiper-button-prev style-1" />
                                                                        <div className="swiper-button-next style-1" />
                                                                        <div className="swiper-wrapper">
                                                                            <div className="swiper-slide">
                                                                                <img src="static/theme1/img/product-118.jpg" alt="" />
                                                                            </div>
                                                                            <div className="swiper-slide">
                                                                                <img src="static/theme1/img/product-119.jpg" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                                                    <div className="h4 animate-to-green"><a href="#">smart watch zeseries</a></div>
                                                                    <div className="empty-space col-xs-b10" />
                                                                    <div className="description">
                                                                        <div className="simple-article size-2">Sed id purus ac arcu pulvinar euismod natoque</div>
                                                                    </div>
                                                                    <div className="simple-article size-5 grey col-xs-b20">BEST PRICE: <span className="color">$299.00</span></div>
                                                                    <div className="countdown-wrapper">
                                                                        <div className="countdown" data-end="Sep,1,2017" />
                                                                    </div>
                                                                    <div className="preview-buttons">
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
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="product-shortcode style-3 big">
                                                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                                                    <div className="swiper-container" data-loop={1} data-touch={0}>
                                                                        <div className="swiper-button-prev style-1" />
                                                                        <div className="swiper-button-next style-1" />
                                                                        <div className="swiper-wrapper">
                                                                            <div className="swiper-slide">
                                                                                <img src="static/theme1/img/product-118.jpg" alt="" />
                                                                            </div>
                                                                            <div className="swiper-slide">
                                                                                <img src="static/theme1/img/product-119.jpg" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                                                    <div className="h4 animate-to-green"><a href="#">smart watch zeseries</a></div>
                                                                    <div className="empty-space col-xs-b10" />
                                                                    <div className="description">
                                                                        <div className="simple-article size-2">Sed id purus ac arcu pulvinar euismod natoque</div>
                                                                    </div>
                                                                    <div className="simple-article size-5 grey col-xs-b20">BEST PRICE: <span className="color">$299.00</span></div>
                                                                    <div className="countdown-wrapper">
                                                                        <div className="countdown" data-end="Sep,1,2017" />
                                                                    </div>
                                                                    <div className="preview-buttons">
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-pagination relative-pagination" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="row nopadding">
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-120.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-121.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-122.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-123.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="empty-space col-xs-b35 col-md-b70" />
                            </div>
                        </div>
                        <div className="slider-wrapper">
                            <div className="swiper-button-prev visible-lg" />
                            <div className="swiper-button-next visible-lg" />
                            <div className="swiper-container" data-parallax={1} data-auto-height={1}>
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="cell-view simple-banner-height big">
                                                        <div className="col-xs-b35 col-sm-b70" />
                                                        <div data-swiper-parallax-x={-600}>
                                                            <div className="simple-article size-3">HEADPHONES</div>
                                                            <div className="col-xs-b5" />
                                                        </div>
                                                        <div data-swiper-parallax-x={-500}>
                                                            <h2 className="h2">Sport Wireless+</h2>
                                                            <div className="title-underline left"><span /></div>
                                                        </div>
                                                        <div data-swiper-parallax-x={-400}>
                                                            <div className="simple-article size-4 col-xs-b20">
                                                                <p>Praesent nec finibus massa. Phasellus id auctor lacus, at iaculis lorem. Donec quis arcu elit. In vehicula purus sem</p>
                                                            </div>
                                                            <div className="simple-article size-3">
                                                                <ul>
                                                                    <li>20.000h of high quality music</li>
                                                                    <li>perfect insulation</li>
                                                                    <li>5 years guaranteed work</li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-xs-b30" />
                                                        </div>
                                                        <div data-swiper-parallax-x={-300}>
                                                            <div className="buttons-wrapper">
                                                                <div className="simple-article size-5 grey">BEST PRICE: <span className="color">$195.00</span></div>
                                                                <a className="button size-2 style-3" href="#">
                                                                    <span className="button-wrapper">
                                                                        <span className="icon"><img src="static/theme1/img/icon-4.png" alt="" /></span>
                                                                        <span className="text">Learn More</span>
                                                                    </span>
                                                                </a>
                                                                <a className="button size-2 style-2" href="#">
                                                                    <span className="button-wrapper">
                                                                        <span className="icon"><img src="static/theme1/img/icon-2.png" alt="" /></span>
                                                                        <span className="text">Add To Cart</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-b35 col-sm-b70" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-product-preview">
                                                <img src="static/theme1/img/product-preview-21.png" alt="" />
                                            </div>
                                            <div className="empty-space col-xs-b80 col-sm-b0" />
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-sm-6 col-sm-offset-6">
                                                    <div className="cell-view simple-banner-height big">
                                                        <div className="col-xs-b35 col-sm-b70" />
                                                        <div data-swiper-parallax-x={-600}>
                                                            <div className="simple-article size-3">HEADPHONES</div>
                                                            <div className="col-xs-b5" />
                                                        </div>
                                                        <div data-swiper-parallax-x={-500}>
                                                            <h2 className="h2">Sport Wireless+</h2>
                                                            <div className="title-underline left"><span /></div>
                                                        </div>
                                                        <div data-swiper-parallax-x={-400}>
                                                            <div className="simple-article size-4 col-xs-b20">
                                                                <p>Praesent nec finibus massa. Phasellus id auctor lacus, at iaculis lorem. Donec quis arcu elit. In vehicula purus sem</p>
                                                            </div>
                                                            <div className="simple-article size-3">
                                                                <ul>
                                                                    <li>20.000h of high quality music</li>
                                                                    <li>perfect insulation</li>
                                                                    <li>5 years guaranteed work</li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-xs-b30" />
                                                        </div>
                                                        <div data-swiper-parallax-x={-300}>
                                                            <div className="buttons-wrapper">
                                                                <div className="simple-article size-5 grey">BEST PRICE: <span className="color">$195.00</span></div>
                                                                <a className="button size-2 style-3" href="#">
                                                                    <span className="button-wrapper">
                                                                        <span className="icon"><img src="static/theme1/img/icon-4.png" alt="" /></span>
                                                                        <span className="text">Learn More</span>
                                                                    </span>
                                                                </a>
                                                                <a className="button size-2 style-2" href="#">
                                                                    <span className="button-wrapper">
                                                                        <span className="icon"><img src="static/theme1/img/icon-2.png" alt="" /></span>
                                                                        <span className="text">Add To Cart</span>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-b35 col-sm-b70" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-product-preview align-left">
                                                <img src="static/theme1/img/product-preview-21.png" alt="" />
                                            </div>
                                            <div className="empty-space col-xs-b80 col-sm-b0" />
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                        <div className="grey-background">
                            <div className="container">
                                <div className="empty-space col-xs-b35 col-md-b70" />
                                <div className="tabs-block">
                                    <div className="row">
                                        <div className="col-lg-4 col-xs-b15 col-lg-b0">
                                            <div className="h4">best sellers</div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="tabulation-menu-wrapper col-lg-text-right">
                                                <div className="tabulation-title simple-input">all</div>
                                                <ul className="tabulation-toggle">
                                                    <li><a className="tab-menu active">all</a></li>
                                                    <li><a className="tab-menu">top 10</a></li>
                                                    <li><a className="tab-menu">gadgets</a></li>
                                                    <li><a className="tab-menu">laptops</a></li>
                                                    <li><a className="tab-menu">accessories</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="empty-space col-xs-b15 col-sm-b30" />
                                    <div className="tab-entry visible">
                                        <div className="row nopadding">
                                            <div className="col-lg-6">
                                                <div className="slider-wrapper side-borders grid-products-2-items">
                                                    <div className="swiper-container">
                                                        <div className="swiper-button-prev hidden" />
                                                        <div className="swiper-button-next hidden" />
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                <div className="product-shortcode style-1 float">
                                                                    <div className="title">
                                                                        <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                        <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                                    </div>
                                                                    <div className="preview">
                                                                        <img src="static/theme1/img/product-124.jpg" alt="" />
                                                                        <div className="preview-buttons valign-middle">
                                                                            <div className="valign-middle-content">
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
                                                                    </div>
                                                                    <div className="price">
                                                                        <div className="simple-article size-4 dark">$630.00</div>
                                                                        <div className="color-selection">
                                                                            <div className="entry active" style={{ color: '#a7f050' }} />
                                                                            <div className="entry" style={{ color: '#50e3f0' }} />
                                                                            <div className="entry" style={{ color: '#eee' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="description">
                                                                        <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                        <div className="icons">
                                                                            <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                            <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                            <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="product-shortcode style-1 float">
                                                                    <div className="title">
                                                                        <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                        <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                                    </div>
                                                                    <div className="preview">
                                                                        <img src="static/theme1/img/product-124.jpg" alt="" />
                                                                        <div className="preview-buttons valign-middle">
                                                                            <div className="valign-middle-content">
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
                                                                    </div>
                                                                    <div className="price">
                                                                        <div className="simple-article size-4 dark">$630.00</div>
                                                                        <div className="color-selection">
                                                                            <div className="entry active" style={{ color: '#a7f050' }} />
                                                                            <div className="entry" style={{ color: '#50e3f0' }} />
                                                                            <div className="entry" style={{ color: '#eee' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="description">
                                                                        <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                        <div className="icons">
                                                                            <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                            <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                            <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-pagination md-relative-pagination" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="row nopadding">
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-125.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-126.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row nopadding">
                                            <div className="col-lg-6">
                                                <div className="row nopadding">
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-127.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-128.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="slider-wrapper side-borders grid-products-2-items">
                                                    <div className="swiper-container">
                                                        <div className="swiper-button-prev hidden" />
                                                        <div className="swiper-button-next hidden" />
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                <div className="product-shortcode style-1 float">
                                                                    <div className="title">
                                                                        <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                        <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                                    </div>
                                                                    <div className="preview">
                                                                        <img src="static/theme1/img/product-129.jpg" alt="" />
                                                                        <div className="preview-buttons valign-middle">
                                                                            <div className="valign-middle-content">
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
                                                                    </div>
                                                                    <div className="price">
                                                                        <div className="simple-article size-4 dark">$630.00</div>
                                                                        <div className="color-selection">
                                                                            <div className="entry active" style={{ color: '#a7f050' }} />
                                                                            <div className="entry" style={{ color: '#50e3f0' }} />
                                                                            <div className="entry" style={{ color: '#eee' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="description">
                                                                        <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                        <div className="icons">
                                                                            <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                            <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                            <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-pagination md-relative-pagination" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-entry">
                                        <div className="row nopadding">
                                            <div className="col-lg-6">
                                                <div className="slider-wrapper side-borders grid-products-2-items">
                                                    <div className="swiper-container">
                                                        <div className="swiper-button-prev hidden" />
                                                        <div className="swiper-button-next hidden" />
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                <div className="product-shortcode style-1 float">
                                                                    <div className="title">
                                                                        <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                        <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                                    </div>
                                                                    <div className="preview">
                                                                        <img src="static/theme1/img/product-124.jpg" alt="" />
                                                                        <div className="preview-buttons valign-middle">
                                                                            <div className="valign-middle-content">
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
                                                                    </div>
                                                                    <div className="price">
                                                                        <div className="simple-article size-4 dark">$630.00</div>
                                                                        <div className="color-selection">
                                                                            <div className="entry active" style={{ color: '#a7f050' }} />
                                                                            <div className="entry" style={{ color: '#50e3f0' }} />
                                                                            <div className="entry" style={{ color: '#eee' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="description">
                                                                        <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                        <div className="icons">
                                                                            <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                            <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                            <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="product-shortcode style-1 float">
                                                                    <div className="title">
                                                                        <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                        <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                                    </div>
                                                                    <div className="preview">
                                                                        <img src="static/theme1/img/product-124.jpg" alt="" />
                                                                        <div className="preview-buttons valign-middle">
                                                                            <div className="valign-middle-content">
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
                                                                    </div>
                                                                    <div className="price">
                                                                        <div className="simple-article size-4 dark">$630.00</div>
                                                                        <div className="color-selection">
                                                                            <div className="entry active" style={{ color: '#a7f050' }} />
                                                                            <div className="entry" style={{ color: '#50e3f0' }} />
                                                                            <div className="entry" style={{ color: '#eee' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="description">
                                                                        <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                        <div className="icons">
                                                                            <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                            <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                            <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-pagination md-relative-pagination" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="row nopadding">
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-125.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-126.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-entry">
                                        <div className="row nopadding">
                                            <div className="col-lg-6">
                                                <div className="row nopadding">
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-127.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-128.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="slider-wrapper side-borders grid-products-2-items">
                                                    <div className="swiper-container">
                                                        <div className="swiper-button-prev hidden" />
                                                        <div className="swiper-button-next hidden" />
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                <div className="product-shortcode style-1 float">
                                                                    <div className="title">
                                                                        <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                        <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                                    </div>
                                                                    <div className="preview">
                                                                        <img src="static/theme1/img/product-129.jpg" alt="" />
                                                                        <div className="preview-buttons valign-middle">
                                                                            <div className="valign-middle-content">
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
                                                                    </div>
                                                                    <div className="price">
                                                                        <div className="simple-article size-4 dark">$630.00</div>
                                                                        <div className="color-selection">
                                                                            <div className="entry active" style={{ color: '#a7f050' }} />
                                                                            <div className="entry" style={{ color: '#50e3f0' }} />
                                                                            <div className="entry" style={{ color: '#eee' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="description">
                                                                        <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                        <div className="icons">
                                                                            <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                            <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                            <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="product-shortcode style-1 float">
                                                                    <div className="title">
                                                                        <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                        <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                                    </div>
                                                                    <div className="preview">
                                                                        <img src="static/theme1/img/product-129.jpg" alt="" />
                                                                        <div className="preview-buttons valign-middle">
                                                                            <div className="valign-middle-content">
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
                                                                    </div>
                                                                    <div className="price">
                                                                        <div className="simple-article size-4 dark">$630.00</div>
                                                                        <div className="color-selection">
                                                                            <div className="entry active" style={{ color: '#a7f050' }} />
                                                                            <div className="entry" style={{ color: '#50e3f0' }} />
                                                                            <div className="entry" style={{ color: '#eee' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="description">
                                                                        <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                        <div className="icons">
                                                                            <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                            <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                            <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-pagination md-relative-pagination" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-entry">
                                        <div className="row nopadding">
                                            <div className="col-lg-6">
                                                <div className="row nopadding">
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-127.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-128.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="row nopadding">
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-125.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="product-shortcode style-1">
                                                            <div className="title">
                                                                <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                            </div>
                                                            <div className="preview">
                                                                <img src="static/theme1/img/product-126.jpg" alt="" />
                                                                <div className="preview-buttons valign-middle">
                                                                    <div className="valign-middle-content">
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
                                                            </div>
                                                            <div className="price">
                                                                <div className="simple-article size-4 dark">$630.00</div>
                                                            </div>
                                                            <div className="description">
                                                                <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                <div className="icons">
                                                                    <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                    <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-entry">
                                        <div className="row nopadding">
                                            <div className="col-lg-6">
                                                <div className="slider-wrapper side-borders grid-products-2-items">
                                                    <div className="swiper-container">
                                                        <div className="swiper-button-prev hidden" />
                                                        <div className="swiper-button-next hidden" />
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                <div className="product-shortcode style-1 float">
                                                                    <div className="title">
                                                                        <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                        <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                                    </div>
                                                                    <div className="preview">
                                                                        <img src="static/theme1/img/product-124.jpg" alt="" />
                                                                        <div className="preview-buttons valign-middle">
                                                                            <div className="valign-middle-content">
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
                                                                    </div>
                                                                    <div className="price">
                                                                        <div className="simple-article size-4 dark">$630.00</div>
                                                                        <div className="color-selection">
                                                                            <div className="entry active" style={{ color: '#a7f050' }} />
                                                                            <div className="entry" style={{ color: '#50e3f0' }} />
                                                                            <div className="entry" style={{ color: '#eee' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="description">
                                                                        <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                        <div className="icons">
                                                                            <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                            <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                            <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="product-shortcode style-1 float">
                                                                    <div className="title">
                                                                        <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                        <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                                    </div>
                                                                    <div className="preview">
                                                                        <img src="static/theme1/img/product-124.jpg" alt="" />
                                                                        <div className="preview-buttons valign-middle">
                                                                            <div className="valign-middle-content">
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
                                                                    </div>
                                                                    <div className="price">
                                                                        <div className="simple-article size-4 dark">$630.00</div>
                                                                        <div className="color-selection">
                                                                            <div className="entry active" style={{ color: '#a7f050' }} />
                                                                            <div className="entry" style={{ color: '#50e3f0' }} />
                                                                            <div className="entry" style={{ color: '#eee' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="description">
                                                                        <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                        <div className="icons">
                                                                            <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                            <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                            <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-pagination md-relative-pagination" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="slider-wrapper side-borders grid-products-2-items">
                                                    <div className="swiper-container">
                                                        <div className="swiper-button-prev hidden" />
                                                        <div className="swiper-button-next hidden" />
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                <div className="product-shortcode style-1 float">
                                                                    <div className="title">
                                                                        <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                        <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                                    </div>
                                                                    <div className="preview">
                                                                        <img src="static/theme1/img/product-129.jpg" alt="" />
                                                                        <div className="preview-buttons valign-middle">
                                                                            <div className="valign-middle-content">
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
                                                                    </div>
                                                                    <div className="price">
                                                                        <div className="simple-article size-4 dark">$630.00</div>
                                                                        <div className="color-selection">
                                                                            <div className="entry active" style={{ color: '#a7f050' }} />
                                                                            <div className="entry" style={{ color: '#50e3f0' }} />
                                                                            <div className="entry" style={{ color: '#eee' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="description">
                                                                        <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                        <div className="icons">
                                                                            <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                            <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                            <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <div className="product-shortcode style-1 float">
                                                                    <div className="title">
                                                                        <div className="simple-article size-1 color col-xs-b5"><a href="#">SMART WATCHES</a></div>
                                                                        <div className="h6 animate-to-green"><a href="#">SmartWatch 3 SWR50</a></div>
                                                                    </div>
                                                                    <div className="preview">
                                                                        <img src="static/theme1/img/product-129.jpg" alt="" />
                                                                        <div className="preview-buttons valign-middle">
                                                                            <div className="valign-middle-content">
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
                                                                    </div>
                                                                    <div className="price">
                                                                        <div className="simple-article size-4 dark">$630.00</div>
                                                                        <div className="color-selection">
                                                                            <div className="entry active" style={{ color: '#a7f050' }} />
                                                                            <div className="entry" style={{ color: '#50e3f0' }} />
                                                                            <div className="entry" style={{ color: '#eee' }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="description">
                                                                        <div className="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                                                                        <div className="icons">
                                                                            <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                                                                            <a className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                                                                            <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-pagination md-relative-pagination" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="empty-space col-xs-b35 col-md-b70" />
                                <div className="row">
                                    <div className="col-sm-4 col-xs-b25">
                                        <div className="h4 col-xs-b25">Hot Sale</div>
                                        <div className="product-shortcode style-4 light clearfix">
                                            <a className="preview" href="#"><img src="static/theme1/img/product-31.jpg" alt="" /></a>
                                            <div className="description">
                                                <div className="simple-article color size-1 col-xs-b5"><a href="#">WIRELESS</a></div>
                                                <h6 className="h6 col-xs-b10"><a href="#">wireless headphones</a></h6>
                                                <div className="simple-article dark">$98.00</div>
                                            </div>
                                        </div>
                                        <div className="product-shortcode style-4 light clearfix">
                                            <a className="preview" href="#"><img src="static/theme1/img/product-32.jpg" alt="" /></a>
                                            <div className="description">
                                                <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
                                                <h6 className="h6 col-xs-b10"><a href="#">earphones case</a></h6>
                                                <div className="simple-article dark">$12.00</div>
                                            </div>
                                        </div>
                                        <div className="product-shortcode style-4 light clearfix">
                                            <a className="preview" href="#"><img src="static/theme1/img/product-33.jpg" alt="" /></a>
                                            <div className="description">
                                                <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
                                                <h6 className="h6 col-xs-b10"><a href="#">headphones case</a></h6>
                                                <div className="simple-article dark">$4.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-xs-b25">
                                        <div className="h4 col-xs-b25">Top Rated</div>
                                        <div className="product-shortcode style-4 light clearfix">
                                            <a className="preview" href="#"><img src="static/theme1/img/product-34.jpg" alt="" /></a>
                                            <div className="description">
                                                <div className="simple-article color size-1 col-xs-b5"><a href="#">WIRELESS</a></div>
                                                <h6 className="h6 col-xs-b10"><a href="#">wireless headphones</a></h6>
                                                <div className="simple-article dark">$98.00</div>
                                            </div>
                                        </div>
                                        <div className="product-shortcode style-4 light clearfix">
                                            <a className="preview" href="#"><img src="static/theme1/img/product-35.jpg" alt="" /></a>
                                            <div className="description">
                                                <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
                                                <h6 className="h6 col-xs-b10"><a href="#">earphones case</a></h6>
                                                <div className="simple-article dark">$12.00</div>
                                            </div>
                                        </div>
                                        <div className="product-shortcode style-4 light clearfix">
                                            <a className="preview" href="#"><img src="static/theme1/img/product-36.jpg" alt="" /></a>
                                            <div className="description">
                                                <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
                                                <h6 className="h6 col-xs-b10"><a href="#">headphones case</a></h6>
                                                <div className="simple-article dark">$4.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-xs-b25">
                                        <div className="h4 col-xs-b25">Popular</div>
                                        <div className="product-shortcode style-4 light clearfix">
                                            <a className="preview" href="#"><img src="static/theme1/img/product-37.jpg" alt="" /></a>
                                            <div className="description">
                                                <div className="simple-article color size-1 col-xs-b5"><a href="#">WIRELESS</a></div>
                                                <h6 className="h6 col-xs-b10"><a href="#">wireless headphones</a></h6>
                                                <div className="simple-article dark">$98.00</div>
                                            </div>
                                        </div>
                                        <div className="product-shortcode style-4 light clearfix">
                                            <a className="preview" href="#"><img src="static/theme1/img/product-38.jpg" alt="" /></a>
                                            <div className="description">
                                                <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
                                                <h6 className="h6 col-xs-b10"><a href="#">earphones case</a></h6>
                                                <div className="simple-article dark">$12.00</div>
                                            </div>
                                        </div>
                                        <div className="product-shortcode style-4 light clearfix">
                                            <a className="preview" href="#"><img src="static/theme1/img/product-39.jpg" alt="" /></a>
                                            <div className="description">
                                                <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
                                                <h6 className="h6 col-xs-b10"><a href="#">headphones case</a></h6>
                                                <div className="simple-article dark">$4.00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="empty-space col-xs-b35 col-md-b70" />
                            </div>
                        </div>
                        <div className="row nopadding">
                            <div className="col-sm-6 col-lg-3">
                                <div className="icon-description-shortcode style-4">
                                    <img className="icon-image" src="static/theme1/img/icon-22.png" alt="" />
                                    <div className="cell-view">
                                        <div className="title h6">free delivery</div>
                                        <div className="description simple-article size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="icon-description-shortcode style-4">
                                    <img className="icon-image" src="static/theme1/img/icon-23.png" alt="" />
                                    <div className="cell-view">
                                        <div className="title h6">customers support</div>
                                        <div className="description simple-article size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="icon-description-shortcode style-4">
                                    <img className="icon-image" src="static/theme1/img/icon-24.png" alt="" />
                                    <div className="cell-view">
                                        <div className="title h6">payment security</div>
                                        <div className="description simple-article size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="icon-description-shortcode style-4">
                                    <img className="icon-image" src="static/theme1/img/icon-25.png" alt="" />
                                    <div className="cell-view">
                                        <div className="title h6">world wide store</div>
                                        <div className="description simple-article size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <script src="static/theme1/js/jquery-2.2.4.min.js"></script>
                    <script src="static/theme1/js/swiper.jquery.min.js"></script>
                    <script src="static/theme1/js/global.js"></script>

                    {/* <!-- styled select --> */}
                    <script src="static/theme1/js/jquery.sumoselect.min.js"></script>

                    {/* <!-- counter --> */}
                    <script src="static/theme1/js/jquery.classycountdown.js"></script>
                    <script src="static/theme1/js/jquery.knob.js"></script>
                    <script src="static/theme1/js/jquery.throttle.js"></script>



                    {/* <!-- masonry --> */}
                    <script src="static/theme1/js/isotope.pkgd.min.js"></script>

                </div>
            </AppLayout>

        );
    }
}

export default connect(
    state => state,
    actions
)(Cart);