import { Link } from 'react-router-dom';

const Links = {

    'login': <Link to="/login"  class="nav-item nav-link px-3">Login </Link>,
    'about': <Link to="/About"  class="nav-item nav-link px-3"><h5>About</h5></Link>,
    'news': <Link to="/News" class="nav-item nav-link px-3"><h5>Announcements</h5> </Link>,
    'signout': <Link to="/login" class="nav-item nav-link px-3">Sign Out</Link>,
    'friendrequests':<Link to="/fr" class="nav-item nav-link px-3"><h5>Friend Requests</h5></Link>

}

export default Links