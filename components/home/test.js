import React, { Component } from 'react'
import ProductHot from '../product/productHot'
import { Loading } from '../Loading'
import Carousel from 'nuka-carousel'
import Slider from "react-slick";


export default class Test extends Component {

    state = ({
        settings: {
            dots: true,
            infinite: true,
            speed: 700,
            slidesToShow: 4,
            slidesToScroll: 3
        }
    })
    componentDidMount() {
        // var { homeProducts } = this.props
        // var { data_hot } = homeProducts.dataBannerSlide
        // var { settings } = this.state
        // if (data_hot && data_hot.length) {

        //     if (data_hot.length > 5) {
        //         settings.slidesToShow = 5
        //     } else {
        //         settings.slidesToShow = data_hot.length
        //     }

        //     this.setState({
        //         settings
        //     })
        // }
    }


    render() {
        var { settings } = this.state
        var { homeProducts } = this.props
        var { data_hot } = homeProducts.dataBannerSlide
        if (data_hot && data_hot.length) {
            if (data_hot.length > 5) {
                settings.slidesToShow = 5
            } else {
                settings.slidesToShow = data_hot.length
            }
        }


        return (

            <div>
                <div className="container">
                    <div className="text-center">
                        <div className="h2">đang được quan tâm</div>
                        <div className="title-underline center"><span /></div>
                    </div>
                </div>
                {homeProducts.loading_bannerSlide ? <Loading /> :
                    <div className="slider-wrapper">
                        {/* <div className="swiper-button-prev visible-lg" />
                        <div className="swiper-button-next visible-lg" /> */}
                        <div className="swiper-container">

                            <Slider {...settings}>
                                {data_hot && data_hot.length > 0 && data_hot.map((e, i) => {
                                    return <ProductHot notify={this.props.notify} onAddProductToCart={this.props.onAddProductToCart} data={e} key={i} />
                                })
                                }
                            </Slider>
                            <div className="swiper-pagination relative-pagination visible-xs visible-sm" />
                        </div>
                    </div>}

            </div>
        )
    }
}
