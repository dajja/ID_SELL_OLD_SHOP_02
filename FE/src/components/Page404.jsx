import '../sass/pagenotfound.scss';
import { Link } from 'react-router-dom';
function Pagenotfound() {
    return (
        <section className="page_404">
            <div className="headernf">404 Not Found</div>
            <div className="main">
                <div className="main-info">
                    <h2>I have bad news for you</h2>
                    <p>The page you are looking for might be removed or is temporarily unavailable</p>
                    <Link to="/" className='button'>Back to homepage</Link>
                </div>
            </div>
        </section>
    );
}

export default Pagenotfound;