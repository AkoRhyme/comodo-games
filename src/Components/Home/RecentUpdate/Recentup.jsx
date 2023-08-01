import "./Recentup.css";




function Recentup() {
    return (
        <div className="container">
            <div className="container_first">
                <div className="recent_update_inner">
                    <ul className="recent_top">
                        <li className="recentup1-item">
                            <a href="#">Live Streaming</a>
                        </li>
                        <li className="recentup-item">
                            <a href="#">Upcoming Challanges</a>
                        </li>
                        <li className="recentup-item">
                            <a href="#">Recent Famous Games</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-left">
                            <img src="https://preview.colorlib.com/theme/comodo/img/recent_up.png.webp"></img>
                        </div>
                        <div className="tab-right">
                            <h6>ABOUT US</h6>
                            <h1>We Believe that <br/>
                                Interior beauty Lasts Long</h1>
                            <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that as women.</p>
                            <a className="primary_btn" href="#">Learn More</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>



    )
}


export default Recentup;