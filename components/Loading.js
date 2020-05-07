import React from 'react'
import Loader from 'react-loader-spinner'

export const Loading = () => {
    return (
        <div style={{textAlign:'center',width:'100%', padding:50}}>
            <Loader
                type="ThreeDots"
                color="#b8cd06"
                height={40}
                width={40}
            // timeout={3000} //3 secs

            />
            </div>
    )
}
