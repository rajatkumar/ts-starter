/**
 * Defines the shape of a Linkable Node in your LinkedList
 */
export type LinkableNode<T> =
    | {
          value: T;
          next?: LinkableNode<T>;
      }
    | undefined;

/**
 * The LinkedList implementation
 */
export default class LinkedList<T> {
    tail: LinkableNode<T> = undefined;
    constructor(public head: LinkableNode<T>) {
        this.identifyTail(head);
    }

    /**
     * Extracts all the Node values and returns it as an array
     */
    toArray(): T[] {
        let currentNode = this.head;
        const list: T[] = [];
        while (currentNode) {
            list.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return list;
    }

    /**
     * Private function to iterate over the linked list and store a reference to the
     * tail node
     */
    private identifyTail(headNode: LinkableNode<T>): void {
        let currentNode = headNode;
        while (currentNode && currentNode.next) {
            currentNode = currentNode.next;
        }
        this.tail = currentNode;
    }

    /**
     * Adds a new node to the end of the LinkedList with the provided value
     */
    append(val: T): void {
        const node = LinkedList.createNode(val);
        if (this.tail) {
            this.tail.next = node;
        }
        this.tail = node;
    }
    // Static functions on the object
    /**
     * Utility function to create a new Node
     */
    static createNode<T>(value: T, next?: LinkableNode<T>): LinkableNode<T> {
        return {
            value,
            next
        };
    }
    /**
     * Utility function to convert all the values in an array into a new LinkedList
     */
    static createFromArray<T>(list: T[]): LinkedList<T> | undefined {
        let currentNode: LinkableNode<T>;
        let newLL: LinkedList<T> | undefined = undefined;
        list.forEach((item, index) => {
            if (index > 0 && newLL) {
                // rest of the nodes
                newLL.append(item);
            } else {
                // first node
                currentNode = LinkedList.createNode(item);
                newLL = new LinkedList(currentNode);
            }
        });
        return newLL;
    }
}
