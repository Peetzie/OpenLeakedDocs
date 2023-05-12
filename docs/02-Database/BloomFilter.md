---
sidebar-position: 3
---
# Redis - BloomFilter

## A brief introduction

Not everybody is familar with Bloom Filters of which we give a short introduction in the following section. 

In addition to the cache, we make use of a Bloom Filter data structure to further improve the responsiveness of our application.
A Bloom Filter is a well known solution providing probabilistic responses to queries regarding values in a set. 

A Bloom Filter can answer a simple query of whether a given value is part of a specific set. 
By using byte arrays, the Bloom Filter can provide an accurate response that an element is **not** part of the set. Additionally, within a certain probabilistic range, 
the Bloom Filter can provide a response that the element might be in the set. In the latter case, a lookup in the persistent storage layer is performed to determine whether the element is indeed part of the set. 

By utilises Bloom Filters, we can significantly improve the speed and effeciency of our systems operations, particularly given the size of our dataset. 
:::info
The current data set is estimated to consume 1.5 TB of space. Yet much more data is easily available. Allowing the Bloom Filter to be apart of future proving for additional work.
:::

## Configuration

Redis to the rescue - Redis, specifically the Redis Stack contains probabilistic data structures. This includes the 
Bloom Filter and Cuckoo Filter. 
Making use of the data strucutre is easily handled by the use of Docker containerization. 

Connecting the Bloom Filter is handled by ```JedisPool``` which is specified in the associted service class in the ```backend```.
Here we define the methods that we will utilize. 
> - BFExists
>  - Checks if an element is part of a set.

```java
    public long BFFExists(String key, String value) {
        try (Jedis jedis = jedisPool.getResource()) {
            return (long) jedis.sendCommand(RedisBloomProtocol.BloomFilterCommand.EXISTS, key, value);
        } catch (Exception ignored) {
            return -1;
        }
    }
```

:::tip
An entire overview of commands possible to implement is listed on the Bloom Filter [documentation site](https://redis.io/commands/?name=bf)
:::


## Creating the Filter
Spring Boot does not build the filter. Instead this is done by a Python script. 
The reason for this design is to allow users to reuse filters and allow server maintaince (the filter are lost upon server shutdown). 
```RedisBloom```the module in Redis Stack contianing the Filter has methods available for dumping filters using Python and Loading them back in. 
By the use of their documentation we have created a simple application using two python scripts; ```Mover.py``` and ```Builder.py```

Using ```Mover.py``` to construct the filter. We load in TSV files. Essentially creating a filter for each searchable type. 
The capacity of the filter is set with the variable; ```BF_CAPACITY = 405635679``` - allowing plenty of capacity.
Once the filter(s) are build they can be utilized through the backend if build on the server or transfered to the server. 

### Transfering / loading a previously created filter
The script ```Builder.py``` is a small terminal applciation that allows dumping and loading the filters to persistent storage. 
The script makes use of Pandas dataframes to create python objects containing iterative dump strings. These are then deserialized to a Pickle file allowing for consize saving of the python object. 
With the Pickle file you can transfer it to any server available. 

Using the same script you are able to reconstruct the filter. 

As a small terminal application the task of loading and dumping filters are made alot easier as it takes you through all steps required.
:::caution
It is difficult to make the dumping process to be handled by other languages than python - the dumps are byte safe arrays which many compresses / alters when deserialized or saved to disk. 
:::
## Launching the script
A brief guide to running the scripts are provided here

### Requirements
A compination of python packages are required. 
> - Dask
> - Redis
> - TQDM
> - Pandas
:::tip
We commend setting up a virtual enviroment instead of a global install.

You can read more [here](https://docs.python.org/3/library/venv.html).
:::
To install all required packages run the following command:
```zsh
python -m pip install "dask[complete]" "pandas" "tqdm"  "redis"
```
Now simply run either python file by:
```zsh
python <python-file.py>
```
:::caution
It may take several hours to build the Bloom Filter depending on size.
Whilst loading an existing filter should be done in a couple of seconds.
:::
