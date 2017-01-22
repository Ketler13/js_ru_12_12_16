import { OrderedMap } from 'immutable'

export function arrayToMap(arr, Model) {
    return arr.reduce((acc,entity) => {
        const model = new Model(entity)
        return acc.set(entity.id, model)
    }, new OrderedMap({}))
}

export function mapToArray(immutableMap) {
    return immutableMap.valueSeq().toArray()
}

export function generateRandomId() {
    return Date.now() + Math.random()
}

export function arrayFromRange(from, to) {
    let arr = []
    for (let i = from; i <= to; i++) {
        arr.push(i)
    }
    return arr
}
