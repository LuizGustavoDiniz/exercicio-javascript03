//treino para calcular o desconto de um produto

var produto = Number(prompt('qual o preço do produto?')) //pede o produto pro usuário

var promoçao = produto*15/100           //faz o calculo pra tirar a porcentagem

alert(`o preço do produto é ${produto.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})} o desconto é ${promoçao.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})} o valor do produto com desconto é ${(produto-promoçao).toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})}`)
