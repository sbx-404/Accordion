import { useState } from "react"
import data from "./data"

export default function Accordion() {
    const [selection, setSelection] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [storeMultipleIds, setStoreMultipleIds] = useState([])

    function singleHandle(dataId) {
        setSelection(dataId === selection ? null : dataId)
    }
    function multiSelectionHandle(dataId) {
        let multipleItems = [...storeMultipleIds]
        const getIndexOf = multipleItems.indexOf(dataId)
        console.log(getIndexOf)
        if (multipleItems.includes(dataId) == false) {
            multipleItems.push(dataId)
        }
        else {
            multipleItems.splice(getIndexOf, 1)
        }
        setStoreMultipleIds(multipleItems)
    }
    console.log(storeMultipleIds)

    return (<div className="flex h-[100vh] w-100vw justify-center items-center flex-col gap-[20px]">
        <button className="bg-white py-[10px] px-[20px] font-bold text-[20px] cursor-pointer border-2" onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi selection</button>
        <div className="w-[70%]">
        
        {data.length > 0 ? <div>{data.map(items =>
            <div className="py-[10px] px-[20px] mb-[10px] bg-[#614101]">
                <div className="flex justify-between ">
                <div className="flex justify-between items-center cursor-pointer text-[#ffffff]" onClick={enableMultiSelection ?
                    () => multiSelectionHandle(items.id)
                    : () => singleHandle(items.id)}>{items.question}</div>
                <span className="text-[24px] font-extrabold">{items.id !== selection ? "+" : "-"}</span>

                {/* {items.id === selection || storeMultipleIds.indexOf(items.id) !== -1 
                ?(<div>{items.answer}</div>) 
            : <div>newwwwwwwwwwwwww</div>} */}

            </div>
                <div  className="mt-[8px]">
                {
                    enableMultiSelection ? 
                    storeMultipleIds.indexOf(items.id) !== -1 && (<div className="h-auto text-[#ffffff]">{items.answer}</div>) :
                    items.id === selection && (<div className="h-auto text-[#ffffff]">{items.answer}</div>)
                }
                </div>
            </div>
        )}</div>
            : <div>Data not found</div>
        }
        </div>
    </div>)

}


