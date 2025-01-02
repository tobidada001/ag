
import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';
import instagram from '../assets/icons/instagram.svg';
import linkedin from '../assets/icons/linkedin.svg';


const socialLinks = [
    { icon: facebook, href: 'https://facebook.com' },
    { icon: twitter, href: 'https://twitter.com' },
    { icon: instagram, href: 'https://instagram.com' },
    { icon: linkedin, href: 'https://linkedin.com' },
  ];


export default function FooterSocials() {
  return (
    <>
       <div className="flex space-x-4 mt-4 lg:mt-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75"
              >
                <img src={link.icon} alt="social-icon" className="h-6 w-6" />
              </a>
            ))}
          </div>
    </>
  );
};


