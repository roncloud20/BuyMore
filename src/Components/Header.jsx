const Header = ({searchChange}) => {
    return(
        <header>
            <input
                type={'search'}
                placeholder={'Search for Items'}
                onChange={searchChange}
            />
        </header>
    )
}

export default Header;