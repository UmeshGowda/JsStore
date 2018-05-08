---
Title: "Clear"
Created Date: "08/05/2018"
Last Updated : "08/05/2018"
---

clear is used to remove all records from a table. You can also use delete api to clear records from particular table but difference is that clear will be fast and wont return no of record deleted while delete will return no of record deleted.

```
Connection.clear(table_name, function() {
    console.log('data cleared successfully');
},function(error) {
  	alert(error.value);
});
```

[Example](/example/clear) [Next](#)