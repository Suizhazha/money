import Layout from 'components/Layout';
import React, {useState} from 'react';
import CategorySection from './Money/CategorySection';
import styled from 'styled-components';
import useRecords, {RecordItem} from '../hooks/useRecords';
import useTags from '../hooks/useTags';
import dayjs from 'dayjs';

const CategoryWrapper = styled.div`
background: white;
`;

const Item = styled.div`
  display:flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    color: #999;
  }
  >.tags{
  width: 80px;
  }
`;

const Header = styled.h3`
font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`


function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();


  //筛选收入支出
  const selectedRecords = records.filter(record => record.category ===category)


const hash:{[key:string]:RecordItem[]}= { }

selectedRecords.forEach(record =>{
const key =  dayjs(record.createdAt).format('YYYY年MM月DD日')
  if (!(key in hash)){
    hash[key] = []
  }
  hash[key].push(record)
})
//桶排序，让对象顺序按照时间排序
  const  array = Object.entries(hash).sort((a,b)=>{
     if (a[0] ===b[0]) return 0
     if (a[0] <b[0]) return 1
     if (a[0] >b[0]) return -1
    return 0
  }  )


  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChange={value => setCategory(value)}/>
      </CategoryWrapper>

      {
        array.map(([date,records])=><div>
          <Header>
            {date}
          </Header>
          <div>
            {records.map(record => {
              return <Item>
                <div className='tags oneLine'>
                  {record.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)}
                </div>
                {record.note && <div className="note">
                  {record.note}
                </div>}
                <div className='amount'>
                  ￥{record.amount}
                </div>
              </Item>;
            })}
          </div>
        </div>)
      }


    </Layout>
  );
}

export default Statistics;