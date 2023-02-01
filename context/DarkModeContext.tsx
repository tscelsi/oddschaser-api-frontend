import React from 'react'

export const DarkModeContext = React.createContext({
    darkModeEnabled: false,
    toggleDarkMode: () => { console.log('dark mode provider') }
});

DarkModeContext.displayName = 'DarkModeContext';

export const DarkModeProvider = (props: React.PropsWithChildren) => {
    const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);
    return (
        <DarkModeContext.Provider value={{ darkModeEnabled, toggleDarkMode: () => setDarkModeEnabled(!darkModeEnabled) }}>
            {props.children}
        </DarkModeContext.Provider>
    )
}

export const useDarkMode = () => {
    const context = React.useContext(DarkModeContext);
    if (!context) {
        throw new Error('No DarkModeProvider found when calling useDarkMode')
    }
    return context
}
