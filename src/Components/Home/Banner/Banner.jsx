import './banner.css';
import { Link } from 'react-router-dom';
function Banner() {
    return (
        <div className='banner '>
            <div className='banner-container'>
                <div className="tablet_banner_container">
                <div className="banner_bg">
                    <div className="banner_left">
                        <img alt="Banner_photo" src="https://preview.colorlib.com/theme/comodo/img/banner/home-left.png.webp"></img>
                    </div>
                    <div className="banner_right">
                        <h2>
                            For All Occasion <br />
                            HairStyle is a Must 
                            Try Fashion
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                        <div className='banner_txt'>
                            <Link className='banner_link' to='https://youtu.be/vParh5wE-tM'><i className="fa-solid fa-circle-play"><span></span></i></Link>
                            <div className='banner_alert' >WATCH THE VIDEO</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Banner;