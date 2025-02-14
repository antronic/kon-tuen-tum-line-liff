# 03 LINE LIFF with SvelteKit

### Development Guideline
Before you start developing your LINE LIFF application, I highly recommend you to read the [Development Guidelines](https://developers.line.biz/en/docs/liff/development-guidelines) to understand the best practices and the limitations of the LINE LIFF application.

## How to use

1. First thing first, you need to have a LINE account and that is very important.
2. Then you need to create a LINE LIFF application and get the LIFF ID.<br/>You need login to the LINE Developer Console from this link: [LINE Developer Console](https://developers.line.biz/console/).

3. On the Provider page, click the `Create` button to create a new LINE Provider.
![Create new LINE Provider](/assets/liff-instruction-01.png)

4. Give a name to the new LINE Provider and click the `Create` button.

5. On your new LINE Provider page

    - 5.1. if this your first channel, click the `Create a LINE Login channel` to create a new LINE Login channel.
    - 5.2. if you already have a LINE Login channel, click the `Create a new channel` button then choose `LINE Login`

6. Fill in the required information for the new LINE Login channel and click the `Create` button.
    - App types: `Web app`

7. In our Terminal, we need to make our laptop as a web server and expose it to the internet. We can use [`ngrok`](https://ngrok.com/) to do that.
    - 7.1. Install `ngrok` for your OS from this link: [Install ngrok](https://ngrok.com/download)
    - 7.2 You need to sign up for an account to get the `authtoken` from the ngrok dashboard.
      - 7.2.1. Please follow the instruction from this link: [Getting started with ngrok - Step 2: Connect your account](https://ngrok.com/docs/getting-started/#step-2-connect-your-account)

7. At the top menu, click the `LIFF` menu, and then click the `Add` button.

8. Fill in the required information for the new LINE LIFF application and click the `Add` button.
    - Endpoint URL: (Please temporarily fill in with `https://example.com`, we will update it later)
    - Size: `Full`
      - `Full` - The LIFF app takes up the full screen.
      - `Tall` - The LIFF app takes up half of the screen.
      - `Compact` - The LIFF app takes up a quarter of the screen.
    - Scope: `profile` - The LIFF app can get the user's display name and profile image.

    For more detail, you can visit the [Registering LIFF App](https://developers.line.biz/en/docs/liff/registering-liff-apps/#registering-liff-app).

**Install LINE LIFF**
Install `@line/liff` via npm.
```bash
npm install @line/liff
```