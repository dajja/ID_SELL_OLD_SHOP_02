import { Link, useLocation } from 'react-router-dom';
import '../sass/breadcrumb.scss';

function upperFirstWord(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

function Breadcrumb() {
    const location = useLocation();
    let link = '';
    const crumbs = location.pathname.split("/")
        .filter(crumb => crumb !== '')
        .map(crumb => {
            link += `/${crumb}`
            return (
                <div className='crumb' key={crumb}>
                <i className="fa-solid fa-chevron-right" /> 
                    <Link to={link}>{upperFirstWord(crumb)}</Link>
                </div>
            )
        })
    return (
        <>
            <div className="breadcrumbs pad-15-20">
                <Link to="/">Home</Link>
                <div className='breadcrumbs-element'>
                    <div className="breadcrumbs-location">
                        {crumbs}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb;