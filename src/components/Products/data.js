import product1 from '../../images/mussarela.jpg';
import product2 from '../../images/peperoni.jpg';
import product3 from '../../images/borda.png';
import sweet1 from '../../images/mousechocolate.jpg';
import sweet2 from '../../images/mousemaracuja.jpg';
import sweet3 from '../../images/tortalimao.jpg';


//date das pizzas 
export const productData = [
 {
    img:product1,
    alt:'Pizza',
    name:'Mussarela Pizza',
    desc:'Massa fermentada, mussarela, pimentões, azeitonas pretas. molho de tomate e cogumelos.',
    price:'R$19,99',
    button:'Adicionar',
    },

    {
        img: product2,
        alt: 'Pizza',
        name: 'Peperoni Pizza',
        desc: 'Massa fermentada, mussarela,peperoni, pimentões, cebola e molho de tomate.',
        price: 'R$29,99',
        button: 'Adicionar', 
    },
    {
        img: product3,
        alt: 'Pizza',
        name: 'Borda Pede Mais',
        desc: 'Massa fermentada, mussarela,calabresa, cebola, molho de tomate e borda mega recheada.',
        price: 'R$39,99',
        button: 'Adicionar',
    }
]

//date dos doces 
export const productDataSweet = [
    {
        img: sweet1,
        alt: 'Torta de Castanha',
        name: 'Torta de Castanha',
        desc: 'Massa de cacau 100%, trufada com chocalate ao leite e recheada com castanhas.',
        price: 'R$12,99',
        button: 'Adicionar',
    },

    {
        img: sweet2,
        alt: 'Tortilha',
        name: 'Tortilha de Maracujá',
        desc: 'Massa amanteigada, calda e raspa de chocolate amargo e mouse de maracujá .\n',
        price: 'R$12,99',
        button: 'Adicionar',
    },
    {
        img: sweet3,
        alt: 'Torta de limão',
        name: 'Torta de limão',
        desc: 'Massa folhada, com recheio de limão siciliano e cobertura de chantilly maçaricado. ',
        price: 'R$9,99',
        button: 'Adicionar',
    }

]