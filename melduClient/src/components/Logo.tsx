import MyIMG from '../assets/logo.png';
interface LogoProps {  
    width: string;
    height: string;
}
export default function Logo({width, height}: LogoProps) {
    let imgStyle = {width: width,
                    height: height
                }
    return (
        <div>
            <img style={imgStyle} src={MyIMG}/>
        </div>
    )
}