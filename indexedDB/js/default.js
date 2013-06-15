var database;
var request = window.indexedDB.open("hahlkdkfjaçslkdjfaçls",1);
request.onerror = function(event) {
	console.log(event.target.errorCode);
};
request.onsuccess = function(event) {
    database=request.result;
    console.log(database);
};
request.onupgradeneeded = function(event) {
    var db = event.target.result;
    var objectStore = db.createObjectStore("notes", { keyPath:  "id",autoIncrement:true});
    console.log(objectStore);
};