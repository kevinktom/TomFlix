import React from 'react';
// import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
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
        this.debounce = this.debounce.bind(this);
        // this.debouncedUpdateSearch = this.debouncedUpdateSearch.bind(this);
        this.debouncedHandleChange = debounce(this.updateSearch, 1000, false).bind(this)
        this.persistedHandleChange = e => {
            // debugger
            // let eclone = e.target;
            this.setState({ search: e.target.value })
            // e.persist()
            this.debouncedHandleChange(e)
        }
        this.toggleSearchShow = this.toggleSearchShow.bind(this);
    }
    

    //SEARCH BAR
    //MSP MDP to get videos
    //create a separate search bar component in a different file
    //state that contains the search term
    //onchange callback that changes the state based on user input
    //have a timer in the state 0.5 seconds and reset when the user types. debunce function. 
    
    

    showMenu(e){
        // debugger
        e.persist();
        e.stopPropagation();
        if (!e.currentTarget.className === "dropdown" && !e.currentTarget.className === "userIcon" && !e.currentTarget.className === "dropdown-content"){
            return this.closeMenu(e);
        }
        this.setState({showMenu: true});
    }

    closeMenu(e){
        // debugger
        if (e.currentTarget.className === "dropdown-content" || e.currentTarget.className === "dropdown" || e.currentTarget.className === "hiddenbridge"){

        this.setState({showMenu: false})
        }
    }

    // debounce(func, delay){
    //     let inDebounce
    //     return function () {
    //         const context = this
    //         const args = arguments
    //         clearTimeout(inDebounce)
    //         inDebounce = setTimeout(() => func.apply(context, args), delay)
    //     }
    // }

    debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

    componentDidMount(){
        let scrollpos = window.scrollY;
        // let root = document.getElementById('root').getElementsByTagName("div")[0].getElementsByClassName("indexGrid")[0];
        let navbar = document.getElementsByClassName("entireNav")[0].getElementsByClassName("navLinks")[0];
        // debugger

        function add_class_on_scroll() {
            navbar.classList.add("navfaded");
        }

        function remove_class_on_scroll() {
            navbar.classList.remove("navfaded");
        }
        
        window.addEventListener('scroll', function () {
            //Here you forgot to update the value
            scrollpos = window.scrollY;

            if (scrollpos > 0) {
                add_class_on_scroll();
            }
            else {
                remove_class_on_scroll();
            }
        });
    }

    // updateSearch(e){
    //     // debugger
    //     let newSearch = e.target.value;
    //     // newSearch.persist();
    //     e.persist();
    //     this.debounce(() =>
    //                 {
    //                 this.setState({search: newSearch}, 
    //                 () => { if (this.state.search === '') 
    //                 // this.props.history.push(this.props.history[this.props.history - 2]) 
    //                 this.props.history.push(`/browse`);
    //                     }
    //             )}, 1000, false)(e)
                
    //     // if (this.state.search.length > 0) {
    //     //     // debounce(this.props.history.push(`/search/${this.state.search}`), 1000, false);
    //     //     this.props.history.push(`/search/${this.state.search}`)
    //     // }
    // }

    // updateSearch(e){
    //     let newSearch = e.target.value;
    //     e.persist();
    //     this.setState({search: newSearch}, 
    //         () => { if (this.state.search === '') 
    //         this.props.history.push(`/browse`)}
    //             )
    // }

    updateSearch(e){
        // debugger
        // let newSearch = e.target.value;
        // e.persist();
         
            if (this.state.search === '') {
            this.props.history.push(`/browse`)
            }
        else{
            this.props.history.push(`/search/${this.state.search}`);
        }
                
        // this.setState({search: e.target.value}, 
        //     () => { if (this.state.search === '') 
        //     this.props.history.push(`/browse`)}
        //         )
    }

    // debouncedUpdateSearch(e){
    //     debounce(this.updateSearch(e), 1000, false)
    // }

    searchDefaultText(){
        if (this.props.match.params.searchinput){
            return this.props.match.params.searchinput;
        }
    }

    toggleSearchShow(){
        let searchIcon = document.getElementById("searchIconId");
        let searchBar = document.getElementById("searchBarId");
        // debugger
        if(searchIcon.classList.contains("unopenedSearch")){
            searchIcon.classList.remove("unopenedSearch");
            searchBar.classList.remove("unopenedSearchBar");
        }
        else{
            searchIcon.classList.add("unopenedSearch");
            searchBar.classList.add("unopenedSearchBar");
        }
    }

    // componentDidUpdate(prevProps){
    //     // debugger
    //     if (this.state.search.length > 0 && prevProps.match.params.searchinput !==  this.state.search) {
    //         // debounce(this.props.history.push(`/search/${this.state.search}`), 10000, false);
    //         // const varTimeoutId = timeout
    //         // debounce()  { canceltimeout(timeout id) function - starts timeout  }


    //         // this.props.history.push(`/search/${this.state.search}`);
    //     }
    //     // else if (this.state.search.length === 0 && prevProps.match.params.searchinput !== this.state.search) {
    //     //     // debounce(this.props.history.push(`/browse`), 10000, false);
    //     //     this.props.history.push(`/browse`)
    //     // }        
    // }
    
    render() {
        // debugger
        // let paramurl = this.props.params.searchinput;
        return (
            <>
            <nav className='entireNav'>
                <div className='navLinks sticky'>
                    <div className='firstBox'>
                        <Link to='/browse'><img src={window.logo} className="navlogo" /> </Link>
                        <div className='linksFirst'>
                            <Link to='/browse' className='singleLinks'> Home </Link>
                            {/* <Link to='/genre/6' className='singleLinks'> TV Shows </Link>
                            <Link to='/genre/5' className='singleLinks'> Movies </Link> */}
                            <Link to='/genre/21' className='singleLinks'> TV Shows </Link>
                            <Link to='/genre/22' className='singleLinks'> Movies </Link>
                            <Link to='/browse' className='singleLinks'> Recently Added </Link>
                            <Link to='/browse/my-list' className='singleLinks'> My List </Link>
                        </div>
                    </div>
                    <div className="iconsandsearch"> 
                        <div className="searchbar">
                                <a className="iconSizes"><img className="searchIcon unopenedSearch" id="searchIconId" src={window.search} onClick={this.toggleSearchShow} /></a>
                                <input className="inputsearch unopenedSearchBar" placeholder="Titles" id="searchBarId" type="text" value={this.state.search} onChange={this.persistedHandleChange}/>

                        </div>
                        <div className='linksSecond'>
                                <a href="https://github.com/kevinktom" className="iconSizes"><img src={window.github}/> </a>
                            {/* <a href="" className="iconSizes"><img src={window.notification} /></a> */}
                                <div className="dropdown" onMouseLeave={this.closeMenu}>
                                    <div onMouseEnter={this.showMenu} className='userandcaret'>
                                        <div className="userIcon" ><img src={window.usericon} /></div>
                                        <div className="caretdown"><img src={window.downcaret} /></div>
                                        <div className="hiddenbridge"></div>
                                            
                                    </div>
                                {(this.state.showMenu === true) ? 
                                        <div className="dropdown-content" onMouseLeave={this.closeMenu}>
                                     
                                            <div  className="divdropcaret"><img src={window.upcaret} /></div>
                                            {/* <Link to='/browse' className='dropitem'> Account </Link> */}
                                              
                                            {
                                                /* <Link to='/browse' className='dropitem'> Help </Link> */}
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



