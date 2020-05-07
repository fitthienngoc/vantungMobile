import React, { Component } from 'react'
import { Router } from 'next/dist/client/router'

export default class Pagination extends Component {
    showNumber(total_page, current_page) {
        var r = []
        if (total_page > 0) {
            var i_ = current_page - 3
            var max = current_page + 3
            if (i_ <= 0) {
                i_ = 1
            }
            if (max > total_page) {
                max = total_page
            }

            for (let i = i_; i <= max; i++) {
                r.push(<React.Fragment key={i}>
                    {this.check(i, current_page, total_page)}
                </React.Fragment>)

            }
        }
        return r
    }

    getUrl(i) {
        var { router } = this.props
        var id = ''
        var categories = ''
        var url = ''
        if (router && router.query) {
            var { query } = router
            if (query && query.id_categorie) {
                id = query.id_categorie
                categories = query.categories
            }
        }
        categories ? url = `/search/${categories}/${id}?page=${i}` : url = `/search?page=${i}`
        return url
    }

    check(i, current_page, total_page) {


        return <a href={this.getUrl(i)} className={`pagination ${current_page == i ? 'active' : ''}`}>{i}</a>
    }
    onSearch = (id, search, page, limit, router) => {
        this.props.onSearch(id, search, page, limit, router)
    }

    render() {
        var { data, router } = this.props
        // console.log(`router`, router);
        var nextPage = parseInt(data.current_page) + 1
        var prevPage = parseInt(data.current_page) - 1
        return (
            <div>
                <div className="row">
                    {/* <div className="col-sm-3 hidden-xs">
                        {data.current_page > 1 &&
                            < a className="button size-1 style-5" href={this.getUrl(1)}>
                                <span className="button-wrapper">
                                    <span className="icon"><i className="fa fa-angle-left" aria-hidden="true" /></span>
                                    <span className="text">Đầu</span>
                                </span>
                            </a>
                        }
                    </div> */}
                    
                    <div className="col-sm-12 text-center">
                        <div className="pagination-wrapper">
                            {data.current_page > 1 && <a className="button size-1 style-5" href={this.getUrl(1)}  className="pagination">{'<<'}</a> }
                            {this.showNumber(data.total_page, data.current_page)}
                            {data.current_page < data.total_page && <a href={this.getUrl(data.total_page)} className="pagination">{'>>'}</a> }
                            {/* <a className="pagination active">1</a>
                            <a className="pagination">2</a>
                            <a className="pagination">3</a>
                            <a className="pagination">4</a>
                            <span className="pagination">...</span>
                            <a className="pagination">23</a> */}
                        </div>
                    </div>
                    {/* <div className="col-sm-3 hidden-xs text-right">

                        {data.current_page < data.total_page && < a className="button size-1 style-5" href={this.getUrl(data.total_page)}>
                            <span className="button-wrapper">
                                <span className="icon"><i className="fa fa-angle-right" aria-hidden="true" /></span>
                                <span className="text">Cuối</span>
                            </span>
                        </a>}

                    </div> */}
                </div>
            </div >
        )
    }
}
