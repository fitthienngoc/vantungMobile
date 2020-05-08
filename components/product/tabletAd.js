import React, { Component } from 'react'
import CurrencyFormat from 'react-currency-format';
import Link from 'next/link'
import { getVND, getDateTimeCountDown } from '../../helpers/getDateTime';
export default class TabLetAdd extends Component {

    render() {
        console.log(`this.props`, getDateTimeCountDown());
        
        var { data } = this.props
        return (
            <div className="">
                <div className="container">
                    <div className="row vertical-aligned-columns">
                        <div className="col-sm-6 col-xs-b30 col-sm-b0">
                            <img src={data.front_camera.base64} className="block-image rounded-image" alt={data.name} />
                        </div>
                        <div className="col-sm-6 col-md-4 col-md-offset-2 ">
                            <h3 className="h3 col-xs-b15 light">Máy tính bảng<span className="simple-article light">+</span> {data.name} <span className="color">+</span> free delivery</h3>
                            <div className="simple-article size-5 uppercase col-xs-b20"> <span className="simple-article light">{getVND(data.system)} VND</span></div>
                            <div className="countdown max-width col-xs-b20" data-end={getDateTimeCountDown()} />
                            <div className="simple-article size-3 light col-xs-b30">{data.cpuHeDH} / {data.cpuSpeed} / {data.back_cameraQuayPhim}</div>
                            <div className="buttons-wrapper">
                                <a className="button size-2 style-3" href={`/chi-tiet/${data.name.replace(/\s/g, '-')}/${data.Id}`}>
                                    <span className="button-wrapper">
                                        <span className="icon"><img src="/static/theme1/img/icon-4.png" alt="" /></span>
                                        <span className="text">Chi tiết</span>
                                    </span>
                                </a>
                                <a onClick={() => {
                                    data.quality_by = 1
                                    data.color_by = data.cpu[0]
                                    this.props.onAddProductToCart(data)
                                    this.props.notify.success(`✓ Thêm ${data.name} thành công!`, { position: "top-center" })
                                }

                                }
                                    className="button size-2 style-2" >
                                    <span className="button-wrapper">
                                        <span className="icon"><img src="/static/theme1/img/icon-2.png" alt="" /></span>
                                        <span className="text">Thêm vào giỏ đồ</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="aligned-middle-image-shortcode hidden-xs hidden-sm" data-swiper-parallax-x={-600}>
                    <img src="/static/theme1/img/thumbnail-25.png" alt="" />
                </div> */}
                <div className="empty-space col-xs-b35 col-md-b70" />
            </div>

        )
    }
}