import '../sass/breadcrumb.scss';
function Breadcrumb() {
    return (
        <>
            <div className="breadcrumbs pad-15-20">
                <p>Home</p>
                <div><i className="fa-solid fa-chevron-right" /></div>
                <div>
                    <p className="breadcrumbs-location">Men</p>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb;