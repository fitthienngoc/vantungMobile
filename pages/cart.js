import React from 'react';
import { connect } from 'react-redux';
import initialize from '../utils/initialize';
import AppLayout from '../components/layout';
import ProductInCheckOut from './../components/product/ProductInCheckOut.js'
import CurrencyFormat from 'react-currency-format';
import { actAddProductToCart, actRemoveProductInCart, actUpdateProductInCart } from '../redux/actions/home/products';
// import {$} from 'jquery';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 15,
            quality: 0
        };
    }


    static getInitialProps(ctx) {
        initialize(ctx);
    }



    render() {
        var { cartReducer, onUpdateProductInCart, onRemoveProduct } = this.props
        return (

            <AppLayout>


                <div id="content-block">
                    {/* HEADER */}
                    <div className="container">
                        <div className="empty-space col-xs-b15 col-sm-b30" />
                        <div className="breadcrumbs">
                            <a href="/">Trang Chủ</a>
                            <a href="/cart">Giỏ Đồ</a>
                        </div>
                        <div className="empty-space col-xs-b15 col-sm-b50 col-md-b100" />
                        <div className="text-center">
                            <div className="simple-article size-3 grey uppercase col-xs-b5">Kiểm tra</div>
                            <div className="h2">Giỏ đồ</div>
                            <div className="title-underline center"><span /></div>
                        </div>
                    </div>
                    <div className="empty-space col-xs-b35 col-md-b70" />
                    <div className="container">
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '95px' }} />
                                    <th>Sản Phẩm</th>
                                    <th style={{ width: '150px' }}>Giá</th>
                                    <th style={{ width: '260px' }}>Số Lượng</th>
                                    <th style={{ width: '70px' }}>Màu</th>
                                    <th style={{ width: '70px' }}>SALE</th>
                                    <th style={{ width: '150px' }}>Thành tiền</th>
                                    <th style={{ width: '70px' }} />
                                </tr>
                            </thead>
                            <tbody>
                                {cartReducer && cartReducer.data && cartReducer.data.length > 0 &&
                                    cartReducer.data.map((e, i) => {
                                        return <ProductInCheckOut key={i}
                                            onUpdateProductInCart={onUpdateProductInCart}
                                            onRemoveProduct={onRemoveProduct}
                                            data={e} />


                                    })


                                }
                                <tr>

                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td data-title="Tổng:"><CurrencyFormat value={cartReducer.total} displayType={'text'} thousandSeparator={true} prefix={' '} />VND</td>
                                    <td data-title>
                                        <div className="button-tn-close" />
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                        <div className="empty-space col-xs-b35" />
                        {cartReducer && cartReducer.data && cartReducer.data.length > 0 ?
                            <div className="row">
                                <div className="col-sm-6 col-md-5 col-xs-b10 col-sm-b0">
                                    {/* <div className="single-line-form">
                                    <input className="simple-input" type="text" defaultValue placeholder="Enter your coupon code" />
                                    <div className="button size-2 style-3">
                                        <span className="button-wrapper">
                                            <span className="icon"><img src="static/theme1/img/icon-4.png" alt="" /></span>
                                            <span className="text">submit</span>
                                        </span>
                                        <input type="submit" defaultValue />
                                    </div>
                                </div> */}
                                </div>
                                <div className="col-sm-6 col-md-7 col-sm-text-right">
                                    <div className="buttons-wrapper">
                                        {/* <a className="button size-2 style-2" href="#">
                                        <span className="button-wrapper">
                                            <span className="icon"><img src="static/theme1/img/icon-2.png" alt="" /></span>
                                            <span className="text">Cập Nhật</span>
                                        </span>
                                    </a> */}

                                        <a className="button size-2 style-3" href="/thanh-toan">
                                            <span className="button-wrapper">
                                                <span className="icon"><img src="static/theme1/img/icon-4.png" alt="" /></span>
                                                <span className="text">Tiến hành thanh toán</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div> : <>Bạn chưa chọn sản phẩm nào
                            <div className="empty-space col-xs-b35 col-md-b70" />
                                <div className="buttons-wrapper">
                                    {/* <a className="button size-2 style-2" href="#">
                                        <span className="button-wrapper">
                                            <span className="icon"><img src="static/theme1/img/icon-2.png" alt="" /></span>
                                            <span className="text">Cập Nhật</span>
                                        </span>
                                    </a> */}

                                    <a className="button size-2 style-3" href="/search">
                                        <span className="button-wrapper">
                                            <span className="icon"><img src="static/theme1/img/icon-4.png" alt="" /></span>
                                            <span className="text">Tìm kiếm</span>
                                        </span>
                                    </a>
                                </div></>
                        }<div className="empty-space col-xs-b35 col-md-b70" />
                        {/* <div className="row">
                            <div className="col-md-6 col-xs-b50 col-md-b0">
                                <h4 className="h4 col-xs-b25">calculate shipping</h4>
                                <select className="SlectBox">
                                    <option disabled="disabled" selected="selected">Choose country for shipping</option>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                <div className="empty-space col-xs-b20" />
                                <div className="row m10">
                                    <div className="col-sm-6">
                                        <input className="simple-input" type="text" defaultValue placeholder="State / Country" />
                                        <div className="empty-space col-xs-b20" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input className="simple-input" type="text" defaultValue placeholder="Postcode / Zip" />
                                        <div className="empty-space col-xs-b20" />
                                    </div>
                                </div>
                                <div className="button size-2 style-2">
                                    <span className="button-wrapper">
                                        <span className="icon"><img src="static/theme1/img/icon-1.png" alt="" /></span>
                                        <span className="text">update totals</span>
                                    </span>
                                    <input type="submit" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h4 className="h4">cart totals</h4>
                                <div className="order-details-entry simple-article size-3 grey uppercase">
                                    <div className="row">
                                        <div className="col-xs-6">
                                            cart subtotal
              </div>
                                        <div className="col-xs-6 col-xs-text-right">
                                            <div className="color">$1195.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-details-entry simple-article size-3 grey uppercase">
                                    <div className="row">
                                        <div className="col-xs-6">
                                            shipping and handling
              </div>
                                        <div className="col-xs-6 col-xs-text-right">
                                            <div className="color">free shipping</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-details-entry simple-article size-3 grey uppercase">
                                    <div className="row">
                                        <div className="col-xs-6">
                                            order total
              </div>
                                        <div className="col-xs-6 col-xs-text-right">
                                            <div className="color">$1195.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         */}
                        <div className="empty-space col-xs-b35 col-md-b70" />
                        <div className="empty-space col-xs-b35 col-md-b70" />
                    </div>
                    {/* FOOTER */}
                    {/* import footer */}
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

            </AppLayout>

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

        onGetProductBannerSlide: () => {
            dispatch(actGetProductBannerSlide())
        },
        onUpdateProductInCart: (data) => {
            dispatch(actUpdateProductInCart(data))
        },
        onRemoveProduct: (IdNow) => {
            dispatch(actRemoveProductInCart(IdNow))
        },





    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(Cart);