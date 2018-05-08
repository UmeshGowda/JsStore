You can use Where to filter results.

Sql

```
Delete From Table_Name;
Where
    Column1=some_value
and
    Column2=some_another_value;
```

JsStore

```
Connection.remove({
    From: "Table_Name",
    Where: {
        Column1: some_value,
        Column2: some_another_value
    },
    OnSuccess: function(rowsDeleted) {
        //results will contains no of rows deleted.
        console.log(results);
    },
    OnError: function(error) {
        alert(error.value);
    }
});
```

[Example](/example/delete) [Next](#)