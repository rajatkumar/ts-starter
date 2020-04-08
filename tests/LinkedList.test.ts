import LinkedList, { LinkableNode } from './../src/index';

describe('Linked List Test', () => {
    it('should create a Linked List', () => {
        const nodeHead: LinkableNode<string> = {
            value: 'Head'
        };
        const nodeTail: LinkableNode<string> = {
            value: 'Tail'
        };
        nodeHead.next = nodeTail;
        const ll = new LinkedList(nodeHead);
        expect(ll?.head?.value).toBe('Head');
        expect(ll?.tail?.value).toBe('Tail');
    });
    it('should create a Linked List from Array', () => {
        const ll = LinkedList.createFromArray([1, 2, 3]);
        expect(ll).toBeTruthy();
        expect(ll?.head?.value).toBe(1);
        expect(ll?.tail?.value).toBe(3);
    });

    it('should create an Array from a Linked List', () => {
        const nodeHead: LinkableNode<string> = {
            value: '1'
        };
        const nodeMid: LinkableNode<string> = {
            value: '2'
        };
        const nodeTail: LinkableNode<string> = {
            value: '3'
        };
        nodeHead.next = nodeMid;
        nodeMid.next = nodeTail;
        const ll = new LinkedList(nodeHead);
        ll.append('4');
        const arrayStrings = ll.toArray();
        expect(arrayStrings).toEqual(['1', '2', '3', '4']);
    });
});
