'use client'
import { Button } from '@acme/ui/components/button'
import { createThemeSelection } from '~/app/actions/theme'
import { useSelectionStore } from '~/app/build/[projectId]/store'

function V0Icon() {
  return (
    <svg
      viewBox="0 0 40 20"
      fill="none"
      aria-label="Open in v0"
      xmlns="http://www.w3.org/2000/svg"
      className="size-6 text-current"
    >
      <title>Open in v0</title>
      <path
        d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"
        fill="currentColor"
      />
      <path
        d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function OpenInV0Button() {
  const selectedRegistryItems = useSelectionStore(
    (state) => state.selectedRegistryItems,
  )
  const theme = useSelectionStore((state) => state.theme)

  const handleOpenInV0 = async () => {
    try {
      const themeSelectionId = await createThemeSelection({
        registryItems: selectedRegistryItems,
        themeConfig: {
          selectedTheme: theme.selectedTheme,
          selectedMode: theme.selectedMode,
          borderRadius: theme.borderRadius,
          customPrimaryColor: theme.customPrimaryColor,
          customSecondaryColor: theme.customSecondaryColor,
          isUsingCustomColors: theme.isUsingCustomColors,
          selectedIconLibrary: theme.selectedIconLibrary,
        },
      })

      const openV0Url = 'https://v0.dev/chat/api/open'
      const callbackUrl = `${window.location.origin}/api/registry/${themeSelectionId}`
      // Open v0.dev with the theme selection ID
      window.open(`${openV0Url}?url=${callbackUrl}`, '_blank')
    } catch (error) {
      console.error('Failed to create theme selection:', error)
    }
  }

  return (
    <Button className="w-full" onClick={handleOpenInV0}>
      Open in
      <V0Icon />
    </Button>
  )
}
