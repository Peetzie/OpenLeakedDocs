# Redis cache
A cache layer in the database is utilized to improve overall performance.
It acts as a layer between the application and database. 
The data is a subset of data of the original set now contained in memory rather than on disk. 
As memory is more effective a speedup is achieved. 
The cache-layer stores querries that have been entered in a fixed time, if they should be querried again. 
This is known as the _cost to live_ principal. 
It has one disadvantage: Lets say a user querries an email _mike@example.com_, the responose is not contained. 
Now the answer is stored in chace for that querry. 
What happens if the database is updated with a leak where that mail is contained? - It would provide a wrong answer. 
This can be accomodated by implementing a drop of the cache everytime the database is updated. 

### Filters
Further improving speed of the database; is the use of filters. 
The traditional filter is a bloom filter. 
This is a space-effecient data strcutres that tests whether an element is contained in a set. 
Importantly for this feature is the fact that false negatives are not possible. Meaning that it will return; 
not in set | possibly in set. 
This makes it fast for getting a response of not being breached. 

#### XOR filter
An improvement over the Bloom filter is the XOR filter. It provdies us with the same probabilistic outcomes as the 
Bloomfilter, however at an even faster rate and using less memory. 
XOR filters are not ready-made in Redis, but is implemented in a custom modules which is loaded with the following 
argument on runtime. Notice this has been implemented in the Dockerfile already. 

```
-- Load-Module "/var/lib/redis/modules/redis_xorfilter_module.so"
```

The module is written directly in C and compiled on docker compose. 

#### Commands available

The XOR filter supports the following querries and should be used in the following order to get started: 

```
x.allocate int
```
Takes an integer as input and allocates the size of filter based on int.

```
x.populate int
```
Populates the filter with integers from 0..int


From here to querry whether a key is contained 
```
x.contains int
```
Response: true | false whether or not a given key is contained in the filer.
