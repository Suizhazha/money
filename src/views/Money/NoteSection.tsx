import styled from 'styled-components';
import React, {ChangeEventHandler, useRef} from 'react';
import Input from '../../components/Input';

const NotesStyle = styled.section`
  background: #f5f5f5;  padding: 0 16px;  font-size: 14px;
`;

type Props = {
  value: string,
  onChange: (value: string) => void
}

const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;
  const refInput = useRef<HTMLInputElement>(null);
  const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
      props.onChange(e.target.value);
  };
  return (
    <NotesStyle>
      {/*修改成受控组件写法*/}
      <Input label='备注：'
             type='text'
             value={note}
             onChange={onChange}
      >

        {/*<span>备注</span>*/}

        {/*/!* 非受控组件写法 *!/*/}
        {/*<input type="text" placeholder="在这里添加备注"*/}
        {/*       ref={refInput}*/}
        {/*       defaultValue={note}*/}
        {/*       onBlur={onBlur}*/}
        {/*/>*/}
      </Input>
    </NotesStyle>
  );
};

export default NoteSection;