# Petful Server

Here at Petful adoption centers, we ues a very simple approach, first in first out (FIFO).

We believe our API reflects this simplicity quite well, as it is even more simple.

## API Documentation

### Cats endpoints

#### `/cats`

Gets the next cat available for adoption.

    GET /cats

Adopt the next cat up for adoption.

    DELETE /cats

### Dogs endpoints

#### `/dogs`

Gets the next dog available for adoption.

    GET /dogs

Adopt the next dog up for adoption.

    DELETE /dogs

*Example*:

```
> GET /cats

< Status: 200 OK
< {
<   "imageURL":"http://www.pitt.edu/~rel66/images/orangetabbycat.jpg",
<   "imageDescription": "Little kitty cat.",
<   "name": "Jake",
<   "sex": "Male",
<   "age": "0",
<   "breed": "Tabby",
<   "story": "A little cutie pie!"
< }
```

_In the event that no animals are available for adoption, your call to the API will result in the following message_:

```
> GET /cats

< Status: 200 OK
< {
<   "message": "we're empty"
< }
```

### Error Objects

If an error occurs then the API will send a JSON error object in the following formate with the following format

```js
{
    "message": "A description of the error"
}
```