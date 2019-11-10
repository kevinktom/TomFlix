import React from 'react';
// import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { debounce } from "debounce";


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showMenu: false, search: ""};
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
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

    componentDidMount(){
        let scrollpos = window.scrollY;
        let root = document.getElementById('root').getElementsByTagName("div")[0].getElementsByClassName("indexGrid")[0];
        // debugger
        let navbar = root.getElementsByClassName("entireNav")[0].getElementsByClassName("navLinks")[0];

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

    updateSearch(e){
        this.setState({search: e.target.value})
        // if (this.state.search.length > 0) {
        //     // debounce(this.props.history.push(`/search/${this.state.search}`), 1000, false);
        //     this.props.history.push(`/search/${this.state.search}`)
        // }
    }

    componentDidUpdate(prevProps){
        // debugger
        if (this.state.search.length > 0 && prevProps.match.params.searchinput !==  this.state.search) {
            // debounce(this.props.history.push(`/search/${this.state.search}`), 10000, false);
            this.props.history.push(`/search/${this.state.search}`);
        }
        // else if (this.state.search.length === 0 && prevProps.match.params.searchinput !== this.state.search) {
        //     // debounce(this.props.history.push(`/browse`), 10000, false);
        //     this.props.history.push(`/browse`)
        // }        
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
                            <Link to='/genre/19' className='singleLinks'> TV Shows </Link>
                            <Link to='/genre/18' className='singleLinks'> Movies </Link>
                            <Link to='/browse' className='singleLinks'> Recently Added </Link>
                            <Link to='/browse/my-list' className='singleLinks'> My List </Link>
                        </div>
                    </div>
                    <div>
                        <div className='linksSecond'>
                            <a href="" className="iconSizes"><img src={window.search} /></a>
                            <input type="text" value={this.state.search} onChange={this.updateSearch}/>
                            <a href="https://github.com/kevinktom" className="iconSizes"><img src={window.github} /> </a>
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



