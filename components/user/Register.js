import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actRegister, actGetDataUser, actUpdateUser } from '../../redux/actions/user';
import LoginFacebook from './LoginFacebook';

function mapStateToProps(state) {
    return {
        users: state.users
    };
}



class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_user: '',
            name_: '',
            email: '',
            password: '',
            rePassword: '',
            checkBoxPolicy: false,
            errorAll: '',
            errorEmail: '',
            errorPassword: '',
            errorRePassword: '',
            check: true,
            phone: ''
        };
    }

    componentDidMount() {
        var { update, users } = this.props
        if (update) {
            var { id_user, name, email, phone } = users.dataUser
            this.setState({
                id_user, email, phone,
                name_: name,
                checkBoxPolicy: true
            })
        }
    }

    onChange = (e) => {
        var target = e.target;

        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });

    }

    check = () => {

        this.setState({
            errorAll: '',
            errorEmail: '',
            errorPassword: '',
            errorRePassword: '',
            check: true
        })

        var check = true
        var { name_, email, password, rePassword } = this.state
        if (name_ && email && password && rePassword) {

        } else {
            check = false
            this.setState({
                errorAll: 'Vui lòng nhập đầy đủ thông tin!',
            })
        }
        if (email) {
            var a = email.split('@')
            if (!a[1]) {
                check = false
                this.setState({
                    errorEmail: "Email có dạng abc@xyz.com!",
                })
            }

        }
        if (password) {
            if (password.length < 6) {
                check = false
                this.setState({ errorPassword: "Mật khẩu có ít nhất 6 ký tự!" })
            }
            if (rePassword !== password) {
                check = false
                this.setState({ errorRePassword: "Mật khẩu nhập lại không chính xác!" })
            }
        }
        this.setState({ check })

        if (check) {
            var { name_, email, password, phone } = this.state
            var body = { name_, email, password, phone };
            console.log(body)
            this.props.update ? this.props.onUpdateUser(body) : this.props.onRegister(body)
        }

    }

    render() {
        var { name_, email, password, rePassword, errorAll, checkBoxPolicy, errorEmail, errorPassword,
            errorRePassword, phone } = this.state

        var { users, update } = this.props

        return (
            users.is_login && !this.props.update ? '' :
                <div className="popup-wrapper active">
                    <div className="bg-layer active" />
                    <div className="popup-content active" data-rel={2}>

                        <div className="layer-tn-close" />
                        {users.loading_register || users.loading_update ? <div className="swiper-lazy-preloader" /> :
                            <div className="popup-container size-1">
                                <div className="popup-align">
                                    <h3 className="h3 text-center">{update ? "Thông tin tài khoản" : "Đăng ký"}</h3>
                                    <div className="empty-space col-xs-b30" />
                                    <input className="simple-input" type="text" onChange={this.onChange} value={name_} name={'name_'} placeholder="Họ và tên" />
                                    <div className="empty-space col-xs-b30" />
                                    <input className="simple-input" onChange={this.onChange} value={'' + phone} name={'phone'} placeholder="SĐT" />
                                    <div className="empty-space col-xs-b30" />
                                    <input className="simple-input" type="text" onChange={this.onChange} value={email} name={'email'} placeholder="Email" />
                                    <div className="simple-article text-center size-4 color">
                                        {errorEmail}
                                    </div>
                                    <div className="empty-space col-xs-b10 col-sm-b20" />
                                    <input className="simple-input" type="password" onChange={this.onChange} value={password} name={'password'} placeholder="Mật khẩu" />
                                    <div className="simple-article text-center size-4 color">
                                        {errorPassword}
                                    </div>
                                    <div className="empty-space col-xs-b10 col-sm-b20" />
                                    <input className="simple-input" type="password" onChange={this.onChange} value={rePassword} name={'rePassword'} placeholder="Nhập lại mật khẩu" />
                                    <div className="simple-article text-center size-4 color">
                                        {errorRePassword}
                                    </div>
                                    <div className="empty-space col-xs-b10 col-sm-b20" />
                                    <div className="simple-article text-center size-4 color">
                                        {errorAll}
                                    </div>
                                    <div className="simple-article text-center size-4 color">
                                        {users.error}
                                    </div>
                                    <div className="simple-article text-center size-4 color">
                                        {users.error_update}
                                    </div>
                                    <div className="empty-space col-xs-b10 col-sm-b20" />
                                    <div className="row">
                                        {!this.props.update ?
                                            <><div className="col-sm-7 col-xs-b10 col-sm-b0">
                                                <div className="empty-space col-sm-b15" />
                                                <label className="checkbox-entry">
                                                    <input type="checkbox" onChange={this.onChange} value={checkBoxPolicy} name={'checkBoxPolicy'} /><span><a href="#">Đồng ý với các điều khoản</a></span>
                                                </label>
                                            </div>
                                                <div className={!checkBoxPolicy ? "hide " : "col-sm-5 text-right"}>
                                                    <div className="button size-2 style-3" href="#">
                                                        <span onClick={this.check} className="button-wrapper">
                                                            <span className="icon"><img src="/static/theme1/img/icon-4.png" alt="" /></span>
                                                            <span className="text">Đăng ký</span>
                                                        </span>
                                                    </div>
                                                </div></>
                                            :
                                            <div className={"col-sm-5 text-center"}>
                                                <div className="button size-2 style-3" href="#">
                                                    <span onClick={this.check} className="button-wrapper">
                                                        <span className="icon"><img src="/static/theme1/img/icon-4.png" alt="" /></span>
                                                        <span className="text">Lưu lại</span>
                                                    </span>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="popup-or">
                                        <span>hoặc</span>
                                    </div>
                                    <div className="row m5">
                                        <div className="col-sm-3 col-xs-b10 col-sm-b0" />
                                        <div className="col-sm-6 col-xs-b10 col-sm-b0">
                                            <a className="button facebook-button size-2 style-4 block" href="#">
                                                <span className="button-wrapper">
                                                    <span className="icon"><img src="/static/theme1/img/icon-4.png" alt="" /></span>
                                                    <span className="text">facebook</span>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="col-sm-3 col-xs-b10 col-sm-b0" />

                                    </div>
                                    <LoginFacebook/>
                                </div>
                                <div onClick={this.props.setPopup} className="button-tn-close" />
                            </div>
                        }
                    </div>

                </div>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onRegister: (body) => {
            dispatch(actRegister(body))
        },
        onUpdateUser: (body) => {
            dispatch(actUpdateUser(body))
        }


    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(Register);