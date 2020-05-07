import React from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';
// import initialize from '../utils/initialize';
import AppLayout from '../components/layout';
import { actGetProductBannerSlide, actAddProductToCart } from '../redux/actions/home/products';
import Banner from '../components/product/Banner';

import { ToastContainer, toast } from 'react-toastify';
import { Head } from 'next/head';
import ContentCenter from '../components/home/ContentCenter';
import SideBarLeft from '../components/home/SideBarLeft';
import Test from '../components/home/test';
import ChoseTheBest from '../components/home/ChoseTheBest';
import ListNotSlide from '../components/product/ListNotSlide';
import { cleanUrl } from '../helpers/getDateTime';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 15,
            width: 0, height: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }



    // static getInitialProps(ctx) {
    //     initialize(ctx);
    // }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
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
    // notify = (alert) => {if(alert) toast.(alert);}
    render() {
        console.log(`this.props`, this.props);
        var { homeProducts, cartReducer } = this.props
        var { width, height } = this.state
        return (
            <>
                <AppLayout>


                    {/* Same as */}
                    <ToastContainer />

                    {/* LOADER */}


                    {/*  */}

                    <div className="content-margins grey">
                        <Banner loading_add={cartReducer.loading_add} toast={cartReducer.alert_add} notify={toast} screen_={{ width, height }} onAddProductToCart={this.props.onAddProductToCart} onGetProductBannerSlide={this.props.onGetProductBannerSlide} homeProducts={homeProducts} />

                        <div className="empty-space col-xs-b20 col-sm-b40" />
                        <Test notify={toast} onAddProductToCart={this.props.onAddProductToCart} homeProducts={homeProducts} />
                        <div className="empty-space col-xs-b35 col-md-b70" />
                        <div className="empty-space col-xs-b35 col-md-b70" />
                        <ChoseTheBest notify={toast} onAddProductToCart={this.props.onAddProductToCart} homeProducts={homeProducts} />

                        <div className="container">
                            <div className="row">

                                {homeProducts && homeProducts.dataBannerSlide && homeProducts.dataBannerSlide.data_orderBy_rating && homeProducts.dataBannerSlide.data_orderBy_rating.length > 0
                                    &&
                                    <ListNotSlide notify={toast} onAddProductToCart={this.props.onAddProductToCart} data={homeProducts.dataBannerSlide.data_orderBy_rating} title={'Được đánh giá'} />
                                }
                                {homeProducts && homeProducts.dataBannerSlide && homeProducts.dataBannerSlide.data_orderBy_rand && homeProducts.dataBannerSlide.data_orderBy_rand.length > 0
                                    &&
                                    <ListNotSlide notify={toast} onAddProductToCart={this.props.onAddProductToCart} data={homeProducts.dataBannerSlide.data_orderBy_rand} title={'Ngẫu nhiên'} />
                                }
                                {homeProducts && homeProducts.dataBannerSlide && homeProducts.dataBannerSlide.data_orderBy_cost && homeProducts.dataBannerSlide.data_orderBy_cost.length > 0
                                    &&
                                    <ListNotSlide notify={toast} onAddProductToCart={this.props.onAddProductToCart} data={homeProducts.dataBannerSlide.data_orderBy_cost} title={'Giá tốt'} />
                                }
                            </div>

                        </div>
                        <div className="container text-center">
                        <a className="button size-2 style-3" href={`/search/`}>
                            <span className="button-wrapper">
                                <span className="icon"><img src="img/icon-4.png" alt="" /></span>
                                <span className="text">Xem Thêm Chi Tiết</span>
                            </span>
                        </a>
                        <div className="empty-space col-xs-b30 col-md-b60" />
                        </div>


                    </div>
                    {/*  */}





                    <script src="static/theme1/js/jquery-2.2.4.min.js"></script>
                    <script src="static/theme1/js/swiper.jquery.min.js"></script>
                    <script src="static/theme1/js/global.js"></script>

                    {/* <!-- styled select --> */}
                    <script src="static/theme1/js/jquery.sumoselect.min.js"></script>

                    {/* <!-- counter --> */}
                    <script src="static/theme1/js/jquery.classycountdown.js"></script>
                    <script src="static/theme1/js/jquery.knob.js"></script>
                    <script src="static/theme1/js/jquery.throttle.js"></script>
                </AppLayout>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.users,
        homeProducts: state.homeProducts,
        cartReducer: state.cartReducer
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLogin: (body) => {
            dispatch(actLogin(body))
        },
        onGetProductBannerSlide: () => {
            dispatch(actGetProductBannerSlide())
        },
        onAddProductToCart: (data) => {
            dispatch(actAddProductToCart(data))
        },





    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(Home);