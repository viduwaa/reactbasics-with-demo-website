import "../styles/About.css";
import AboutBG from "../assets/aboutbg.jpg";

function About() {
    return (
        <>
            <div className="about">
                <div className="about-details">
                    <div className="about-content">
                        <div className="about-img">
                            <img src={AboutBG} alt="" />
                        </div>

                        <div className="about-paragraph">
                            <h2>About Us</h2>
                            <h3>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Consectetur, inventore quae
                                quidem dignissimos perferendis magni enim
                                exercitationem facere placeat. Itaque et placeat
                                quam vitae commodi blanditiis eius sed dolorem
                                illo!
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
