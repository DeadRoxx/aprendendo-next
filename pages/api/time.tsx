const time = (request: any, response: any) => {
  const dynamicDate = new Date();

  response.json({
    date: dynamicDate.toLocaleString(),
    secret: process.env.CONVERTKIT_API_SECRET
  })
}
export default time;