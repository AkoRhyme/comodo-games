import './Son.css';

function Son() {
    return (
        <div className='Son-container'>
            <div className='Scontainer'>
                <div className="Scontainer_left">
                    <div class="newsletter_inner">
                        <h1>Subscribe Our Newsletter</h1>
                        <p>We won’t send any kind of spam</p>
                    </div>
                </div>
                <div className="Scontainer_right">
                    <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscribe_form relative" novalidate="true">
                        <div className="Sinput-group">
                            <input name="EMAIL" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'" required="" type="email"></input>
                            <button className="Scontainer_btn">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default Son;