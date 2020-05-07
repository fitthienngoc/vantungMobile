import React, { Component } from 'react'
import { Loading } from '../Loading'
import ShowComment from './ShowComment'

export default class Comment extends Component {
    state = ({
        fullName: '',
        phone: '+84',
        title_comment: '',
        content: '',
        id_user: '',
        error: '',
        rating: 3
    })

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            var { users } = nextProps
            if (users.is_login) {
                var { dataUser } = users
                this.setState({
                    fullName: dataUser.name,
                    phone: dataUser.phone,
                    id_user: dataUser.id_user,
                    error: nextProps.error
                })
            }
        }
    }

    onChange = (e) => {
        var check = false

        var target = e.target;


        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        if (name == "content") {
            if (value.length > 200) check = true
        }

        if (check == false) {

            this.setState({
                [name]: value,
                error: ''
            });
        }

    }

    onSave = () => {
        var { homeProducts } = this.props
        var { productDetail } = homeProducts
        // console.log(`this.props`, this.props);
        var { fullName, phone, title_comment, content, rating, id_user } = this.state
        if (fullName && phone && title_comment && content) {
            this.props.onSendCommentProduct({ fullName, phone, title_comment, content, id_user, rating, Id_product: productDetail.data.Id })
        } else {
            this.setState({
                error: 'Vui lòng điền đầy đủ thông tin'
            })
        }

    }

    showStar = (rating) => {
        var r = []
        for (let index = 1; index < 6; index++) {
            r.push(<i key={index} onClick={() => this.setState({
                rating: index
            })} className={rating <= index ? "fa fa-star" : "fa fa-star-o"} />)

        }
        return r
    }

    render() {

        var { fullName, phone, title_comment, content, error } = this.state
        var { homeProducts } = this.props

        return (
            <div>

                <div className="tab-entry">
                    {homeProducts.productComment && homeProducts.productComment.data && homeProducts.productComment.data.length > 0 &&
                        homeProducts.productComment.data.map((e, index) => {
                            if (e.verify == true) return <ShowComment key={index} data={e} />
                        })

                    }

                    <form>
                        <div className="row m10">
                            <div className="col-sm-6">
                                <input className="simple-input" name="fullName" value={fullName} onChange={this.onChange} type="text" placeholder="Họ và tên" />
                                <div className="empty-space col-xs-b20" />
                            </div>
                            <div className="col-sm-6">
                                <input className="simple-input" name="phone" value={phone} onChange={this.onChange} type="text" placeholder="Số điện thoại" />
                                <div className="empty-space col-xs-b20" />
                            </div>
                            <div className="col-sm-12">
                                <input className="simple-input" name="title_comment" value={title_comment} onChange={this.onChange} type="text" placeholder="Tiêu đề" />
                                <div className="empty-space col-xs-b20" />
                            </div>

                            <div className="col-sm-12">
                                <textarea className="simple-input" name="content" defaultValue={content} onChange={this.onChange} placeholder="Nội dung bình luận" />
                                <div className="empty-space col-xs-b20" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="align-inline">
                                    <div className="empty-space col-xs-b5" />
                                    <div className="simple-article size-3">Đánh giá &nbsp;&nbsp;&nbsp;</div>
                                    <div className="empty-space col-xs-b5" />
                                </div>
                                <div className="rate-wrapper set align-inline">
                                    {
                                        this.showStar()
                                    }


                                </div>
                            </div>
                            {homeProducts.loadingComment ? <Loading /> :
                                <div className="col-xs-6 text-right">

                                    {homeProducts.error == 'success' ? <div className="simple-article size-3">Gửi thành công! Cảm ơn quý khách!</div> : <div className="simple-article size-3">{error}</div>}
                                    <div onClick={this.onSave} className="button size-2 style-3">

                                        <span className="button-wrapper">
                                            <span className="icon"><img src="/static/theme1/img/icon-4.png" alt="" /></span>
                                            <span className="text">Gửi</span>
                                        </span>
                                        {/* <input type="submit" /> */}
                                    </div>
                                </div>
                            }
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}
