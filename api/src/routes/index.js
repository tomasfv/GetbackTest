const { Router } = require('express');
const axios = require('axios');
const { Minion } = require('../db');  

const e = require('express');

const router = Router();


//FUNCIONES CONSTRUCTORAS

function primeNumbers(){
    
    let res = []
    for (var i = 2; i <= 10007; i++) {

        var notPrime = false;
        
        for (var j = 2; j <= i; j++) {
            if (i % j === 0 && j !== i) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
                    res.push(i);
        }
    } 
   
    return res
}


let lambdaString = primeNumbers().join('');

function createCode(num) {
    
    let first = lambdaString.indexOf(num) + num.toString().length;
    let last = lambdaString.indexOf(num) + 5 + num.toString().length 
    
    if(lambdaString.includes(num)) return lambdaString.slice(first, last)

    
}

//RUTAS


router.get('/minion/:codeIdToAsk', async(req, res) => {
    const {codeIdToAsk} = req.params;
    const minionAsk = codeIdToAsk;
    const relatedCode = createCode(codeIdToAsk)
    
    if(codeIdToAsk == 0 || codeIdToAsk == 1 || !lambdaString.includes(codeIdToAsk)){
        return res.status(422).send({error: "Please insert a prime number between 2 and 10000" }) ;
    }
    
    try{
       let newMinion = await Minion.findOrCreate({        
            where: {
                minionAsk: minionAsk,
                relatedCode: relatedCode
            }
            
        })
        
        let getMinion = await Minion.findAll({   
            where: {                        
                minionAsk: minionAsk,
            }
            
        })

        

        res.status(200).send(getMinion)
    }catch(error){
        res.status(400).send('No se pudo crear el Minion')
    }
    
})


module.exports = router;
