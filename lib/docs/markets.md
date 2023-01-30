## Markets

*ROUTES*: **/markets** & **/markets/:marketId**

A market represents a particular betting market for an event.

---

##### Query Parameters

As well as the following parameters, you can also send the query parameters found in the [**Pagination**](/docs/pagination) section.

**site**     *OPTIONAL*

Limit results to particular betting sites. This parameter should be a comma-separated list of one or multiple of: **betdeluxe**, **betright**, **bluebet**, **crossbet**, **neds**, **pointsbet**, **robwaterhouse**, **sportsbet**, **tab**, **unibet**

**sport_ref**       *OPTIONAL*

Limit results to a particular sport. Values can be **basketball**

**event_ref**     *OPTIONAL*

Limit results to a particular event. This should be the normalised event_ref for an event. An example event_ref
might look like "washington wizards_vs_indiana pacers" and can be found by querying the **/events** route.

**league_ref**     *OPTIONAL*

Limit results to a particular league. League_ref's can be found by querying the **/events** route and looking at the **league_ref** attribute of an event object. An example league_ref might look like "nba".

---

##### Returns

A call to any API route under **/markets** will produce either one or a list of market objects.

```json
// MARKET:
{
      "_id": "634b02bf7e3f63a8b14fc17b",
      "sport_ref": "basketball",
      "sport_label": "Basketball",
      "league_ref": "nba",
      "league_label": "Nba",
      "event_ref": "washington wizards_vs_indiana pacers",
      "event_label": "Washington Wizards Vs Indiana Pacers",
      "start_timestamp": "2022-10-19T23:10:00.000Z",
      "market_ref": "handicap---indiana pacers---none---2--dot--50",
      "market_raw": "Handicap Betting",
      "market_label": "Handicap",
      "market_value": 2.5,
      "market_category": "Handicap Markets",
      "team_name": "indiana pacers",
      "player_name": null,
      "odds": {
        "odd_name_mapping": {
          "washington wizards": "Washington Wizards (-2.5)",
          "indiana pacers": "Indiana Pacers (+2.5)"
        },
        "sites": {
          "sportsbet": {
            "washington wizards": 1.9,
            "indiana pacers": 1.9
          }
        }
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

**market_ref** *string*: A normalised identifier for a market.

**market_label** *string*: A prettified version of the market name.

**market_value** *NULLABLE* *number*: The value associated with the market. For example a handicap market is associated with a handicap value stored in this field.

**market_category** *string*: The broader category to which the market belongs.

**event_start_timestamp** *string*: The time at which the event starts.

**team_name** *NULLABLE* *string*: The name of the team associated with the market. This is only applicable to markets that are associated with a team.

**player_name** *NULLABLE* *string*: The name of the player associated with the market. This is only applicable to markets that are associated with a player.

**odds** *object*: An object containing odds for the market. The odds object always contains two keys:

> **odd_name_mapping** *object*: An object containing a mapping of odd names to human readable names. For example, the odd name for the Los Angeles Lakers in a basketball game might be "la_lakers" but the human readable name might be "Los Angeles Lakers". This mapping is used to make the odds data more human readable.

> **sites** *object*: An object containing odds for the market for each betting site. The keys of this object are the betting site names and the values are objects containing odds for each odd name. The keys of the odds objects are the odd names found in **odd_name_mapping** and the values are the odds.

**sites** *list*: An array of betting site names that have odds for the market.

---