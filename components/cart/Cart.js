import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loading } from '../Loading';
import CurrencyFormat from 'react-currency-format';
import { toast } from 'react-toastify';
import Link from 'next/link';


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    showProduct(data) {
        var r = 'Bạn chưa thêm sản phẩm nào vào giỏ đồ'
        if (data && data.length > 0) r = data.map((e, i) => {
            return <div key={i} className="cart-entry clearfix">
                <Link href={{ pathname: 'chi-tiet', query: { id: e.Id } }} as={`/chi-tiet/${e.name.replace(/\s/g, '-')}/${e.Id}`}>
                    <a className="cart-entry-thumbnail"><img style={{ maxHeight: 100, paddingRight: 10 }} src={e.pictures&&e.pictures[0].base64 ? e.pictures[0].base64:''} alt="" /></a>
                </Link>
                <div className="cart-entry-description" style={{ paddingLeft: 10 }}>
                    <table>
                        <tbody><tr>
                            <td>
                                <div className="h6"><a href="#">{e.name}</a></div>
                                <div className="simple-article size-1">Số lượng: {e.quality_by}</div>
                            </td>
                            <td>
                                <div className="simple-article size-3 grey">Giá Gốc: <CurrencyFormat value={e.system} displayType={'text'} thousandSeparator={true} prefix={' '} /></div>
                                <div className="simple-article size-3 grey">SALE: {e.screen}%</div>
                                <div className="simple-article size-1">Tổng: <CurrencyFormat value={e.system * e.quality_by - e.system * e.quality_by * e.screen / 100} displayType={'text'} thousandSeparator={true} prefix={' '} /> VNĐ</div>
                            </td>
                            <td>
                                {e.color_by ?
                                <>{e.color_by.nameColor}
                                    {e.color_by && <div className="cart-color" style={{ background: e.color_by.code }} />}</> :null
                            }
                            </td>
                            <td>
                                <div onClick={() => {
                                    this.props.onRemove(e.IdNow)
                                    toast.warn('🦄 Xóa thành công!', {
                                        position: "top-center", autoClose: 3000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                    })
                                }} className="button-tn-close" />
                            </td>
                        </tr>
                        </tbody></table>
                </div>
            </div>
        });


        return r


    }

    render() {


        var { cartReducer } = this.props
        console.log(`cartReducer`, cartReducer);
        return (

            <div className="entry hidden-xs hidden-sm cart">
                <a href="/cart">
                    <b className="hidden-xs">Giỏ đồ</b>
                    <span className="cart-icon">
                        <i className="fa fa-shopping-bag" aria-hidden="true" />
                        <span className="cart-label">{cartReducer.data && cartReducer.data.length ? cartReducer.data.length : 0} </span>
                    </span>
                    <span className="cart-title hidden-xs">{cartReducer.total}</span>
                </a>
                <div className="cart-toggle hidden-xs hidden-sm">
                    <div className="cart-overflow">
                        {this.showProduct(cartReducer.data)}
                    </div>
                    <div className="empty-space col-xs-b40" />
                    <div className="row">
                        <div className="col-xs-6">
                            <div className="cell-view empty-space col-xs-b50">
                                <div className="simple-article size-5 grey">Tổng <span className="color">VND <CurrencyFormat value={cartReducer.total} displayType={'text'} thousandSeparator={true} prefix={' '} /></span></div>
                            </div>
                        </div>
                        <div className="col-xs-6 text-right">
                            <a className="button size-2 style-3" href={cartReducer.data && cartReducer.data.length ? '/cart' : '/search'}>
                                <span className="button-wrapper">
                                    <span className="icon"><img src="/static/theme1/img/icon-4.png" alt="" /></span>
                                    {cartReducer.data && cartReducer.data.length > 0 ? <span className="text">Đến Giỏ Đồ</span> : <span className="text">Tìm kiếm</span>}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        // users: state.users
    };
}


const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(Cart);