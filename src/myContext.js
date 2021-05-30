import React,{createContext,useState} from 'react'

 export const myContext = createContext()

const myContextProvider = (props) => {

    const[count, setCount] = useState(10)
    return (
        <div>


            <myContext.Provider value ={[count,setCount]}>
                {props.children}
            </myContext.Provider>
            
        </div>
    )
}

export default myContextProvider
