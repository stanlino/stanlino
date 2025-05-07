export async function GET(request: Request) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  return Response.redirect(`glifos://google-oauth?${searchParams.toString()}`);
}
