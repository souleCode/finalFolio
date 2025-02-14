import Link from "next/link";
import {FaGithub,FaKaggle,FaFacebook,FaMedium,FaLinkedin} from 'react-icons/fa';
const socials=[
    {
        icon:<FaGithub/>,
        path:'https://github.com/souleCode'
    },
    {
        icon:<FaFacebook/>,
        path:'#'
    },
    {
        icon:<FaKaggle/>,
        path:'https://www.kaggle.com/souleymanetraor'
    },
    {
        icon:<FaMedium/>,
        path:'#'
    },
    {
        icon:<FaLinkedin/>,
        path:'https://www.linkedin.com/in/souleymane-traore-0778aa28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
]
const Socials = ({containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=>{
            return(
                <Link href={item.path} key={index} className={iconStyles}> {item.icon} </Link>
            )
        })}
    </div>
  )
}

export default Socials