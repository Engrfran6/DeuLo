'use client';
import styles from './page.module.css';
import Contact from '../../../components/contact/Contact';
import BottomNavbar from '../../../components/navbar/BottomNavbar';

const page = () => {
  return (
    <section className={styles.contact}>
      <BottomNavbar heading="Contact" />
      <Contact />
    </section>
  );
};
export default page;
