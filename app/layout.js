import '../styles/globals.css';
import {fonts} from './fonts';

export const metadata = {
  title: 'Francis U. Efe- Frontend Developer',
  description: 'Web site created with Next.js.',
};

export default function RootLayout({children}) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>{children}</body>
    </html>
  );
}
