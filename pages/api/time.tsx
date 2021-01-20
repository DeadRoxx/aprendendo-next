const time = (request: any, response: any) => {
  const dynamicDate = new Date();
  response.json({ date: dynamicDate.toLocaleString() })
}
export default time;