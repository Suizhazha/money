import styled from 'styled-components';
import React from 'react';

const CategoryStyle= styled.section`
  font-size: 24px;
  > ol{
    display:flex;
    background:#c4c4c4;
    > li {
      width: 50%;  text-align:center;
      padding: 16px 0; position:relative;
      &.selected::after{
        content: '';  display:block; 
        height: 3px;  background:#333;
        position:absolute; bottom:0;
        width: 100%;  left: 0;
      }
    }
  }
`

type Props ={
  value:'-' | '+' ,
  onChange: (value:'-'|'+')=>void
}

const CategorySection:React.FC <Props > = (props)=>{
  const category = props.value
  return(
<CategoryStyle>
  <ol>
    <li className={category==='-'?'selected':''}
    onClick={()=>{
      props.onChange('-')
    }}
    >支出</li>
    <li className={category==='+'?'selected':''}
        onClick={()=>{
          props.onChange('+')
        }}
    >收入</li>
  </ol>
</CategoryStyle>
  )
}

export default CategorySection