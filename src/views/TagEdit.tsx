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
  const {findTag}= useTags()
  let {id} = useParams<Params>()
  const tag = findTag(parseInt(id))


  return(
    <Layout>
      <Topbar>
          <Icon name='left'/>
          <span>编辑标签</span>
          <Icon />
      </Topbar>

<InputWrapper>
  <Input label='标签名' type='text' value={tag.name}> </Input>
</InputWrapper>

<Center>
  <Space/>
  <Space/>
  <Space/>
  <Button>删除标签</Button>
</Center>
    </Layout>
  )
}

export default TagEdit