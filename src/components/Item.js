import React from 'react'


const Item = ({item}) => {

    return (
        <article className="characters__item">
            <div className="characters__item__mask">
                <img src={item.img} className="characters__item__mask__img" alt="" />
                <div className="characters__item__mask__portrayed">{item.name}</div>
            </div>
            <div className="characters__item__info">
                <p className="characters__item__info__description"><strong>Actor Name:</strong> {item.portrayed}</p>
                <p className="characters__item__info__description"><strong>Nickname:</strong> {item.nickname}</p>
                <p className="characters__item__info__description"><strong>Birthday:</strong> {item.birthday}</p>
                <p className="characters__item__info__description"><strong>Category:</strong> {item.category}</p>
                <p className="characters__item__info__description"><strong>Season:</strong> {item.appearance}</p>
                <p className="characters__item__info__description"><strong>Status:</strong> {item.status}</p>
            </div>
        </article>
    )
}

export default Item
