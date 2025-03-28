import React ,{useState} from 'react'

export default function App() {

const [text, setText] = useState('');
const [details,setDetails]=useState('')
const [addtext, setAddText] = useState([]);

const onClickhandel = () => {
  if(text === "" || details ===""){
    return alert("Please fill all the fields")
  }
  const newText = {
    id: addtext.length + 1,
    details:details,
    text: text
  };
  setAddText([...addtext, newText,]);
  setText('');
  setDetails('');
  console.log(newText);
};

const onDelete = (id) => {
  const updateitem = addtext.filter((item) => item.id !== id);
  setAddText(updateitem);
};

  
 
    return (
      <div>
        <label >text</label>
      <input value={text} type='text' placeholder='enter text' onChange={(e)=>setText(e.target.value)}/>
      <br />
      <label >details</label>
      <input value={details} type='text' placeholder='enter details' onChange={(e)=>setDetails(e.target.value)}/>
      <br />
      <button onClick={onClickhandel}>Click me</button>

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
 

            <td>{item.text}</td>
            <td>{item.details}</td>
            <td><button onClick={() => onDelete(item.id)}>delete</button>
            <button>edit</button>
            </td>
            
          </tr>
       
))}
   
      </tbody>
    </table>
      </div>
  )
}

