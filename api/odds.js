export default async function handler(req, res) {
  const response = await fetch("https://api.the-odds-api.com/v4/sports/soccer/odds", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    // A URL abaixo inclui os parâmetros necessários:
    // - regions=eu -> Europa
    // - markets=h2h -> Resultado final
    // - oddsFormat=decimal -> Odds padrão
    // - dateFormat=iso -> Datas ISO
  });

  if (!response.ok) {
    return res.status(500).json({ error: "Erro ao buscar odds" });
  }

  const data = await response.json();
  res.status(200).json(data);
}