import { useRef } from "react"
import EmojiPicker from "./EmojiPicker"

import styles from "./emojiPicker.module.scss"

const EmojiPickerInput = () => {
    const refInput = useRef(null)
    return(
        <div className={styles.inputContainer}>
            <input type="text" ref={refInput}/>            
            <EmojiPicker ref={refInput}/>
        </div>
    )
}
export default EmojiPickerInput