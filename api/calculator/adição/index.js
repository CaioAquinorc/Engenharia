const express = require('express')

const app = express()

app.post('/:val1/:val2', (req, res) => {
    if(isNaN(req.params.val1) || isNaN(req.params.val2)){
        res.status(400).send('Error: Requisição inválida. Forneça operandos numéricos válidos.');
    }
    const var1 = parseFloat(req.params.val1)
    const var2 = parseFloat(req.params.val2)
    const soma = var1 + var2;
    res.json({Resultado: soma})
})

app.listen(1001, () => console.log('OK'))