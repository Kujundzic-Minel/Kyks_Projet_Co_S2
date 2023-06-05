migrate((db) => {
  const collection = new Collection({
    "id": "bxca6jv3ncagwp3",
    "created": "2023-06-05 22:07:11.823Z",
    "updated": "2023-06-05 22:07:11.823Z",
    "name": "stats",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dii4gifk",
        "name": "but",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "wh9d5vbj",
        "name": "assists",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "5mnitptv",
        "name": "matchesPlayed",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("bxca6jv3ncagwp3");

  return dao.deleteCollection(collection);
})
