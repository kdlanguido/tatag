"use client"

import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes"


interface AppThemeProviderProps extends ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children, ...props }:AppThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
