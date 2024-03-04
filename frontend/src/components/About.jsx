import React, { useRef, useState } from "react";
import axios from "axios";

const About = () => {
    // const [fname, setFname] = useState("");
    // const [lname, setLname] = useState("");
    // const [company, setCompany] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");

    const fname = useRef("");
    const lname = useRef("");
    const company = useRef("");
    const email = useRef("");
    const message = useRef("");

    const sendQueryMail = async (e) => {
        e.preventDefault();

        const emailInfo = {
            to: "accounts@oiaes.com",
            subject: company.current.value,
            text: `FirstName: ${fname.current.value}  LastName: ${lname.current.value}
            MailId: ${email.current.value}         
            concern: ${message.current.value}`,
        };

        const mailDBdata = {
            firstname: fname.current.value,
            lastname: lname.current.value,
            company: company.current.value,
            email: email.current.value,
            message: message.current.value,
        };

        console.log(emailInfo);

        try {
            await axios.post(
                "http://backendoiae.eastus.cloudapp.azure.com/send-mail",
                emailInfo
            );

            const response = await axios.post(
                "http://backendoiae.eastus.cloudapp.azure.com/querie/add",
                mailDBdata
            );

            alert(
                `Your query sent sucessfully with Ticket No:${response.data.ticket}, our team will contact you`
            );
            console.log("Mail sent successfully");
        } catch (error) {
            alert(
                "We are unable to send your mail, please try after some time"
            );
            console.error(
                "Error sending email: ",
                error.response ? error.response.data : error.message
            );
        } finally {
            fname.current.value = "";
            lname.current.value = "";
            company.current.value = "";
            email.current.value = "";
            message.current.value = "";
        }
    };

    return (
        <div className="about">
            <div className="about_card">
                <img src="DTR.png" alt="" />
                <h1>Digital Transformation Realized</h1>
                <p className="about_p">
                    With the digital age disrupting entire industries, OIAE
                    Systems was born out of the idea that there is a better way
                    to harness the power of information and analytics. True
                    business transformation is about people first, then process,
                    and finally – technology. OIAE Systems helps businesses
                    transform from the inside out with our client-centered
                    approach. We take a holistic view of your business –
                    understanding your unique challenges to help your business
                    connect better and more efficiently. Change is hard but it’s
                    the only way to grow. We provide a differentiated customer
                    experience by involving clients actively from the start
                    because education leads to adoption which leads to change.
                    Our clients begin to test drive solutions as they are
                    created and immediately begin to practice what we teach.
                </p>
            </div>
            <div className="about_card">
                <h1>Your Success Is Our Passion</h1>
                <p className="about_p">
                    We listen, empathize, share knowledge, and focus on tangible
                    outcomes, striving to earn your trust every day. We work to
                    solve strategic problems at the outset of our relationship
                    and the little problems that arise throughout it. We know
                    we’ve been successful when clients begin to trust their data
                    and rely on the insights derived from their financial teams
                    to gain overall competitive advantage and make better
                    decisions.
                </p>
            </div>
            <div className="about_card">
                <img src="WBC.png" alt="" />
                <h1>We Bring Change</h1>
                <p className="about_p">
                    We do more than just help you implement a solution. We drive
                    process, and organizational transformation. We take best
                    practices and leading-edge technology and apply that to your
                    business issues – turning complexity into simplicity. In the
                    end, we help connect your business, realize digital
                    transformation, and bring about change. Our clients have
                    done it, and you can too.
                </p>
            </div>
            <section className="bottom">
                <div className="address">
                    <h2>Our Location</h2>
                    <h3>OIAE Systems LLC. </h3>
                    <h3>6557 Hazeltine National Dr, Unit C 11</h3>
                    <h3>Orlando</h3>
                    <h3>Florida - 32822</h3>
                    <h3>Phone: +1 689-710-4572</h3>
                </div>

                {/* <div className="policy">
                    <img src="OIAE -logos_black_1.png" alt="Logo" />
                    <p>All Rights reserved</p>
                    <a href="/Policy.html" target="_blank">
                        Privacy policy
                    </a>
                </div> */}

                <div className="contact">
                    <h1>Contact US</h1>
                    <form onSubmit={(e) => sendQueryMail(e)}>
                        <input
                            type="text"
                            className="ip1"
                            placeholder="First Name"
                            ref={fname}
                            required
                        />
                        <input
                            type="text"
                            className="ip1"
                            placeholder="Last Name"
                            ref={lname}
                            required
                        />
                        <input
                            type="text"
                            className="ip2"
                            placeholder="Company"
                            ref={company}
                            required
                        />
                        <input
                            type="mail"
                            className="ip2"
                            placeholder="Mail"
                            ref={email}
                            required
                        />
                        <textarea
                            className="ip3"
                            placeholder="Enter your Message"
                            ref={message}
                            required
                        />
                        <input
                            className="sub"
                            type="submit"
                            value="GET IN TOUCH"
                        />
                    </form>
                </div>
            </section>
            {/* <section className="bottommob">
                <div className="address">
                    <h2>Our Location</h2>
                    <h3>OIAE Systems LLC. </h3>
                    <h3>6557 Hazeltine National Dr, Unit C 11</h3>
                    <h3>Orlando</h3>
                    <h3>Florida - 32822</h3>
                </div>
                <div className="contact">
                    <h1>Contact US</h1>
                    <form action="">
                        <input
                            type="text"
                            className="ip1"
                            placeholder="First Name"
                            onChange={(e) => setFname(e.target.value)}
                        />
                        <input
                            type="text"
                            className="ip1"
                            placeholder="Last Name"
                            onChange={(e) => setLname(e.target.value)}
                        />
                        <input
                            type="text"
                            className="ip2"
                            placeholder="Company"
                            onChange={(e) => setCompany(e.target.value)}
                        />
                        <input
                            type="mail"
                            className="ip2"
                            placeholder="Mail"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea
                            className="ip3"
                            placeholder="Enter your Message"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <input
                            className="sub"
                            type="button"
                            value="GET IN TOUCH"
                            onClick={(e) => sendQueryMail(e)}
                        />
                    </form>
                </div>
            </section> */}
        </div>
    );
};

export default About;
