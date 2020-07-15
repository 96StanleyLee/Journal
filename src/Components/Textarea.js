import React, {useState} from 'react'
import { Segment } from 'semantic-ui-react'
import { Editor } from '@tinymce/tinymce-react';







const Textarea = () =>{

const handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  }

    return(
        <Segment>
            <Editor
        //  initialValue=
         apiKey="mg5gi3ektkg3kel46eg0jdk0g436goavb72h6t0ts6h6rys4"
         init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar:
             'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
         }}
         onEditorChange={handleEditorChange}
       />
        </Segment>
    )


}

export default Textarea