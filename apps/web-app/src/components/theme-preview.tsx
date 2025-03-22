import type {
  BorderRadius,
  ColorTheme,
  ThemeMode,
} from '~/components/theme-selector'

interface ThemePreviewProps {
  theme: ColorTheme
  mode: ThemeMode
  borderRadius: BorderRadius
}

export function ThemePreview({ theme, mode, borderRadius }: ThemePreviewProps) {
  // Convert border radius value to rem
  const getBorderRadiusStyle = (value: BorderRadius) => {
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

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        {(mode === 'light' || mode === 'both') && (
          <div
            className="flex-1 border border-neutral-800 overflow-hidden"
            style={{ borderRadius: borderRadiusValue }}
          >
            <div
              className="h-8 w-full"
              style={{ backgroundColor: theme.primaryColor }}
            ></div>
            <div className="p-4 bg-white">
              <div
                className="h-4 w-3/4 mb-2"
                style={{
                  backgroundColor: theme.secondaryColor,
                  borderRadius: borderRadiusValue,
                }}
              ></div>
              <div
                className="h-4 w-1/2 mb-2 bg-neutral-200"
                style={{ borderRadius: borderRadiusValue }}
              ></div>
              <div
                className="h-4 w-2/3 bg-neutral-200"
                style={{ borderRadius: borderRadiusValue }}
              ></div>
              <div className="mt-4 flex justify-end">
                <div
                  className="h-8 w-24"
                  style={{
                    backgroundColor: theme.primaryColor,
                    borderRadius: borderRadiusValue,
                  }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {(mode === 'dark' || mode === 'both') && (
          <div
            className="flex-1 border border-neutral-800 overflow-hidden"
            style={{ borderRadius: borderRadiusValue }}
          >
            <div
              className="h-8 w-full"
              style={{ backgroundColor: theme.primaryColor }}
            ></div>
            <div className="p-4 bg-neutral-900">
              <div
                className="h-4 w-3/4 mb-2"
                style={{
                  backgroundColor: theme.secondaryColor,
                  borderRadius: borderRadiusValue,
                }}
              ></div>
              <div
                className="h-4 w-1/2 mb-2 bg-neutral-700"
                style={{ borderRadius: borderRadiusValue }}
              ></div>
              <div
                className="h-4 w-2/3 bg-neutral-700"
                style={{ borderRadius: borderRadiusValue }}
              ></div>
              <div className="mt-4 flex justify-end">
                <div
                  className="h-8 w-24"
                  style={{
                    backgroundColor: theme.primaryColor,
                    borderRadius: borderRadiusValue,
                  }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
