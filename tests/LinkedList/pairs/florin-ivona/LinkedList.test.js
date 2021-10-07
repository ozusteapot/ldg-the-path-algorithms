const LinkedList = require('../../../../src/LinkedList/pairs/florin-ivona/LinkedList')

describe('LinkedList', () => {
    test('can create a new list', () => {
        const list = new LinkedList()

        expect(list).toBeDefined()
    })
})
