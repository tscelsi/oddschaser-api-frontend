## OddsChaserAPI

Our goal with this project is to make it easy to compare and evaluate differences in odds across different bookmakers. Instead of having to navigate multiple sites to compare odds, we have built OddsChaserAPI to make it easy for developers to access odds across multiple sites in just one request.

OddsChaserAPI extends beyond just being useful for near-real-time odds, but can also be used to analyse historical odds data for research and prediction purposes.

Here's a snippet of what an API response might look like for an NBA game:

```json
{
    "sport_label": "Basketball",
    "league_label": "Nba",
    "event_label": "La Lakers Vs Golden State Warriors",
    "start_timestamp": "2022-10-19T02:00:00.000Z",
    "market_label": "Match Winner",
    "market_category": "Winner Markets",
    "odds": {
        "sites": {
            "sportsbet": {
                "usa": 1.69,
                "brazil": 2.09
            },
            "pointsbet": {
                "usa": 1.67,
                "brazil": 2.12
            },
            ...
        },
        ...
    },
    ...
}
```

---

##### How many sports are being scraped right now?

We currently only scrape basketball data and will be limiting our API to only basketball data for the time being. Please reach out to us if you would like to see other sports added.

##### Contact us

If you want to contact us, please email us at **oddchaserdev@gmail.com**.