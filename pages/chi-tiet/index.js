import { withRouter } from 'next/router'
import Product from './../product'
import { connect } from 'react-redux'
import { actGetProduct, actAddProductToCart, actSendCommentProduct } from '../../redux/actions/home/products'
import { ToastContainer, toast } from 'react-toastify';

class Page extends React.Component {

    componentDidMount() {
        console.log(`this.props`, this.props);
        var { router } = this.props

        router && router.query.id ? this.props.onGetProduct(router.query.id) : null
    }
    

    render() {
        const { router, homeProducts, onGetProduct,onAddProductToCart,users,onSendCommentProduct } = this.props

        return <><Product onAddProductToCart={onAddProductToCart} notify={toast} router={router} onSendCommentProduct={onSendCommentProduct} homeProducts={homeProducts} onGetProduct={onGetProduct} users={users} />
        <ToastContainer /></>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        homeProducts: state.homeProducts
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetProduct: (id) => {
            dispatch(actGetProduct(id))
        },
        onAddProductToCart: (data) => {
            dispatch(actAddProductToCart(data))
        },
        
        onSendCommentProduct: (data) => {
            dispatch(actSendCommentProduct(data))
        },


    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(withRouter(Page));