const React = require ('react')
Default = require('./layout/Default')

class Index extends React.Component {
    render() {
        const logs = this.props.logs
        return (
            <Default title="Index Page" subhead="hello">
            <div className="div1">
                <nav>
                    <a href="/logs/new">Create a new log</a> 
                </nav>
                <ul>
                    {
                        logs.map((log) => {
                            return (
                                <li key={`${log_id}`}>
                                    <a href={`/logs/${log._id}`}>{log.title} <br/> {log.entry} {log.shipIsBroken}<br/>
                                    <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value={`DELETE ${log.title}`} />
                                    </form> </a> 
                                </li>
                            )
                        }) 
                    }
                </ul>
            </div>
            </Default>
        )
    }
}

module.exports = Index