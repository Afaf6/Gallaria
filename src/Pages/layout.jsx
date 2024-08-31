import { Outlet, Link } from "react-router-dom";
import "./layout.css"
function Layout() {
    return(
        <>
    
        <div className="nav">
          <h1>
            <Link to="/gallaria">gallaria.</Link>
          </h1>
          <p>
            <Link to = {`/gallaria/1`}>START SLIDESHOW</Link>
          </p>
        </div>
        <hr></hr>
        <Outlet></Outlet>
    </>
    );
}
export default Layout;