migrate((db) => {
  const collection = new Collection({
    "id": "suwezjlhxt9thf4",
    "created": "2023-05-24 14:23:27.058Z",
    "updated": "2023-05-24 14:23:27.058Z",
    "name": "event",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kcxvegch",
        "name": "titre",
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
        "id": "ujyvmjo8",
        "name": "lieu_event",
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
        "id": "z7sa7ele",
        "name": "nb_participants",
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
        "id": "lhxn3cz9",
        "name": "organisateur",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("suwezjlhxt9thf4");

  return dao.deleteCollection(collection);
})
