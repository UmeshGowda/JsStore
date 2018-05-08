var Customers = {
    Name: 'Customers',
    Columns: [{
            Name: "CustomerID",
            PrimaryKey: true,
            AutoIncrement: true
        },
        {
            Name: "CustomerName",
            NotNull: true,
            DataType: 'string'
        },
        {
            Name: "ContactName",
            NotNull: true,
            DataType: 'string'
        },
        {
            Name: "Address",
            NotNull: true,
            DataType: 'string'
        },
        {
            Name: "City",
            NotNull: true,
            DataType: 'string'
        },
        {
            Name: "PostalCode",
            DataType: 'string'
        },
        {
            Name: "Country",
            NotNull: true,
            DataType: 'string'
        }
    ]
};

var Categories = {
    Name: 'Categories',
    Columns: [{
            Name: "CategoryID",
            PrimaryKey: true,
            AutoIncrement: true
        },
        {
            Name: "CategoryName",
            NotNull: true,
            DataType: 'string'
        },
        {
            Name: "Description",
            NotNull: true,
            DataType: 'string'
        }
    ]
}

var Employees = {
    Name: 'Employees',
    Columns: [{
            Name: "EmployeeID",
            PrimaryKey: true,
            AutoIncrement: true
        },
        {
            Name: "LastName",
            NotNull: true,
            DataType: 'string'
        },
        {
            Name: "BirthDate",
            NotNull: true,
            DataType: 'string'
        },
        {
            Name: "Photo",
            NotNull: true,
            DataType: 'string'
        },
        {
            Name: "Notes",
            DataType: 'string'
        }
    ]
}

var OrderDetails = {
    Name: 'OrderDetails',
    Columns: [{
            Name: "OrderDetailID",
            PrimaryKey: true,
            AutoIncrement: true
        },
        {
            Name: "OrderID",
            NotNull: true,
            DataType: 'number'
        },
        {
            Name: "ProductID",
            NotNull: true,
            DataType: 'number'
        },
        {
            Name: "Quantity",
            NotNull: true,
            DataType: 'number'
        }
    ]
}

var Orders = {
    Name: 'Orders',
    Columns: [{
            Name: "OrderID",
            PrimaryKey: true
        },
        {
            Name: "CustomerID",
            NotNull: true,
            DataType: 'number'
        },
        {
            Name: "EmployeeID",
            NotNull: true,
            DataType: 'number'
        },
        {
            Name: "OrderDate",
            NotNull: true,
            DataType: 'string'
        },
        {
            Name: "ShipperID",
            NotNull: true,
            DataType: 'number'
        }
    ]
}

var Products = {
    Name: 'Products',
    Columns: [{
            Name: "ProductID",
            PrimaryKey: true,
            AutoIncrement: true
        },
        {
            Name: "ProductName",
            NotNull: true,
            DataType: 'string'
        },
        {
            Name: "SupplierID",
            NotNull: true,
            DataType: 'number'
        },
        {
            Name: "CategoryID",
            NotNull: true,
            DataType: 'number'
        },
        {
            Name: "Unit",
            NotNull: true,
            DataType: 'string'
        },
        {
            Name: "Price",
            NotNull: true,
            DataType: 'number'
        }
    ]
}

var Shippers = {
    Name: 'Shippers',
    Columns: [{
            Name: "ShipperID",
            PrimaryKey: true,
            AutoIncrement: true
        },
        {
            Name: "ShipperName",
            NotNull: true,
            DataType: 'string'
        },
        {
            Name: "Phone",
            NotNull: true,
            DataType: 'string'
        }
    ]
}

var Suppliers = {
    Name: 'Suppliers',
    Columns: [{
            Name: "SupplierID",
            PrimaryKey: true,
            AutoIncrement: true
        },
        {
            Name: "SupplierName",
            NotNull: true,
            DataType: 'string'
        },
        {
            Name: "ContactName",
            NotNull: true,
            DataType: 'string'
        },
        {
            Name: "Address",
            NotNull: true,
            DataType: 'string'
        },
        {
            Name: "City",
            NotNull: true,
            DataType: 'string'
        },
        {
            Name: "PostalCode",
            NotNull: true,
            DataType: 'string'
        },
        {
            Name: "Country",
            NotNull: true,
            DataType: 'string'
        },
        {
            Name: "Phone",
            NotNull: true,
            DataType: 'string'
        }
    ]
}

var DataBase = {
    Name: "Demo",
    Tables: [Customers, Categories, Employees, OrderDetails, Orders, Products, Shippers, Suppliers]
};

