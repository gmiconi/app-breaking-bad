import React, {useState} from 'react'
import logo from './../img/breaking-bad-logo.png';

const Header = ({getQuery}) => {

    const [text, setText] = useState('')
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <header className="top">
            <img src={logo} className="top__logo" alt="logo" />
            <section className="top__search-characters">
                <form className="top__search-characters__form">
                    <input type="text" className="top__search-characters__form__input" value={text} onChange={(e) => onChange(e.target.value)} placeholder="Search characters" />
                </form>
            </section>
        </header>
    )
}

export default Header