
class SuburbNode:

    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


class BinarySearchTree:

    def __init__(self):
        self.root = None

    def add_suburb(self, suburb):

        new_node = SuburbNode(suburb)

        if self.root is None:
            self.root = new_node
            return

        current = self.root

        while True:

            if suburb.lower() < current.data.lower():

                if current.left is None:
                    current.left = new_node
                    return

                current = current.left

            elif suburb.lower() > current.data.lower():

                if current.right is None:
                    current.right = new_node
                    return

                current = current.right

            else:
                return  

    def find_suburb(self, suburb):

        current = self.root

        while current is not None:

            if suburb.lower() == current.data.lower():
                return True

            elif suburb.lower() < current.data.lower():
                current = current.left

            else:
                current = current.right

        return False

    def in_order_traversal(self, node):

        if node is None:
            return

        self.in_order_traversal(node.left)
        print(node.data)
        self.in_order_traversal(node.right)




bst = BinarySearchTree()

suburbs = [
    "Cape Town",
    "Bellville",
    "Cape Town",
    "Durbanville",
    "Goodwood",
    "Kuils River",
    "Milnerton",
    "Parow",
    "Stellenbosch"
]

for suburb in suburbs:
    bst.add_suburb(suburb)


bst.in_order_traversal(bst.root)


print( bst.find_suburb("Bellville"))
print( bst.find_suburb("Observatory"))