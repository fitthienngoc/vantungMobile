import React from 'react'

export default class AppFooter extends React.Component {



  render() {

    return (
      <>
        {/* FOOTER */}
        <footer>
          <div className="container">
            <div className="footer-top">
              <div className="row">
                <div className="col-sm-6 col-md-3 col-xs-b30 col-md-b0">
                  <img src="/static/theme1/img/logo-1.png" style={{height:50}} alt="" />
                  <div className="empty-space col-xs-b20" />
                  <div className="simple-article size-2 light fulltransparent">Integer posuere orci sit amet feugiat pellent que. Suspendisse vel tempor justo, sit amet posuere orci dapibus auctor</div>
                  <div className="empty-space col-xs-b20" />
                  <div className="footer-contact"><i className="fa fa-mobile" aria-hidden="true" /> contact us: <a href="tel:+35235551238745">+3  (523) 555 123 8745</a></div>
                  <div className="footer-contact"><i className="fa fa-envelope-o" aria-hidden="true" /> email: <a href="mailto:office@exzo.com">office@exzo.com</a></div>
                  <div className="footer-contact"><i className="fa fa-map-marker" aria-hidden="true" /> address: <a href="#">1st, new york, usa</a></div>
                </div>
                <div className="col-sm-6 col-md-3 col-xs-b30 col-md-b0">
                  <h6 className="h6 light">queck links</h6>
                  <div className="empty-space col-xs-b20" />
                  <div className="footer-column-links">
                    <div className="row">
                      <div className="col-xs-6">
                        <a href="#">home</a>
                        <a href="#">about us</a>
                        <a href="#">products</a>
                        <a href="#">services</a>
                        <a href="#">blog</a>
                        <a href="#">gallery</a>
                        <a href="#">contact</a>
                      </div>
                      <div className="col-xs-6">
                        <a href="#">privacy policy</a>
                        <a href="#">warranty</a>
                        <a href="#">login</a>
                        <a href="#">registration</a>
                        <a href="#">delivery</a>
                        <a href="#">pages</a>
                        <a href="#">our stores</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clear visible-sm" />
                <div className="col-sm-6 col-md-3 col-xs-b30 col-sm-b0">
                  <h6 className="h6 light">some posts</h6>
                  <div className="empty-space col-xs-b20" />
                  <div className="footer-post-preview clearfix">
                    <a className="image" href="#"><img src="/static/theme1/img/thumbnail-1.jpg" alt="" /></a>
                    <div className="description">
                      <div className="date">apr 07 / 15</div>
                      <a className="title">Fusce tincidunt accumsan pretium sit amet</a>
                    </div>
                  </div>
                  <div className="footer-post-preview clearfix">
                    <a className="image" href="#"><img src="/static/theme1/img/thumbnail-2.jpg" alt="" /></a>
                    <div className="description">
                      <div className="date">apr 07 / 15</div>
                      <a className="title">Fusce tincidunt accumsan pretium sit amet</a>
                    </div>
                  </div>
                  <div className="footer-post-preview clearfix">
                    <a className="image" href="#"><img src="/static/theme1/img/thumbnail-3.jpg" alt="" /></a>
                    <div className="description">
                      <div className="date">apr 07 / 15</div>
                      <a className="title">Fusce tincidunt accumsan pretium sit amet</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <h6 className="h6 light">popular tags</h6>
                  <div className="empty-space col-xs-b20" />
                  <div className="tags clearfix">
                    <a className="tag">headphoness</a>
                    <a className="tag">accessories</a>
                    <a className="tag">new</a>
                    <a className="tag">wireless</a>
                    <a className="tag">cables</a>
                    <a className="tag">devices</a>
                    <a className="tag">gadgets</a>
                    <a className="tag">brands</a>
                    <a className="tag">replacements</a>
                    <a className="tag">cases</a>
                    <a className="tag">cables</a>
                    <a className="tag">professional</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row">
                <div className="col-lg-8 col-xs-text-center col-lg-text-left col-xs-b20 col-lg-b0">
                  <div className="copyright">© 2015 All rights reserved. Development by <a href="https://themeforest.net/user/unionagency" target="_blank">UnionAgency</a></div>
                  <div className="follow">
                    <a className="entry" href="#"><i className="fa fa-facebook" /></a>
                    <a className="entry" href="#"><i className="fa fa-twitter" /></a>
                    <a className="entry" href="#"><i className="fa fa-linkedin" /></a>
                    <a className="entry" href="#"><i className="fa fa-google-plus" /></a>
                    <a className="entry" href="#"><i className="fa fa-pinterest-p" /></a>
                  </div>
                </div>
                <div className="col-lg-4 col-xs-text-center col-lg-text-right">
                  <div className="footer-payment-icons">
                    <a className="entry"><img src="/static/theme1/img/thumbnail-4.jpg" alt="" /></a>
                    <a className="entry"><img src="/static/theme1/img/thumbnail-5.jpg" alt="" /></a>
                    <a className="entry"><img src="/static/theme1/img/thumbnail-6.jpg" alt="" /></a>
                    <a className="entry"><img src="/static/theme1/img/thumbnail-7.jpg" alt="" /></a>
                    <a className="entry"><img src="/static/theme1/img/thumbnail-8.jpg" alt="" /></a>
                    <a className="entry"><img src="/static/theme1/img/thumbnail-9.jpg" alt="" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* footerend */}
      </>

    )
  }
}