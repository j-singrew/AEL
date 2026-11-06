from queue import PriorityQueue


class SafeRoute:

    def __init__(self):
        self.queue = PriorityQueue()


    def put(self,item):

        if len(item) < 3:
            return "missing values detected operation terminated"

        self.queue.put(item)

    def get(self):
        if self.get_size() == 0:
            return "No calls available to dispatch"
        
        return self.queue.get()

    def get_size(self):
        return self.queue.qsize()



sp = SafeRoute()


print("Missig value put test")
print()
print("Expected outcome  - operation will be rejected by validation")
print(sp.put((sp.get_size(), '')))
print()


print("Empty list put test")
print("Expected outcome  - operation will be rejected by validation")
print()
print(sp.put(()))
print()

print("valid list test")
print()
print(sp.put((1,sp.get_size(), '')))
print()

print("Incorrect datatype put test - Failure")
print("Expected outcome  - TypeError ")

print(sp.put(("hello",sp.get_size(),'')))
print()











"""
To handle high priority incident in the FIFO desired order i added a secondary index ,ensuring that older critical calls are handle first over newer critical calls.

Incident key 
-----------
1 - critical incident 
2 - sever incidents
3 - routine incidents 


"""
"""
sp.put((1,sp.get_size(), 'multi vehicle colision'))
sp.put((3,sp.get_size(), 'missing goat'))
sp.put((3,sp.get_size(), 'missing goat'))
sp.put((3,sp.get_size(), 'cat stuck in tree'))
sp.put((2,sp.get_size(), 'person stuck in tree'))
sp.put((1,sp.get_size(), 'chemical factory fire'))
"""