import  { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ReactQull = () => {
    const [value, setValue] = useState('');

   let modules = {
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
      ],
    }
    let formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
      ]
      console.log(value);

  return (
    <>
      <h2 className="text-title30 bg-btn-secondary text-center">ReactQull</h2>

      <div className="w-full flex p-6">
        <div className="w-1/2 bg-bg-gradS">
          <ReactQuill className='h-[300px]' theme="snow" modules={modules} formats={formats} value={value} onChange={setValue} />
        </div>
        <div className="w-1/2 px-6">
          <div
            className="text-base24"
            dangerouslySetInnerHTML={{ __html: value }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default ReactQull