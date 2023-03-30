import '../sass/masonry.scss';
function MasonryItem(props) {
    return (
        <>
            <div className='homepage-news-item'>
                <div className='hp-newsItem-img'>
                    {props.image}
                </div>
                <div className='hp-newsItem-inform'>
                    <p>{props.name}</p>
                    <h4>{props.message}</h4>
                </div>
            </div>
        </>
    )
}

export default MasonryItem;