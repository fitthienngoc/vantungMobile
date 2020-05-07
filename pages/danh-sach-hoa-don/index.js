import { withRouter } from 'next/router'

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actGetProduct } from '../../redux/actions/home/products';
import Head from 'next/head'
import { ToastContainer } from 'react-toastify';
import AppLayout from '../../components/layout';
import { getVND } from '../../helpers/getDateTime';

class index extends Component {
    // componentDidMount() {
    //     var { router } = this.props
    //     var { id } = router.query
    //     // console.log(this.props);

    // }
    showList(list) {
        list.map((e, index) => {
            // console.log(e);

            return <div key={index} style={{ padding: 15, backgroundColor: '#f7f7f7' }}>
                <a className="product-shortcode style-2">
                    {e.dataBill.dataProduct.map((e_, i) => {

                        if (i > 0) { return ' ' + e_.name } else { return e_.name }
                    })
                    }
                </a>
            </div>
        });


    }
    render() {
        var { users } = this.props

        return (
            <div>
                <Head>
                    <title>Danh sách hóa đơn</title>
                    {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
                </Head>
                <AppLayout>
                    <ToastContainer />
                    <div className="container">
                        {users.dataUser.orders && users.dataUser.orders.length > 0 ?
                            < div >
                                <div className="h2">Danh sách hóa đơn</div>
                                <div className="empty-space col-xs-b25 col-sm-b60" />

                                {users.dataUser.orders.map((e, index) => {
                                    return <div key={index} style={{ padding: 15, backgroundColor: '#f7f7f7' }}>
                                        <a style={{ padding: 10 }} href={'/chi-tiet-hoa-don/' + e.Id} className="product-shortcode style-2">
                                            {e.dataBill.dataProduct.map((e_, i) => {
                                                return <div key={index} className="simple-article size-5">
                                                    <div class="row">
                                                        <div class="col-sm-5">
                                                            <p>{i > 0 ? ' ' + e_.name : e_.name}</p>
                                                            <p>{e.dataBill.dataProduct.orderOnline == 0 ? 'Thanh toán khi nhận hàng' : 'Thanh toán online'}</p>
                                                        </div>
                                                        <div class="col-sm-2">
                                                            <p>{e.status == 0 ? "Chờ xử lý" : null}</p>
                                                            <p>{e.status == 1 ? "Đang vận chuyển" : null}</p>
                                                            <p>{e.status == 2 ? "Hủy" : null}</p>
                                                            <p>{e.status == 3 ? "Hoàn thành" : null}</p>
                                                        </div>
                                                        <div class="col-sm-5">
                                                            <p>{e.dataBill.time}</p>
                                                            <p>{getVND(e.dataBill.total)} VND</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            })
                                            }
                                        </a>
                                    </div>
                                })

                                }
                                <div className="empty-space col-xs-b25 col-sm-b60" />
                            </div> : 'Bạn chưa có hóa đơn nào được thanh toán'
                        }

                    </div>

                    <script src="/static/theme1/js/jquery-2.2.4.min.js"></script>
                    <script src="/static/theme1/js/swiper.jquery.min.js"></script>
                    <script src="/static/theme1/js/global.js"></script>

                    {/* <!-- styled select --> */}
                    <script src="/static/theme1/js/jquery.sumoselect.min.js"></script>

                    {/* <!-- counter --> */}
                    <script src="/static/theme1/js/jquery.classycountdown.js"></script>
                    <script src="/static/theme1/js/jquery.knob.js"></script>
                    <script src="/static/theme1/js/jquery.throttle.js"></script>



                    {/* <!-- masonry --> */}
                    <script src="/static/theme1/js/isotope.pkgd.min.js"></script>

                </AppLayout>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetDataUser: (id) => {
            dispatch(actGetDataUser(id))
        },

    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(withRouter(index));