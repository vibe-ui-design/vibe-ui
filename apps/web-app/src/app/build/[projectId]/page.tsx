// import { ChartAreaInteractive } from '@/components/chart-area-interactive'
// import { DataTable } from '@/components/data-table'
// import { SectionCards } from '@/components/section-cards'
// import { SiteHeader } from '@/components/site-header'
import { SidebarInset, SidebarProvider } from '@acme/ui/sidebar'
import { AppSidebar } from './_components/app-sidebar'
import { FileSidebar } from './_components/file-sidebar'
import { SiteHeader } from './_components/header'

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {/* <SectionCards /> */}
              <div className="px-4 lg:px-6">
                {/* <ChartAreaInteractive /> */}
              </div>
              {/* <DataTable data={data} /> */}
            </div>
          </div>
        </div>
      </SidebarInset>
      <FileSidebar variant="inset" />
    </SidebarProvider>
  )
}
