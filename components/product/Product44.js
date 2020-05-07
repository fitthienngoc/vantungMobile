import React, { Component } from 'react'
import CurrencyFormat from 'react-currency-format';
import Link from 'next/link'
export default class Product44 extends Component {

    render() {

        var data = this.props.data;
        // console.log(`data`, data);
        return (
            data && <div className="col-sm-4" >

                <div className="product-shortcode style-1" style={{ paddingTop: 10,paddingBottom:10 }}>
                    <div className="title">
                        <div className="simple-article size-1 color col-xs-b5"><a href="#">{data.code}</a></div>
                        <div className="h6 animate-to-green"><a href="#">{data.name}</a></div>
                    </div>
                    <div className="preview">
                        <img style={{ height: 200 }} src={data.pictures[0].base64} alt="" />
                        <div className="preview-buttons valign-middle">
                            <div className="valign-middle-content">
                                <a href={`/chi-tiet/${data.name.replace(/\s/g, '-')}/${data.Id}`} className="button size-2 style-2">
                                    <span className="button-wrapper">
                                        <span className="icon"><img src="/static/theme1/img/icon-1.png" alt="" /></span>
                                        <span className="text">Chi tiết</span>
                                    </span>
                                </a>
                                <a onClick={() => {
                                    data.quality_by = 1
                                    data.color_by = data.cpu[0]
                                    this.props.onAddProductToCart(data)
                                    this.props.notify.success(`✓ Thêm ${data.name} thành công!`, { position: "top-center" })
                                }

                                } className="button size-2 style-3">
                                    <span className="button-wrapper">
                                        <span className="icon"><img src="/static/theme1/img/icon-3.png" alt="" /></span>
                                        <span className="text">Thêm vào giỏ đồ</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="price">
                        <div className="color-selection">
                            {data.cpu && data.cpu.length && data.cpu.map((e, i) => {
                                return <div key={i} style={{ cursor: 'auto' }} className={"entry"} style={{ color: e.code }} />
                            })
                            }
                        </div>
                        <div className="simple-article size-4"><span className="color">
                            <CurrencyFormat value={data.system - data.system * data.screen / 100} displayType={'text'} thousandSeparator={true} prefix={' '} />
                        </span>&nbsp;&nbsp;&nbsp;
                        {data.screen ? <span className="line-through"><CurrencyFormat value={data.system} displayType={'text'} thousandSeparator={true} prefix={' '} /></span> : null}
                        </div>
                    </div>
                    <div className="description">
                        <div className="simple-article text size-2">{data.cpuHeDH}</div>
                        <div className="simple-article text size-2">{data.pinDungLuong} / {data.ram} / {data.rom}</div>
                        {/* <div className="icons">
                            <a className="entry"><i className="fa fa-check" aria-hidden="true" /></a>
                            <a className="entry open-popup" data-rel={3}><i className="fa fa-eye" aria-hidden="true" /></a>
                            <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}
