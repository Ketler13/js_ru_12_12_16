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

export function localize(phrase, lang, src) {
    switch (lang) {
        case 'en':
            return src[phrase][0]

        case 'ru':
            return src[phrase][1]
    }
}
