import React from 'react'
import Header from './header'
import Footer from './footer'
import AppPopup from './popup'
export default class AppLayout extends React.Component {
    render() {
        return (
            <>
                {/* LOADER */}
                {/* <div id="loader-wrapper" /> */}
                <div id="content-block">
                    <Header router={this.props.router} />
                    {this.props.children}
                    <Footer />
                    {/* popup-wrapper */}
                    
                    {/* popup-wrapper end */}
                </div>
            </>
        )
    }
}