"use client";
import { Suspense } from 'react';
import LeftBar from '../components/LeftBar';
import BottomMobile from '../components/BottomMobile';
import { usePathname } from 'next/navigation';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isMessagesPage = pathname === '/messages';
    return (
        <div className="">
            <section className="flex flex-row w-screen h-screen max-w-[1840px] mx-auto">
                <LeftBar />
                <main className={`flex relative flex-col h-full w-full sm:w-[${isMessagesPage ? '79%' : '79%'}`}>
                    <Suspense fallback={<div>Loading...</div>}>
                        {children}
                    </Suspense>
                </main>
                <BottomMobile />
            </section>
        </div>
    );
}