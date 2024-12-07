import type { Metadata } from 'next';
import LeftBar from './components/LeftBar';
import './globals.css';
import BottomMobile from './components/BottomMobile';

export const metadata: Metadata = {
  title: 'Instagram Clone',
  description: 'Instagram clone built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <main>
            {children}
          </main>
      </body>
    </html>
  );
}