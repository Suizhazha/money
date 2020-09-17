import React from "react"
import useTags from 'useTags';
import { useParams } from "react-router-dom";
import Layout from 'components/Layout';

type Params = {
  id:string
}

const TagEdit:React.FC = ()=>{
  const {findTag}= useTags()
  let {id} = useParams<Params>()

const tag = findTag(Number(id))
  return(
    <Layout>
      <div>{tag.name}</div>
    </Layout>
  )
}

export default TagEdit