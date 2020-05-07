import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actLogin } from '../../redux/actions/user';

function mapStateToProps(state) {
    return {
        users: state.users
    };
}



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',

            errorAll: '',
            errorEmail: '',
            errorPassword: '',
            check: false
        };
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
            check: true
        })

        var check = true

        var { email,
            password } = this.state
        if (email) {

            var a = email.split('@')
            if (!a[1]) {
                check = false
                this.setState({
                    errorEmail: "Email có dạng abc@xyz.com!",
                })
            }
        } else {
            check = false
            this.setState({
                errorEmail: "Vui lòng nhập Email!",
            })
        }

        if (password.length < 6) {
            check = false
            this.setState({ errorPassword: "Mật khẩu có ít nhất 6 ký tự!" })
        }

        if (check) {
            var body = { email, password }
            this.props.onLogin(body)
        }


    }

    render() {
        var { email,
            password,
            errorAll,
            errorEmail,
            errorPassword, } = this.state

        var { users } = this.props

        return (
            users.is_login? '' :
            <div className="popup-wrapper active">
                <div className="bg-layer active" />
                <div className="popup-content active" data-rel={1}>
                    <div className="layer-tn-close" />
                    {users.loading_login ? <div className="swiper-lazy-preloader" /> :
                        <div className="popup-container size-1">
                            <div className="popup-align">
                                <h3 className="h3 text-center">Đăng nhập</h3>
                                <div className="empty-space col-xs-b30" />
                                <input className="simple-input" type="text" onChange={this.onChange} value={email} name={'email'} placeholder="Email" />
                                <div className="empty-space col-xs-b10 col-sm-b20" />
                                <div className="simple-article text-center size-4 color">{errorEmail}</div>
                                <div className="empty-space col-xs-b10 col-sm-b20" />
                                <input className="simple-input" type="password" onChange={this.onChange} value={password} name={'password'} placeholder="Mật khẩu" />
                                <div className="empty-space col-xs-b10 col-sm-b20" />
                                <div className="simple-article text-center size-4 color"> {errorPassword}</div>
                                <div className="empty-space col-xs-b10 col-sm-b20" />
                                <div className="simple-article text-center size-4 color">
                                    {users.error_login}
                                </div>
                                <div className="empty-space col-xs-b10 col-sm-b20" />
                                <div className="row">
                                    <div className="col-sm-6 col-xs-b10 col-sm-b0">
                                        <div className="empty-space col-sm-b5" />
                                        <a className="simple-link">Quên mật khẩu?</a>
                                        <div className="empty-space col-xs-b5" />
                                        <a className="simple-link">Đăng ký</a>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <span onClick={this.check} className="button size-2 style-3">
                                            <span className="button-wrapper">
                                                <span className="icon"><img src="/static/theme1/img/icon-4.png" alt="" /></span>
                                                <span className="text">Đăng nhập</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="popup-or">
                                    <span>hoặc</span>
                                </div>

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
        onLogin: (body) => {
            dispatch(actLogin(body))
        },


    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(Login);