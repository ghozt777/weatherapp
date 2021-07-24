import { FaGithub , FaGhost } from 'react-icons/fa'
import { SiReplDotIt } from 'react-icons/si'
export const NavBar = ({bgColor}) => {

    return(
        <>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'2rem',paddingLeft:'3rem'}}>
                <a 
                style={{textDecoration:'none',color:bgColor}}
                href="https://github.com/ghozt777" target='_blank'><FaGithub size={25}/></a>
                <small>GitHub</small>
            </div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'2rem',paddingLeft:'3rem'}}>
                <a 
                style={{textDecoration:'none',color:bgColor}}
                href="https://replit.com/@ghozt777" target='_blank'><SiReplDotIt size={25}/></a>
                <small>Repl</small>
            </div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'2rem',paddingLeft:'3rem'}}>
                <a 
                style={{textDecoration:'none',color:bgColor}}
                href="https://ghozt.netlify.app/" target='_blank'><FaGhost size={25}/></a>
                <small>Ghozt</small>
            </div>
        </>
    )
}