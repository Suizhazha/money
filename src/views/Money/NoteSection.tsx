import styled from 'styled-components';
import React, {useState} from 'react';

const NotesStyle = styled.section`
  background: #f5f5f5;  padding: 0 16px;  font-size: 14px;
  > label {
    display:flex; align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block; width: 100%;
      height: 72px; background: none;
      border: none;
    }
  }
`

const NoteSection:React.FC = ()=>{
  const [note,setNote] = useState('')

return(
  <NotesStyle>
    <label>
      <span>备注</span>

      {/* value和onChange组成了受控组件 */}
      <input type="text" placeholder="在这里添加备注"
             value={note}
              onChange={(e)=>
                setNote(e.target.value)
              }
      />
    </label>
  </NotesStyle>
)
}

export default NoteSection