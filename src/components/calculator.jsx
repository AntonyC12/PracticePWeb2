import { useState } from 'react';

function CompleteCalculator({ goReturn }) {
    const [expression, setExpression] = useState('');

    const handleDigit = (digit) => {
        setExpression((prev) => prev + digit);
    };

    const handleOperator = (op) => {
        // Evitar operadores al inicio o duplicados
        if (expression === '' || /[+\-*/] $/.test(expression)) return;
        setExpression((prev) => prev + ' ' + op + ' ');
    };

    const handleEqual = () => {
        if (expression === '') return;
        try {
            // Uso de Function para evaluar la expresión de forma simple
            // eslint-disable-next-line no-new-func
            const result = new Function('return ' + expression)();
            setExpression(String(result));
        } catch (error) {
            setExpression('Error');
        }
    };

    const handleClear = () => {
        setExpression('');
    };

    const handleDelete = () => {
        setExpression((prev) => {
            if (prev.endsWith(' ')) {
                // Si termina en espacio (después de un operador), borrar el operador y espacios
                return prev.slice(0, -3);
            }
            return prev.slice(0, -1);
        });
    };

    return (
        <div>
            <h1>Basic Calculator</h1>

            <div style={{ border: '1px solid black', padding: '10px', minHeight: '1.5em', marginBottom: '10px' }}>
                {expression || '0'}
            </div>

            <div>
                {/* Números del 1 al 9 y 0 */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                    <button key={num} onClick={() => handleDigit(num)}>
                        {num}
                    </button>
                ))}

                <br />

                {/* Operadores */}
                <button onClick={() => handleOperator('+')}>+</button>
                <button onClick={() => handleOperator('-')}>-</button>
                <button onClick={() => handleOperator('*')}>*</button>
                <button onClick={() => handleOperator('/')}>/</button>

                <br />

                {/* Acciones */}
                <button onClick={handleClear}>Delete All (AC)</button>
                <button onClick={handleDelete}>Delete (DEL)</button>
                <button onClick={handleEqual}>=</button>
            </div>

            <br />
            <button onClick={() => goReturn('home')}>Back to Home</button>
        </div>
    );
}

export default CompleteCalculator;