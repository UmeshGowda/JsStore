---
Title: "Limit"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

Limit is used to specify the number of records to return. It is available with only select.

#### Sql

```
Select * from Table_Name Limit number;
```

#### JsStore

```
Connection.select({
    From: "Table_Name",
    Limit: number,
    OnSuccess: function(results) {
        //results will be array of objects.
        console.log(results);
    },
    OnError: function(error) {
        alert(error.value);
    }
});
```