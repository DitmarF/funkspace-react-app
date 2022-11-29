function Header(props){

    const h = props.h;

    return(
        <header>
            {h === 1 && <header><h1>{props.children}</h1></header>}
            {h === 2 && <header><h2>{props.children}</h2></header>}
            {h === 3 && <header><h3>{props.children}</h3></header>}
            {h === 4 && <header><h4>{props.children}</h4></header>}
            {h === 5 && <header><h5>{props.children}</h5></header>}
            {h === 6 && <header><h6>{props.children}</h6></header>}
        </header>
    )
}

export default Header;