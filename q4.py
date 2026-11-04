



class Hash:


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
        print("This index",index)
        counter = 0

        while self.table[index] is not None:
            
            if counter == self.size-1:
                return 
            if self.table[index] == key:
                return index

            index = (index + 1) % self.size
            counter +=1

        return None



        

        










hsh = Hash()

sub_1 = "milan"
sub_2 ="florida"
sub_3 = "birmingam"

sub_4 = "lagos"
sub_5 ="abuja"
sub_6 = "kinchasa"

sub_7 = "kuils river"
sub_8 ="delft"
sub_9 = "paarl"


sub_10 = "kur"
sub_11="de"
"""

sub_12= "p"
"""
suburbs = [ sub_1 ,sub_2,sub_3,sub_4,sub_5,sub_6,sub_7,sub_8,sub_9,sub_10,sub_11]
for suburbia in suburbs:
    hsh.add_suburb(suburbia)


print(hsh.get_table())
print(hsh.get_suburb("milan"))


