import React, { Component } from 'react'
import { getVND, cleanUrl } from './../../helpers/getDateTime'

export default class ListNotSlide extends Component {

    render() {
        var { data, title } = this.props
        return (
            data && <div >
                <div className="col-sm-6 col-md-4 col-xs-b25">
                    <div className="h4 col-xs-b25">{title}</div>
                    {data.length > 0 && data.map((e, i) => {
                        return <div key={i}>
                            <div className="product-shortcode style-4 rounded clearfix" style={{ backgroundColor: 'rgba(230, 230, 230, 0.48)', padding: 15 }}>
                                <a className="preview" href={`/chi-tiet/${e.name.replace(/\s/g, '-')}/${e.Id}`}><img src={e.pictures[0].base64} alt="" /></a>
                                <div className="description">
                                    <div className="simple-article color size-1 col-xs-b5">{e.cpuHeDH}</div>
                                    <h6 className="h6 col-xs-b10"><a href={`/chi-tiet/${e.name.replace(/\s/g, '-')}/${e.Id}`}>{e.name}</a></h6>
                                <div className="simple-article dark">{getVND(e.system - e.system * e.screen / 100)} VND</div>
                                {e.screen ? <span className="line-through">{getVND(e.system)}</span> : null}
                            </div>
                        </div>
                            <div className="empty-space col-md-b30" />
                        </div>

                    })
                    }


                </div>
            </div >
        )
    }
}
