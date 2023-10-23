import React,{useState} from 'react'


export default function Textform(props) {
      
    const [text, setText] = useState('');
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
       
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleReset = ()=>{
        setText('');
    }


  return (
    <>
    <div>
    <div className='w-[100vw] px-10 flex justify-center mt-10 flex-col space-y-4'>
      <h1 className='text-3xl font-bold'>{props.title}</h1>
      <textarea className='border-2 border-black text-black rounded-lg p-3' cols="40" rows="10" value={text} onChange={handleOnChange}>
           
      </textarea>
      <div className='space-x-4'>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-fit' onClick={handleUpClick} >
            Convert to Uppercase
        </button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-fit' onClick={handleLowClick}>
            Convert to Lowercase
        </button>

        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-fit' onClick={handleReset}>
            Clear Field
        </button>

      </div>
       

    </div>
    

    </div>

    <div className="summary mx-10 mt-10">
        <h1 className='text-3xl font-bold'>Text Summary</h1>
        <p>Your text contains {text.split(" ").length} words and {text.length} characters</p>
        <p className='font-medium'>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2 className='text-xl font-semibold mt-3'>Preview</h2>
        <p className='font-serif pt-2 text-justify'>{text}</p>

            
    </div>
   
    </>
    
  )
}
