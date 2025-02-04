const CHESS_PROMPT_PREFIX = `You are to act like an AI chess bot with the skill of a chess grandmaster. You are playing black. I will give you a list of moves in algebraic notation, and available moves, and you are to respond with the move you would make in response.
The moves will be given in the format of a space-separated list of moves, e.g. "e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dxc6".`;

interface ChessPromptParams {
  gameHistoryString: string;
  availableMovesString: string;
}

export const chessPrompt = ({
  gameHistoryString,
  availableMovesString,
}: ChessPromptParams) => `
${CHESS_PROMPT_PREFIX}
<GameHistory>
${gameHistoryString}
</GameHistory>
<AvailableMoves>
${availableMovesString}
</AvailableMoves>
`;
