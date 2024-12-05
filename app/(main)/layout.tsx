export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen">
            {/* Add your marketing navbar here */}
            <nav className="border-b bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="text-xl font-bold">Your Logo</div>
                        <div className="space-x-4">
                            <a href="/dashboard" className="text-gray-600 hover:text-gray-900">
                                Dashboard
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
        </div>
    );
}