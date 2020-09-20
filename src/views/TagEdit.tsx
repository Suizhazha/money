import React from "react"
import useTags from 'useTags';
import { useParams } from "react-router-dom";
import Layout from 'components/Layout';
import Icon from "components/Icon";
import Button from "components/Button";
import styled from 'styled-components';
import Input from 'components/Input';
import Center from 'components/Center';
import Space from "components/Space";

type Params = {
  id:string
}

const Topbar = styled.header`
display: flex;
justify-content: space-between;
line-height: 20px;
padding: 14px;
background: white;
`

const InputWrapper = styled.div`
background: white;
padding: 0 16px;
margin-top: 8px;
`

const TagEdit:React.FC = ()=>{
  const {findTag,updateTag,deleteTag}= useTags()
  let {id} = useParams<Params>()
  const tag = findTag(parseInt(id))

  return(
    <Layout>
      <Topbar>
        <Icon name='left'/>
        <span>编辑标签</span>
        <Icon />
      </Topbar>

      {tag?<div>
        <InputWrapper>
          <Input label='标签名：' type='text' value={tag.name}
                 onChange={e=>{
                   updateTag(tag.id,{name:e.target.value})
                   console.log(e.target.value);
                 }}
          > </Input>
        </InputWrapper>

        <Center>
          <Space/>
          <Space/>
          <Space/>
          <Button onClick={()=>{
            deleteTag(tag.id)
          }}>删除标签</Button>
        </Center>

      </div>:<Center>Tag不存在了</Center>
        }
    </Layout>
  )

}

export default TagEdit