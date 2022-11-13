import { createContext, useContext } from "react"
import { INuKenzieContext, IProvider } from './interfaces';


const NuKenzieContext = createContext<INuKenzieContext>({} as INuKenzieContext);

export const useNuKenzieContext = () => {
    const context = useContext(NuKenzieContext);
    return context
}

export const NuKenzieProvider = ({children}: IProvider) => {
    

    return (
        <NuKenzieContext.Provider value={{}}>
            {children}
        </NuKenzieContext.Provider>
    )
}