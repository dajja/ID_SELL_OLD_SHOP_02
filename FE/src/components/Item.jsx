import '../sass/item.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Item(props) {
    let {element} = props;
    let dispatch = useDispatch();
    let handleClick = (element) => {
        console.log("hadadad", element);
        dispatch({
            type: "ADD_TO_CART", paycak: element
        })
    }
    return (
        <>
            <div className="item">
                <div className="item-img">
                    <img src={element.image} alt={element.name} />
                </div>
                <div className="item-bonus">{element.bonus}</div>
                <div className="item-description">{element.name}</div>
                <div className="item-money">
                    <div className="item-price">${element.price}</div>
                    <div className="item-sale"></div>
                    <Link to={`/product/${element.id}`} style={{color: '#0a95ff', textDecoration: 'none'}}>Detail</Link>
                    <button onClick={() => handleClick(element)}>Add to cart</button>
                </div>
            </div>
        </>
    )
}
export default Item;