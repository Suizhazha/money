import React from "react"
import useTags from '../useTags';
import { useParams } from "react-router-dom";

type Params = {
  id:string
}

const TagEdit:React.FC = ()=>{
  const {findTag}= useTags()
  let {id} = useParams<Params>()

const tag = findTag(Number(id))
  return(
    <div>{tag.name}</div>
  )
}

export default TagEdit