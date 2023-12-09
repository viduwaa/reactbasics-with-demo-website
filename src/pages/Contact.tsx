import "../styles/Contact.css";
import ContactBG from "../assets/contactbg.jpg";

function Contact() {
    return (
        <>
            <div className="contact">
                <div
                    className="contact-leftside"
                    style={{ backgroundImage: `url(${ContactBG})` }}
                ></div>
                <div className="contact-rightside">
                    <h1>Contact Us</h1>

                    <form id="contact-form" action="POST">
                        <label htmlFor="name">Full Name</label>
                        <input
                            name="name"
                            placeholder="Enter name..."
                            type="text"
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            placeholder="Enter email..."
                            type="text"
                        />

                        <label htmlFor="message">Message Us</label>
                        <textarea
                            name="message"
                            placeholder="Share your needs..."
                            rows={5}
                        />
                        <button className="form-submit" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
