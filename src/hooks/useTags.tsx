import {useEffect, useState} from 'react';
import createId from 'lib/createId';
import useUpdate from './useUpdate';


const useTags = () => { //封装一个自定义Hook
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);


  //解决idMax不匹配问题
useEffect(()=>{
  let localTags = JSON.parse(window.localStorage.getItem('tags')||'[]')
  if (localTags.length===0){
    localTags=[
      {id:createId(),name:'衣'},
      {id:createId(),name:'食'},
      {id:createId(),name:'住'},
      {id:createId(),name:'行'}
    ]
  }
  setTags(localTags)
},[])


  //tags的数据持久化问题
useUpdate(()=>{
        window.localStorage.setItem('tags',JSON.stringify(tags))
},[tags])

  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };

  const updateTag = (id: number, {name}: { name: string }) => {
    //不用深拷贝
    setTags(tags.map(tag=>tag.id===id ? {id:id,name:name}:tag))

    // const index = findTagIndex(id);
    // //深拷贝tags，因为React不推荐修改原数据
    // const tagsClone = JSON.parse(JSON.stringify(tags));
    // //将tagsClone的第index删除，换成{id:id,name:name}
    // tagsClone.splice(index, 1, {id: id, name: name});
    // setTags(tagsClone)
  };

  const deleteTag = (id:number)=>{
    setTags(tags.filter(tag=>tag.id!==id))

    // 可以跟updateTags比较
    // const index = findTagIndex(id);
    // const tagsClone = JSON.parse(JSON.stringify(tags));
    // tagsClone.splice(index, 1);
    // setTags(tagsClone)
  }
  const addTag = ()=>{
    const tagName = window.prompt('请输入新标签：')
    if (tagName!==null && tagName!== ''){
      setTags([...tags,{id:createId(),name:tagName}])
    }
if (tagName===''){
  alert('标签名不能为空')
}
  }

  return {tags, setTags, findTag,updateTag,findTagIndex,deleteTag,addTag};
};

export default useTags;