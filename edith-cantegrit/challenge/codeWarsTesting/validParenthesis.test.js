const validParentheses= require('./validParenthesis');

describe('validParenthses', () => {

    test('with one pair of parentheses', () => {

    const parens = "()";
    const response = validParentheses(parens);
    
    expect(response).toEqual(true)
    });

    test('with a 3 parenthesis', () => {

    const parens = "())";
    const response = validParentheses(parens);
    
    expect(response).toEqual(false)
    });

    test('with one closing parenthese at start', () => {

    const parens = ")())";
    const response = validParentheses(parens);
        
    expect(response).toEqual(false)
    });

    test('with one opening parenthese at end', () => {

    const parens = "())(";
    const response = validParentheses(parens);
        
    expect(response).toEqual(false)
    });
});
