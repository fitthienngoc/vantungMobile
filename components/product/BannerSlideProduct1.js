import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrencyFormat from 'react-currency-format';
import { Loading } from '../../components/Loading'

import Link from 'next/link';

function mapStateToProps(state) {
    return {
        // users: state.users
    };
}



class BannerSlideProduct1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picCurent: this.props.data.pictures[0].base64 + ''
        };
    }



    showPicPreviewProduct(data) {

    }
    showPicsPreviewProduct(data) {
        var r = ''
        if (data && data.pictures && data.pictures.length > 0) {
            r = data.pictures.map((e, i) => {
                return <div onClick={() => { this.setState({ picCurent: e.base64 }) }} key={i} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'transparent', borderRadius: 1 }} className="entry">
                    <div style={{ width: '95%' }} >
                        <img style={{ width: '95%' }} src={e.base64} alt="" />
                    </div>
                </div>

            });

        }
        return r
    }

    render() {

        var { picCurent } = this.state
        var { data } = this.props

        var { system, name, tinh_nang_dac_biet } = data
        return (
            <div className="">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="cell-view ">
                                <div className="col-xs-b40 col-sm-b80" />
                                <div data-swiper-parallax-x={-600}>
                                    <div className="simple-article grey size-5">GIÁ TỐT <span className="simple-article light"><CurrencyFormat value={system} displayType={'text'} thousandSeparator={true} prefix={' '} />  </span>VNĐ</div>
                                    <div className="col-xs-b5" />
                                </div>
                                <div data-swiper-parallax-x={-500}>
                                    <h1 className="h1">{name}</h1>
                                    <div className="title-underline left"><span /></div>
                                </div>
                                <div data-swiper-parallax-x={-400}>
                                    <div className="simple-article size-4 light">{tinh_nang_dac_biet}..</div>
                                    <div className="col-xs-b30" />
                                </div>
                                <div data-swiper-parallax-x={-300}>
                                    <div className="buttons-wrapper">
                                        <Link href={{ pathname: 'chi-tiet', query: { id: data.Id } }} as={`/chi-tiet/${data.name.replace(/\s/g, '-')}/${data.Id}`}>
                                            <a className="button size-2 style-2">
                                                <span className="button-wrapper">
                                                    <span className="icon"><img src="static/theme1/img/icon-1.png" alt="" /></span>
                                                    <span className="text">Chi tiết</span>
                                                </span>
                                            </a>
                                        </Link>

                                        <a onClick={() => {
                                            data.quality_by=1
                                            data.color_by = data.cpu[0]
                                            this.props.onAddProductToCart(data)
                                            this.props.notify.success(`✓ Thêm ${data.name} thành công!`, { position: "top-center" })

                                        }} className="button size-2 style-3" >
                                            <span className="button-wrapper">
                                                < span className="icon"><img src="static/theme1/img/icon-3.png" alt="" /></span>
                                                <span className="text">Thêm vào giỏ hàng</span>

                                            </span>
                                        </a>

                                    </div>
                                </div>
                                <div className="col-xs-b40 col-sm-b80" />
                            </div>
                        </div>
                    </div>
                    <div className="slider-product-preview">
                        <div className="product-preview-shortcode">
                            <div className="preview">
                                {/* <div className="swiper-lazy-preloader" /> */}
                                {/* <div className="entry full-size swiper-lazy active" active={true} data-background="static/theme1/img/product-4.png" />
                                <div className="entry full-size swiper-lazy" data-background="static/theme1/img/product-preview-2.jpg" />
                                <div className="entry full-size swiper-lazy" data-background="static/theme1/img/product-preview-3.jpg" /> */}
                                <div className="full-size swiper-lazy">
                                    <img style={{ height: '100%', maxWidth: '100%' }} className=" swiper-lazy active" src={picCurent} />

                                </div>
                            </div>
                            <div className="sidebar valign-middle" data-swiper-parallax-x={-300}>
                                <div className="valign-middle-content">
                                    {this.showPicsPreviewProduct(this.props.data)}
                                    {/* <div className="entry active"><img src="static/theme1/img/product-4.png" alt="" /></div>
                                    <div className="entry"><img src="static/theme1/img/product-5.png" alt="" /></div>
                                    <div className="entry"><img src="static/theme1/img/product-6.png" alt="" /></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="empty-space col-xs-b80 col-sm-b0" />
                </div>
            </div >
        )
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {



    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(BannerSlideProduct1);