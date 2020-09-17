import React from "react"
import useTags from 'useTags';
import { useParams } from "react-router-dom";
import Layout from 'components/Layout';
import Icon from "components/Icon";
import Button from "components/Button";

type Params = {
  id:string
}

const TagEdit:React.FC = ()=>{
  const {findTag}= useTags()
  let {id} = useParams<Params>()

const tag = findTag(Number(id))
  return(
    <Layout>
      <header>
        <Icon name='left'/>
        <span>编辑标签</span>
      </header>

      <label>
        <span>标签名</span>
        <input type="text" placeholder=""
        />
      </label>
      <div>
        <Button>删除标签</Button>
      </div>
    </Layout>
  )
}

export default TagEdit