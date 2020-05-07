import React from 'react'
import Register from './user/Register'
import Login from './user/Login'
import ModalProductView from './product/ModalProductView'

export default class AppPopup extends React.Component {


  
  render() {
    var active = ''
    this.props.active ?  active  = this.props.active : null
    return (
      <>
        {active == 'Login' ? <Login setPopup={this.props.setPopup} /> : '' }
        {active == 'Register' ? <Register setPopup={this.props.setPopup} update={false} /> : '' }
        {active == 'updateUser' ? <Register setPopup={this.props.setPopup} update={true} /> : '' }
        {active == 'ModalProductView' ? <ModalProductView setPopup={this.props.setPopup} /> : '' }
        
      </>

    )
  }
}