import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../styles/Footer.css';


function Footer() {
  return (


    <div className="footer">
        <div className="socialMedia" >
            <InstagramIcon/>
            <WhatsAppIcon/>
            <FacebookIcon/>
            <LinkedInIcon/>
        </div>
        <p>&copy; 2024 haythemHmpizza.com </p>
    </div>
  )
}
export default Footer