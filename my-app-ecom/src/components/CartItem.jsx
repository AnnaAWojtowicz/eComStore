function CartItem(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.price}</p>
            <p>{props.discountedPrice}</p>
        </div>
    );
}

export default CartItem;