function onDataInserted() {
    ++TableInsertCount;
    if (TableInsertCount == 8) {
        setStatusMsg('All data inserted');
        Dialog.closeModal();
        setRecordCount();
    }
}

function insertIntoDb() {
    insertCustomers();
    insertCategories();
    insertEmployees();
    insertOrderDetails();
    insertOrders();
    insertProducts();
    insertShippers();
    insertSuppliers();
}

function insertCustomers() {
    $.getJSON("/demodb/Customers.json", function (results) {
        setStatusMsg('Inserting data into table Customers');
        DbCon.insert({
            Into: 'Customers',
            Values: results,
            OnSuccess: function (rowsInserted) {
                var Msg = rowsInserted + " rows inserted for table customers";
                console.log(Msg);
                setStatusMsg(Msg);
                onDataInserted();
            },
            OnError: function (err) {
                console.error(err);
            }
        })
    })
}

function insertCategories() {
    $.getJSON("/demodb/Categories.json", function (results) {
        setStatusMsg('Inserting data into table Categories');
        DbCon.insert({
            Into: 'Categories',
            Values: results,
            OnSuccess: function (rowsInserted) {
                var Msg = rowsInserted + " rows inserted for table Categories";
                console.log(Msg);
                setStatusMsg(Msg);
                onDataInserted();
            },
            OnError: function (err) {
                console.error(err);
            }
        })
    })
}

function insertEmployees() {
    $.getJSON("/demodb/Employees.json", function (results) {
        setStatusMsg('Inserting data into table Employees');
        DbCon.insert({
            Into: 'Employees',
            Values: results,
            OnSuccess: function (rowsInserted) {
                var Msg = rowsInserted + " rows inserted for table Employees";
                console.log(Msg);
                setStatusMsg(Msg);
                onDataInserted();
            },
            OnError: function (err) {
                console.error(err);
            }
        })
    })
}

function insertOrderDetails() {
    $.getJSON("/demodb/OrderDetails.json", function (results) {
        setStatusMsg('Inserting data into table OrderDetails');
        DbCon.insert({
            Into: 'OrderDetails',
            Values: results,
            OnSuccess: function (rowsInserted) {
                var Msg = rowsInserted + " rows inserted for table OrderDetails";
                console.log(Msg);
                setStatusMsg(Msg);
                onDataInserted();
            },
            OnError: function (err) {
                console.error(err);
            }
        })
    })
}


function insertOrders() {
    $.getJSON("/demodb/Orders.json", function (results) {
        setStatusMsg('Inserting data into table Orders');
        DbCon.insert({
            Into: 'Orders',
            Values: results,
            SkipDataCheck: true,
            OnSuccess: function (rowsInserted) {
                var Msg = rowsInserted + " rows inserted for table Orders";
                console.log(Msg);
                setStatusMsg(Msg);
                onDataInserted();
            },
            OnError: function (err) {
                console.error(err);
            }
        })
    })
}

function insertProducts() {
    $.getJSON("/demodb/Products.json", function (results) {
        setStatusMsg('Inserting data into table Products');
        DbCon.insert({
            Into: 'Products',
            Values: results,
            OnSuccess: function (rowsInserted) {
                var Msg = rowsInserted + " rows inserted for table Products";
                console.log(Msg);
                setStatusMsg(Msg);
                onDataInserted();
            },
            OnError: function (err) {
                console.error(err);
            }
        })
    })
}

function insertShippers() {
    $.getJSON("/demodb/Shippers.json", function (results) {
        setStatusMsg('Inserting data into table Shippers');
        DbCon.insert({
            Into: 'Shippers',
            Values: results,
            OnSuccess: function (rowsInserted) {
                var Msg = rowsInserted + " rows inserted for table Shippers";
                console.log(Msg);
                setStatusMsg(Msg);
                onDataInserted();
            },
            OnError: function (err) {
                console.error(err);
            }
        })
    })
}

function insertSuppliers() {
    $.getJSON("/demodb/Suppliers.json", function (results) {
        setStatusMsg('Inserting data into table Suppliers');
        DbCon.insert({
            Into: 'Suppliers',
            Values: results,
            OnSuccess: function (rowsInserted) {
                var Msg = rowsInserted + " rows inserted for table Suppliers";
                console.log(Msg);
                setStatusMsg(Msg);
                onDataInserted();
            },
            OnError: function (err) {
                console.error(err);
            }
        })
    })
}