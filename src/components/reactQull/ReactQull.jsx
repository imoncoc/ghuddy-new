import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ReactQull = () => {
    const [value, setValue] = useState('');
    const toolbarOptions = [['bold', 'italic'], ['link', 'image']];

    console.log(value)

  return (
    <>
    <h2 className='text-title30 bg-btn-secondary text-center'>ReactQull</h2>

    <div className='w-full flex p-6'>
    <div className='w-1/2'>
    <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
    <div className='w-1/2 px-6'>
        <div className='text-base24'>
        {value}
        </div>
    </div>
    </div>
    </>
  )
}

export default ReactQull