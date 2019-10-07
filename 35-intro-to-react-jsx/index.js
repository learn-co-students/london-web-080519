const domContainer = document.querySelector('#react-app');

const Header = (props) => {

    return <h2>{props.innerText}</h2>
}

const header = React.createElement('h1', {
    style: { fontSize: '10rem', color: 'green' },
    className: 'big-header'
}, 'my react app')

ReactDOM.render(<Header innerText='my react app' />, domContainer);
