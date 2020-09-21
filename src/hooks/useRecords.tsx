import {useEffect, useState} from 'react';
import useUpdate from './useUpdate';

type RecordItem ={
tagIds:number[],
  note:string,
  category: '+' | '-',
  amount:number,
  createdAt:string // ISO 8601   //记录时间
}

//Omit函数 ：忽略类型中的某个属性
type newRecordItem = Omit<RecordItem, 'createdAt'>

const useRecords = () => {
  const [records,setRecords] = useState<RecordItem[]>([]);

  //载入和更新数据
  useEffect(()=>{
    setRecords(JSON.parse(window.localStorage.getItem('records')||'[]'))
  },[])

  useUpdate(()=>{
    window.localStorage.setItem('records',JSON.stringify(records))
  },[records])


const addRecords = (newRecord:newRecordItem)=>{
 const record = {...newRecord,createdAt:(new Date()).toISOString()}
  setRecords([...records,record])
}


  return {records,addRecords}
};

export default useRecords;