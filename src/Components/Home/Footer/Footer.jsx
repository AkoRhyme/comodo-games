import './Footer.css';


function Footer() {
    return (
        <div className='footer'>
            <div className='Fcontainer'>
            <div className='footer_list'>
                <div className="footer_container">
                    <div className="footer_title">
                        <h4>About Farfly</h4>
                    </div>
                    <ul>
                        <li>For Business</li>
                        <li>Premium Plans</li>
                        <li>Reviews</li>
                        <li>How it Works</li>
                        <li>Farfly Blog</li>
                    </ul>
                </div>
                <div className="footer_container">
                    <div className="footer_title">
                        <h4>Company</h4>
                    </div>
                    <ul>
                        <li>Product Tour</li>
                        <li>Pricing</li>
                        <li>Founding Members</li>
                        <li>Case Studies</li>
                        <li>Product Updates</li>
                    </ul>
                </div>
                <div className="footer_container">
                    <div className="footer_title">
                        <h4>Support</h4>
                    </div>
                    <ul>
                        <li>Documentation</li>
                        <li>Data Security</li>
                        <li>Site Performance</li>
                        <li>Action Plan</li>
                        <li>Respurces</li>
                    </ul>
                </div>
                <div className="footer_container">
                    <div className="footer_title">
                        <h4>Legal</h4>
                    </div>
                    <ul >
                        <li>Terms and conditions</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Information</li>
                        <li>Opt - Out</li>
                    </ul>
                </div>
            </div>
            <div className='footer_widget'>
               <div className='footer-container'>
               <div className="widget_left"><p>
                    Copyright ©<script>document.write(new Date().getFullYear());</script>2023 All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://github.com/AkoRhyme" target="_blank">Aqil</a>
                </p>

                </div>
                <div className="widget_right">
                    <div class="social_widget">
                        <a href="#" ><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-dribbble"></i></a>
                        <a href="#"><i class="fa fa-behance"></i></a>
                    </div>
                </div>
               </div>
            </div>
            </div>
        </div>
    )
}



export default Footer;