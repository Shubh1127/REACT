// import Background from "three/src/renderers/common/Background.js";
import "./product.css"
function product({title,price,features}){ 
    let styles={backgroundColor:"purple"};
    
        return (
            <div className="Product" style={styles}>
        <h2>{title}</h2>
        <h2>Price:{price}</h2>
        {price>30000 && <p>Discount of 5%</p>}
        <button className="buy">Buy</button>
        </div>
    )

}
export default product;