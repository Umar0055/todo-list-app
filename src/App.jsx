import React ,{useState} from 'react'

export default function App() {

const [title, setTitle] = useState('');
const [details,setDetails]=useState('');
const [editing,setEditing]=useState(null);
const [addtext, setAddText] = useState([]);

const onClickhandel = () => {
  if(title=== "" || details ===""){
    return alert("Please fill all the fields")
  }
  if(editing){
    const updateItem=addtext.map((item) => item.id===editing.id?{...item,title,details}:item);
    setAddText(updateItem);
    setEditing(null);
  }else{
  const newText = {
    id: addtext.length + 1,
    details:details,
    title: title
  };
  setAddText([...addtext, newText,]);
  console.log(newText);
};
setTitle('');
setDetails('');
}
const onDelete = (id) => {
  const deletetext = addtext.filter((item) => item.id !== id);
  setAddText(deletetext);
};
const onEdit = (item) => {
setTitle(item.title)
setDetails(item.details)
setEditing(item.id);
};
  
 
    return (
      <div>
        <label >title:</label>
      <input value={title} type='text' placeholder='enter youer title' onChange={(e)=>setTitle(e.target.value)}/>
      <br />
      <label >details:</label>
      <input value={details} type='text' placeholder='enter details' onChange={(e)=>setDetails(e.target.value)}/>
      <br />
      <button onClick={onClickhandel}>{editing!==null ?"Update":"Add"}</button>

    <table border={"1"}>
      <thead>
        <tr>
          <th>title</th>
          <th>details</th>
          <th>active</th>
        </tr>
   
          </thead>
          <tbody>
{addtext.map((item) => (
  <tr key={item.id}>
 

            <td>{item.title}</td>
            <td>{item.details}</td>
            <td><button onClick={() => onDelete(item.id)}>delete</button>
            <button onClick={() => onEdit(item)}>edit</button>
            </td>
            
          </tr>
       
))}
   
      </tbody>
    </table>
      </div>
  )
}

