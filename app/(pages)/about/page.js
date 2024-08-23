'use client';
import styles from './page.module.css';
import About from '../../../components/about/About';
import BottomNavbar from '../../../components/navbar/BottomNavbar';

const Page = () => {
  return (
    <>
      <BottomNavbar heading="Meet Francis U. Okpoluaefe" />
      <section className={styles.about}>
        <About />
      </section>
    </>
  );
};
export default Page;
