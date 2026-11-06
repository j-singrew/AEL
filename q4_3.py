



class Hash:

    DELETED = object()

    def __init__(self):
        self.size = 10
        self.table = [None] * self.size

        return 

    def hashing(self,suburb):

        hsh =hash(suburb)% len(self.table)
        return hsh


    def add_suburb(self,subur):

        index  = self.hashing(subur) 
        counter = 0


        while self.table[index] is not None:


            if counter == self.size-1:
                return 

            if self.table[index] == subur:
                return 
            index = (index + 1) % self.size
            
            counter+=1
    
        self.table[index] = subur
    

    def get_table(self):
        return self.table

    
    def get_suburb(self,key):

        index = self.hashing(key)
        counter = 0

        while self.table[index] is not None:
            
            if counter == self.size-1:
                return 
            if self.table[index] == key:
                return index

            index = (index + 1) % self.size
            counter +=1

        return 


    def remove_suburb(self, suburb_name):

        index = self.get_suburb(suburb_name)

        if index is None:
            return False

        self.table[index] = self.DELETED

        return self.table

        














        

        



hsh = Hash()


sub_1 = "Milan"
sub_2 ="Florida"
sub_3 = "Birmingam"

sub_4 = "Midrand"
sub_5 ="Mbweni"
sub_6 = "Durbanville"

sub_7 = "Kuils river"
sub_8 ="Delft"
sub_9 = "Hoefroem"


sub_10 = "Westbridge"
sub_11="Hoeg en droeg"


suburbs = [ sub_1 ,sub_2,sub_3,sub_4,sub_5,sub_6,sub_7,sub_8,sub_9,sub_10,sub_11]
for suburbia in suburbs:
    hsh.add_suburb(suburbia)

print()
print("Initial suburb table")
print(hsh.get_table())
print()
print("Delete suburb Birmingam")
print(hsh.remove_suburb("Birmingam"))
print()
print("Deletion test Birmingam")
print(hsh.get_suburb("Birmingam"))
print()