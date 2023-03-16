import '../sass/item.scss';

function Item(props) {
    return (
        <>
            <div className="item">
                <div className="item-img">
                    {props.img}
                </div>
                <div className="item-bonus">{props.bonus}</div>
                <div className="item-description">{props.description}</div>
                <div className="item-money">
                    <div className="item-price">${props.price}</div>
                    <div className="item-sale">{props.sale}</div>
                </div>
            </div>
        </>
    )
}
export default Item;