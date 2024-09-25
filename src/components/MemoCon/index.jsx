import { useEffect, useState } from 'react';
import { MEMOCONCONTAINER } from './styled';

const MemoCon = ({ onData, changeValue }) => {
    const { id, title, body } = onData;
    const [text, setText] = useState({ title, body });
    const today = new Date();
    const formattedDate = `${today.getFullYear()}. ${
        today.getMonth() + 1
    }. ${today.getDate()}. ${today.getHours()}시 ${today.getMinutes()}분 ${today.getSeconds()}초 `;

    const onChange = (e) => {
        const { value, name } = e.target;
        setText({ ...text, [name]: value });
    };
    useEffect(() => {
        changeValue(text, id);
    }, [text]);

    useEffect(() => {
        setText({ title, body });
    }, [onData]);

    return (
        <MEMOCONCONTAINER>
            <input type='text' name='title' value={text.title} onChange={onChange} />
            <input type='text' name='body' value={text.body} onChange={onChange} />
            <span>{formattedDate}</span>
        </MEMOCONCONTAINER>
    );
};

export default MemoCon;
