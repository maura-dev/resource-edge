import React from 'react';
import FooterLogo from "../assets/footer.svg";
import Facebook from "../assets/brandico_facebook-rect.svg";
import Twitter from "../assets/ci_twitter.svg";
import LinkedIn from "../assets/bi_linkedin.svg";
import Ig from "../assets/bx_bxl-instagram-alt.svg";

export default function Footer() {
    return (
        <footer>
            <div>
                <div>
                    <img src={FooterLogo} alt="footer-logo"/>
                </div>
                <p className='res'>Throw paperwork into the trash.</p>
            </div>

            <div>
                <div className='footer-links'>
                    <img src={Facebook} alt="facebook"/>
                    <img src={Twitter} alt="twitter"/>
                    <img src={LinkedIn} alt="linkedin"/>
                    <img src={Ig} alt="instagram"/>
                </div>
                <p>Copyright © Genesys DevStudio . All rights reserved</p>
            </div>
        </footer>
    )
}
