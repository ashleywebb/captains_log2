const React = require('react')

class New extends React.Component {
    render() {
        return (
            <div>
                <form action="/logs" method="POST">
                    Title: <input name="title"  type="text"></input> <br/>
                    Date: <input type="date"></input><br/>
                    Entry: <br/> <textarea name="entry"/><br/>
                    Ship's Broken: <input name="shipIsBroken" type="checkbox"></input><br/>
                    <input type="submit" value="Post"></input>
                </form>
            </div>
        )}
}

module.exports = New