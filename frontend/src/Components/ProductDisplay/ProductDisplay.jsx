import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopsContext } from '../../Context/ShopsContext';

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopsContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            

        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt=''/>
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_dull_icon} alt=''/>
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero doloremque fuga tenetur repellat, molestiae, illum totam distinctio molestias fugit repudiandae architecto adipisci alias eaque iusto voluptates optio facere voluptas!
        </div>
        <div className="productdisplay-right-size">
            
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
        

      </div>
    </div>
  )
}

export default ProductDisplay
