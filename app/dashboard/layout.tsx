import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/shadcn';
import { AppSidebar, ModeToggle } from '@/components/ui';
import { cookies } from 'next/headers';

const SIDEBAR_COOKIE_NAME = 'sidebar_state';

const DashboardLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get(SIDEBAR_COOKIE_NAME)?.value === 'true';

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex items-center justify-between">
          <SidebarTrigger className=" hidden md:block cursor-pointer" />
          <ModeToggle />
        </header>
        <main className="w-full py-10 grid grid-cols-1 md:grid-cols-2 gap-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
