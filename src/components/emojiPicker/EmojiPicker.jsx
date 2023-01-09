import {forwardRef, useRef, useState, useEffect} from 'react'
import {data as emojiList} from "./data"
import EmojiSearch from './EmojiSearch'
import EmojiButton from './EmojiButton'

import styles from "./emojiPicker.module.scss"

export function EmojiPicker(props, inputRef){
    const [isOpen, setIsOpen] = useState(false)
    const [emojis, setEmojis] = useState([...emojiList])

    const containerRef = useRef(null)
    useEffect(()=>{
        window.addEventListener('click', e=>{
            if(!containerRef.current.contains(e.target)){
                setIsOpen(false)
                setEmojis(emojiList)
            }
        })
    },[])

    function handleClickOpen(){
        setIsOpen(!isOpen)
    }
    function handleSearch(e){
        const q = e.target.value        
        if(!!q){            
            const search = emojiList.filter((emoji) => {
                return (
                    emoji.name.toLowerCase().includes(q) ||
                    emoji.keywords.toLowerCase().includes(q))
            })            
            setEmojis(search)
        }else{
            setEmojis(emojiList)
        }
    }
    function handleOnClickEmoji(emoji){
        const cursorPosition = inputRef.current.selectionStart
        const text = inputRef.current.value
        const prev = text.slice(0,cursorPosition)
        const next = text.slice(cursorPosition)
        inputRef.current.value = prev + emoji.symbol + next
        inputRef.current.selectionStart = cursorPosition + emoji.symbol.length
        inputRef.current.selectionEnd = cursorPosition + emoji.symbol.length
        inputRef.current.focus()
    }
    // function EmojiPickerContainer(){
    //     return(
    //         <div>
    //             <EmojiSearch onSearch={handleSearch}/>
    //             <div>
    //                 {emojiList.map(emoji => <div key={emoji.symbol}>{emoji.symbol}</div>)}
    //             </div>
    //         </div>
    //     )
    // }
    return(
        <div className={styles.inputContainer} ref={containerRef}>
            <button className={styles.emojiPickerButton} onClick={handleClickOpen}>⌨️</button>
            {isOpen ?
            (<div className={styles.emojiPickerContainer}>
                <EmojiSearch onSearch={handleSearch}/>
                <div className={styles.emojiList}>
                    {emojis.map((emoji) => (
                    <EmojiButton 
                        key={emoji.symbol}
                        emoji={emoji}
                        onClick={handleOnClickEmoji}/>
                    ))}
                </div>
            </div>) : ("")}
        </div>
    )}
export default forwardRef(EmojiPicker)