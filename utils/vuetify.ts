
export const isDarkModeVuetify = (theme:any) => {
  let dark_mode_enabled = localStorage.getItem("dark_mode_enabled")
  const isDark = dark_mode_enabled === "true"
  changeTheme(theme, isDark)
  return isDark
}

export const toggleThemeVuetify = (theme:any, isDark: boolean) => {
  changeTheme(theme, isDark)
}

export const changeTheme = (theme:any, isDark:boolean) => {
  localStorage.setItem("dark_mode_enabled", `${isDark}`)
  theme.change(isDark ? 'dark' : 'light')
}