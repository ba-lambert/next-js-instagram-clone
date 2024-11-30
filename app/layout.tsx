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
      <body>
        <section className="flex flex-row w-screen h-screen max-w-[1840px] mx-auto">
          <LeftBar />
          <main className="flex relative flex-col w-full sm:w-[79%]">
            {children}
            <BottomMobile />
          </main>
        </section>
      </body>
    </html>
  );
}