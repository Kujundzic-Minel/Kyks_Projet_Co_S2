migrate((db) => {
  const collection = new Collection({
    "id": "5b1lv3qbgryrbq9",
    "created": "2023-06-05 18:24:17.065Z",
    "updated": "2023-06-05 18:24:17.065Z",
    "name": "contact",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pap6oj8v",
        "name": "nom",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vjnnv1ji",
        "name": "mail",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "wji3h4uj",
        "name": "message",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5b1lv3qbgryrbq9");

  return dao.deleteCollection(collection);
})
