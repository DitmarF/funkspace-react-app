function Header(props){

    const h = Number(props.h);

    return(
        <header>
            {h === 1 && <header className={props.className}><h1>{props.children}</h1></header>}
            {h === 2 && <header className={props.className}><h2>{props.children}</h2></header>}
            {h === 3 && <header className={props.className}><h3>{props.children}</h3></header>}
            {h === 4 && <header className={props.className}><h4>{props.children}</h4></header>}
            {h === 5 && <header className={props.className}><h5>{props.children}</h5></header>}
            {h === 6 && <header className={props.className}><h6>{props.children}</h6></header>}
        </header>
    )
}

export default Header;