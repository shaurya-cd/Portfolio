import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{

    const [showProjects, setShowProjects] = useState(false);


        const contextValue = {
            showProjects,
            setShowProjects,
        }

        return (
            <StoreContext.Provider value={contextValue}>
                {props.children}
            </StoreContext.Provider>
        )
    }

export default StoreContextProvider