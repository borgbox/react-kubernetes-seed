import React, {useState, useRef, useReducer} from 'react'

interface Props{
    text: string
}

export const InputText: React.FC<Props> = ({text}) => {

    const [count, setCount] = useState<number | null | undefined>(5)
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    
    
    return (
        <div ref={divRef}>
           <input ref={inputRef} type="text" value={text}/>
        </div>
    )
}
