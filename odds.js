
export default async function handler(req, res) {
  const response = await fetch("https://api.the-odds-api.com/v4/sports/soccer/odds/?regions=br&markets=h2h&apiKey=a686083eb33fbf897c72bd47c1ddec9b");
  if (!response.ok) {
    return res.status(response.status).json({ error: "Erro ao buscar odds" });
  }
  const data = await response.json();
  res.status(200).json(data);
}
