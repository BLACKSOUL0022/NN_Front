function TitlePage () {

    const titleStyle = {
        color: '#fff',
        height: '50px',
        width: '250px',
        marginLeft: '25px',
        position: 'absolute',
        fontSize: '40px',
        fontWeight: '100'
    }

    return (
        <header>
            <h1 style={titleStyle}>
                SOCIAL CHAT
            </h1>
        </header>
    );
}

export default TitlePage;
