import "./LBP.css";


function LBP() {
    return (
        <div className='lbp-container'>
            <div className='lbp-header'>
                <div className='lbp-title'>
                    <h2>Latest Blog Posts</h2>
                    <h1>Latest Blog Posts</h1>
                </div>
            </div>
            <div className="lbp-body">
                <div className="lbp-content">
                    <div className="lbp-item">
                        <div className="blog_items">
                            <div className="blog_img_box">
                                <img className='img-fluid' src="https://preview.colorlib.com/theme/comodo/img/blog_img1.png.webp" alt=""></img>
                            </div>
                            <div className="blog_content">
                                <a className="title" href="#">Portable Fashion for women</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                <div className="lbp-date">
                                    <a href="#"><i class="fa fa-calendar" aria-hidden="true"></i>13th Dec </a>
                                    <a href="#"><i class="fa fa-heart" aria-hidden="true"></i> 15</a>
                                    <a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> 05</a>
                                </div>
                                
                            </div>
                        </div>
                        <div className="blog_items">
                            <div className="blog_img_box">
                                <img className='img-fluid' src="https://preview.colorlib.com/theme/comodo/img/blog_img2.png.webp" alt=""></img>
                            </div>
                            <div className="blog_content">
                                <a className="title" href="#">Portable Fashion for women</a>
                                <p className="blog-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                <div className="lbp-date">
                                    <a href="#"><i class="fa fa-calendar" aria-hidden="true"></i>13th Dec </a>
                                    <a href="#"><i class="fa fa-heart" aria-hidden="true"></i> 15</a>
                                    <a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> 05</a>
                                </div>
                                
                            </div>
                        </div>
                        <div className="blog_items">
                            <div className="blog_img_box">
                                <img className='img-fluid' src="https://preview.colorlib.com/theme/comodo/img/blog_img3.png.webp" alt=""></img>
                            </div>
                            <div className="blog_content">
                                <a className="title" href="#">Portable Fashion for women</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                <div className="lbp-date">
                                    <a href="#"><i class="fa fa-calendar" aria-hidden="true"></i>13th Dec </a>
                                    <a href="#"><i class="fa fa-heart" aria-hidden="true"></i> 15</a>
                                    <a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> 05</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <script>
                {/* const blog_items = document.querySelector('.blog_items');
                const img-fluid = document.querySelector('.img-fluid');
                const title = document.querySelector('.title');
                const blog-text = document.querySelector('.blog-text'); */}


            </script>
        </div>


    )
}



export default LBP;