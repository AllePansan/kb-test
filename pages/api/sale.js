let sales = {
  endDate:  new Date('2022','00','31','00','00','00','00')
}
export default function handler(req, res) {
  res.status(200).json(sales)
}