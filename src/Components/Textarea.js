import React, {useState, useEffect} from 'react'
import { Segment, Button } from 'semantic-ui-react'
import { Editor } from '@tinymce/tinymce-react';


const Textarea = ({journal, editTitle}) =>{


  let [title, setTitle] = useState('')

  const handleEditorChange = (content, editor) => {
      console.log('Content was updated:', content);
    }

  useEffect(()=>{
    setTitle(journal.title)
  },[journal])

  const help = (e) =>{
    setTitle(e.target.innerText)
  }

 
 

    return(
        <Segment style={{paddingRight: '0px'}}>
          {!journal ?   
          <Segment style={{width: '90%'}}/>
            :
          // <Segment style={{width: '90%'}} dangerouslySetInnerHTML={{ __html: journal.entry }}/>}
          <Segment style={{width: '90%'}}>
            <h1 onKeyDown={(e)=> help(e)} contentEditable={true}>{title}</h1>
            </Segment>
            }

            <p> Last Edited: <strong>{journal.date}</strong></p>
        
          

            <Button basic color='green' onClick={()=>editTitle(journal, title)}  className='edit' style={{marginBottom: '10px'}}>Edit Title</Button>
            <Editor
         value= {!journal? '': journal.entry}
         apiKey="mg5gi3ektkg3kel46eg0jdk0g436goavb72h6t0ts6h6rys4"
         init={{
           height: 300,
           width: '90%',
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