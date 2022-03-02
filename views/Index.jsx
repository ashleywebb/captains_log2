const React = require ('react')


class Index extends React.Component {
    render() {
        const logs = this.props.logs
        return (
            <div>
                <nav>
                    <a href="/logs/new">Create a new log</a> 
                </nav>
                <ul>
                    {
                        logs.map((log) => {
                            return (
                                <li key={`${log_id}`}>
                                    <a href={`/logs/${log._id}`}>{log.title} <br/> {log.entry} {log.shipIsBroken}<br/> </a> 
                                </li>
                            )
                        }) 
                    }
                </ul>
            </div>
        )
    }
}