function Circle(props) {
    const size = 17.5;
    return (
        <button style={{
            height: size,
            border: 'none',
            width: size,
            borderRadius: size / 2,
            margin: 8,
            backgroundColor: props.color || 'red'
        }}>
        </button>
    );
}

function Header() {
    return (
        <div className="px-2 py-1" style={{ backgroundColor: '#241b2f' }}>
            <Circle color={'#ff5f56'} />
            <Circle color={'#ffbd2e'} />
            <Circle color={'#27c93f'} />
        </div>
    );
}

export default Header;