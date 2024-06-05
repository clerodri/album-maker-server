<h1 align="center"># Pedido Entity CRUD API  - RONALDO RODRIGUEZ</h1>

This task implements a CRUD (Create, Read, Update, Delete) API for managing `Pedido` (order) documents in a MongoDB database using Node.js and Express.

## API Endpoints

### Create a Pedido

**Endpoint:** `POST /pedido`

**Request Body:**

```json
{
  "bill_name": "John Doe",
  "delivery_id": "123456",
  "album": "Summer Vacation"
}
```

**Response :**

```json
{
  "code": "OK",
  "message": "Pedido created successfully!",
  "result": {
    "_id": "5f8d0d55b54764421b7156d9",
    "bill_name": "John Doe",
    "delivery_id": "123456",
    "album": "Summer Vacation"
  }
}
```

### Get a Pedido by Name

**Endpoint:** `GET /pedido/query/:bill_name`

**Params:**

```json
{
  "bill_name": "John Doe"
}
```

**Response :**

```json
{
  "code": "OK",
  "message": "Pedido created successfully!",
  "result": {
    "_id": "5f8d0d55b54764421b7156d9",
    "bill_name": "John Doe",
    "delivery_id": "123456",
    "album": "Summer Vacation"
  }
}
```

### Delete a Pedido by Name

**Endpoint:** `DELETE /pedido/:bill_name`

**Params:**

```json
{
  "bill_name": "John Doe"
}
```

**Response :**

```json
{
  "code": "OK",
  "message": "Pedido deleted successfully!"
}
```

### Update Full a Pedido

**Endpoint:** `PUT /pedido`

**Request Body:**

```json
{
  "bill_name": "John Doe",
  "delivery_id": "654321",
  "album": "Winter Holidays"
}
```

**Response :**

```json
{
  "code": "OK",
  "message": "Pedido updated successfully!",
  "result": {
    "_id": "5f8d0d55b54764421b7156d9",
    "bill_name": "John Doe",
    "delivery_id": "654321",
    "album": "Winter Holidays"
  }
}
```

### Update Partial a Pedido

**Endpoint:** `PATCH /pedido/query`

**Request Body:**

```json
{
  "bill_name": "John Doe",
  "delivery_id": "654321"
}
```

**Response :**

```json
{
  "code": "OK",
  "message": "Pedido updated successfully!",
  "result": {
    "_id": "5f8d0d55b54764421b7156d9",
    "bill_name": "John Doe",
    "delivery_id": "654321",
    "album": "Winter Holidays"
  }
}
```
