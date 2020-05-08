import React from 'react';
import { connect } from 'react-redux';
import initialize from '../utils/initialize';
import { actCheckLogin, actLogOut, actGetDataUser } from '../redux/actions/user';
import { actRemoveProductInCart, actCheckCart, actGetProductBannerSlide } from '../redux/actions/home/products';
import AppPopup from './popup';
import Cart from './cart/Cart';
import { actSearchByIdCategory } from '../redux/actions/Search/sidebar';
import Router from 'next/router'

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      size: 15,
      active: '',
      togleSearch: false,
      search: '',
      id_categorie: -1,
      categories: 'sanpham',
      pathname: '/'
    };
  }
  componentDidMount() {    
    window.location && window.location.pathname ? this.setState({
      pathname: window.location.pathname
    }) : null

    var { router } = this.props

    if (router && router.query) {
      var { query } = router
      var { id_categorie, categories } = query
      if (id_categorie == undefined) {
        id_categorie = -1
        categories = 'tat-ca'
      }
      this.setState({
        id_categorie,
        categories
      })

    }



    this.props.onCheckLogin()
    this.props.onCheckCart()
    this.props.onGetProductBannerSlide()
    var { router } = this.props
    if (router && router.query) { this.props.onSearchByIdCategory(router) }

  }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.users !== this.props.users) {
  //     this.props.onGetDataUser(nextProps.users.dataUser.id_user)
  //   } 
  // }

  static getInitialProps(ctx) {
    initialize(ctx);
  }

  logOut() {
    this.props.onLogOut()
    this.setPopup()
  }

  setPopup = (active) => {
    this.setState({ active })
  }
  togleSearch() {
    this.setState({
      togleSearch: !this.state.togleSearch
    })
  }

  onChange = (e) => {
    var target = e.target;

    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });

  }

  onSave = (e) => {
    e.preventDefault();
    var { search, id_categorie, categories } = this.state


    Router.push(`/search/${categories}/${id_categorie}/?search=${search}`);

  }

  render() {
    var { users, cartReducer } = this.props
    var { togleSearch, pathname } = this.state
    return (
      <>
        <header>
          <div className="header-top">
            <div className="content-margins">
              <div className="row">
                <div className="col-md-5 hidden-xs hidden-sm">
                  <div className="entry"><b>liên hệ:</b> <a href="tel:+84982415396">+84  982 415 396</a></div>
                  <div className="entry"><b>email:</b> <a href="mailto:me@thienngoc.info">me@thienngoc.info</a></div>
                </div>
                <div className="col-md-7 col-md-text-right">
                  {users.is_login ? <>
                    <div className="entry"><a onClick={() => this.setPopup('updateUser')}><b>{users.dataUser.name}</b></a>  </div>
                    <div className="entry"><a onClick={() => this.logOut()} ><b>Đăng xuất</b></a>  </div> </>
                    : <div className="entry"><a onClick={() => this.setPopup('Login')} className="" ><b>Đăng nhập</b></a>&nbsp; or &nbsp;<a onClick={() => this.setPopup("Register")} className="" data-rel={2}><b>đăng ký</b></a></div>}
                  {/* <div className="entry language">
                    <div className="title"><b>en</b></div>
                    <div className="language-toggle header-toggle-animation">
                      <a href="index1">fr</a>
                      <a href="index1">ru</a>
                      <a href="index1">it</a>
                      <a href="index1">sp</a>
                    </div>
                  </div> */}
                  {/* <div className="entry hidden-xs hidden-sm"><a href="#"><i className="fa fa-heart-o" aria-hidden="true" /></a></div> */}
                  <Cart onRemove={this.props.onRemove} cartReducer={cartReducer} />

                  <div className="hamburger-icon">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom">
            <div className="content-margins">
              <div className="row">
                <div className="col-xs-3 col-sm-1">
                  <a id="logo" href="/"><img src="/static/theme1/img/logo-2.png" alt="" /></a>
                </div>
                <div className="col-xs-9 col-sm-11 text-right">
                  <div className="nav-wrapper">
                    <div className="nav-close-layer" />
                    <nav>
                      <ul>
                        <li className={pathname == '/' ? "active" : ''}>
                          <a href="/">Trang chủ</a>
                          {/* <div className="menu-toggle" />
                          <ul>
                            <li className="active"><a href="index1">Homepage 1</a></li>
                            <li><a href="index2">Homepage 2</a></li>
                            <li><a href="index3">Homepage 3</a></li>
                            <li><a href="index4">Homepage 4</a></li>
                            <li><a href="index5">Homepage 5</a></li>
                            <li><a href="index6">Homepage 6</a></li>
                          </ul> */}
                        </li>
                        <li className={pathname == '/cart' ? "active" : ''}>
                          <a href="/cart">Giỏ Hàng
                          
                          </a>
                        </li>
                        <li className={pathname == '/danh-sach-hoa-don' ? "active" : ''}>
                          <a href="/danh-sach-hoa-don">Hóa Đơn</a>
                        </li>
                        <li className={pathname == '/search' ? "active" : ''}>
                          <a href="/search">Tìm Sản Phẩm</a>
                        </li>


                      </ul>
                      <div className="navigation-title">
                        Menu
                    <div className="hamburger-icon active">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div onClick={() => this.togleSearch()} className="header-bottom-icon toggle-search"><i className="fa fa-search" aria-hidden="true" /></div>
                  <div className="header-bottom-icon visible-rd"><i className="fa fa-heart-o" aria-hidden="true" /></div>
                  <div className="header-bottom-icon visible-rd">
                    <i className="fa fa-shopping-bag" aria-hidden="true" />
                    <span className="cart-label">{cartReducer.data && cartReducer.data.length ? cartReducer.data.length : 0}</span>
                  </div>
                </div>
              </div>
              {togleSearch ? <div className="header-search-wrapper active">
                <div className="header-search-content">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3">
                        <form onSubmit={this.onSave}>
                          <div className="search-submit">
                            <i className="fa fa-search" aria-hidden="true" />
                            <input type="submit" />
                          </div>
                          <input name={'search'} onChange={this.onChange} defaultValue={this.state.search} className="simple-input style-1" type="text" placeholder="Iphone / Samsung / Oppo /...." />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div onClick={() => this.togleSearch()} className="button-tn-close" />
                </div>
              </div> : null}


            </div>
          </div>
        </header>

        <div className="header-empty-space" />
        <AppPopup setPopup={this.setPopup} active={this.state.active} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    cartReducer: state.cartReducer
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onCheckLogin: () => {
      dispatch(actCheckLogin())
    },
    onCheckCart: () => {
      dispatch(actCheckCart())
    },
    onLogOut: () => {
      dispatch(actLogOut())

    },
    onRemove: (Id) => {
      dispatch(actRemoveProductInCart(Id))
    },
    onGetProductBannerSlide: () => {
      dispatch(actGetProductBannerSlide())
    },
    onSearchByIdCategory: (router) => {
      dispatch(actSearchByIdCategory(router))
    },
  }
}
export default connect(
  mapStateToProps, mapDispatchToProps
)(Header);