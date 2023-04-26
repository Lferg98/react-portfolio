import React from 'react';
import InstagramIcon  from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <InstagramIcon />
                <FacebookIcon />
                <LinkedInIcon />
                <EmailIcon />
                
            </div>
            <p>&copy; 2023 Lferg98.com</p>
        </div>
    );
}

export default Footer;
