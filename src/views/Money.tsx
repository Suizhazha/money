import Layout from 'components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import TagsSection from './Money/TagsSection';
import CategorySection from './Money/CategorySection';
import NotesSection from './Money/NoteSection';
import NumberPadSection from './Money/NumberPad/NumberPadSection';
import useRecords from '../hooks/useRecords';


const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;

const CategoryWrapper = styled.div`
background: #c4c4c4;
`

type Category = '-' | '+'

const defaultFormDate={
  tagIds: [] as number [],
    note: '',
  category: '-' as Category,
  amount: 0,
}

function Money() {
  const [selected, setSelected] = useState(defaultFormDate);

  const { addRecords} = useRecords();

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };

  const submit = () => {
    if (addRecords(selected)) {
      alert('记录完成！');
      setSelected(defaultFormDate)
    }
  }

  return (

    <MyLayout>
      <TagsSection value={selected.tagIds}
                   onChange={tagIds =>
                     onChange({tagIds})}/>

      <NotesSection value={selected.note}
                    onChange={note =>
                      onChange({note})}
      />

     <CategoryWrapper>
       <CategorySection value={selected.category}
                        onChange={category =>
                          onChange({category})}/>
     </CategoryWrapper>

      <NumberPadSection value={selected.amount}
                        onChange={amount =>
                          onChange({amount})
                        }
                        onOk={submit}
      />

    </MyLayout>
  );
}

export default Money;