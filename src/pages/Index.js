/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Index = () => (
  <Main
    description={"Enrrique Pimentel's personal website. Web Developer & Environmental , "
    + 'years of experience with front end techologies and digital media'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Hello World!</Link></h2>
          <p>
            Delivering Quality Web Services & Digital Marketing To Everyone.
          </p>
        </div>
      </header>
      <p> As a Software Developer I enjoy designing highly interactive user interfaces that enthuse customers and creating scalable, reliable solutions - but keeping consistency in design, good planning of UI and thinking how it affects the UX, Search Engine Optimization and maintaining the software after initial release.
      </p>

      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">some statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>

    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>A selection of my favorite projects</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Index;
