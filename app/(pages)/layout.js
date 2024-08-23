import BottomNavbar from '../../components/navbar/BottomNavbar';
import Footer from '../../components/footer/Footer';

export default async function RootLayout({children}) {
  return (
    <main>
      <BottomNavbar />
      {children}
      <Footer />
    </main>
  );
}
