/**
 * react-file - index.js
 * Created by mengdesen on 15/5/15.
 */

'use strict';

var React = require('react');
var File = require('../');

var Example = React.createClass({
    onMessage: function (e) {
        if (e.origin === 'http://localhost:3000') {
            console.log(e.data);
        }
    },
    render: function () {
        var action = "http://localhost:3000/upload";
        return (
            <File onMessage={this.onMessage} action={action}>
                <button>upload</button>
            </File>
        )
    }
});

React.render(<Example/>, document.body);