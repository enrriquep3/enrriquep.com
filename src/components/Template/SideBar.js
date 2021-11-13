import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Enrrique Pimentel</h2>
        <p><a href="mailto:enrriquep3@gmail.com">enrriquep3@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Enrrique. I like creating new things.
        I am a <a href="https://www.champlain.edu/">Champlain College</a> Student, and
        I work as Web Developer at <a href="https://3steps4ward.com">3STEPS4WARD</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Enrrique Pimentel <Link to="/">enrriquep.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
