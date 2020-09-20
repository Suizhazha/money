import {useState} from 'react';
import createId from 'lib/createId';


//提前存好，不然每次都会生成4个新的
const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'}
];

const useTags = () => { //封装一个自定义Hook
  const [tags, setTags] = useState<{ id: number; name: string }[]>(
    defaultTags
  );
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

  const updateTags = (id: number, obj: { name: string }) => {
    const index = findTagIndex(id);
    const tagsClone = JSON.parse(JSON.stringify(tags));//深拷贝tags
    //将tagsClone的第index删除，换成{id:id,name:obj.name}
    tagsClone.splice(index, 1, {id: id, name: obj.name});
    setTags(tagsClone)
  };

  return {tags, setTags, findTag,updateTags,findTagIndex};
};

export default useTags;