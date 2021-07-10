import { useState, useRef, useEffect } from 'react';

export default function Dropdown({setTopic}) {

    const options = [
        { id: 0, label: 'RectJS' },
        { id: 1, label: 'JavaScript' },
        { id: 2, label: 'NodeJS' },
    ]

    const prompt = 'Select Topic';
    const [value, setValue] = useState(null)
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const ref = useRef(null);

    useEffect(() => {
        document.addEventListener("click", close);
        return () => document.removeEventListener("click", close);
    }, []);

    function close(e) {
        //console.dir([e.target, ref.current])
        setOpen(e && e.target === ref.current);
    }

    function filter(options) {
        return options.filter((option) => option.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
    }

    console.log('options',options);

    function displayValue() {
        if (query.length > 0) return query;
        if (value) return value.label;
        return "";
    }

    function selectOption(option) {
        setQuery("");
        setValue(option)
        setTopic(option.id)
        setOpen(false);
        console.log('option',option);
    }

    console.log('value',value);
   

    return (
        <>
            <div class='dropdown'>
                <div class='control'>
                    <div class='selected-value'>
                        <input
                            type="text"
                            ref={ref}
                            placeholder={value ? value.label : prompt}
                            value={displayValue()}
                            onChange={e => {
                                setQuery(e.target.value)
                                //setValue(null)
                            }}
                            onClick={() => setOpen(!open)}
                        />
                    </div>
                    <div class={`arrow ${open ? 'open' : null}`}></div>
                </div>
                <div class={`options ${open ? 'open' : null}`}>
                    {
                        filter(options).map(option =>

                            <div
                                key={option.id}
                                class={`option ${value === option ? 'selected' : null}`}
                                onClick={() => selectOption(option)}>
                                {option.label}
                            </div>)
                    }
                </div>
            </div>
        </>
    )
}
