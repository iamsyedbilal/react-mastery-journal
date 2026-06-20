import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-primary-950 text-primary-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[16rem_1fr] gap-8 lg:gap-12 px-6 py-10">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-10">
            <SideNavigation />
          </div>
        </aside>

        {/* Main content */}
        <main className="rounded-2xl border border-primary-800 bg-primary-900/40 backdrop-blur-xl p-6 sm:p-10 shadow-lg">
          {children}
        </main>
      </div>
    </div>
  );
}
