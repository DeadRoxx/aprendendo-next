const time = (request: any, response: any) => {
  const dynamicDate = new Date();

  response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

  response.json({
    date: dynamicDate.toLocaleString(),
    secret: process.env.CONVERTKIT_API_SECRET + 2
  })
}
export default time;