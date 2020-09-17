import {useState} from 'react';

const UseTags =()=>{ //封装一个自定义Hook
  const [tags,setTags] = useState([
   '衣','食','住','行'
    ])
 return{tags,setTags}
}

export default UseTags