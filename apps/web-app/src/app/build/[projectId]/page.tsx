import { SidebarInset, SidebarProvider } from '@acme/ui/sidebar'
import { cookies } from 'next/headers'
import { ComponentSelection } from '~/app/build/[projectId]/_components/component-selection'
import { AppSidebar } from './_components/app-sidebar'
import { FileSidebar } from './_components/file-sidebar'
import { SiteHeader } from './_components/header'
import { loadRegistry } from './actions'
import { ComponentStoreProvider } from './store'

export default async function Page() {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true'

  const registry = await loadRegistry()

  return (
    <ComponentStoreProvider>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader frameworks={registry.frameworks} />
          <div className="flex flex-1 flex-col container mx-auto p-4 md:p-6">
            <ComponentSelection registry={registry} />
          </div>
        </SidebarInset>
        <FileSidebar variant="inset" />
      </SidebarProvider>
    </ComponentStoreProvider>
  )
}
