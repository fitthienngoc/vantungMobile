import React, { Component } from 'react'
import ProductHot from '../product/productHot'
import { Loading } from '../Loading'
import Slider from "react-slick";


export default class ListToSlide extends Component {

    state = ({
        settings: {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
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
        var { data } = this.props
        var data_hot = data
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
                    <div className="h4 col-xs-b25">{this.props.title ? this.props.title : 'Có thể bạn sẽ thích'}</div>


                </div>

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
                </div>

            </div>
        )
    }
}
