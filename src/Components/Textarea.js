import React, {useState, useEffect} from 'react'
import { Segment, Button, Input } from 'semantic-ui-react'
import { Editor } from '@tinymce/tinymce-react';


const Textarea = ({journal, editTitle, save}) =>{


  let [content, setContent] = useState('')
  let [editTitleState, setEditTitleState] = useState('')
  let [editState, setEditState] = useState(false)
  

  const handleEditorChange = (content, editor) => {
      console.log('Content was updated:', content);
      setContent(content)
    }

  useEffect(()=>{
    setContent(journal.entry)
  },[journal])

  const work = (journal, title) =>{
    editTitle(journal, title)
    setEditTitleState('')
  }


 


    return(
      <>
        <Segment style={{paddingRight: '0px'}}>
          {!journal ?   
          <Segment style={{width: '90%'}}/>
            :
          // <Segment style={{width: '90%'}} dangerouslySetInnerHTML={{ __html: journal.entry }}/>}
          <Segment style={{width: '90%'}}>
            <h1>{journal.title}</h1>
            
            </Segment>
            }
            Title Edit: <Input value={editTitleState} onChange={(e)=>setEditTitleState(e.target.value)}></Input>
            <p> Last Edited: <strong>{journal.date}</strong></p>
        
            <Button basic color='green' onClick={()=>work(journal, editTitleState)}  className='edit' style={{marginBottom: '10px'}}>Edit Title</Button>
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
        <Button  onClick={()=>save(journal, content)} style={{width: '120px'}} primary> Save</Button>
        </>
    )


}

export default Textarea