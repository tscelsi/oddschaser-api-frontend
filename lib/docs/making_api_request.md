## Making an API request

The base endpoint for the OddsChaserAPI is

```bash
https://api.oddschaser.com.au
```

There are four endpoints associated with the OddsChaserAPI:

```bash
/markets
/markets/:marketId
/events
/events/:eventId
```

These are explained in depth in the [**markets**](/docs/markets) and [**events**](/docs/events) sections of the docs.

To make an API request, make a *GET* request to the endpoint you want to access also ensuring that you have added the 'token' header with your valid API key.

For example, in python, API requests to retrieve events would look like this:

```python
import httpx

## retrieve a list of events ##
event_list = httpx.get(
    "https://api.oddschaser.com.au/events",
    params={"token": "MY_PRIVATE_TOKEN"}
)

## retrieve a single event ##
single_event = httpx.get(
    "https://api.oddschaser.com.au/events/634b02bf7e3f63a8b14fc17a",
    params={"token": "MY_PRIVATE_TOKEN"}
)
```