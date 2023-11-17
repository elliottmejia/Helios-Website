import './SignupForm.css';

export default function SignupForm() {

    return (
        <>
            <form className="form_signup">
                <p className="title_signup">Get a Quote</p>
                <p className="message">Get a quote from a solar expert</p>
                    <label>
                        <input className="input" type="text" placeholder="" required={true}/>
                            <span>Name</span>
                    </label>

                <label>
                    <input className="input" type="email" placeholder="" required={true}/>
                        <span>Email</span>
                </label>

                <label>
                    <input className="input" type="tel" placeholder="" required={true}/>
                        <span>Phone</span>
                </label>
                <label>
                    <input className="input" type="number" placeholder="" required={true}/>
                    <span>Average Monthly Electric Bill</span>
                </label>
                <button className="submit">Submit</button>
                <p className="signin">Already have an acount ? <a href="#">Signin</a></p>
            </form>
        </>
);
}