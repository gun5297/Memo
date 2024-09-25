import { MEMONOCONCONTAINER } from './styled';

const MemoNoCon = ({ onAdd }) => {
    return (
        <MEMONOCONCONTAINER>
            <h3>메모가 없습니다</h3>
            <p>할 일을 추가해주세요...</p>
            <button onClick={onAdd}>추가하기</button>
        </MEMONOCONCONTAINER>
    );
};

export default MemoNoCon;
