import React from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import initialize from '../utils/initialize';
// import {$} from 'jquery';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 15
        };
    }

    static getInitialProps(ctx) {
        initialize(ctx);
    }

    onChange(e) {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
        this.props.onFilter(name, value)
    }

    render() {
        return (
            <div>

               
                <div id="content-block">
                    {/* HEADER */}

                    <div className="block-entry fixed-background" style={{ backgroundImage: 'url(static/theme1/img/background-26.jpg)' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-sm-offset-3">
                                    <div className="cell-view simple-banner-height text-center">
                                        <div className="empty-space col-xs-b35 col-sm-b70" />
                                        <h1 className="h1 light">contact us</h1>
                                        <div className="title-underline center"><span /></div>
                                        <div className="simple-article light transparent size-4">In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum. Proin pharetra elit at feugiat commodo vel placerat tincidunt sapien nec</div>
                                        <div className="empty-space col-xs-b35 col-sm-b70" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="empty-space col-xs-b35 col-md-b70" />
                    <div className="empty-space col-xs-b35 col-md-b70" />
                    <div className="container">
                        <div className="text-center">
                            <div className="simple-article size-3 grey uppercase col-xs-b5">our contacts</div>
                            <div className="h2">we ready for your questions</div>
                            <div className="title-underline center"><span /></div>
                        </div>
                    </div>
                    <div className="empty-space col-sm-b15 col-md-b50" />
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="icon-description-shortcode style-1">
                                    <img className="icon" src="static/theme1/img/icon-25.png" alt="" />
                                    <div className="title h6">address</div>
                                    <div className="description simple-article size-2">1st, new york, usa</div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="icon-description-shortcode style-1">
                                    <img className="icon" src="static/theme1/img/icon-23.png" alt="" />
                                    <div className="title h6">phone</div>
                                    <div className="description simple-article size-2" style={{ lineHeight: '26px' }}>
                                        <a href="tel:+35235551238745">+3  (523) 555 123 8745</a>
                                        <br />
                                        <a href="tel:+35235557585238">+3  (523) 555 758 5238</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="icon-description-shortcode style-1">
                                    <img className="icon" src="static/theme1/img/icon-28.png" alt="" />
                                    <div className="title h6">email</div>
                                    <div className="description simple-article size-2"><a href="mailto:offce@exzo.com">offce@exzo.com</a></div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="icon-description-shortcode style-1">
                                    <img className="icon" src="static/theme1/img/icon-26.png" alt="" />
                                    <div className="title h6">Follow us</div>
                                    <div className="follow light">
                                        <a className="entry" href="#"><i className="fa fa-facebook" /></a>
                                        <a className="entry" href="#"><i className="fa fa-twitter" /></a>
                                        <a className="entry" href="#"><i className="fa fa-linkedin" /></a>
                                        <a className="entry" href="#"><i className="fa fa-google-plus" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="empty-space col-xs-b25 col-sm-b50" />
                    <div className="container">
                        <div className="map-wrapper">
                            <div id="map-canvas" className="full-width" data-lat="34.0151244" data-lng="-118.4729871" data-zoom={14} />
                        </div>
                        <div className="addresses-block hidden">
                            <a className="marker" data-lat="34.0151244" data-lng="-118.4729871" data-string="1. Here is some address or email or phone or something else..." />
                        </div>
                    </div>
                    <div className="empty-space col-xs-b25 col-sm-b50" />
                    <div className="container">
                        <h4 className="h4 text-center col-xs-b25">have a questions?</h4>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <form className="contact-form">
                                    <div className="row m5">
                                        <div className="col-sm-6">
                                            <input className="simple-input col-xs-b20" type="text" defaultValue placeholder="Name" name="name" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input className="simple-input col-xs-b20" type="text" defaultValue placeholder="Email" name="email" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input className="simple-input col-xs-b20" type="text" defaultValue placeholder="Phone" name="phone" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input className="simple-input col-xs-b20" type="text" defaultValue placeholder="Subject" name="subject" />
                                        </div>
                                        <div className="col-sm-12">
                                            <textarea className="simple-input col-xs-b20" placeholder="Your message" name="message" defaultValue={""} />
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="text-center">
                                                <div className="button size-2 style-3">
                                                    <span className="button-wrapper">
                                                        <span className="icon"><img src="/static/theme1/img/icon-4.png" alt="" /></span>
                                                        <span className="text">send message</span>
                                                    </span>
                                                    <input type="submit" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="empty-space col-xs-b35 col-md-b70" />
                    <div className="empty-space col-xs-b35 col-md-b70" />
                    {/* FOOTER */}

                </div>


                <script src="static/theme1/js/jquery-2.2.4.min.js"></script>
                <script src="static/theme1/js/swiper.jquery.min.js"></script>
                <script src="static/theme1/js/global.js"></script>

                {/* <!-- styled select --> */}
                <script src="static/theme1/js/jquery.sumoselect.min.js"></script>

                {/* <!-- counter --> */}
                <script src="static/theme1/js/jquery.classycountdown.js"></script>
                <script src="static/theme1/js/jquery.knob.js"></script>
                <script src="static/theme1/js/jquery.throttle.js"></script>



                {/* <!-- masonry --> */}
                <script src="static/theme1/js/isotope.pkgd.min.js"></script>

                {/* <!-- MAP --> */}
                <script src="https://maps.googleapis.com/maps/api/js"></script>
                <script src="static/theme1/js/map.js"></script>

                {/* <!-- CONTACT --> */}
                <script src="static/theme1/js/contact.form.js"></script>

            </div>

        );
    }
}

export default connect(
    state => state,
    actions
)(Cart);