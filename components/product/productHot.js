import React, { Component } from 'react'
import CurrencyFormat from 'react-currency-format';
import Link from 'next/link'
export default class ProductHot extends Component {

    render() {

        var data = this.props.data;
        
        return (
            data && <div className="">
                <div className="product-shortcode style-1 big">
                    <div className="product-label red">{data.screen ? `sale ${data.screen}%` : null}</div>
                    <div className="preview">
                        <img style={{ maxHeight: 200 }} src={data.pictures[0].base64} alt="" />
                        <div className="preview-buttons valign-middle">
                            <div className="valign-middle-content">
                                {/* <Link href={{ pathname: 'chi-tiet', query: { id: data.Id } }} as={`/chi-tiet/${data.name.replace(/\s/g, '-')}/${data.Id}`}> */}
                                    <a  href={`/chi-tiet/${data.name.replace(/\s/g, '-')}/${data.Id}`} className="button size-2 style-2">
                                    <span className="button-wrapper">
                                        <span className="icon"><img src="/static/theme1/img/icon-1.png" alt="" /></span>
                                        <span className="text">Chi tiết</span>
                                    </span>
                                </a>
                                {/* </Link> */}
                                
                                <a onClick={()=>{
                                        data.quality_by=1
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
                    <div className="title">
                        <div className="simple-article size-1 color col-xs-b5"><a>{data.cpuHeDH}</a></div>
                        <div className="h6 animate-to-green"><a>{data.name}</a></div>
                    </div>
                    <div className="description">
                        <div className="simple-article text size-2">{data.pinDungLuong} / {data.ram} / {data.rom}</div>
                        <div className="icons">
                            <a href={`/chi-tiet/${data.name.replace(/\s/g, '-')}/${data.Id}`} className="entry"><i className="fa fa-eye" aria-hidden="true" /></a>
                            <a className="entry"><i className="fa fa-heart-o" aria-hidden="true" /></a>
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
                        
                            {data.screen ? <span className="line-through"><CurrencyFormat value={ data.system } displayType={'text'} thousandSeparator={true} prefix={' '} /></span> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
