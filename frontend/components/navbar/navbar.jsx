import React from 'react';
import { Link } from 'react-router-dom';
import { debounce } from "debounce";


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showMenu: false, search: this.props.searchurl};
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.searchDefaultText = this.searchDefaultText.bind(this);
        this.debouncedHandleChange = debounce(this.updateSearch, 1000, false).bind(this)
        this.persistedHandleChange = e => {
            if (this._isMounted){
                this.setState({ search: e.target.value })
            }
            this.debouncedHandleChange(e)
        }
        this.toggleSearchShow = this.toggleSearchShow.bind(this);
    }
    

    showMenu(e){
        e.persist();
        e.stopPropagation();
        if (!e.currentTarget.className === "dropdown" && !e.currentTarget.className === "userIcon" && !e.currentTarget.className === "dropdown-content"){
            return this.closeMenu(e);
        }
        if (this._isMounted){
            this.setState({showMenu: true});
        }
    }

    closeMenu(e){
        if (e.currentTarget.className === "dropdown-content" || e.currentTarget.className === "dropdown" || e.currentTarget.className === "hiddenbridge"){
            if (this._isMounted){
                this.setState({showMenu: false})
            }
        }
    }

    componentDidMount(){
        this._isMounted = true
        let scrollpos = window.scrollY;
        let navbar = document.getElementsByClassName("entireNav")[0].getElementsByClassName("navLinks")[0];

        function add_class_on_scroll() {
            navbar.classList.add("navfaded");
        }

        function remove_class_on_scroll() {
            navbar.classList.remove("navfaded");
        }
        
        window.addEventListener('scroll', function () {

            scrollpos = window.scrollY;

            if (scrollpos > 0) {
                add_class_on_scroll();
            }
            else {
                remove_class_on_scroll();
            }
        });
        if(this.state.search){
            if (this.state.search.length > 0){
                this.toggleSearchShow();
            }
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    

    updateSearch(){ 
            if (this.state.search === '') {
            this.props.history.push(`/browse`)
            }
        else{
            this.props.history.push(`/search/${this.state.search}`).toggleSearchShow();
        }     
    }


    searchDefaultText(){
        if (this.props.match.params.searchinput){
            return this.props.match.params.searchinput;
        }
    }

    toggleSearchShow(){
        let searchIcon = document.getElementById("searchIconId");
        let searchBar = document.getElementById("searchBarId");

        if(searchIcon.classList.contains("unopenedSearch")){
            searchIcon.classList.remove("unopenedSearch");
            searchBar.classList.remove("unopenedSearchBar");
        }
        else{
            searchIcon.classList.add("unopenedSearch");
            searchBar.classList.add("unopenedSearchBar");
        }
    }

    
    render() {
        return (
            <>
            <nav className='entireNav'>
                <div className='navLinks sticky'>
                    <div className='firstBox'>
                        <Link to='/browse'><img src={window.logo} className="navlogo" /> </Link>
                        <div className='linksFirst'>
                            <Link to='/browse' className='singleLinks'> Home </Link>
                            <Link to='/genre/10' className='singleLinks'> TV Shows </Link>
                            <Link to='/genre/9' className='singleLinks'> Movies </Link>
                            <Link to='/browse/my-list' className='singleLinks'> My List </Link>
                        </div>
                    </div>
                    <div className="iconsandsearch"> 
                        <div className="searchbar">
                                <a className="iconSizes"><img className="searchIcon unopenedSearch" id="searchIconId" src={window.search} onClick={this.toggleSearchShow} /></a>
                                <input className="inputsearch unopenedSearchBar" placeholder="Titles" id="searchBarId" type="text" value={this.state.search} onChange={this.persistedHandleChange}/>

                        </div>
                        <div className='linksSecond'>
                                <a href="https://github.com/kevinktom" className="iconSizes" target="_blank"><img src={window.github}/> </a>
                                <div className="dropdown" onMouseLeave={this.closeMenu}>
                                    <div onMouseEnter={this.showMenu} className='userandcaret'>
                                        <div className="userIcon" ><img src={window.usericon} /></div>
                                        <div className="caretdown"><img src={window.downcaret} /></div>
                                        <div className="hiddenbridge"></div>
                                            
                                    </div>
                                {(this.state.showMenu === true) ? 
                                        <div className="dropdown-content" onMouseLeave={this.closeMenu}>
                                            <div  className="divdropcaret"><img src={window.upcaret} /></div>
                                            <a href='https://www.linkedin.com/in/kevinktom/' className='dropitem' target="_blank"> LinkedIn </a>
                                            <a href='https://kevinktom.github.io/' className='dropitem' target="_blank"> Portfolio </a>
                                            <button onClick={this.props.logoutCurrentUser} className="signoutbutton">Sign out of Tomflix</button>
                                        
                                        </div>: null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            </>
        )
    }
}

export default Nav;



