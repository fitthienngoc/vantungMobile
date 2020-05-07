import React, { Component } from 'react';
import { connect } from 'react-redux';
import BannerSlideProduct2 from './BannerSlideProduct2'
import BannerSlideProduct1 from './BannerSlideProduct1'
import { Loading } from '../Loading';
import Carousel from 'nuka-carousel'

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        this.props.onGetProductBannerSlide()
    }
    showProduct = (data) => {
        var r1 = ''

        if (data.data_banner1 && data.data_banner1.length > 0) {
            r1 = data.data_banner1.map((e, i) => {
                return <div key={i}><BannerSlideProduct1 data={e} /></div>
            });

        }

    }

    render() {

        var { homeProducts, screen_ } = this.props
        // console.log(screen_);

        return (
            homeProducts.loading_bannerSlide ? <Loading /> :
                <div className="slider-wrapper">



                    <div className="swiper-container"  style={{backgroundImage: `url('/static/theme1/img/background-4.jpg')`,backgroundSize: 'cover', }}>
                        {/* <Carousel
                        >
                            {homeProducts.dataBannerSlide.data_banner1.length > 0 ? homeProducts.dataBannerSlide.data_banner1.map((e, index) => {
                                return <BannerSlideProduct1 data={e} key={index} />
                            })
                                : ''}
                        </Carousel> */}

                        <Carousel>
                            {homeProducts.dataBannerSlide.data_banner1.length > 0 ? homeProducts.dataBannerSlide.data_banner1.map((e, index) => {
                                return <BannerSlideProduct1 loading_add ={this.props.loading_add} toast={this.props.toast} notify={this.props.notify} data={e} key={index} onAddProductToCart={this.props.onAddProductToCart}/>
                            })
                                : <Loading />}


                        </Carousel>




                    </div>




                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // users: state.users
    };
}


const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(Banner);