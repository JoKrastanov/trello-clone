import { trelloNode } from "./axios-config";

export const getLists = async () => {
    try {
        const resp = await trelloNode.get('lists')
        return resp.data
    } catch (err) {
        console.log(err)
    }
}

export const postList = (name) => {
    var data = { name: name }
    try {
        trelloNode.post('lists', data)
    } catch (err) {
        console.log(err)
    }
}

export const createCard = (id, name) => {
    try {
        trelloNode.patch(`lists/${id}/add/${name}`)
    } catch (err) {
        console.log(err)
    }
}

export const renameList = (id, newName) => {
    try {
        trelloNode.patch(`lists/${id}/rename/${newName}`)
    } catch (err) {
        console.log(err)
    }
}

export const renameCard = (id, index, newName) => {
    try {
        trelloNode.patch(`lists/${id}/edit/${index}/${newName}`)
    } catch (err) {
        console.log(err)
    }
}