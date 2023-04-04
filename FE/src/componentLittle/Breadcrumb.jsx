import { Link, useLocation } from 'react-router-dom';
import '../sass/breadcrumb.scss';
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
                    <Link to={link}>{crumb}</Link>
                </div>
            )
        })
        console.log(crumbs);
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