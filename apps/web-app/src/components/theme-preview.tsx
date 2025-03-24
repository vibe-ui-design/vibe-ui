import { useSelectionStore } from '~/app/build/[projectId]/store'
import { fontFamilies, iconLibraries } from './theme-selector'

export function ThemePreview() {
  const mode = useSelectionStore((state) => state.theme.selectedMode)
  const borderRadius = useSelectionStore((state) => state.theme.borderRadius)
  const selectedIconLibrary = useSelectionStore(
    (state) => state.theme.selectedIconLibrary,
  )
  const selectedFontFamily = useSelectionStore(
    (state) => state.theme.selectedFontFamily,
  )
  const isUsingCustomColors = useSelectionStore(
    (state) => state.theme.isUsingCustomColors,
  )
  const customPrimaryColor = useSelectionStore(
    (state) => state.theme.customPrimaryColor,
  )
  const customSecondaryColor = useSelectionStore(
    (state) => state.theme.customSecondaryColor,
  )
  const selectedTheme = useSelectionStore((state) => state.theme.selectedTheme)

  // Convert border radius value to rem
  const getBorderRadiusStyle = (value: typeof borderRadius) => {
    const radiusMap = {
      '0': '0px',
      '0.3': '0.3rem',
      '0.5': '0.5rem',
      '0.75': '0.75rem',
      '1': '1rem',
    }
    return radiusMap[value]
  }

  const borderRadiusValue = getBorderRadiusStyle(borderRadius)
  const selectedIcon = iconLibraries.find(
    (lib) => lib.id === selectedIconLibrary,
  )?.previewIcon

  const selectedFont = fontFamilies.find(
    (font) => font.id === selectedFontFamily,
  )?.value

  const colors = isUsingCustomColors
    ? {
        primaryColor: customPrimaryColor,
        secondaryColor: customSecondaryColor,
      }
    : selectedTheme

  return (
    <div
      className={`grid gap-4 rounded-lg border p-4 ${
        mode === 'dark'
          ? 'bg-black border-neutral-800'
          : 'bg-white border-neutral-200'
      }`}
      style={{ fontFamily: selectedFont }}
    >
      <div className="space-y-2">
        <div className="text-sm font-medium">Button & Icon</div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded px-3 py-1.5 text-sm font-medium text-white transition-colors"
            style={{
              backgroundColor: colors.primaryColor,
              borderRadius: borderRadiusValue,
            }}
          >
            {selectedIcon}
            Button
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium">Typography</div>
        <div className="space-y-1">
          <div
            className="text-lg font-semibold"
            style={{ color: colors.primaryColor }}
          >
            Heading Text
          </div>
          <div className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore.
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium">Card</div>
        <div
          className="rounded border p-3"
          style={{
            borderRadius: borderRadiusValue,
            borderColor: colors.secondaryColor,
          }}
        >
          <div className="text-sm">Card Content</div>
        </div>
      </div>
    </div>
  )
}
