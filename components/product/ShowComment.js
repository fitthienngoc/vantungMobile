import React, { Component } from 'react'
import Moment from 'react-moment';
import 'moment/locale/vi';
export default class ShowComment extends Component {

    showStar = (rating) => {
        var r = []
        for (let index = 0; index < 5; index++) {
            r.push(<i key={index} className={rating <= index ? "fa fa-star-o" : "fa fa-star"} />)
        }
        return r
    }


    render() {
        var { data } = this.props
        console.log(`data`, data);
        return (
            <div>
                <div className="testimonial-entry">
                    <div className="row col-xs-b20">
                        <div className="col-xs-8">
                            <img className="preview" src="/static/theme1/img/user_tn.png" alt="" />
                            <div className="heading-description">
                                <div className="h6 col-xs-b5">{data.fullName}</div>
                                <div className="rate-wrapper align-inline">

                                    {this.showStar(data.rating)}
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-4 text-right">
                            <div className="simple-article size-1 grey">{data.time}</div>
                        </div>
                    </div>
                    <div className="simple-article size-2 col-xs-b15">
                        {data.content}
                    </div>


                </div>
                {data.content_rep!=='' ? <div className="testimonial-entry">
                    <div className="fa fa-check" style={{ paddingLeft: 20 }}>
                        {/* <div className="simple-article size-3 col-xs-b15"> */}
                            {' ' +data.content_rep}
                        {/* </div> */}
                    </div>
                </div> : null}

            </div>
        )
    }
}
