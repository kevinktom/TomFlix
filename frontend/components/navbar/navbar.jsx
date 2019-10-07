import React from 'react';
// import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showMenu: false};
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    
    // componentDidMount() {
    //     // debugger
    //     // const allProps = this.props;
    //     // this.props.renderNav();
    // }

    showMenu(e){
        // debugger
        e.persist();
        e.stopPropagation();
        if (!e.target.className === "dropdown" && !e.target.className === "userIcon" && !e.target.className === "dropdown-content"){
            return this.closeMenu(e);
        }
        this.setState({showMenu: true});
    }

    closeMenu(e){
        if (!e.target.className === "dropdown"){

        this.setState({showMenu: false})
        }
    }

    componentDidMount(){
        let scrollpos = window.scrollY;
        let root = document.getElementById('root').getElementsByTagName("div")[0].getElementsByClassName("indexGrid")[0];
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
    
    render() {
        
        return (
            <>
            <nav className='entireNav'>
                <div className='navLinks sticky'>
                    <div className='firstBox'>
                        <Link to='/browse'><img src={window.logo} className="navlogo" /> </Link>
                        <div className='linksFirst'>
                            <Link to='/browse' className='singleLinks'> Home </Link>
                            <Link to='/browse/test1' className='singleLinks'> TV Shows </Link>
                            <Link to='/browse/test2' className='singleLinks'> Movies </Link>
                            <Link to='/browse/test3' className='singleLinks'> Recently Added </Link>
                            <Link to='/browse/my-list' className='singleLinks'> My List </Link>
                        </div>
                    </div>
                    <div>
                        <div className='linksSecond'>
                            <a href="" className="iconSizes"><img src={window.search} /></a>
                            <a href="https://github.com/kevinktom" className="iconSizes"><img src={window.github} /> </a>
                            {/* <a href="" className="iconSizes"><img src={window.notification} /></a> */}
                            <div className="dropdown">
                                    <div onMouseEnter={this.showMenu} onMouseLeave={this.closeMenu} className='userandcaret'>
                                        <div className="userIcon" ><img src={window.usericon} /></div>
                                        <div className="caretdown"><img src={window.downcaret} /></div>
                                            
                                    </div>
                                {(this.state.showMenu === true) ? 
                                        <div className="dropdown-content">
                                <div onMouseLeave={this.closeMenu}>
                                    <div  className="divdropcaret"><img src={window.upcaret} /></div>
                                    <Link to='/Account' className='dropitem'> Account </Link>
                                    <Link to='/Help' className='dropitem'> Help </Link>
                                    <button onClick={this.props.logoutCurrentUser} className="signoutbutton">Sign out of Tomflix</button>
                                </div> 
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


