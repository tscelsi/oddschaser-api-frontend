## Pagination

*routes:* **/markets**, **/events**

All listing routes of the API split data into batches so that the API returns results quickly and reduces network bandwidth.
You can use the **limit** and **page** query parameters to determine which data the API returns for your query.

---

##### Query Parameters

**limit** *OPTIONAL*

Maximum of 25. Defaults to 25. This limits the number of results the API route will return in a query.

**page** *OPTIONAL*

Defaults to 1. This selects which 'page' of results to return from the API. i.e. which set of results of **limit** size to return. 

Each API request returns the pagination object in the **_meta** field which is useful for sending subsequent requests.

---

##### The **_meta** object

The **_meta** object is returned with every API request that returns a list of objects.

```json
{
    "_meta": {
        "page": 1,
        "limit": 25,
        "total_records": 6,
        "count": 6
    }
}
```

**page** *number*: The page number of the results returned. In the above example, we return the *first* page.

**limit** *number*: The maximum number of results returned per-page. Can be thought of as the page size.

**total_records** *number*: The total number of results that can be returned by the request.

**count** *number*: The number of results returned. This will only be different from **limit** if the page is the last page of results. In the above example, since we only have 6 results, we return all 6 results on the first page.

---