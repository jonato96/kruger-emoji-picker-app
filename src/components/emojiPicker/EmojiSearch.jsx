import styles from "./emojiPicker.module.scss"

const EmojiSearch = ({onSearch}) =>{
    return(
        <input className={styles.emojiSearch} type="text" onChange={onSearch}/>
    )
}
export default EmojiSearch