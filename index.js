let partidasRanked = ranked(110, 38)
let nivelRanked

if (partidasRanked < 10)
    {
        nivelRanked = "Ferro"
    }
    else if ((partidasRanked >= 11) && (partidasRanked <= 20))
        {
            nivelRanked = "Bronze"
        }
        else if ((partidasRanked >= 21) && (partidasRanked <= 50))
            {
                nivelRanked = "Prata"
            }
            else if ((partidasRanked >= 51) && (partidasRanked <= 80))
                {
                    nivelRanked = "Ouro"
                }
                else if ((partidasRanked >= 81) && (partidasRanked <= 90))
                    {
                        nivelRanked = "Diamante"
                    }
                    else if ((partidasRanked >= 91) && (partidasRanked <= 100))
                        {
                            nivelRanked = "Lendário"
                        }
                        else if (partidasRanked >= 101)
                            {
                                nivelRanked = "Imortal"
                            }


function ranked(vitoria, derrota)
{
    let resultRanked = vitoria - derrota
    return resultRanked
}

console.log("O Herói tem o saldo de " + partidasRanked + " vitórias e está no nível de " + nivelRanked)