## Events

*ROUTES*: **/events** & **/events/:eventId**

A event object represents a particular sporting event.

---

##### Query Parameters

As well as the following parameters, you can also send the query parameters found in the [**Pagination**](/docs/pagination) section.

**site**     *OPTIONAL*

Limit results to particular betting sites. This parameter should be a comma-separated list of one or multiple of: **betdeluxe**, **betright**, **bluebet**, **crossbet**, **neds**, **pointsbet**, **robwaterhouse**, **sportsbet**, **tab**, **unibet**

**sport_ref**       *OPTIONAL*

Limit results to a particular sport. Values can be **basketball**

**league_ref**     *OPTIONAL*

Limit results to a particular league. League_ref's can be found by querying the **/events** route and looking at the **league_ref** attribute of an event object. An example league_ref might look like "nba".

---

##### Returns

Calls to any route under **/events** will produce either one or a list of event objects.

```json
// EVENT:
{
      "_id": "634b0519200750d0bb41c607",
      "sport_ref": "basketball",
      "sport_label": "Basketball",
      "league_ref": "nba",
      "league_label": "Nba",
      "event_ref": "la lakers_vs_golden state warriors",
      "event_label": "La Lakers Vs Golden State Warriors",
      "start_timestamp": "2022-10-19T02:00:00+00:00",
      "links": {
        "sportsbet": "https://www.sportsbet.com.au/betting/Basketball-US/NBA/Los-Angeles-Lakers-At-Golden-State-Warriors-6738164"
      },
      "site_event_name": "Los Angeles Lakers At Golden State Warriors",
      "team_a": "la lakers",
      "team_b": "golden state warriors",
      "home": "Los Angeles Lakers",
      "away": "Golden State Warriors",
      "markets": {
        "match_winner---none---none---none": {
          "sport_ref": "basketball",
          "sport_label": "Basketball",
          "league_ref": "nba",
          "league_label": "Nba",
          "event_ref": "la lakers_vs_golden state warriors",
          "event_label": "La Lakers Vs Golden State Warriors",
          "start_timestamp": "2022-10-19T02:00:00.000Z",
          "market_ref": "match_winner---none---none---none",
          "market_raw": "Match Betting",
          "market_label": "Match Winner",
          "market_value": null,
          "market_category": "Winner Markets",
          "team_name": null,
          "player_name": null,
          "odds": {
            "odd_name_mapping": {
              "los angeles lakers": "Los Angeles Lakers",
              "golden state warriors": "Golden State Warriors"
            },
            "sites": {
              "sportsbet": {
                "los angeles lakers": 3.34,
                "golden state warriors": 1.33
              }
            }
          }
      },
      "scrape_time_mapping": {
        "sportsbet": "2022-10-15T19:03:07.808087+00:00"
      },
      "sites": [],
      "last_updated": "2022-10-15T19:08:09.848Z"
    }
}
```

**_id** *string*: A unique identifier for the market object.

**sport_ref** *string*: A unique identifier for a sport.

**sport_label** *string*: A human readable, prettified version of the sport name.

**league_ref** *string*: A normalised identifier for a league. A league_ref forms a unique identifier together with **sport_ref**

**league_label** *string*: A human readable, prettified version of the league name.

**event_ref** *string*: A normalised identifier for an event. An event_ref forms a unique identifier for an event only when coupled with a **sport_ref** and a **league_ref**.

**event_label** *string*: A human readable, prettified version of the event name.

**start_timestamp** *string*: The time at which the event starts.

**links** *object*: An object containing links to the event on various betting sites. The keys of this object are the betting site names and the values are the links to the event on that site.

**team_a** *string*: The name of the first team in the event. Usually the home team.

**team_b** *string*: The name of the second team in the event. Usually the away team.

**home** *string*: The prettified name of the home team in the event. Use this as the source of truth for home/away instead of **team_a**.

**away** *string*: The prettified name of the away team in the event. Use this as the source of truth for home/away instead of **team_b**.

**markets** *object*: An object containing markets for the event. The keys of this object are strings containing a unique market identifier. The values are of the same form as the market object found in the [**/markets**](/docs/markets) API documentation.

**scrape_time_mapping** *object*: An object containing the time when data was last scraped for each site contained in the event.

**sites** *list*: A list of sites contained in the event.

**last_updated** *string*: When the event object was last updated.

---