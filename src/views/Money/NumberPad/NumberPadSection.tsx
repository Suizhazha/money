import React, {useState} from 'react';
import NumberPadStyle from './NumberPadStyle';

const NumberPadSection: React.FC = () => {
  const [output, setOutput] = useState('0');
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    //强行将e.target看作HTML元素
    const text = (e.target as HTMLButtonElement).textContent;
    if (!text) {
      return;
    }
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        output === '0' ? setOutput(text) : setOutput(output + text);
        break;
      case '.':
        if (output.indexOf('.')>0){return}
        setOutput(output+text)
        break;
      case '删除':
        if (output.length === 1) {
          setOutput('0');
        } else {
          setOutput(output.slice(0, -1));
        }
        break;
      case '清空':
        setOutput('0');
        break;
      case 'OK':
        console.log(4);
        break;
    }
  };

  return (
    <NumberPadStyle>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </NumberPadStyle>
  );
};

export default NumberPadSection;