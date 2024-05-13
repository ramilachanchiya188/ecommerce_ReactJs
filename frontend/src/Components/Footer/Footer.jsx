import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer =()=>{
    return(
        <div className='footer'>
            <div className="footer-logo">
             
               
            </div>
            <ul className="footer-links">
                <li>Shop</li>
                <li>Bracelate</li>
                <li>Ring</li>
                <li>Nacklase</li>
                
            </ul>
            <div className="footer-social-icon">
                
                <div className="footer-copyright">
                    <hr/>
                    <p>Copyright @ 2024 -All Right Reserved</p>
                </div>
            </div>

        </div>
    )
}
export default Footer