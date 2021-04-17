export type Symbol = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '.' | '=' | 'C';
export type Operation = 'x' | '÷' | '+' | '-';
export type ButtonSymbol = Symbol | Operation;

export type ButtonType = 'number' | 'operator' | 'clear' | 'result';
export type ButtonAction = (symbol: ButtonSymbol) => void;

export type ButtonObject = {
    symbol: ButtonSymbol;
    action: ButtonAction;
    type: ButtonType;
};
