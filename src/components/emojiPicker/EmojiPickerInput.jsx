import { useRef } from "react"
import EmojiPicker from "./EmojiPicker"

const EmojiPickerInput = () => {
    const refInput = useRef(null)
    return(
        <div>
            <input type="text" ref={refInput}/>            
            <EmojiPicker ref={refInput}/>
        </div>
    )
}
export default EmojiPickerInput