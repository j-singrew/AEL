import time 
import random



def lookup_vehicle(fleet_number,vehicle_dict):
    vehicle = vehicle_dict.get(fleet_number)
    if  not vehicle:
        return "no vehicle found"
    return vehicle






def create_list(n) -> dict:
    vehicle_dict = {}
    vehicle_types = [
        'Toyota land cruiser',
        'BMW s200',
        'Ford Ranger',
        'Toyota Hilux',
        'Mercedes Sprinter',
        'Volkswagen Polo',
        'Nissan Navara',
        'Isuzu D-Max',
        'Toyota Corolla',
        'Ford Transit'
    ]

    crew_members = [
        'John H', 'Kurt Y', 'Kevin Z', 'Lenin L',
        'Joshua M', 'Baily K', 'James P', 'Michael T',
        'David K', 'Peter L', 'Samuel B', 'Daniel R',
        'Chris M', 'Robert W', 'Andrew S', 'Mark D'
    ]

    statuses = ['Available', 'In Use', 'Maintenance']

    for i in range(n):
        vehicle_id = str(n + i)

        vehicle_dict[vehicle_id] = {
            'Type': random.choice(vehicle_types),
            'Crew': random.sample(crew_members, random.randint(1, 3)),
            'Status': random.choice(statuses)
        }
    return vehicle_dict






list = create_list(100)

print("list size",len(list))
fleet_number = '80'
start_time_1 = time.perf_counter()
lookup_vehicle(fleet_number,list )
end_time_1= time.perf_counter()
start_time_2 = time.perf_counter()
for vehicle in list:
    if vehicle == fleet_number:
        result = vehicle
        break
end_time_2 = time.perf_counter()

elapsed_1 = end_time_1 - start_time_1
elapsed_2 = end_time_2 - start_time_2
print(f"Execution time for dictionary lookup: {elapsed_1:.6f} seconds")
print(f"Execution time for linear search  : {elapsed_2:.6f} seconds")
print()


list = create_list(1000)
print("list size",len(list))
fleet_number = '990'
start_time_1 = time.perf_counter()
lookup_vehicle(fleet_number,list )
end_time_1= time.perf_counter()
start_time_2 = time.perf_counter()
start_time_2 = time.perf_counter()
for vehicle in list:
    if vehicle == fleet_number:
        result = vehicle
        break
end_time_2 = time.perf_counter()

elapsed_1 = end_time_1 - start_time_1
elapsed_2 = end_time_2 - start_time_2
print(f"Execution time for dictionary lookup: {elapsed_1:.6f} seconds")
print(f"Execution time for linear search  : {elapsed_2:.6f} seconds")
print()



list = create_list(10000)
print("list size",len(list))
fleet_number = '9000'
start_time_1 = time.perf_counter()
lookup_vehicle(fleet_number,list )
end_time_1= time.perf_counter()
start_time_2 = time.perf_counter()
for vehicle in list:
    if vehicle == fleet_number:
        result = vehicle
        break
end_time_2 = time.perf_counter()

elapsed_1 = end_time_1 - start_time_1
elapsed_2 = end_time_2 - start_time_2
print(f"Execution time for dictionary lookup: {elapsed_1:.6f} seconds")
print(f"Execution time for linear search  : {elapsed_2:.6f} seconds")
print()



list = create_list(100000)
print("list size",len(list))
fleet_number = '9000'
start_time_1 = time.perf_counter()
lookup_vehicle(fleet_number,list )
end_time_1= time.perf_counter()
start_time_2 = time.perf_counter()
for vehicle in list:
    if vehicle == fleet_number:
        result = vehicle
        break
end_time_2 = time.perf_counter()

elapsed_1 = end_time_1 - start_time_1
elapsed_2 = end_time_2 - start_time_2
print(f"Execution time for dictionary lookup: {elapsed_1:.6f} seconds")
print(f"Execution time for linear search  : {elapsed_2:.6f} seconds")
print()




list = create_list(1000000)
print("list size",len(list))
fleet_number = '9000'
start_time_1 = time.perf_counter()
lookup_vehicle(fleet_number,list )
end_time_1= time.perf_counter()
start_time_2 = time.perf_counter()
for vehicle in list:
    if vehicle == fleet_number:
        result = vehicle
        break
end_time_2 = time.perf_counter()
elapsed_1 = end_time_1 - start_time_1
elapsed_2 = end_time_2 - start_time_2
print(f"Execution time for dictionary lookup: {elapsed_1:.6f} seconds")
print(f"Execution time for linear search  : {elapsed_2:.6f} seconds")
print()



list = create_list(10000000)
print("list size",len(list))
fleet_number = '9000'
start_time_1 = time.perf_counter()
lookup_vehicle(fleet_number,list )
end_time_1= time.perf_counter()
start_time_2 = time.perf_counter()
for vehicle in list:
    if vehicle == fleet_number:
        result = vehicle
        break
end_time_2 = time.perf_counter()

elapsed_1 = end_time_1 - start_time_1
elapsed_2 = end_time_2 - start_time_2
print(f"Execution time for dictionary lookup: {elapsed_1:.6f} seconds")
print(f"Execution time for linear search  : {elapsed_2:.6f} seconds")
print()


