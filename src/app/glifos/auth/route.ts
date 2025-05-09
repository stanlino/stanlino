import { OAuth2Client } from "google-auth-library";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code") || "";

  const clientSecret = process.env.GMAIL_API_CLIENT_SECRET;
  const clientId = process.env.GMAIL_API_CLIENT_ID;
  const projectId = process.env.GMAIL_API_PROJECT_ID;
  const redirectUri = process.env.GMAIL_REDIRECT_URI;

  const oAuth2Client = new OAuth2Client({
    clientId,
    clientSecret,
    projectId,
    redirectUri,
  });

  const response = await oAuth2Client.getToken(code);

  return Response.redirect(
    `${process.env.GLIFOS_DEEPLINK}?getTokenResponse=${JSON.stringify(
      response
    )}`
  );
}
