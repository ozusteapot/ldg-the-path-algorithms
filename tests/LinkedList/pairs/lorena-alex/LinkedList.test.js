const Solution = require('../../../../src/LinkedList/pairs/lorena-alex/LinkedList.js')
// const LinkedList = new Solution.LinkedList();
// const Node = new Solution.Node();
​
describe('Solution', () => {
    const list = new Solution.LinkedList();
    const node = new Solution.Node();
    test('can create a new list', () => {  
        expect(list).toBeDefined();
    })
​
    test('check for an empty list', () => {
        expect(list).toEqual(expect.any(Solution.LinkedList));
    })
​
    test('check for existing node', () => {
        expect(node).toBeDefined();
    })
​
    
})