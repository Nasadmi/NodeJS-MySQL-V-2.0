# How to Install the Modules?

## To install the necessary modules, you have to use the following command...
## (In the directory where you have saved the project):

* ### Short Way

```
npm i
```
* ### Long Way

```
npm install
```

# How to create the DB and start the Server.

## DB Configuration

### To create the DB you have to go to [db.sql](databases/db.sql) and insert these lines in MySQL terminal, YOU HAVE TO DO IT WITH THE ROOT ACCOUNT.

### Then go to [db.js](src/func/db/db.js) and change the value of the password parameter to the MySQL root password in the connector variable.

## Start the Server

### To start the Server you have to start the "start" script from the [package.json](package.json)

### Or you can also start the [index.js](src/index.js) with the Node command.