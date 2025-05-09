import { OAuth2Client } from "google-auth-library";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code") || "";

  const clientSecret = process.env.GOOGLE_API_CLIENT_SECRET;
  const clientId = process.env.GOOGLE_API_CLIENT_ID;
  const projectId = process.env.GOOGLE_API_PROJECT_ID;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI;

  try {
    const oAuth2Client = new OAuth2Client({
      clientId,
      clientSecret,
      projectId,
      redirectUri,
    });
    const {
      tokens: { access_token, refresh_token, expiry_date },
    } = await oAuth2Client.getToken(code);
    const token = btoa(
      JSON.stringify({ access_token, refresh_token, expiry_date })
    );
    const redirectURL = `${process.env.GLIFOS_DEEPLINK}?token=${token}`;
    return Response.redirect(redirectURL);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
