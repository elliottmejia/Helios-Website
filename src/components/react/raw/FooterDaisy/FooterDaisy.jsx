import {Link} from "react-router-dom";

export default function FooterDaisy () {
    
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <nav>
                    <header className="footer-title">Explore</header>
                    <a data-testid="footer-home" className="link link-hover">Home</a>
                    <a data-testid="footer-about" className="link link-hover">About</a>
                    <a data-testid="footer-services" className="link link-hover">Services</a>
                    <a data-testid="footer-contact" className="link link-hover">Contact</a>
                </nav>
                {/*<nav>*/}
                {/*    <header className="footer-title">Contact</header>*/}

                {/*</nav>*/}
                <nav>
                    <header data-testid="footer-legal" className="footer-title">Legal</header>
                    <a data-testid="footer-terms" className="link link-hover">Terms of use</a>
                    <a data-testid="footer-privacy" className="link link-hover">Privacy policy</a>
                    <Link data-testid="footer-cookie" to="/cookies" className="link link-hover">Cookie policy</Link>
                </nav>
                <form>
                    <header className="footer-title">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </>
    )
}
