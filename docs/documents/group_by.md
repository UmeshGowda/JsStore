The Group By is used to group the result-set by one or more columns. You can also use Aggregate functions with group by just like you use in SQL.

Sql (Where)

```
Select * From Table_Name;
Group By
Column_Name
```

JsStore

```
Connection.select({
    From: "Table_Name",
    GroupBy: Column_Name,
    // You can specify multiple columns at a time by giving the columns name in an array.
    // GroupBy:['column1','column2']
    OnSuccess: function(results) {
        //results will be array of objects.
        console.log(results);
    },
    OnError: function(error) {
        alert(error.value);
    }
});
```

