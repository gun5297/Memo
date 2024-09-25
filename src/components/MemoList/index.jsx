import MemoItem from '../MemoItem';
import { MEMOLISTCONTAINER } from './styled';

const MemoList = ({ data, onDel, changeOnData, onAdd }) => {
    return (
        <MEMOLISTCONTAINER>
            <h3>할일 정리</h3>
            {data.length == 0 ? (
                <span>현재 백수..</span>
            ) : (
                data.map((item) => (
                    <MemoItem key={item.id} {...item} onDel={onDel} changeOnData={changeOnData} />
                ))
            )}
            <button onClick={onAdd}>+</button>
        </MEMOLISTCONTAINER>
    );
};

export default MemoList;
