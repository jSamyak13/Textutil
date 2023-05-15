import React, {useState} from 'react'

export default function MyForm(props){
    const handleUpClick = () =>{
        let newtext = text.toUpperCase()
        settext(newtext)
        props.showAlert('Uppercase Clicked', 'success')
        document.title = "Textutils - UpperCase"
    }
    const handleOnChange = (event) =>{
        settext(event.target.value)
    }
    const handleLower = () =>{
        let newt = text.toLowerCase()
        settext(newt)
        props.showAlert('Lowercase Clicked', 'success')
        document.title = "Textutils - LowerCase"
    } 
    const handleClear = () =>{
        let newt = ''
        settext(newt)
        props.showAlert('Cleared', 'success')
        document.title = "Textutils - Clear"
    }    
    const handleReplace = () =>{
        let existing = prompt("enter the word or character you want to change")
        let neww = prompt("enter to change")
        let ans = text.replaceAll(existing, neww);
        settext(ans)
        props.showAlert('Replaced Successfully', 'success')
        document.title = "Textutils - Replace"
    } 
    const handleTitle=()=>{
        let ti = text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
        settext(ti)
        document.title = "Textutils - Title"
    }    
    
    const [text, settext] = useState("");
    // settext("You Can Perform some actions on text");
    return(
    <div className = "main" style={{color:props.mode === 'light'? '#042743':'white'}}>
    <h2 >{props.heading}</h2>
    <div className="mb-3">
    <textarea className='form-control' id="mybox" value={text} onChange={handleOnChange} rows="6" placeholder='Enter text here' style={{backgroundColor :props.mode === 'light' ? 'white':'whiteSmoke', color : props.mode === 'light' ? '#042743':'black'}}></textarea>
    </div>
    <div className="ma-3">
    <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert To UpperCase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleLower} id='but1'>Convert To LowerCase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleClear} id='but2'>Clear text</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleReplace} id='but3'>Replace</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleTitle} id='but4'>Title</button>
    </div>
    <div className="container my-2" style={{color:props.mode === 'light'? '#042743':'white'}}>
        <h3>Text Summary</h3>
        <p>{text.length} alphabets are used un the above text</p>
        <p>{text.length === 0 ? 0:text.split(" ").length} words are used un the above text</p>
        <p>average time to read the above text is {0.008 * text.split(" ").length * 60} seconds</p>
        <h4>Preview</h4>
        <p>{text}</p>
    </div>
    </div>
    
    )
}