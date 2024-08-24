'use client';

import Header from '../../components/header/Header';
import Contact from '../../components/contact/Contact';
import Technologies from '../../components/technologies/Technologies';
import styles from './page.module.css';
import {MdOutlineDoubleArrow} from 'react-icons/md';
import ProjectCard from '../../components/projectCard/ProjectCard';
import {projectList} from '../../components/projectList';
import {usePathname} from 'next/navigation';

export default function Home() {
  const pathname = usePathname();
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <Header />
      </section>

      <section className={styles.technologies}>
        <h3 className="tech_header">FAVOURITE TOOLS</h3>
        <Technologies />

        <h4>Among many others</h4>
      </section>

      <section
        className={`${styles.projects} ${
          pathname === '/portfolio' ? styles.projects_grid : ''
        }`.trim()}>
        <h3 className="project_header">PROJECTS COMPLETED</h3>
        {projectList?.slice(0, 7).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
        <a className="btn btn_primary" href="/portfolio">
          VIEW MORE PROJECTS
          <MdOutlineDoubleArrow />
        </a>
      </section>

      <section className={styles.contact}>
        <h3 className="contact_header">GET IN TOUCH</h3>
        <Contact />
      </section>
    </main>
  );
}
