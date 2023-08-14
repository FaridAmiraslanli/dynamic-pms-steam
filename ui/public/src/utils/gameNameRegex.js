function gameNameRegex(game_url) {
  const inputString = game_url;
  const regex = /\/app\/(\d+)\/(.*?)\//;
  const match = inputString.match(regex);
  const gameId = match[1];
  const gameName = match[2].split("_").join(" ");
  return [gameId, gameName];
}

export default gameNameRegex