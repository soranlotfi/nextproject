import {createContext, useContext, useMemo, useReducer} from "react";

const MaterialUi = createContext<any>({})

MaterialUi.displayName = "MaterialUi"

function reducer(state: any, action: any) {
    switch (action.type) {
        case "DARK-MODE" : {
            return {...state, darkMode: action.value}
        }

        default: {
            throw new Error(`Unhandled action type ${action.type}`)
        }
    }
}


function AppMuiProvider({children}: any) {
    const initialState = {
        darkMode: false
    }

    const [controller, dispatch] = useReducer(reducer, initialState)
    const value = useMemo(() => [controller, dispatch], [controller, dispatch])
    return <MaterialUi.Provider value={value}>{children}</MaterialUi.Provider>
}

function useAppController() {
    const context = useContext(MaterialUi)
    if (!context) {
        throw new Error("useMaterialUIController should be used inside the MaterialUIControllerProvider.")
    }

    return context
}

const setDarkMode = (dispatch: any, value: any) => dispatch({type: "DARK_MODE", value})

export {
    AppMuiProvider,
    useAppController,
    setDarkMode
}