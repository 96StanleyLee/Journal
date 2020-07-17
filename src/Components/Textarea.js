import React, {useState, useEffect} from 'react'
import { Segment } from 'semantic-ui-react'
import { Editor } from '@tinymce/tinymce-react';


const Textarea = ({journal}) =>{


let [initialValue, setInitialValue] = useState(journal.entry)

const handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  }

  useEffect(()=>{
      setInitialValue(journal.entry)

  },[journal.entry])

 
  console.log(initialValue)

    return(
        <Segment>
            <Segment  dangerouslySetInnerHTML={{ __html: journal.entry }}>
            
            </Segment>
            <Editor
         initialValue= {initialValue}
         apiKey="mg5gi3ektkg3kel46eg0jdk0g436goavb72h6t0ts6h6rys4"
         init={{
           height: 300,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar:
             'undo redo | formatselect | bold italic backcolor fontselect | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
         }}
         onEditorChange={handleEditorChange}
       />
        </Segment>
    )


}

export default Textarea