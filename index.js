/**
 * react-file - index.js
 * Created by mengdesen on 15/5/15.
 */

'use strict';

var React = require('react/addons');


var File = React.createClass({
    componentDidMount: function () {
        this.input = this.refs.input.getDOMNode();
        this.form = this.refs.form.getDOMNode();
        window.onmessage = this.props.onMessage;
    },
    onClick: function () {
        this.input.click();
    },
    onChange: function () {
        this.form.submit();
    },
    getDefaultProps: function () {
        return {
            inputStyle: {
                visibility: 'hidden',
                width: '1px'
            },
            style: {
                display: 'inline-block'
            }
        }
    },
    render: function () {
        return (
            <div onClick={this.onClick} style={this.props.style}>
                {this.props.children}
                <form
                    encType="multipart/form-data"
                    action={this.props.action}
                    method="post"
                    target="file_upload"
                    ref="form"
                    >
                    <input type="file" name="file" style={this.props.inputStyle} ref='input' onChange={this.onChange}/>
                </form>
                <iframe name="file_upload" style={{display:'none'}}></iframe>
            </div>
        )
    }
});

module.exports = File;

