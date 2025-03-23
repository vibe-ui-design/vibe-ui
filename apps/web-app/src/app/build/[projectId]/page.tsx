// import { ChartAreaInteractive } from '@/components/chart-area-interactive'
// import { DataTable } from '@/components/data-table'
// import { SectionCards } from '@/components/section-cards'
// import { SiteHeader } from '@/components/site-header'
import { SidebarInset, SidebarProvider } from '@acme/ui/sidebar'
import { cookies } from 'next/headers'
import { ComponentSelection } from '~/app/_components/sections/component-selection'
import { AppSidebar } from './_components/app-sidebar'
import { FileSidebar } from './_components/file-sidebar'
import { SiteHeader } from './_components/header'
import { ComponentStoreProvider } from './store'

export default async function Page() {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true'

  return (
    <ComponentStoreProvider>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col container mx-auto p-4 md:p-6">
            <ComponentSelection />
          </div>
        </SidebarInset>
        <FileSidebar variant="inset" />
      </SidebarProvider>
    </ComponentStoreProvider>
  )
}
