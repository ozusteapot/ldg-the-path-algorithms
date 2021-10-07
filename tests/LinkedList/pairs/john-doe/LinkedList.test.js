const LinkedList = require('../../../../src/LinkedList/pairs/john-doe/LinkedList')

describe('LinkedList', () => {
    test('can create a new list', () => {
        const list = new LinkedList()

        expect(list).toBeDefined()
    })
})
