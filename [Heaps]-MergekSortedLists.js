/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function mergeLists(a, b) {
    let heap = new ListNode(0);
    let temp = heap
    while (a !=null && b != null) {
        if (a.val < b.val) {
            temp.next = a;
            a = a.next
        } else {
            temp.next = b;
            b = b.next
        }
        temp = temp.next
    }    
    return heap.next;
}

var mergeKLists = function(lists) {
    if (lists === 0) return null
    while (lists.length > 1) {
        let a = lists.shift();
        console.log(a);
        let b = lists.shift();
        const result = mergeLists(a, b);
        lists.push(result)
    }
    return lists
};

let lists = [[1,4,5],[1,3,4],[2,6]]

// unsolved