const LinkedList = require('../../../../src/LinkedList/pairs/lorena-alex')

describe('LinkedList', () => {
    test('can create a new list', () => {
        const list = new LinkedList()

        expect(list).toBeDefined()
    })
})
