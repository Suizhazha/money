import {useState} from 'react';
import createId from './lib/createId';


//提前存好，不然每次都会生成4个新的
const defaultTags = [
  {id:createId(),name:'衣'},
  {id:createId(),name:'食'},
  {id:createId(),name:'住'},
  {id:createId(),name:'行'}
]

const useTags =()=>{ //封装一个自定义Hook
  const [tags,setTags] = useState<{id:number;name:string}[]>(
    defaultTags
  )
  const findTag = (id:number)=>tags.filter(tag =>tag.id===id)[0]

  return{tags,setTags,findTag}
}

export default useTags