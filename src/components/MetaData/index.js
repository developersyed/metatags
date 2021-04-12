import React, { Component } from 'react'

export default class MetaData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            file: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }
    
    
    render() {
        const preview  = this.state.file;
        return (
            <div>
                <div className="metadata p2">
                    <p className="title">Meta Data</p>
                    <div className="preview">
                        <label htmlFor="input" className="label" style={{backgroundImage: `url(${preview})`}} > 
                            <div className="icon"></div>   
                            <div className="button_text">Drag &amp; Drop or Click</div>
                        </label>
                        <input id="input" className="input" type="file" onChange={this.handleChange}></input>
                    </div>
                </div>
            </div>
        )
    }
}
