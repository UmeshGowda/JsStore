dropDb is used to remove a database from browser storage.

JsStore

```
Connection.dropDb(function (){
	console.log('Db deleted successfully');
},
function (error) {
	alert(error.value);
});
```

[Example](/example/drop_db) [Next](#)