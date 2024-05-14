import './Footer.css';
import logo from '../../images/logo-white.svg';
import fb from '../../images/icon-facebook.svg'
import yt from '../../images/icon-youtube.svg'
import twitter from '../../images/icon-twitter.svg'
import pinterest from '../../images/icon-pinterest.svg'
import insta from '../../images/icon-instagram.svg'

function Footer() {
  const links = [
    { 
      id: 1,
      link: 'About Us',
    },
    { 
      id: 2,
      link: 'Contact',
    },
    { 
      id: 3,
      link: 'Blog',
    },
    { 
      id: 4,
      link: 'Careers',
    },
    { 
      id: 5,
      link: 'Support',
    },
    { 
      id: 6,
      link: 'Privacy Policy',
    },
    
  ];

  return (
    <footer>
      <section className='socials'>

        <div>
        <img className='socials-logo' src={logo} />
        </div>
        <div style={{display: 'flex', alignItems: 'space-between', width: '100%', justifyContent: 'space-between'}}>
          <img className='socials-icon' src={fb} />
          <img className='socials-icon' src={yt} />
          <img className='socials-icon' src={twitter} />
          <img className='socials-icon' src={pinterest} />
          <img className='socials-icon' src={insta} />
        </div>
        
      </section>
      <section className='links-container'>
        
        {links.map(linkinfo => (
                    <h4 className='links' lid={linkinfo.id}>{linkinfo.link}</h4>
                  ))}
      </section>
      <section className='clickables'>
        <button className='ri-btn'><h4>Request Invite</h4></button>
        <h4>© Easybank. All Rights Reserved</h4>
      </section>
        
        
    </footer>
  );
}

export default Footer;
