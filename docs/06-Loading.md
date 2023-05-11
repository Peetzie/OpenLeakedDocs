# Upload data

With the [initial install](./intro#-installation) there is no data contained in the database running on the machine. 
In this section we walk through the steps required to parse data and fill the database with a simple example.

1.  Download breach data to your preffered location (May be the server)
    :::info
    We will not provide links to any breaches due to security concerns
    :::
2. Within ```./dataparsing/LexicalAnalysis/``` run the Main.java. 
    ```bash
    java Main.java <path-to/config.yml> <path-to-tsv-fodler> <OPTIONAL>
    ```
    Where ```<OPTIONAL>```is a switch for hashing. ```-Hf```, turns off hashing ```-Hn``` turns on hashing.
    ```<path-to-tsv-fodler>```is the output directory for ```.tsv```files
    and ```config.yml```is the configuration file. 
    An example of this is provided here for the *Collection#1* dataset.
    ```bash
    ["Collection #1"]
    id=1
    path="/mnt/smallssd/col1"
    date="YYYY/mm/DD"
    verified=false
    source="SomeLink"
    iconURL="SomeIconURL"
    summary="Summary"
    description="Description"
    ```
    Note that the ```path```indicates the full path to the folder containing all files and subdirectories of the breach.
    :::caution
    The mainter is responsible to update the ID in ```config.yml``` to avoid conflicts in the database.
    :::
3. Sort the data using UNIX style commands. 
    :::tip
    If you don't have a linux based system you may use [WSL](https://learn.microsoft.com/en-us/windows/wsl/install)

    Output is the same as current directory
    :::
    ```bash
    sort --<path-to-tsv-fodler> --<No-of-threads> --buffer-size=<GB> -- u -o
    ```
    ```<No-of-threads>``` Defines the number of threads to be used for parrallel sorting. 
    ```<buffer-size>``` defines the ammount of memory available for the buffer in Gigabyte

4. Run the ```new data indexer```