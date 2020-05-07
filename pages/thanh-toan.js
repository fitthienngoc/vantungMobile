import React from 'react';
import { connect } from 'react-redux';
import initialize from '../utils/initialize';
import AppLayout from '../components/layout';
import ProductInCheckOut from '../components/product/ProductInCheckOut';
import CurrencyFormat from 'react-currency-format';
import { actSaveOrder } from '../redux/actions/home/products';
import { getDateTime } from '../helpers/getDateTime';
import { toast, ToastContainer } from 'react-toastify';

// import {$} from 'jquery';

class CheckOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 15,
            fullName: '',
            phone: '',
            address: '',
            note_order: '',
            orderOnline: true,
            error: ''
        };
    }

    static getInitialProps(ctx) {
        initialize(ctx);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.users !== nextProps.users) {
            var { dataUser } = nextProps.users
            console.log(nextProps);
            this.setState({
                fullName: dataUser.name,
                phone: dataUser.phone
            })
        }
    }


    onChange = (e) => {
        var target = e.target;

        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });

    }

    onSave = () => {
        var { fullName, phone, address, note_order, orderOnline } = this.state
        var { users, cartReducer } = this.props
        var dataProduct = []
        cartReducer.data.map((e, index) => {
            var x = {}
            x.Id = e.Id
            x.color_by = e.color_by
            x.IdNow = e.IdNow
            x.quality_by = e.quality_by
            x.name = e.name
            x.code = e.code
            x.screen = e.screen
            x.system = e.system

            dataProduct.push(x)
        });
        var { total, totalNotSale } = cartReducer
        var data = {
            dataProduct: JSON.stringify(dataProduct),
            dataUser: JSON.stringify(users.dataUser),
            orderOnline: orderOnline ? 1 : 0,
            dataBill: JSON.stringify({ total, totalNotSale, fullName, phone, address, note_order, dataProduct, time: getDateTime() })
        }
        if (fullName && phone && address && dataProduct) {
            if (orderOnline) {

                this.props.onSaveOrder(data)
            } else {

                this.props.onSaveOrder(data)
                toast.success("Đặt hàng thanh công. Cảm ơn quý khách!")

            }
        }
        else {
            this.setState({
                error: "Vui lòng điền đầy đủ nội dung"
            })
        }

    }

    render() {
        var { cartReducer, onUpdateProductInCart,
            onRemoveProduct } = this.props
        var { fullName, phone, address, note_order, orderOnline } = this.state
        return (
            <AppLayout>

                <ToastContainer />
                <div id="content-block">
                    {/* import HEADER */}

                    <div className="container">
                        <div className="empty-space col-xs-b15 col-sm-b30" />
                        <div className="breadcrumbs">
                            <a href="/">Trang Chủ</a>
                            <a href="/thanh-toan">Thanh Toán</a>
                        </div>
                        <div className="empty-space col-xs-b15 col-sm-b50 col-md-b100" />
                        <div className="text-center">
                            <div className="simple-article size-3 grey uppercase col-xs-b5">Thanh Toán</div>
                            <div className="h2">Kiểm Tra Thông Tin</div>
                            <div className="title-underline center"><span /></div>
                        </div>
                    </div>
                    <div className="empty-space col-xs-b35 col-md-b70" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-xs-b50 col-md-b0">
                                <h4 className="h4 col-xs-b25">Hóa Đơn Chi Tiết</h4>

                                <div className="empty-space col-xs-b20" />
                                <div className="row m10">
                                    <div className="col-sm-6">
                                        <input name="fullName" value={fullName} onChange={this.onChange} className="simple-input" type="text" placeholder="Họ và tên" />
                                        <div className="empty-space col-xs-b20" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input
                                            name="phone" value={phone} onChange={this.onChange}
                                            className="simple-input" type="text" placeholder="Số điện thoại" />
                                        <div className="empty-space col-xs-b20" />
                                    </div>
                                </div>
                                <div className="empty-space col-xs-b20" />
                                <input
                                    name="address" value={address} onChange={this.onChange}
                                    className="simple-input" type="text" placeholder="Địa chỉ nhận hàng" />
                                <div className="empty-space col-xs-b20" />
                                <div className="row m10">
                                    <div className="col-sm-12">
                                        <textarea name="note_order" value={note_order} onChange={this.onChange} className="simple-input" placeholder="Ghi chú thêm" />
                                        <div className="empty-space col-xs-b20" />
                                    </div>

                                </div>



                                <div className="empty-space col-xs-b50" />
                                <h4 className="h4 col-xs-b25">Phương thức thanh toán</h4>

                                {/* select */}
                                <div className="empty-space col-xs-b10" />
                                <div className="simple-article size-2">* Chúng tôi khuyến khích thanh toán online.</div>
                                <div className="empty-space col-xs-b50" />
                                <label className="checkbox-entry">
                                    <input type="checkbox" name="orderOnline" defaultChecked={orderOnline} onChange={this.onChange} /><span>Thanh toán online</span>
                                </label>


                            </div>
                            <div className="col-md-6">
                                <h4 className="h4 col-xs-b25">Đặt hàng</h4>
                                <div className="container" style={{ backgroundColor: '#cdcdcd' }}>
                                    <table className="cart-table">
                                        <tbody>
                                            {cartReducer && cartReducer.data && cartReducer.data.length > 0 &&
                                                cartReducer.data.map((e, i) => {
                                                    return <ProductInCheckOut thanhtoan={true} key={i}
                                                        onUpdateProductInCart={onUpdateProductInCart}
                                                        onRemoveProduct={onRemoveProduct}
                                                        data={e} />


                                                })


                                            }
                                        </tbody>
                                    </table>
                                </div>


                                <div className="order-details-entry simple-article size-3 grey uppercase">
                                    <div className="row">
                                        <div className="col-xs-6">
                                            Giá
                                        </div>
                                        <div className="col-xs-6 col-xs-text-right">
                                            <div className="color"><CurrencyFormat value={cartReducer.totalNotSale} displayType={'text'} thousandSeparator={true} prefix={' '} />VND</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-details-entry simple-article size-3 grey uppercase">
                                    <div className="row">
                                        <div className="col-xs-6">
                                            Giảm
                                        </div>
                                        <div className="col-xs-6 col-xs-text-right">
                                            <div className="color"><CurrencyFormat value={cartReducer.totalNotSale - cartReducer.total} displayType={'text'} thousandSeparator={true} prefix={' '} />VND</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-details-entry simple-article size-3 grey uppercase">
                                    <div className="row">
                                        <div className="col-xs-6">
                                            Tổng tiền
                                        </div>
                                        <div className="col-xs-6 col-xs-text-right">
                                            <div className="color"><CurrencyFormat value={cartReducer.total} displayType={'text'} thousandSeparator={true} prefix={' '} />VND</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="empty-space col-xs-b30" />
                                {this.state.error}

                                {orderOnline ? <img className="entry" src={"/static/theme1/img/paypal-main.png"} /> : null}

                                <div className="empty-space col-xs-b30" />
                                <div onClick={this.onSave} className="button block size-2 style-3">
                                    <span className="button-wrapper">
                                        <span className="icon"><img src="/static/theme1/img/icon-4.png" alt="" /></span>
                                        <span className="text">{orderOnline ? " Thanh Toán Online" : "Đặt hàng"}</span>
                                    </span>
                                    {/* <input type="submit" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="empty-space col-xs-b35 col-md-b70" />
                    {/* import FOOTER */}
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
        onSaveOrder: (data) => {
            return dispatch(actSaveOrder(data))
        }

    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(CheckOut);