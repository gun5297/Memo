import { useEffect, useRef, useState } from 'react';
import MemoList from '../MemoList';
import { MEMOCONTAINER } from './styled';
import MemoCon from '../MemoCon';
import MemoNoCon from '../MemoNoCon';

const Memo = () => {
    const [data, setData] = useState([]);
    const [onData, setOnData] = useState(data[0]);
    const no = useRef(data.length + 1);

    const onAdd = () => {
        if (data.length >= 14) return alert('할 일은 최대 14개까지 추가 가능합니다.');
        const add = {
            id: no.current++,
            title: `타이틀${no.current - 1}`,
            body: `내용을 입력해 주세요`,
            isDone: true,
        };
        setData([...data.map((item) => ({ ...item, isDone: false })), add]);
        setOnData(add);
    };

    const changeOnData = (id) => {
        setOnData(data.find((item) => item.id == id));
        setData(
            data.map((item) =>
                item.id == id ? { ...item, isDone: true } : { ...item, isDone: false }
            )
        );
    };

    const onDel = (id) => {
        setData(
            data
                .map((item, idx) =>
                    idx == 0 ? { ...item, isDone: true } : { ...item, isDone: false }
                )
                .filter((item) => item.id !== id)
        );
        setOnData(data.find((item, idx) => idx == 0));
    };

    const changeValue = (text, id) => {
        const { title, body } = text;
        setData(data.map((item) => (item.id == id ? { ...item, title, body } : item)));
    };

    return (
        <MEMOCONTAINER>
            <MemoList changeOnData={changeOnData} data={data} onDel={onDel} onAdd={onAdd} />
            {data.length == 0 ? (
                <MemoNoCon onAdd={onAdd} />
            ) : (
                <MemoCon onData={onData} changeValue={changeValue} />
            )}
        </MEMOCONTAINER>
    );
};

export default Memo;
