import React, { Component } from 'react'
import TabLetAdd from '../product/tabletAd';
import Carousel from 'nuka-carousel';

export default class ChoseTheBest extends Component {
    render() {

        var { homeProducts } = this.props
        var { dataBannerSlide } = homeProducts
        var { data_tablet } = dataBannerSlide
        // console.log(`data_tablet`, data_tablet);
        return (
            <div >
                <div className="container" >
                    <div className="text-center">
                        <div className="simple-article size-3 light uppercase col-xs-b5"></div>
                        <div className="h2">Máy tính bảng</div>
                        <div className="title-underline center"><span /></div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url('/static/theme1/img/background-4.jpg')`, backgroundSize: 'cover', }}>
                    <div className="empty-space col-xs-b35 col-md-b70" />
                    <div className="slider-wrapper">

                        <div className="swiper-container" >
                            <div className="swiper-wrapper">
                                <Carousel
                                    renderCenterLeftControls={({ previousSlide }) => (
                                        null
                                    )}
                                    renderCenterRightControls={({ nextSlide }) => (
                                        null
                                    )}>
                                    {data_tablet && data_tablet.length > 0
                                        && data_tablet.map((e, i) => {
                                            return <TabLetAdd notify={this.props.notify} onAddProductToCart={this.props.onAddProductToCart} data={e} key={i} />
                                        })
                                    }

                                </Carousel>


                            </div>
                            <div className="col-xs-b25 col-sm-b50" />
                        </div>
                    </div>
                </div>

                <div className="empty-space col-xs-b35 col-md-b70" />

            </div>
        )
    }
}
