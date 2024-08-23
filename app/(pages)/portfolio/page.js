'use client';

import {MdOutlineDoubleArrow} from 'react-icons/md';
import BottomNavbar from '../../../components/navbar/BottomNavbar';
import styles from './page.module.css';
import ProjectCard from '../../../components/projectCard/ProjectCard';
import {projectList} from '../../../components/projectList';

export default function Porfolio() {
  return (
    <>
      <BottomNavbar heading="Portfolio" />
      <section className={styles.portfolio}>
        <div>
          {/* <span>List view</span> */}
          {/* <span>Grid view</span> */}
        </div>
        {/* 
        {projectList?.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))} */}
        <h2>COMING SOON!!!</h2>

        {/* <button className="btn btn_primary">
          SEE MORE
          <MdOutlineDoubleArrow />
        </button> */}
      </section>
    </>
  );
}
