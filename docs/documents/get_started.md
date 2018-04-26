---
Title: "Get Started"
Created Date: "26/04/2018"
Last Updated : "26/04/2018"
---

In this tutorial we will learn how to do crud operation in jsstore.

Here is the working demo of below tutorial -

<script async src="https://jsfiddle.net/ujjwalguptaofficial/w850g25g/14/embed/"></script>

#### Installation

The simplest way to install jsstore is by using cdn. But since JsStore needs to be executed inside web worker for maximum performance and browsers does not allow cdn script for web worker. So the best way will be to download the script directly and use it.

You can download the script from [github](https://github.com/ujjwalguptaofficial/JsStore "jsstore github link") or from [npm](https://www.npmjs.com/package/jsstore "jsstore npm link")

<script src="https://gist.github.com/ujjwalguptaofficial/ab461acfd8c7307071611c0fee3266c5.js"></script>

For more about installation check out the [installation](/tutorial/installation)

#### Creating Database

JsStore follows SQL approach to create database - A database is consist of tables and a table is consist of columns.

Lets see how to create a database schema in JsStore.

<script src="https://gist.github.com/ujjwalguptaofficial/ad1834836a85c23b0d56527a13053330.js"></script>

As written in the code, you can define the constraints like autoincrement, datatype, default, notnull as you can do in SQL.

Now we need to create the database in indexeddb. So, lets create the database.

<script src="https://gist.github.com/ujjwalguptaofficial/746bbfda9c5d2630c3fe730bd420faa7.js"></script>

In the above code -

* Line 1 - Storing the JsStore connection instance in a variable 'Connection'.
* Line 2 - Declared a function initJsStore which will initiate the jsstore. Basically this will create database if it does not exist or open if it exist.

**Note :-** The connection object will be used to execute the further query. So we dont need to initiate it multiple times.

#### Inserting data

JsStore provides insert API for inserting data.

<script src="https://gist.github.com/ujjwalguptaofficial/5ea9288f35e13512bbc335763905a750.js"></script>
  
#### Read data

JsStore provides select API for reading data. Lets say I want to retrieve the record which contains Id 5.

<script src="https://gist.github.com/ujjwalguptaofficial/0722d1f86747b5fa69e10a253b96a2e9.js"></script>

You can also perform operations like- "IN", "LIKE", "BETWEEN", "LIMIT" etc.

#### Updating data

Lets say I want to update the product Quantity to 2000 which contains the item name - 'black'.

<script src="https://gist.github.com/ujjwalguptaofficial/48f48b5a4b59328c803f522a80315269.js"></script>

#### Delete data

Lets say I want to delete the product which contains the id - 10.

<script src="https://gist.github.com/ujjwalguptaofficial/52444fddc835a5e57bcf6df5e725443d.js"></script>
    
We hope - you have understood the above article. Now lets make something awesome.

##### * Check it out other articles -

* [Using JsStore in Angular5](http://http://ujjwalguptaofficial.blogspot.in/2017/10/angular4-crud-operation-in-indexeddb.html)

<style>
    iframe {
        height: 300px;
    }

    .row {
        display: block;
    }
</style>
