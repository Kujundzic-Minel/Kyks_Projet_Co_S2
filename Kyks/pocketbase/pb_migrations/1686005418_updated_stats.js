migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bxca6jv3ncagwp3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k1rrnpv0",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "name"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dii4gifk",
    "name": "goals",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5mnitptv",
    "name": "matches",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bxca6jv3ncagwp3")

  // remove
  collection.schema.removeField("k1rrnpv0")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
