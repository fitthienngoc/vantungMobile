import { withRouter } from 'next/router'
import Search from './../search_'
import { connect } from 'react-redux'
import { actGetProduct, actAddProductToCart, actSendCommentProduct } from '../../redux/actions/home/products'
import { ToastContainer, toast } from 'react-toastify';
import { actSearchByIdCategory } from '../../redux/actions/Search/sidebar';

class Page extends React.Component {


    componentDidMount(){
        this.props.onSearch(this.props.router)
    }
    render() {
        var { router,onSearch } = this.props
        
        return <>
            <Search notify={toast} onAddProductToCart={this.props.onAddProductToCart} onSearch={onSearch} router={router} />
            <ToastContainer/></>
    }
}

const mapStateToProps = (state) => {
    return {
        
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProductToCart: (data) => {
            dispatch(actAddProductToCart(data))
        },

        onSendCommentProduct: (data) => {
            dispatch(actSendCommentProduct(data))
        },

        onSearch: (router) => {
            dispatch(actSearchByIdCategory(router))
        },

    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(withRouter(Page));