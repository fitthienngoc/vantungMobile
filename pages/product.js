import React from 'react';
import initialize from '../utils/initialize';
import AppLayout from '../components/layout';
// import {$} from 'jquery';
import CurrencyFormat from 'react-currency-format';
import Head from 'next/head'
import ListToSlide from '../components/home/listToSlide';
import { toast, ToastContainer } from 'react-toastify';
import Comment from '../components/product/Comment';
import ListNotSlide from '../components/product/ListNotSlide';

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 15,
            quality: 1,
            color: ''
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

    updateQuality(quality, qualityMax, action) {
        if (action == '+') {
            quality < qualityMax ? quality++ : null
        }
        if (action == '-') {
            quality > 0 ? quality-- : null
        }
        this.setState({
            quality
        })

    }
    onShowQualitySelect(quality, max) {
        var qualityMax = 0
        max > 0 ? qualityMax = max : qualityMax = 0

        return < div className="quantity-select" >
            <span onClick={() => this.updateQuality(quality, qualityMax, '-')} className="minus" />
            <span className="number">{quality}</span>
            <span onClick={() => this.updateQuality(quality, qualityMax, '+')} className="plus" />
        </div >
    }

    showStar = (rating) => {
        var r = []
        for (let index = 0; index < 5; index++) {
            r.push(<i key={index} className={rating <= index ? "fa fa-star-o" : "fa fa-star"} />)
            console.log(`rating`, rating);
        }
        return r
    }

    render() {
        var { homeProducts, users, onSendCommentProduct } = this.props
        var { quality } = this.state
        if (homeProducts) var { productDetail } = homeProducts
        console.log(`homeProducts`, homeProducts);
        return (
            <>
                <Head>
                    <title>{productDetail && productDetail.data && productDetail.data.name}</title>
                    {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
                </Head>
                <AppLayout>
                    <ToastContainer />

                    <div>
                        <div className="container">
                            <div className="empty-space col-xs-b15 col-sm-b30" />
                            <div className="breadcrumbs">
                                <a href="/">Trang chủ</a>
                                <a >Chi tiết sản phẩm</a>
                                {productDetail && productDetail.data && <a >{productDetail.data.name}</a>}

                            </div>
                            <div className="empty-space col-xs-b15 col-sm-b50 col-md-b100" />
                            {homeProducts.error && homeProducts.error !== 'success' ? <>{homeProducts.error} <div className="empty-space col-xs-b15 col-sm-b50 col-md-b100" /> </> : null}
                            <div className="row">
                                <div className="col-md-9 col-md-push-3">
                                    <div className="row">
                                        <div className="col-sm-6 col-xs-b30 col-sm-b0">
                                            <div className="main-product-slider-wrapper swipers-couple-wrapper">
                                                <div className="swiper-container swiper-control-top">
                                                    <div className="swiper-button-prev hidden" />
                                                    <div className="swiper-button-next hidden" />
                                                    <div className="swiper-wrapper">
                                                        {productDetail && productDetail.data && productDetail.data.pictures && productDetail.data.pictures.map((e, index) => {
                                                            return <div key={index} className="swiper-slide">
                                                                <div className="swiper-lazy-preloader" />
                                                                <div className="product-big-preview-entry swiper-lazy" data-background={e.base64} />
                                                            </div>
                                                        })
                                                        }


                                                    </div>
                                                </div>
                                                <div className="empty-space col-xs-b30 col-sm-b60" />
                                                <div className="swiper-container swiper-control-bottom" data-breakpoints={1} data-xs-slides={3} data-sm-slides={3} data-md-slides={4} data-lt-slides={4} data-slides-per-view={5} data-center={1} data-click={1}>
                                                    <div className="swiper-button-prev hidden" />
                                                    <div className="swiper-button-next hidden" />
                                                    <div className="swiper-wrapper">
                                                        {productDetail && productDetail.data && productDetail.data.pictures && productDetail.data.pictures.map((e, index) => {
                                                            return <div key={index} className="swiper-slide">
                                                                <div className="product-small-preview-entry">
                                                                    <img className="product-small-preview-entry" src={e.base64} alt="" />
                                                                </div>
                                                            </div>
                                                        })
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="simple-article size-3 grey col-xs-b5">{productDetail.data.cpuHeDH}</div>
                                            <div className="h3 col-xs-b25">{productDetail.data.name}</div>
                                            <div className="row col-xs-b25">
                                                <div className="col-sm-6">
                                                    <div className="simple-article size-5 grey">Giá: <span className="color"><CurrencyFormat value={productDetail.data.system} displayType={'text'} thousandSeparator={true} prefix={' '} /></span></div>
                                                </div>
                                                <div className="col-sm-6 col-sm-text-right">
                                                    <div className="rate-wrapper align-inline">
                                                        {this.showStar(productDetail.data.rating)}
                                                    </div>
                                                    <div className="simple-article size-2 align-inline">{productDetail.data.countRating} Reviews</div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="simple-article size-3 col-xs-b5">Mã SP : <span className="grey">{productDetail.data.code}</span></div>
                                                </div>
                                                <div className="col-sm-6 col-sm-text-right">
                                                    <div className="simple-article size-3 col-xs-b20">Có sẵn : <span className="grey">{productDetail.data.quality > 0 ? "Còn Hàng" : "Hết Hàng"}</span></div>
                                                </div>
                                            </div>
                                            <div className="simple-article size-3 col-xs-b30">{productDetail.data.tinh_nang_dac_biet}</div>
                                            <div className="row col-xs-b40">
                                                <div className="col-sm-3">
                                                    <div className="h6 detail-data-title">Màu:</div>
                                                </div>
                                                <div className="col-sm-9">
                                                    <div className="color-selection size-3">
                                                        {productDetail && productDetail.data.cpu && productDetail.data.cpu.length && productDetail.data.cpu.map((e, i) => {
                                                            var classN = "entry"
                                                            e == this.state.color ? "entry active" : null
                                                            return <div key={i} onClick={() => this.setState({ color: e })} className={classN} style={{ color: e.code }} />
                                                        })
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row col-xs-b40">
                                                <div className="col-sm-3">
                                                    <div className="h6 detail-data-title size-1">Số lượng:</div>
                                                </div>
                                                <div className="col-sm-9">
                                                    {this.onShowQualitySelect(quality, productDetail.data.quality)}
                                                </div>
                                            </div>
                                            <div className="row m5 col-xs-b40">
                                                <div className="col-sm-6 col-xs-b10 col-sm-b0">
                                                    <a onClick={() => {
                                                        var { data } = productDetail

                                                        var { quality, color } = this.state
                                                        color ? data.color_by = color : data.color_by = productDetail.data.cpu[0]
                                                        data.quality_by = quality
                                                        this.props.onAddProductToCart(productDetail.data)
                                                        this.props.notify.success(`✓ Thêm ${data.name} thành công!`, { position: "top-center" })

                                                    }} className="button size-2 style-2 block">
                                                        <span className="button-wrapper">
                                                            <span className="icon"><img src="/static/theme1/img/icon-2.png" alt="" /></span>
                                                            <span className="text">Thêm vào Giỏ Đồ</span>
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="col-sm-6">
                                                    <a className="button size-2 style-1 block noshadow" href="#">
                                                        <span className="button-wrapper">
                                                            <span className="icon"><i className="fa fa-heart-o" aria-hidden="true" /></span>
                                                            <span className="text">Yêu Thích</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <div className="h6 detail-data-title size-2">share:</div>
                                                </div>
                                                <div className="col-sm-9">
                                                    <div className="follow light">
                                                        <a className="entry" href="#"><i className="fa fa-facebook" /></a>
                                                        <a className="entry" href="#"><i className="fa fa-twitter" /></a>
                                                        <a className="entry" href="#"><i className="fa fa-linkedin" /></a>
                                                        <a className="entry" href="#"><i className="fa fa-google-plus" /></a>
                                                        <a className="entry" href="#"><i className="fa fa-pinterest-p" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                    <div className="tabs-block">
                                        <div className="tabulation-menu-wrapper text-center">
                                            <div className="tabulation-title simple-input">Chi Tiết</div>
                                            <ul className="tabulation-toggle">
                                                <li><a className="tab-menu active">Chi Tiết</a></li>
                                                {/* <li><a className="tab-menu">technical specs</a></li> */}
                                                <li><a className="tab-menu">Bình Luận</a></li>
                                            </ul>
                                        </div>
                                        <div className="empty-space col-xs-b30 col-sm-b60" />
                                        <div className="tab-entry visible">
                                            <div className="row">
                                                <div className="col-sm-12 col-xs-b30 col-sm-b0 text-center">
                                                    {productDetail.data.front_camera && <div className="preview-wrapper">
                                                        <img className="preview" src={productDetail.data.front_camera.base64} alt="" />
                                                    </div>
                                                    }
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 col-xs-b30 col-sm-b0">

                                                    <div className="empty-space col-xs-b25" />
                                                    <div className="h5">Màn hình</div>
                                                    <div className="empty-space col-xs-b20" />
                                                    <div className="simple-article size-3" style={{ padding: 10 }}>Công nghệ màn hình : <span style={{ fontWeight: 'bold' }}>{productDetail.data.screenName}</span></div>
                                                    <div className="simple-article size-3" style={{ padding: 10 }}>Độ phân giải : <span style={{ fontWeight: 'bold' }}>{productDetail.data.screenPixel}</span></div>
                                                    <div className="simple-article size-3" style={{ padding: 10 }}>Màn hình rộng : <span style={{ fontWeight: 'bold' }}>{productDetail.data.screenWidth}</span></div>
                                                    <div className="simple-article size-3" style={{ padding: 10 }}>Mặt kính cảm ứng : <span style={{ fontWeight: 'bold' }}>{productDetail.data.screenCam_ung}</span></div>
                                                </div>
                                                <div className="col-sm-6">

                                                    <div className="empty-space col-xs-b25" />
                                                    <div className="h5">Camera sau</div>
                                                    <div className="empty-space col-xs-b20" />
                                                    <div className="simple-article size-3" style={{ padding: 10 }}>Độ phân giải : <span style={{ fontWeight: 'bold' }}>{productDetail.data.back_cameraDoPhanGiai}</span></div>
                                                    <div className="simple-article size-3" style={{ padding: 10 }}>Quay phim : <span style={{ fontWeight: 'bold' }}>{productDetail.data.back_cameraQuayPhim}</span></div>
                                                    <div className="simple-article size-3" style={{ padding: 10 }}>Đèn Flash : <span style={{ fontWeight: 'bold' }}>{productDetail.data.back_cameraFlash ? 'Có' : 'Không'}</span></div>
                                                    <div className="simple-article size-3" style={{ padding: 10 }}>Nâng cao : <span style={{ fontWeight: 'bold' }}>{productDetail.data.back_cameraNangCao}</span></div>
                                                </div>
                                            </div>
                                            <div className="empty-space col-xs-b35 col-md-b70" />
                                            <div className="left-right-entry clearfix align-right">
                                                {productDetail.data.pictures && productDetail.data.pictures.length > 0 && <div className="preview-wrapper">
                                                    <img className="preview" src={productDetail.data.pictures[0].base64} alt="" />
                                                </div>
                                                }
                                                <div className="description">
                                                    <div className="h5">Camera trước</div>
                                                    <div className="empty-space col-xs-b15" />
                                                    <div className="simple-article size-3" style={{ padding: 10 }}>Độ phân giải : <span style={{ fontWeight: 'bold' }}>{productDetail.data.front_cameraDoPhanGiai}</span></div>
                                                    <div className="simple-article size-3" style={{ padding: 10 }}>Gọi Video : <span style={{ fontWeight: 'bold' }}>{productDetail.data.front_cameraVideoCall}</span></div>
                                                    <div className="simple-article size-3" style={{ padding: 10 }}>Nâng cao : <span style={{ fontWeight: 'bold' }}>{productDetail.data.front_cameraNangCao}</span></div>
                                                </div>
                                            </div>
                                            <div className="empty-space col-xs-b35 col-md-b70" />
                                            <div className="left-right-entry clearfix">
                                                {productDetail.data.pictures && productDetail.data.pictures.length > 1 && <div className="preview-wrapper">
                                                    <img className="preview" src={productDetail.data.pictures[1].base64} alt="" />
                                                </div>
                                                }
                                                <div className="description">
                                                    <div className="h5">Hệ điều hành - CPU</div>
                                                    <div className="empty-space col-xs-b15" />
                                                    <div className="simple-article size-3" style={{ padding: 10 }}>Hệ điều hành : <span style={{ fontWeight: 'bold' }}>{productDetail.data.cpuHeDH}</span></div>
                                                    <div className="simple-article size-3" style={{ padding: 10 }}>Chipset (hãng SX CPU) : <span style={{ fontWeight: 'bold' }}>{productDetail.data.cpuChipset}</span></div>
                                                    <div className="simple-article size-3" style={{ padding: 10 }}>Tốc độ CPU : <span style={{ fontWeight: 'bold' }}>{productDetail.data.cpuSpeed}</span></div>
                                                    <div className="simple-article size-3" style={{ padding: 10 }}>Chip đồ họa (GPU) : <span style={{ fontWeight: 'bold' }}>{productDetail.data.cpuChipDoHoa}</span></div>
                                                    <div className="empty-space col-xs-b30 col-sm-b45" />
                                                    <div className="h5">Bộ nhớ & Lưu trữ</div>
                                                    <div className="empty-space col-xs-b15" />
                                                    <div className="simple-article size-3" style={{ padding: 10 }}>RAM : <span style={{ fontWeight: 'bold' }}>{productDetail.data.ram}</span></div>
                                                    <div className="simple-article size-3" style={{ padding: 10 }}>Bộ nhớ trong : <span style={{ fontWeight: 'bold' }}>{productDetail.data.rom}</span></div>
                                                    <div className="simple-article size-3" style={{ padding: 10 }}>Thẻ nhớ ngoài : <span style={{ fontWeight: 'bold' }}>{productDetail.data.memorySD}</span></div>
                                                    {/* <div className="simple-article size-3" style={{ padding: 10 }}>RAM : <span style={{ fontWeight: 'bold' }}>{productDetail.data.cpuChipDoHoa}</span></div>
                                                <div className="simple-article size-3" style={{ padding: 10 }}>RAM : <span style={{ fontWeight: 'bold' }}>{productDetail.data.cpuChipDoHoa}</span></div> */}
                                                </div>
                                            </div>
                                        </div>

                                        <Comment onSendCommentProduct={onSendCommentProduct} homeProducts={homeProducts} users={users} />
                                    </div>
                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                    {/* <div className="swiper-container rounded">
                                        <div className="swiper-button-prev style-1 hidden" />
                                        <div className="swiper-button-next style-1 hidden" />
                                        <div className="swiper-wrapper"> */}


                                    {/* {console.log(`homeProducts`, homeProducts.dataBannerSlide.data_banner2)}
                                            {homeProducts.dataBannerSlide && homeProducts.dataBannerSlide.data_banner2.length > 0 &&
                                                homeProducts.dataBannerSlide.data_banner2.map((e, i) => {
                                                    return <div key={i} className="swiper-slide">
                                                        <div className="banner-shortcode style-1">
                                                            <div className="background" style={{ backgroundImage: `url(${e.front_camera.base64})` }} />
                                                            <div className="description valign-middle">
                                                                <div className="valign-middle-content">
                                                                    <div className="simple-article size-3 light fulltransparent">DON'T MISS!</div>
                                                                    <div className="banner-title color">UP TO 70%</div>
                                                                    <div className="h4 light">best android tv box</div>
                                                                    <div className="empty-space col-xs-b25" />
                                                                    <a className="button size-1 style-3" href="#">
                                                                        <span className="button-wrapper">
                                                                            <span className="icon"><img src="/static/theme1/img/icon-4.png" alt="" /></span>
                                                                            <span className="text">learn more</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                                <div className="empty-space col-xs-b60 col-sm-b0" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                })

                                            } */}


                                    {/* </div>
                                        <div className="swiper-pagination" />
                                    </div>
                                    <div className="empty-space col-xs-b35 col-md-b70" />
                                    <div className="empty-space col-md-b70" /> */}
                                </div>
                                <div className="col-md-3 col-md-pull-9">
                                    <div className="h4 col-xs-b10">popular categories</div>
                                    <ul className="categories-menu transparent">
                                        <li>
                                            <a href="#">laptops &amp; computers</a>
                                            <div className="toggle" />
                                            <ul>
                                                <li>
                                                    <a href="#">laptops &amp; computers</a>
                                                    <div className="toggle" />
                                                    <ul>
                                                        <li>
                                                            <a href="#">laptops &amp; computers</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">video &amp; photo cameras</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">smartphones</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">video &amp; photo cameras</a>
                                                    <div className="toggle" />
                                                    <ul>
                                                        <li>
                                                            <a href="#">video &amp; photo cameras</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">smartphones</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">smartphones</a>
                                                </li>
                                                <li>
                                                    <a href="#">tv &amp; audio</a>
                                                </li>
                                                <li>
                                                    <a href="#">gadgets</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">video &amp; photo cameras</a>
                                            <div className="toggle" />
                                            <ul>
                                                <li>
                                                    <a href="#">laptops &amp; computers</a>
                                                    <div className="toggle" />
                                                    <ul>
                                                        <li>
                                                            <a href="#">laptops &amp; computers</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">video &amp; photo cameras</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">smartphones</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">video &amp; photo cameras</a>
                                                    <div className="toggle" />
                                                    <ul>
                                                        <li>
                                                            <a href="#">laptops &amp; computers</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">smartphones</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">smartphones</a>
                                                </li>
                                                <li>
                                                    <a href="#">tv &amp; audio</a>
                                                </li>
                                                <li>
                                                    <a href="#">gadgets</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">smartphones</a>
                                            <div className="toggle" />
                                            <ul>
                                                <li>
                                                    <a href="#">laptops &amp; computers</a>
                                                    <div className="toggle" />
                                                    <ul>
                                                        <li>
                                                            <a href="#">laptops &amp; computers</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">video &amp; photo cameras</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">smartphones</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">video &amp; photo cameras</a>
                                                    <div className="toggle" />
                                                    <ul>
                                                        <li>
                                                            <a href="#">video &amp; photo cameras</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">smartphones</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">smartphones</a>
                                                </li>
                                                <li>
                                                    <a href="#">tv &amp; audio</a>
                                                </li>
                                                <li>
                                                    <a href="#">gadgets</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">tv &amp; audio</a>
                                            <div className="toggle" />
                                            <ul>
                                                <li>
                                                    <a href="#">laptops &amp; computers</a>
                                                    <div className="toggle" />
                                                    <ul>
                                                        <li>
                                                            <a href="#">laptops &amp; computers</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">video &amp; photo cameras</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">smartphones</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">video &amp; photo cameras</a>
                                                    <div className="toggle" />
                                                    <ul>
                                                        <li>
                                                            <a href="#">video &amp; photo cameras</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">smartphones</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">smartphones</a>
                                                </li>
                                                <li>
                                                    <a href="#">tv &amp; audio</a>
                                                </li>
                                                <li>
                                                    <a href="#">gadgets</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">gadgets</a>
                                            <div className="toggle" />
                                            <ul>
                                                <li>
                                                    <a href="#">laptops &amp; computers</a>
                                                    <div className="toggle" />
                                                    <ul>
                                                        <li>
                                                            <a href="#">laptops &amp; computers</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">video &amp; photo cameras</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">smartphones</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">video &amp; photo cameras</a>
                                                    <div className="toggle" />
                                                    <ul>
                                                        <li>
                                                            <a href="#">video &amp; photo cameras</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">smartphones</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">smartphones</a>
                                                </li>
                                                <li>
                                                    <a href="#">tv &amp; audio</a>
                                                </li>
                                                <li>
                                                    <a href="#">gadgets</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">car electronics</a>
                                            <div className="toggle" />
                                            <ul>
                                                <li>
                                                    <a href="#">laptops &amp; computers</a>
                                                    <div className="toggle" />
                                                    <ul>
                                                        <li>
                                                            <a href="#">laptops &amp; computers</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">video &amp; photo cameras</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">smartphones</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">video &amp; photo cameras</a>
                                                    <div className="toggle" />
                                                    <ul>
                                                        <li>
                                                            <a href="#">video &amp; photo cameras</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">smartphones</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">smartphones</a>
                                                </li>
                                                <li>
                                                    <a href="#">tv &amp; audio</a>
                                                </li>
                                                <li>
                                                    <a href="#">gadgets</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">video games &amp; consoles</a>
                                        </li>
                                        <li>
                                            <a href="#">software</a>
                                        </li>
                                        <li>
                                            <a href="#">offeci accessories</a>
                                        </li>
                                        <li>
                                            <a href="#">accessories</a>
                                        </li>
                                    </ul>
                                    <div className="empty-space col-xs-b25 col-sm-b50" />
                                    <div className="h4 col-xs-b25">Price</div>
                                    <div id="prices-range" />
                                    <div className="simple-article size-1">PRICE: <span className="grey">$<span className="min-price">40</span> - $<span className="max-price">300</span></span></div>
                                    <div className="empty-space col-xs-b25 col-sm-b50" />
                                    <div className="h4 col-xs-b25">Brands</div>
                                    <label className="checkbox-entry">
                                        <input type="checkbox" /><span>LG</span>
                                    </label>
                                    <div className="empty-space col-xs-b10" />
                                    <label className="checkbox-entry">
                                        <input type="checkbox" /><span>SAMSUNG</span>
                                    </label>
                                    <div className="empty-space col-xs-b10" />
                                    <label className="checkbox-entry">
                                        <input type="checkbox" /><span>Apple</span>
                                    </label>
                                    <div className="empty-space col-xs-b10" />
                                    <label className="checkbox-entry">
                                        <input type="checkbox" /><span>HTC</span>
                                    </label>
                                    <div className="empty-space col-xs-b10" />
                                    <label className="checkbox-entry">
                                        <input type="checkbox" /><span>Google</span>
                                    </label>
                                    <div className="empty-space col-xs-b25 col-sm-b50" />
                                    <div className="h4 col-xs-b25">Choose Color</div>
                                    <div className="color-selection size-1">
                                        <div className="entry active" style={{ color: '#a7f050' }} />
                                        <div className="entry" style={{ color: '#50e3f0' }} />
                                        <div className="entry" style={{ color: '#eee' }} />
                                        <div className="entry" style={{ color: '#4d900c' }} />
                                        <div className="entry" style={{ color: '#edb82c' }} />
                                        <div className="entry" style={{ color: '#7d3f99' }} />
                                        <div className="entry" style={{ color: '#3481c7' }} />
                                        <div className="entry" style={{ color: '#bf584b' }} />
                                    </div>
                                    <div className="empty-space col-xs-b25 col-sm-b50" />
                                    <div className="h4 col-xs-b25">Operation System</div>
                                    <label className="checkbox-entry">
                                        <input type="checkbox" /><span>Android</span>
                                    </label>
                                    <div className="empty-space col-xs-b10" />
                                    <label className="checkbox-entry">
                                        <input type="checkbox" /><span>IOS</span>
                                    </label>
                                    <div className="empty-space col-xs-b10" />
                                    <label className="checkbox-entry">
                                        <input type="checkbox" /><span>Windows Phone</span>
                                    </label>
                                    <div className="empty-space col-xs-b10" />
                                    <label className="checkbox-entry">
                                        <input type="checkbox" /><span>Symbian</span>
                                    </label>
                                    <div className="empty-space col-xs-b10" />
                                    <label className="checkbox-entry">
                                        <input type="checkbox" /><span>Blackberry OS</span>
                                    </label>
                                    <div className="empty-space col-xs-b25 col-sm-b50" />
                                    <div className="h4 col-xs-b25">Popular Tags</div>
                                    <div className="tags light clearfix">
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
                                    <div className="empty-space col-xs-b25 col-sm-b60" />
                                </div>
                            </div>
                            

                            <div className="empty-space col-md-b70" />
                            <div className="swiper-container arrows-align-top" >
                                {homeProducts && homeProducts.dataBannerSlide && homeProducts.dataBannerSlide.data_banner2 && homeProducts.dataBannerSlide.data_banner2.length > 0
                                    && <ListToSlide notify={toast} onAddProductToCart={this.props.onAddProductToCart} data={homeProducts.dataBannerSlide.data_banner2} title={''} />
                                }


                                <div className="swiper-pagination relative-pagination visible-xs" />
                            </div>
                            <div className="empty-space col-xs-b35 col-md-b70" />
                            <div className="empty-space col-md-b70" />
                            <div className="row">
                                {homeProducts && homeProducts.dataBannerSlide && homeProducts.dataBannerSlide.data_orderBy_rating && homeProducts.dataBannerSlide.data_orderBy_rating.length > 0
                                    &&
                                    <ListNotSlide notify={toast} onAddProductToCart={this.props.onAddProductToCart} data={homeProducts.dataBannerSlide.data_orderBy_rating} title={'Được đánh giá'} />
                                }
                                {homeProducts && homeProducts.dataBannerSlide && homeProducts.dataBannerSlide.data_orderBy_rand && homeProducts.dataBannerSlide.data_orderBy_rand.length > 0
                                    &&
                                    <ListNotSlide notify={toast} onAddProductToCart={this.props.onAddProductToCart} data={homeProducts.dataBannerSlide.data_orderBy_rand} title={'Ngẫu nhiên'} />
                                }
                                {homeProducts && homeProducts.dataBannerSlide && homeProducts.dataBannerSlide.data_orderBy_cost && homeProducts.dataBannerSlide.data_orderBy_cost.length > 0
                                    &&
                                    <ListNotSlide notify={toast} onAddProductToCart={this.props.onAddProductToCart} data={homeProducts.dataBannerSlide.data_orderBy_cost} title={'Giá tốt'} />
                                }

                            </div>
                        </div>
                        <div className="empty-space col-xs-b15 col-sm-b45" />
                        <div className="empty-space col-md-b70" />
                    </div>


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
            </>
        );
    }
}

