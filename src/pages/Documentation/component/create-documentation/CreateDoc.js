import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateDoc = () => {
    const [value, setValue] = useState('');

    const handleChange = (value) => {
        console.log(value)
        setValue(value)
    }
    const src = "https://docs.google.com/document/d/1tm3GxCAZG5gEn9ZrihFzFBZwRA43VovYHV_4HA3ZWbQ/embed"
    return ( 
    <>
        <div className='p-7'>
            <ReactQuill theme="snow" value={value} onChange={(value) => handleChange(value)} />
            <div className='p-7 border-zinc-800' dangerouslySetInnerHTML={{ __html: value }}/>
            <iframe src={src} width="100%" height="600px" />
            <iframe className='w-full h-1/2' src="https://docs.google.com/document/d/e/2PACX-1vRQO1eZ6IbUUxcSo6xsNWeWCw4mDThyDMFDRFaNxWfpmM4UxDhC6Y9O6CAzzqbE9vf2NaJ_8DRym3n1/pub?embedded=true"></iframe>
        </div>
        
    </> );
}
 
export default CreateDoc;