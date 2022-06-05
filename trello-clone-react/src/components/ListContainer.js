import React, { useState } from 'react'
import "../stylesheets/ListContainer.css"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import CreateList from './CreateList'
import TrelloList from './TrelloList'

export const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
export const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",

    // styles we need to apply on draggables
    ...draggableStyle
});


function ListContainer() {

    const [lists, setLists] = useState([
        {
            name: "Backlog",
            cards: [
                "Hello",
                "World"
            ]
        },
        {
            name: "ToDo",
            cards: [
                "Goodbye",
                "World"
            ]
        },
        {
            name: "ToDos",
            cards: []
        }
    ])


    function onDragEnd(result) {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }
        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;

        if (sInd === dInd) {
            const items = reorder(lists[sInd], source.index, destination.index);
            const newState = [...lists];
            newState[sInd] = items;
            setLists(newState);
        } else {
            const result = move(lists[sInd], lists[dInd], source, destination);
            const newState = [...lists];
            newState[sInd] = result[sInd];
            newState[dInd] = result[dInd];

            setLists(newState.filter(group => group.length));
        }
    }

    const addList = (name) => {
        var newList = {
            name: name,
            cards: []
        }
        setLists(lists.concat(newList))
    }

    return (
                    <div className='list-container'>
                        {lists.map((list, index) => (
                            <TrelloList key={index} list={list} addList={addList} index={index}/>
                        )
                        )}
                        <CreateList addList={addList} />
                    </div>
    )
}

export default ListContainer