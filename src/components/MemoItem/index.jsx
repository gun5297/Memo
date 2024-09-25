import { MEMOITEMCONTAINER } from './styled';

const MemoItem = ({ id, title, onDel, changeOnData, isDone }) => {
    return (
        <MEMOITEMCONTAINER className={isDone ? 'on' : ''}>
            <p onClick={() => changeOnData(id)}>{title}</p>
            <i className='xi-trash-o' onClick={() => onDel(id)}></i>
        </MEMOITEMCONTAINER>
    );
};

export default MemoItem;
