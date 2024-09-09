import "./product.css"
function product({title,price,features}){ 
    return (
        <div className="Product">
        <h2>{title}</h2>
        <h2>Price:{price}</h2>
        
        <button className="buy">Buy</button>
        </div>
    )
}
export default product;