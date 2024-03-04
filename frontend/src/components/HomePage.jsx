import React from "react";
import "./components_css/HomePage.css";

const HomePage = () => {
    return (
        <div className="Homepage">
            <div className="homepae-banner">
                <img src="/HomePage_banner.jpg" alt="" />
                <section className="hp_text1">
                    Oracle ERP Implementaion Automation
                </section>
            </div>
            <div className="hp_s1">
                <section className="hp_s1_title">Our Focus</section>
                <section className="hp_s1_p1">
                    To harness Oracle Cloud Applications and Technologies to
                    implement and enable automation within client organizations.
                    Use Analytics, IoT and AI/ML, to drive business performance.
                </section>
            </div>
            <div className="hp_s2">
                <img src="/OIAE_logos3.jpeg" alt="Hello there!" />
                <div className="hp_s2_sub1">
                    <section className="hp_s2_title">Focused on Cloud</section>
                    <section className="hp_s2_p1">
                        OIAE was founded with industry leaders to focus entirely
                        on Oracle Cloud. We bring strong industry experience to
                        implement mission-critical business systems while
                        delivering the highest quality of consulting services
                        with a focus on automation. We provide services to
                        Fortune 1000 and medium-sized enterprises across North
                        America from implementation to managed services.
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
