import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actGetSidebar, actSearchByIdCategory } from '../../redux/actions/Search/sidebar';
import { Loading } from '../Loading';
import { cleanUrl } from '../../helpers/getDateTime';

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
        onSearch: ( router) => {
            dispatch(actSearchByIdCategory(router))
        }
    };
}



class Sidebar extends Component {
    state = ({ listId: [] })

    componentDidMount() {
        this.props.onGetSidebar()
    }

    togleBrand = (e) => {
        var { listId } = this.state

        var x = this.findIndex(listId, e.id_categorie)
        if (x == -1) { listId.push(e.id_categorie) } else { listId.splice(x, 1) }
        this.setState({ listId })
        var {router} = this.props
        // this.props.onSearch('','',1,12,router)
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
        var { listId } = this.state
        console.log(`listId`, listId);
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
                        <div className="simple-article size-1">PRICE: <b className="grey">$<span className="min-price">40</span> - $<span className="max-price">300</span></b></div>
                        <div className="empty-space col-xs-b25 col-sm-b50" />


                        <div className="h4 col-xs-b25">Thương Hiệu</div>
                        {BRANDS && BRANDS.length > 0 && BRANDS.map((e, i) => {
                            return <React.Fragment key={i}>
                                <label className="checkbox-entry">
                                    <input onChange={() => this.togleBrand(e)} type="checkbox" /><span>{e.name}</span>

                                </label>
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
                                <label className="checkbox-entry">
                                    <input onChange={() => this.togleBrand(e)} type="checkbox" /><span>{e.name}</span>
                                </label>
                            </React.Fragment>
                        })
                        }



                        <div className="empty-space col-xs-b25 col-sm-b50" />
                        <div className="h4 col-xs-b25">Từ khóa phổ biến</div>
                        <div className="tags light clearfix">
                            <a className="tag">headphoness</a>
                        </div>
                        <div className="empty-space col-xs-b25 col-sm-b50" />
                    </div>

                </div >
        );
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Sidebar);