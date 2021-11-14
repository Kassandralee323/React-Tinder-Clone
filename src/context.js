import React, { useContext, useState } from 'react'

const TinderContext = React.createContext();

const TinderProvider =({children})=>{
    const [noteClass,setNoteClass]=useState(true)

    const ShowNote =(isNote)=>{
        setNoteClass(isNote)
    }

    return <TinderContext.Provider value={{noteClass,ShowNote}}>
        {children}
    </TinderContext.Provider>
}

const useGlobalContext=()=>{
    return useContext(TinderContext)
}

export {TinderProvider,useGlobalContext}