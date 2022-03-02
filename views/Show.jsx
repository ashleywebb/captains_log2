const React = require('react') 

class Show extends React.Component{
    render() {
        const log = this.props.log
        return (
            <div>
                <h1> Here is {log.title}</h1>
                <a href={`/${log._id}/edit`}>Edit this log</a>
                <p>{log.entry}</p>
                <p>The ship is {log.shipIsBroken? 'broken' : 'not broken'} </p>
            </div>
        )
    }
}

module.exports = Show