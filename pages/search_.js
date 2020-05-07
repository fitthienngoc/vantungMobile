import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppLayout from '../components/layout';
import Sidebar from '../components/Search/sidebar';
import { Loading } from '../components/Loading';
import ProductHot from '../components/product/productHot';
import Pagination from '../components/Pagination';
import Product44 from '../components/product/Product44';

function mapStateToProps(state) {
    return {
        productSearch: state.productSearch
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

class search_ extends Component {
    onSearch = () => {
        console.log(``);
    }
    render() {
        var { router, productSearch } = this.props
        var { data } = productSearch

        // console.log(`productSearch`, data);
        return (
            <div>
                {data.data && <AppLayout router={router}>
                    {productSearch.loading ? <Loading /> :
                        <div>
                            <div className="container">
                                <div className="empty-space col-xs-b15 col-sm-b30" />
                                <div className="breadcrumbs">
                                    <a href="#">Trang chủ</a>
                                    <a href="#">Tìm kiếm</a>

                                </div>
                                <div className="empty-space col-xs-b15 col-sm-b20 col-md-b30" />
                                <div className="row">
                                    <div className="col-md-9 col-md-push-3" style={{ backgroundColor: '#f0f0f0', paddingTop: 25 }}>

                                        {/* <div className="empty-space col-xs-b35 col-md-b70" /> */}
                                        <div className="align-inline spacing-1">
                                            <div className="h4">{router.query.search ? router.query.search : "Tìm kiếm sản phẩm"}</div>
                                        </div>
                                        <div className="align-inline spacing-1">
                                            <div className="simple-article size-1">Hiển thị <b className="grey">{data && data.data && data.data.data && data.data.data.length ? data.data.data.length : 0}</b> của <b className="grey"> {data.data.total_records} </b> sản phẩm khác</div>
                                        </div>
                                        <div className="align-inline spacing-1 hidden-xs">
                                            {/* <a className="pagination toggle-products-view active"><img src="/static/theme1/img/icon-14.png" alt="" /><img src="/static/theme1/img/icon-15.png" alt="" /></a>
                                    <a className="pagination toggle-products-view"><img src="/static/theme1/img/icon-16.png" alt="" /><img src="/static/theme1/img/icon-17.png" alt="" /></a> */}
                                        </div>
                                        <div className="align-inline spacing-1 filtration-cell-width-1">
                                            {/* <select className="SlectBox small">
                                        <option disabled="disabled" selected="selected">Most popular products</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select> */}
                                        </div>
                                        <div className="align-inline spacing-1 filtration-cell-width-2">
                                            {/* <select className="SlectBox small">
                                        <option disabled="disabled" selected="selected">Show 30</option>
                                        <option value="volvo">30</option>
                                        <option value="saab">50</option>
                                        <option value="mercedes">100</option>
                                        <option value="audi">200</option>
                                    </select> */}
                                        </div>
                                        <div className="empty-space col-xs-b25 col-sm-b60" />
                                        <div className="products-content">
                                            <div className="products-wrapper">
                                                <div className="row nopadding">
                                                    {data.data.data && data.data.data.length > 0 && data.data.data.map((e, i) => {
                                                        return <div className='product44' key={i}><Product44 notify={this.props.notify} onAddProductToCart={this.props.onAddProductToCart} data={e} key={i} />
                                                        </div>
                                                    })
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                        <div className="empty-space col-xs-b35 col-sm-b0" />

                                        <Pagination router={router} data={data.data} />

                                        <div className="empty-space col-xs-b35 col-md-b70" />
                                        {/* <div className="empty-space col-md-b70" /> */}
                                    </div>
                                    <Sidebar router={router} data={data.data} />
                                </div>
                                <div className="empty-space col-md-b70" />
                                <div className="row">
                                    <div className="col-sm-6 col-md-3 col-xs-b25">
                                        <div className="h4 col-xs-b25">Hot Sale</div>
                                        <div className="product-shortcode style-4 rounded clearfix">
                                            <a className="preview" href="#"><img src="/static/theme1/img/product-28.jpg" alt="" /></a>
                                            <div className="description">
                                                <div className="simple-article color size-1 col-xs-b5"><a href="#">WIRELESS</a></div>
                                                <h6 className="h6 col-xs-b10"><a href="#">wireless headphones</a></h6>
                                                <div className="simple-article dark">$98.00</div>
                                            </div>
                                        </div>
                                        <div className="col-xs-b10" />
                                        <div className="product-shortcode style-4 rounded clearfix">
                                            <a className="preview" href="#"><img src="/static/theme1/img/product-29.jpg" alt="" /></a>
                                            <div className="description">
                                                <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
                                                <h6 className="h6 col-xs-b10"><a href="#">earphones case</a></h6>
                                                <div className="simple-article dark">$12.00</div>
                                            </div>
                                        </div>
                                        <div className="col-xs-b10" />
                                        <div className="product-shortcode style-4 rounded clearfix">
                                            <a className="preview" href="#"><img src="/static/theme1/img/product-30.jpg" alt="" /></a>
                                            <div className="description">
                                                <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
                                                <h6 className="h6 col-xs-b10"><a href="#">headphones case</a></h6>
                                                <div className="simple-article"><span className="color">$24.00</span>&nbsp;&nbsp;&nbsp;<span className="line-through">$32.00</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3 col-xs-b25">
                                        <div className="h4 col-xs-b25">Top Rated</div>
                                        <div className="product-shortcode style-4 rounded clearfix">
                                            <a className="preview" href="#"><img src="/static/theme1/img/product-31.jpg" alt="" /></a>
                                            <div className="description">
                                                <div className="simple-article color size-1 col-xs-b5"><a href="#">WIRELESS</a></div>
                                                <h6 className="h6 col-xs-b10"><a href="#">wireless headphones</a></h6>
                                                <div className="simple-article dark">$98.00</div>
                                            </div>
                                        </div>
                                        <div className="col-xs-b10" />
                                        <div className="product-shortcode style-4 rounded clearfix">
                                            <a className="preview" href="#"><img src="/static/theme1/img/product-32.jpg" alt="" /></a>
                                            <div className="description">
                                                <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
                                                <h6 className="h6 col-xs-b10"><a href="#">earphones case</a></h6>
                                                <div className="simple-article dark">$12.00</div>
                                            </div>
                                        </div>
                                        <div className="col-xs-b10" />
                                        <div className="product-shortcode style-4 rounded clearfix">
                                            <a className="preview" href="#"><img src="/static/theme1/img/product-33.jpg" alt="" /></a>
                                            <div className="description">
                                                <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
                                                <h6 className="h6 col-xs-b10"><a href="#">headphones case</a></h6>
                                                <div className="simple-article dark">$4.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3 col-xs-b25">
                                        <div className="h4 col-xs-b25">Popular</div>
                                        <div className="product-shortcode style-4 rounded clearfix">
                                            <a className="preview" href="#"><img src="/static/theme1/img/product-34.jpg" alt="" /></a>
                                            <div className="description">
                                                <div className="simple-article color size-1 col-xs-b5"><a href="#">WIRELESS</a></div>
                                                <h6 className="h6 col-xs-b10"><a href="#">wireless headphones</a></h6>
                                                <div className="simple-article dark">$98.00</div>
                                            </div>
                                        </div>
                                        <div className="col-xs-b10" />
                                        <div className="product-shortcode style-4 rounded clearfix">
                                            <a className="preview" href="#"><img src="/static/theme1/img/product-35.jpg" alt="" /></a>
                                            <div className="description">
                                                <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
                                                <h6 className="h6 col-xs-b10"><a href="#">earphones case</a></h6>
                                                <div className="simple-article dark">$12.00</div>
                                            </div>
                                        </div>
                                        <div className="col-xs-b10" />
                                        <div className="product-shortcode style-4 rounded clearfix">
                                            <a className="preview" href="#"><img src="/static/theme1/img/product-36.jpg" alt="" /></a>
                                            <div className="description">
                                                <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
                                                <h6 className="h6 col-xs-b10"><a href="#">headphones case</a></h6>
                                                <div className="simple-article dark">$4.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3 col-xs-b25">
                                        <div className="h4 col-xs-b25">Best Choice</div>
                                        <div className="product-shortcode style-4 rounded clearfix">
                                            <a className="preview" href="#"><img src="/static/theme1/img/product-37.jpg" alt="" /></a>
                                            <div className="description">
                                                <div className="simple-article color size-1 col-xs-b5"><a href="#">WIRELESS</a></div>
                                                <h6 className="h6 col-xs-b10"><a href="#">wireless headphones</a></h6>
                                                <div className="simple-article dark">$98.00</div>
                                            </div>
                                        </div>
                                        <div className="col-xs-b10" />
                                        <div className="product-shortcode style-4 rounded clearfix">
                                            <a className="preview" href="#"><img src="/static/theme1/img/product-38.jpg" alt="" /></a>
                                            <div className="description">
                                                <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
                                                <h6 className="h6 col-xs-b10"><a href="#">earphones case</a></h6>
                                                <div className="simple-article dark">$12.00</div>
                                            </div>
                                        </div>
                                        <div className="col-xs-b10" />
                                        <div className="product-shortcode style-4 rounded clearfix">
                                            <a className="preview" href="#"><img src="/static/theme1/img/product-39.jpg" alt="" /></a>
                                            <div className="description">
                                                <div className="simple-article color size-1 col-xs-b5"><a href="#">CASES</a></div>
                                                <h6 className="h6 col-xs-b10"><a href="#">headphones case</a></h6>
                                                <div className="simple-article dark">$4.00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="empty-space col-xs-b15 col-sm-b45" />
                            <div className="empty-space col-md-b70" />
                        </div>

                    }
                    <script src="/static/theme1/js/jquery-2.2.4.min.js"></script>
                    <script src="/static/theme1/js/swiper.jquery.min.js"></script>
                    <script src="/static/theme1/js/global.js"></script>

                    {/* <!-- styled select --> */}
                    <script src="/static/theme1/js/jquery.sumoselect.min.js"></script>

                    {/* <!-- counter --> */}
                    <script src="/static/theme1/js/jquery.classycountdown.js"></script>
                    <script src="/static/theme1/js/jquery.knob.js"></script>
                    <script src="/static/theme1/js/jquery.throttle.js"></script>



                    {/* <!-- masonry --> */}
                    <script src="/static/theme1/js/isotope.pkgd.min.js"></script>

                </AppLayout>
                }
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(search_);