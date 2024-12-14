---
title: "MapReduce: Simplified Data Processing on Large Clusters"
description: "MapReduce is a programming model used in distributed systems to process large datasets efficiently by dividing tasks into simple map and reduce functions."
pubDate: "13 December 2024"
keywords: "mapreduce, distributed systems, fault tolerance, network overhead, parallel computation, distributed word count, key-value pairs, master node, map function, reduce function"
tags: ["distributed computation", "paper review"]
draft: false
---
Suppose you have a task to process a very large input dataset and generate an output. It's obviously going to be time-consuming, inefficient, and perhaps impossible to run it on a single machine, so you adopt a distributed system and by extension its challenges.

This [paper](https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf) authored by Jeffery Dean and Sanjay in 2004 implements an abstraction that lets you express your computation using two simple functions; map and reduce without the responsibility of running a distributed system.

The map function takes an input key/value pair and produces an intermediate key/value pair, the reduce function accepts an intermediate key and a list of all values associated with that key, and aggregates it into a single unit.

```
map(k1, v1) -> [(k2, v2)]
reduce(k2, list(v2)) -> list(v2)
```

A common application of this model is in a distributed word counter program where you have a very large input file and want to count the occurrence of each word in the file. Instead of running this on a single machine, you divide the input file into smaller chunks and distribute it across several machines.
The `map` function in this scenario takes in a key and value (file name and file content) and records each word along with its associated count in a file. The `reduce` function takes a word and a list of the associated counts and combines it into a single value.

```
map (filename string, filecontent string) -> {
    for each word in filecontent
        Emit(word, 1)
}

reduce (word string, occurences int[]) -> {
    result := 0
    for each value in occurences
        result += value
    Emit(word, result)
}
```

The MapReduce library runs this computation across the various worker nodes. It uses a master node to coordinate which worker node runs a map or reduce function. It also handles potential failures within the cluster. Here's an overview of how the library works.
![MapReduce Execution Overview](/images/map-reduce-execution.png)

## Discussions

### Fault Tolerance

The implementation uses a functional approach (ie it uses [pure functions](https://stackoverflow.com/questions/55815641/what-exactly-is-a-pure-function-when-we-are-talking-about-a-function-within-a-fu)) allowing it to rerun mappers and reducers on the same data. In case of failure of one or more worker nodes, it simply just re executes the computation on another idle worker. What if the master node fails, what happens then? The system crashes; there's no mechanism to tolerate the failure of the master node.

### Network Overhead

Workers already have the input data on their local file systems, allowing them to read the data without making expensive network calls. This is primarily true for 'mapper workers,' whereas 'reduce workers' have to make remote calls to get the output of the map function from their respective workers. Either way, the amount of network calls made within the system is significatly reduced.
