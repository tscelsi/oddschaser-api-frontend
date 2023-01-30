## Examples

We use python for the examples below. You can use any language you like to interact with the API. The following examples are for the markets routes, however the same principles apply to the events routes.

##### Listing markets

We can list markets simply by sending a GET request to the **/markets** route.

```python
import httpx

# GET https://api.oddschaser.com.au/markets
res = httpx.get(
        "https://api.oddschaser.com.au/markets",
        headers={"token": "YOUR_API_KEY"}
      )
res.json()
```


##### Listing all basketball markets

Here we utilise the **sport_ref** query parameter to filter the results to only basketball markets.

```python

import httpx

# GET https://api.oddschaser.com.au/markets?sport_ref=basketball
res = httpx.get(
        "https://api.oddschaser.com.au/markets",
        headers={"token": "YOUR_API_KEY"},
        params={"sport_ref": "basketball"}
      )
res.json()
```

##### Listing all markets from an event

Here we utilise the **sport_ref**, **league_ref** and **event_ref** query parameters to filter the results to only markets from an LA Lakers vs. Chicago Bulls game.

```python
import httpx

# GET https://api.oddschaser.com.au/markets?sport_ref=basketball&league_ref=nba&event_ref=la_lakers_vs_chicago_bulls
res = httpx.get(
        "https://api.oddschaser.com.au/markets",
        headers={"token": "YOUR_API_KEY"},
        params={
          "sport_ref": "basketball",
          "league_ref": "nba",
          "event_ref": "la_lakers_vs_chicago_bulls"
        }
      )
res.json()
```

##### Retrieving a single market

Here we utilise the **/markets/:marketId** route to retrieve a single market.

```python
import httpx

# GET https://api.oddschaser.com.au/markets/5f5f9b9b0f9b9a0017b5b1b1
marketId = "5f5f9b9b0f9b9a0017b5b1b1"
res = httpx.get(
        f"https://api.oddschaser.com.au/markets/{marketId}",
        headers={"token": "YOUR_API_KEY"},
      )
res.json()
```

---