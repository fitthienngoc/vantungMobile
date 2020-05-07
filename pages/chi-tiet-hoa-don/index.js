import { withRouter } from 'next/router'

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actGetOrderDetail } from '../../redux/actions/home/products';
import Head from 'next/head'
import { ToastContainer } from 'react-toastify';
import AppLayout from '../../components/layout';
import { getVND } from '../../helpers/getDateTime';
import ReactToPrint from "react-to-print";
import Doc from '../../lib/DocService';
import PdfContainer from '../../lib/PdfContainer';


class ComponentToPrint extends Component {


    render() {
        var { homeProducts, dataDetailOrder } = this.props
        return (
            <div>

                {homeProducts && homeProducts.dataDetailOrder && homeProducts.dataDetailOrder.dataBill && <div style={{ marginTop: 15, marginBottom: 15 }} className="invoice-box">
                    <table cellPadding={0} cellSpacing={0}>
                        <tbody><tr className="top">
                            <td colSpan={2}>
                                <table>
                                    <tbody><tr>
                                        <td className="title">
                                            <img src="/static/theme1/img/logo-2.png" style={{ width: '100px', maxWidth: '100px' }} />
                                        </td>
                                        <td>
                                            Mã đơn hàng #: {dataDetailOrder.Id}<br />
                                                    Khởi tạo: {dataDetailOrder.dataBill.time}<br />

                                        </td>
                                    </tr>
                                    </tbody></table>
                            </td>
                        </tr>
                            <tr className="information">
                                <td colSpan={2}>
                                    <table>
                                        <tbody><tr>
                                            <td>
                                                {dataDetailOrder.dataBill.address}<br />

                                            </td>
                                            <td>
                                                {dataDetailOrder.dataBill.fullName}<br />
                                                {dataDetailOrder.dataBill.phone}<br />


                                            </td>
                                        </tr>
                                        </tbody></table>
                                </td>
                            </tr>
                            <tr className="heading">
                                <td>
                                    Phương thức thanh toán
                                </td>
                                <td>
                                    Đơn vị tiền tệ
                                </td>
                            </tr>
                            <tr className="details">
                                <td>
                                    {dataDetailOrder.orderOnline == 0 ? 'Vận chuyển' : 'Thanh toán Online'}
                                </td>
                                <td>
                                    VND
                                </td>
                            </tr>
                            <tr className="heading">
                                <td>
                                    Sản phẩm
                                        </td>
                                <td>
                                    Giá
                                        </td>
                            </tr>
                            {dataDetailOrder.dataBill.dataProduct.map((e, index) => {
                                return <tr key={index} className="item">
                                    <td>
                                        {e.name}
                                    </td>
                                    <td>
                                        {getVND(e.system * e.quality_by * (100 - e.screen) / 100)}
                                    </td>
                                </tr>
                            })
                            }


                            <tr className="total">
                                <td />
                                <td>
                                    Tổng: {getVND(dataDetailOrder.dataBill.total)}
                                </td>
                            </tr>
                        </tbody></table>
                </div>

                }
            </div>
        );
    }
}
class index extends Component {
    componentDidMount() {
        var { router } = this.props
        var { id } = router.query
        this.props.onGetOrderDetail(id)
    }
    createPdf = (html) => Doc.createPdf(html);
    render() {
        var homeProducts = this.props.homeProducts
        var { dataDetailOrder } = homeProducts
        console.log('dataDetailOrder', dataDetailOrder);

        return (
            <div>
                <Head>
                    <title>Chi Tiết Hóa Đơn</title>
                    {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
                </Head>
                <AppLayout>
                    <ToastContainer />
                    {/* <ComponentToPrint homeProducts={homeProducts}  dataDetailOrder={dataDetailOrder}/> */}
                    <div>
                        {/* <PdfContainer createPdf={this.createPdf}> */}
                            <ComponentToPrint homeProducts={homeProducts} dataDetailOrder={dataDetailOrder} ref={el => (this.componentRef = el)} />
                        {/* </PdfContainer > */}

                        <div className="text-center" style={{ padding: 15 }}>


                            <ReactToPrint

                                trigger={() => <div className="button size-1 style-3" >
                                    <span className="button-wrapper">
                                        <span className="icon"><img src="/static/theme1/img/icons8-print-24.png" alt="" /></span>
                                        <span className="text">In hóa đơn</span>
                                    </span>
                                </div>}
                                content={() => this.componentRef}
                            />


                        </div>
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
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        homeProducts: state.homeProducts
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetOrderDetail: (id) => {
            dispatch(actGetOrderDetail(id))
        },

    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(withRouter(index));