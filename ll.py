

class Node:

    def __init__(self,data):
        self.data = data
        self.next = None


class LinkedList:

    def __init__(self):
        self.head = None

    def insert_at_end(self,data):

        node = Node(data)

        if self.head is None:
            self.head = node
            return 

        current = self.head

        while current.next is not None:
            current = current.next

        current.next = node


    def remove_first(self):

        if self.head == None:
            return ("linked list is empty")
        


ll = LinkedList()


node1 = ll.insert_at_end(40)

node2 = ll.insert_at_end(70)
node3 = ll.insert_at_end(49)


print(ll.remove_first())  
print(ll.head.next.data)