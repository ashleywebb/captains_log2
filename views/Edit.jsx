const React = require('react')
const Default = require ('../layout/Default.jsx')

class Edit extends React.Component {
    render() {
        return (
            <Default title="Edit">
                <form action={`/fruits/${this.props.fruits._id}?method=PUT`} method="POST">
                    Name: <input type="text" name="title" defaultValue={this.props.log.title}></input>
                    Color: <input type="text" name="entry" defaultValue={this.props.log.entry}></input>
                    Ship Is Broken:
                        { this.props.log.shipIsBroken ?
                            <input type="checkbox" name="shipIsBroken" /> :
                            <input type="checkbox" name="shipIsBroken"/>
                       }
                <br/>
                       <input type="submit" value="Submit Edits"></input>
                </form>
            </Default>
        )
    }
}

module.exports = Edit;

