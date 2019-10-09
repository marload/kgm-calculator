import React from "react";
import "./scss/Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__column">
                <span>COPYRIGHT ⓒ 2019 TARANTINO ALL RIGHTS RESERVED.</span>
            </div>
            <div className="footer__column">
                <a className="footer__github" href="https://github.com/olramde">
                    GitHub
                </a>
                <a
                    className="footer__linkedin"
                    href="https://www.linkedin.com/in/%EC%99%84%EC%88%98-%EA%B9%80-426a28160/"
                >
                    LinkedIn
                </a>
            </div>
        </footer>
    );
}

export default Footer;
