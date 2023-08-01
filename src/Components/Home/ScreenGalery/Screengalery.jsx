import './Screengalery.css'



function Screengalery() {
    return (
        <div className='screengallery'>
            <div className='container-sg'>
                <div className='row-sg'>
                    <div className='screen-text'>
                        <h2>Screens Gallery</h2>
                        <h1>Screens Gallery</h1>
                    </div>
                </div>
                <div className='row-sg2'>
                    <div className='sg-up'>
                        <div className="single-gallery grid-item">
                        <div className='overlay'></div>
                            <img className="s-g-img" src="https://preview.colorlib.com/theme/comodo/img/gallery_img1.png.webp" alt=""></img>
                            <div className="s-c-content">
                                <a className="pop-up-content" href="https://preview.colorlib.com/theme/comodo/img/gallery_img1.png.webp">
                                    <i class="fa-solid fa-eye"></i>
                                </a>
                            </div>
                        </div>
                        <div className="single-gallery grid-item">
                        <div className='overlay'></div>
                            <img className="s-g-img" src="https://preview.colorlib.com/theme/comodo/img/gallery_img2.png.webp" alt=""></img>
                            <div className="s-c-content">
                                <a className="pop-up-content" href="https://preview.colorlib.com/theme/comodo/img/gallery_img2.png.webp">
                                    <i class="fa-solid fa-eye"></i>
                                </a>
                            </div>
                        </div>
                        <div className="single-gallery grid-item">
                            <div className='overlay'></div>
                            <img className="s-g-img" src="https://preview.colorlib.com/theme/comodo/img/gallery_img3.png.webp" alt=""></img>
                            <div className="s-c-content">
                                <a className="pop-up-content" href="https://preview.colorlib.com/theme/comodo/img/gallery_img3.png.webp">
                                    <i class="fa-solid fa-eye"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='row-sg3'>
                        <div className="single-gallery grid-item grid-item-">
                        <div className='overlay'></div>
                            <img className="s-g-img " src="https://preview.colorlib.com/theme/comodo/img/gallery_img4.png.webp" alt=""></img>
                            <div className="s-c-content">
                                <a className="pop-up-content" href="https://preview.colorlib.com/theme/comodo/img/gallery_img4.png.webp">
                                    <i class="fa-solid fa-eye"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Screengalery;