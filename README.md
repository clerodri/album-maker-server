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

### Get a Pedido by Name

**Endpoint:** `GET /pedido/query`

**Params:**

```json
{
  "bill_name": "John Doe"
}
```

### Delete a Pedido by Name

**Endpoint:** `DELETE /pedido`

**Params:**

```json
{
  "bill_name": "John Doe"
}
```

### Update Full a Pedido

**Endpoint:** `PUT /pedido`

**Request Body:**

```json
{
  "bill_name": "John Doe",
  "delivery_id": "123456",
  "album": "Summer Vacation"
}
```

### Update Partial a Pedido

**Endpoint:** `PATCH /pedido/query`

**Request Body:**

```json
{
  "bill_name": "John Doe",
  "album": "Summer Vacation"
}
```
