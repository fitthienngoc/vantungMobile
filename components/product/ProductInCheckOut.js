import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';
import Link from 'next/link';

class ProductInCheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quanlity: 1
        };
    }
    componentWillMount() {

        this.setState({
            quanlity: this.props.data.quality_by
        })
    }


    updateQuality = (quanlity, quanlityMax, action, e) => {
        if (action == '+') {
            quanlity < quanlityMax ? quanlity++ : null
        }
        if (action == '-') {
            quanlity > 0 ? quanlity-- : null
        }
        this.setState({
            quanlity
        })
        e.quality_by = quanlity

        this.props.onUpdateProductInCart(e)

    }

    onShowQualitySelect(quanlity, max, e) {
        var quanlityMax = 0
        max > 0 ? quanlityMax = max : quanlityMax = 0

        return < div className="quantity-select" >
            <span onClick={() => this.updateQuality(quanlity, quanlityMax, '-', e)} className="minus" />
            <span className="number">{quanlity}</span>
            <span onClick={() => this.updateQuality(quanlity, quanlityMax, '+', e)} className="plus" />
        </div >
    }
    render() {
        var { data, thanhtoan } = this.props
        var { quanlity } = this.state

        return (
            thanhtoan ?
                <tr>
                    <td data-title=" ">
                        <Link href={{ pathname: 'chi-tiet', query: { id: data.Id } }} as={`/chi-tiet/${data.name.replace(/\s/g, '-')}/${data.Id}`}>
                            <a className="cart-entry-thumbnail" ><img style={{ height: 100 }} src={data.pictures[0].base64} alt="" /></a>
                        </Link>
                    </td>
                    <td data-title=" ">
                        <Link href={{ pathname: 'chi-tiet', query: { id: data.Id } }} as={`/chi-tiet/${data.name.replace(/\s/g, '-')}/${data.Id}`}>
                            <h6 className="h6">
                                <a>{data.name}<br/>
                                <CurrencyFormat value={data.system} displayType={'text'} thousandSeparator={true} prefix={' '} /></a>
                            </h6>
                        </Link></td>

                    <td data-title="Số lượng: ">
                        {quanlity}
                    </td>
                    <td data-title="Màu: "><div className="cart-color" style={{ background: data.color_by.code }} /></td>
                </tr>
                :
                <tr>
                    <td data-title=" ">
                        <Link href={{ pathname: 'chi-tiet', query: { id: data.Id } }} as={`/chi-tiet/${data.name.replace(/\s/g, '-')}/${data.Id}`}>
                            <a className="cart-entry-thumbnail" ><img style={{ height: 100 }} src={data.pictures[0].base64} alt="" /></a>
                        </Link>
                    </td>
                    <td data-title=" ">
                        <Link href={{ pathname: 'chi-tiet', query: { id: data.Id } }} as={`/chi-tiet/${data.name.replace(/\s/g, '-')}/${data.Id}`}>
                            <h6 className="h6">
                                <a>{data.name}</a>
                            </h6>
                        </Link></td>

                    <td data-title="Giá: "><CurrencyFormat value={data.system} displayType={'text'} thousandSeparator={true} prefix={' '} /></td>
                    <td data-title="Số lượng: ">
                        {this.onShowQualitySelect(quanlity, data.quality, data)}
                    </td>
                    <td data-title="Màu: "><div className="cart-color" style={{ background: data.color_by.code }} /></td>
                    <td data-title="Sale: "><div className="cart-color" />{data.screen}%</td>
                    <td data-title="Tổng:"><CurrencyFormat value={(data.system - data.system * data.screen / 100) * quanlity} displayType={'text'} thousandSeparator={true} prefix={' '} />VND</td>
                    <td data-title>
                        <div onClick={() => this.props.onRemoveProduct(data.IdNow)} className="button-tn-close" />
                    </td>
                </tr>

        )
    }
}


export default (ProductInCheckOut);