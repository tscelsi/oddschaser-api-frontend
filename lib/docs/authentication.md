## Authentication

Once you have created an account, you can use the API by generating an API key and authenticating your requests with it.

---

#### Generating an API key

To generate an API key for the first time, you must first log in to your account. Once you are logged in, you can generate an API key by navigating to your [**accounts**](/account/overview) page and clicking on the 'Generate API Key' button.

A box will appear with your API key. You can copy this key and use it to authenticate your requests. **Make sure to save this key somewhere safe. Once you navigate away from your account page, you won't be able to retrieve it again** (don't worry though, you will be able to generate a new key at any time)!


#### Using your API key

To use your API Key, simply take your copied key and attach it to your API requests in the 'token' header of your request.

#### Usage Quotas

```json
// After 20 requests
{
  "statusCode": 429,
  "message": "limit has been reached"
}
```

We cap API usage at 20 requests per-day. If you exceed this limit, you will receive a *429* response code. If you need more requests, please contact us and we can talk about a limit increase. You can see your current usage by navigating to your [**accounts**](/account/overview) page.

---