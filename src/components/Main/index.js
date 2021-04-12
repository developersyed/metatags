import React from 'react'
import Header from '../Header'
import Channels from '../Channels'
import MetaData from '../MetaData'
import Preview from '../Preview'

export default function Main() {
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Channels  />
                    </div>
                    <div className="col-md-4">
                        <MetaData />
                    </div>
                    <div className="col-md-6">
                        <Preview />
                    </div>
                </div>
            </div>
        </div>
    )
}
