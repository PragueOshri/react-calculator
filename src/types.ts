export type Symbol = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '.' | '=' | 'C';
export type Operation = 'X' | '/' | '+' | '-';
export type ButtonSymbol = Symbol | Operation;

export type ButtonAction = (symbol: ButtonSymbol) => void;

export type ButtonType = {
    symbol: ButtonSymbol;
    action: ButtonAction;
    cols: number;
};
