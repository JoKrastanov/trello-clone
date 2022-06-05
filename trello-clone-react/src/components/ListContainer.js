import React, { useState, useEffect } from 'react'
import "../stylesheets/ListContainer.css"

import { getLists, postList } from '../services/list';

import CreateList from './CreateList'
import TrelloList from './TrelloList'


function ListContainer() {

    const [lists, setLists] = useState(null)

    const loadLists = async () => {
        setLists(await getLists())
    }

    useEffect(() => {
        loadLists()
    }, [])

    const addList = (name) => {
        var newList = {
            name: name,
            cards: []
        }
        setLists(lists.concat(newList))
        postList(newList.name)
    }
    if (lists !== null) {
        return (
            <div className='list-container'>
                {lists.map((list, index) => (
                    <TrelloList key={index} list={list} addList={addList} />
                ))}
                <CreateList addList={addList} />
            </div>
        )
    } else {
        return (
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        )
    }
}

export default ListContainer