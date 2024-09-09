import Product from "./product";
import "./productTab.css"

function ProductTab(){
    let options=[<li>fast</li>,<li>realiable</li>,<li>toyota</li>]
    return (
        <div className="tab">
        <Product title="phone" price={30000} />
        <Product title="laptop" price={40000} />
        <Product title="pen" price={10} />
        
        </div>
    )
}
export default ProductTab;