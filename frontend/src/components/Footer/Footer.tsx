import React from "react";
import s from "./Footer.module.css";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "../../images";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <h3 className={s.h3}>Conact me</h3>
      <ul className={s.ul}>
        <li className={s.li}>
          <a
            className={s.a}
            target="blank"
            href="https://github.com/MishynMykhailo/"
          >
            <GitHubIcon className={s.SVG} />
            <p className={s.p}>GitHub</p>
          </a>
        </li>
        <li className={s.li}>
          <a
            className={s.a}
            target="blank"
            href="https://www.linkedin.com/in/mykhailomishyn/"
          >
            <LinkedInIcon className={s.SVG} />
            <p className={s.p}>LinkedIn</p>
          </a>
        </li>
        <li className={s.li}>
          <a
            className={s.a}
            target="blank"
            href="https://www.instagram.com/mikhailmishi/"
          >
            <InstagramIcon className={s.SVG} />
            <p className={s.p}>Instagram</p>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
