import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actGetSidebar, actSearchByIdCategory } from '../../redux/actions/Search/sidebar';
import { Loading } from '../Loading';
import { cleanUrl, getVND, getAllUrlParams } from '../../helpers/getDateTime';
import Router from 'next/router'

import { Slider, RangeSlider } from 'rsuite';
import 'rsuite/lib/styles/index.less';

function mapStateToProps(state) {
    return {
        sidebar: state.sidebar,

    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetSidebar: () => {
            dispatch(actGetSidebar())
        },
        onSearch: (Router) => {
            dispatch(actSearchByIdCategory(Router))
        }
    };
}



class Sidebar extends Component {
    state = ({
        listId: [],
        price: [0, 100],
        search: '',
        pathname: '/',
        categories: 'tat-ca',
        id_categorie: -1
    })

    componentDidMount() {
        this.props.onGetSidebar()
        var { router } = this.props
        var { asPath, pathname, query } = router
        var { categories, id_categorie } = query
        categories == undefined ? categories =this.state.categories : null
        id_categorie == undefined ? id_categorie= this.state.id_categorie : null


        var params = getAllUrlParams(asPath)
        var { price, search } = this.state
        if (params.search) {
            var search = params.search
            search = decodeURIComponent(search)
        }
        if (params.price) {
            var price = params.price
            price = decodeURIComponent(price)
            price = price.split(" and ")
            price = [price[0]/500000 ,price[1]/500000]
        }

        this.setState({
            search,
            price,
            categories,
            id_categorie,
            pathname
        })
    }

    togleBrand = (e) => {
        var { listId } = this.state

        var x = this.findIndex(listId, e.id_categorie)
        if (x == -1) { listId.push(e.id_categorie) } else { listId.splice(x, 1) }
        this.setState({ listId })
        // var { router } = this.props
        // console.log(router);

        Router.push(`/search/${cleanUrl(e.name)}${e.id_categorie}/`);

    }

    searchPrice = () => {

        var { price, search, pathname, categories, id_categorie } = this.state
        console.log(price, search, pathname, categories, id_categorie);
        
        Router.push(`/search/${categories}/${id_categorie}?search=${search}&price=${price[0] * 500000} AND ${price[1] * 500000}`)


    }

    findIndex(list, e) {
        var i = -1
        if (list && list.length > 0) {
            list.map((e_, index) => {
                if (e_ == e) {
                    i = index
                }
            });

        }
        return i
    }

    render() {
        // console.log(`this.props.sidebar`, this.props.sidebar);
        var { sidebar } = this.props
        if (sidebar) var { data } = sidebar
        if (data) var { data } = data
        if (data) var { CATEGORIES, BRANDS, OPERATION } = data
        // var { listId } = this.state
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', this.state.price);

        return (
            sidebar.loadding ? <Loading /> :
                <div>
                    <div className="col-md-3 col-md-pull-9">
                        <div className="h4 col-xs-b10">Thể Loại Phổ Biến</div>
                        <ul className="categories-menu transparent">
                            < li  >
                                <a href={`/search`}>Tất cả</a>

                            </li>
                            {CATEGORIES && CATEGORIES.length > 0 && CATEGORIES.map((e, i) => {
                                return < li key={i} >
                                    <a href={`/search/${cleanUrl(e.name)}${e.id_categorie}`}>{e.name}</a>

                                </li>
                            })
                            }

                        </ul>

                        <div className="empty-space col-xs-b25 col-sm-b50" />


                        <div className="h4 col-xs-b25">Price</div>
                        <div id="prices-range" />
                        <div className="simple-article size-1">Giá: <button onClick={() => { this.searchPrice() }} style={{ margin: 10 }}>Tìm kiếm</button>
                            <div>
                                <hr></hr>

                                <RangeSlider
                                    onChange={(val) => { this.setState({ price: val }) }}
                                    defaultValue={this.state.price} />
                                <hr />
                            </div>
                            <b className="grey">VND <span className="min-price">{getVND(this.state.price[0] * 500000)}</span> - <span className="max-price">{getVND(this.state.price[1] * 500000)}</span></b></div>
                        <div className="empty-space col-xs-b25 col-sm-b50" />


                        <div className="h4 col-xs-b25">Thương Hiệu</div>
                        {BRANDS && BRANDS.length > 0 && BRANDS.map((e, i) => {
                            return <React.Fragment key={i}>
                                {/* <label className="checkbox-entry">
                                    <input onChange={() => this.togleBrand(e)} type="checkbox" /><span>{e.name}</span>

                                </label> */}
                                <a href={`/search/${cleanUrl(e.name)}${e.id_categorie}`}>{e.name}</a>
                                <div className="empty-space col-xs-b10" />
                            </React.Fragment>
                        })
                        }


                        {/* <div className="empty-space col-xs-b25 col-sm-b50" /> */}

                        {/* <div className="h4 col-xs-b25">Choose Color</div>
                        <div className="color-selection size-1">
                            <div className="entry active" style={{ color: '#a7f050' }} />
                            <div className="entry" style={{ color: '#50e3f0' }} />
                            <div className="entry" style={{ color: '#eee' }} />
                            <div className="entry" style={{ color: '#4d900c' }} />
                            <div className="entry" style={{ color: '#edb82c' }} />
                            <div className="entry" style={{ color: '#7d3f99' }} />
                            <div className="entry" style={{ color: '#3481c7' }} />
                            <div className="entry" style={{ color: '#bf584b' }} />
                        </div> */}

                        <div className="empty-space col-xs-b25 col-sm-b50" />

                        <div className="h4 col-xs-b25">Hệ Điều Hành</div>

                        {OPERATION && OPERATION.length > 0 && OPERATION.map((e, i) => {
                            return <React.Fragment key={i}>
                                <div className="empty-space col-xs-b10" />
                                <a href={`/search/${cleanUrl(e.name)}${e.id_categorie}`}>{e.name}</a>
                                {/* <label className="checkbox-entry">
                                    <input onChange={() => this.togleBrand(e)} type="checkbox" /><span>{e.name}</span>
                                </label> */}
                            </React.Fragment>
                        })
                        }



                        <div className="empty-space col-xs-b25 col-sm-b50" />
                        {/* <div className="h4 col-xs-b25">Từ khóa phổ biến</div>
                        <div className="tags light clearfix">
                            <a className="tag">headphoness</a>
                        </div> */}
                        <div className="empty-space col-xs-b25 col-sm-b50" />
                    </div>

                </div >
        );
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Sidebar);