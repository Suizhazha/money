import styled from 'styled-components';
import React, {useState} from 'react';


const TagsStyle = styled.section`
background: #FFFFFF;padding: 12px 16px;
  flex-grow: 1; display:flex; flex-direction: column;
  justify-content: flex-end; align-items: flex-start;
>ol{
margin: 0 -12px ;
>li{
 background: #D9D9D9; border-radius: 18px;
 display: inline-block;padding: 3px 18px;
 font-size: 14px;margin: 8px 12px;
&.selected{
background: burlywood;
}
}
}
>button{
  background: none; border: none;
  padding: 2px 4px;  border-bottom: 1px solid #333;
  color: #666; margin-top: 8px;
}
`

type Props ={
  value:string[] ,
  onChange: (strings: string[])=>void
}

//FC为FunctionComponent缩写
const TagsSection: React.FC<Props> = (props) => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行'])
  const selectedTags = props.value

  const onAddTag = () => {
    const tagName = window.prompt('新标签name:')
    if (tagName) {
      setTags([...tags, tagName])
    }
  }

  const onToggleTag = (tag:string)=>{
const index = selectedTags.indexOf(tag)
    if (index>= 0 ){
      //如果tag已经被选中，就复制所以没有被选中的tag,作为新的selectedTag
     props.onChange (selectedTags.filter((item: string) => item!== tag))
    }
    else {
      props.onChange ([...selectedTags,tag])
    }
  }

  return (
    <TagsStyle>
      <ol>
        {tags.map((tag: string) =>
          <li key={tag}
          onClick={()=>onToggleTag(tag)}
              className = {selectedTags.indexOf(tag)>=0? 'selected':''}
          >{tag}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </TagsStyle>
  )
}


export default TagsSection