---
Title: "Count"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

You can use Where and WhereIn to filter results.

#### Sql

```
Select count(*) From Table_Name;
Where
    Column1=some_value
and
    Column2=some_another_value;
```

#### JsStore

```
Connection.count({
    From: "Table_Name",
    Where: {
        Column1: some_value,
        Column2: some_another_value
    },
    OnSuccess: function(results) {
        //results will be array of objects.
        console.log(results);
    },
    OnError: function(error) {
        alert(error.value);
    }
});
```

[Example](/example/count) [Next](#)