import { GIFT_IMAGES_DIR } from "../../utils"

const GIFT_LIST = [
    {
        label: 'Passeio em Campos do Jordão', value: 300, disponibility: true, category: ['all', 'honey_moon'], photo: GIFT_IMAGES_DIR+'/passeio-cj-01.jpg'
    }, 
    {
        label: 'Passeio em Campos do Jordão', value: 300, disponibility: true, category: ['all', 'honey_moon'], photo: GIFT_IMAGES_DIR+'/passeio-cj-02.jpg'
    },
    {
        label: 'Passeio em São Paulo', value: 300, disponibility: true, category: ['all', 'honey_moon'], photo: GIFT_IMAGES_DIR+'/passeio-sp-01.jpg'
    },
    {
        label: 'Passeio em São Paulo', value: 300, disponibility: true, category: ['all', 'honey_moon'], photo: GIFT_IMAGES_DIR+'/passeio-cj-02.jpg'
    },
    {
        label: 'Aspirador de pó Sem Fio vertical Electrolux 2 em 1 luz led ERG25N bivolt cor azul ou preto', value: 850, disponibility: true, category: ['all', 'eletronic'], photo: GIFT_IMAGES_DIR+'/aspirador.png'
    },
    {
        label: 'Purificador de água  Electrolux pure 4x, painel touch BRANCO PE12B Bivolt', value: 300, disponibility: true, category: ['all', 'eletronic'], photo: GIFT_IMAGES_DIR+'/purificador.png'
    },
    {
        label: 'Cafeteira Expresso Arno Nescafé Dolce Gusto Genio S Plus de Cápsula 15 Bar Preto', value: 500, disponibility: true, category: ['all', 'eletronic'], photo: GIFT_IMAGES_DIR+'/cafeteira.png'
    },
    {
        label: 'Fogão', value: 3500, disponibility: true, category: ['all', 'eletronic'], photo: GIFT_IMAGES_DIR+'/fogao.png'
    },
    {
        label: 'Micro-ondas Panasonic NN-ST27LWRUK - 220V, 21L, Branco, Porta Espelhada', value: 850, disponibility: true, category: ['all', 'eletronic'], photo: GIFT_IMAGES_DIR+'/microondas.png'
    },
    {
        label: 'Smart TV 55" UHD 4K 55CU7700 2023', value: 2500, disponibility: true, category: ['all', 'eletronic'], photo: GIFT_IMAGES_DIR+'/tv.png'
    },
    {
        label: 'Ar Condicionado Split LG 12.000 BTUs - Dual Inverter Voice Artcool UV Nano - Quente e Frio - S4NW12JARXB.EB2GAMZ', value: 3500, disponibility: true, category: ['all', 'eletronic'], photo: GIFT_IMAGES_DIR+'/ar.png'
    },
    {
        label: 'Churrasqueira Elétrica Philco Pcq1500d 1500w 220v', value: 350, disponibility: true, category: ['all', 'eletronic'], photo: GIFT_IMAGES_DIR+'/churras.png'
    },
    {
        label: 'Panela Elétrica de Pressão Oster Digital 5 Litros Preto/Inox 220V OPAN920-220', value: 600, disponibility: true, category: ['all', 'eletronic'], photo: GIFT_IMAGES_DIR+'/pressao.png'
    },
    {
        label: 'Panela Elétrica para Fondue Oster Cinza', value: 250, disponibility: true, category: ['all', 'eletronic'], photo: GIFT_IMAGES_DIR+'/fondue.png'
    },
    {
        label: 'Máquina de Waffle Perform 180, Preto, 220v, Oster', value: 250, disponibility: true, category: ['all', 'eletronic'], photo: GIFT_IMAGES_DIR+'/waffle.png'
    },
    {
        label: 'Batedeira Planetária Oster 4l 850w Preto/inox 220v Obat641-220', value: 500, disponibility: true, category: ['all', 'eletronic'], photo: GIFT_IMAGES_DIR+'/batedeira.png'
    },
    {
        label: 'Pipoqueira Pop Time Sem Óleo Branco B-02 Britânia - 220v', value: 250, disponibility: true, category: ['all', 'eletronic'], photo: GIFT_IMAGES_DIR+'/pipoqueira.png'
    },
    {
        label: 'Fechadura Digital de Sobrepor Touch Screen FR 201 Preto Intelbras', value: 750, disponibility: true, category: ['all', 'eletronic'], photo: GIFT_IMAGES_DIR+'/fechadura.png'
    },
    {
        label: 'Conjunto De Bowls Tigelas De Inox Com Tampa Plástica - Electrolux', value: 150, disponibility: true, category: ['all', 'others'], photo: GIFT_IMAGES_DIR+'/bowls.png'
    },
    {
        label: 'Kit de Ferramentas Sparta Aço Carbono com Maleta 129 Peças 13564', value: 150, disponibility: true, category: ['all', 'others'], photo: GIFT_IMAGES_DIR+'/ferramentas.png'
    },
    {
        label: 'Frigideira Wok', value: 300, disponibility: true, category: ['all', 'others'], photo: GIFT_IMAGES_DIR+'/frigideira.png'
    },
    {
        label: 'Cama queen', value: 4000, disponibility: true, category: ['all', 'others'], photo: GIFT_IMAGES_DIR+'/cama.png'
    },
    {
        label: 'Mesa e Cadeiras de Jantar', value: 2000, disponibility: true, category: ['all', 'others'], photo: GIFT_IMAGES_DIR+'/mesa.png'
    },
    {
        label: 'Sofá', value: 3000, disponibility: true, category: ['all', 'others'], photo: GIFT_IMAGES_DIR+'/sofa.png'
    },
    {
        label: 'Guarda roupa', value: 2500, disponibility: true, category: ['all', 'others'], photo: GIFT_IMAGES_DIR+'/guardaroupas.png'
    },
    {
        label: 'Armários de cozinha', value: 2500, disponibility: true, category: ['all', 'others'], photo: GIFT_IMAGES_DIR+'/cozinha.png'
    },
    {
        label: 'Chuveiro Elétrico', value: 500, disponibility: true, category: ['all', 'others'], photo: GIFT_IMAGES_DIR+'/chuveiro.png'
    },
    {
        label: 'Kit Churrasco Inox 15pc Polywoo Cas Tramontina Castanho No Voltagev', value: 500, disponibility: true, category: ['all', 'others'], photo: GIFT_IMAGES_DIR+'/kitchurras.png'
    },
    {
        label: 'Jogo de Facas Oster Bloco de madeira e facas Baldwyn, aço inoxidável, 14 peças, cetim escovado', value: 350, disponibility: true, category: ['all', 'others'], photo: GIFT_IMAGES_DIR+'/faca.png'
    },
    {
        label: 'Jogo de Taças para Suco', value: 100, disponibility: true, category: ['all', 'others'], photo: GIFT_IMAGES_DIR+'/suco.png'
    },
    {
        label: 'Jogo de Taças para Vinho', value: 200, disponibility: true, category: ['all', 'others'], photo: GIFT_IMAGES_DIR+'/vinho.png'
    },
    {
        label: 'Jogo de Prato Completo', value: 400, disponibility: true, category: ['all', 'others'], photo: GIFT_IMAGES_DIR+'/prato.png'
    },
    {
        label: 'Fruteira', value: 400, disponibility: true, category: ['all', 'others'], photo: GIFT_IMAGES_DIR+'/fruteira.png'
    },
    {
        label: 'Escorredor de Louça de Inox', value: 200, disponibility: true, category: ['all', 'others'], photo: GIFT_IMAGES_DIR+'/escorredor.png'
    },
    {
        label: 'Kit de Pote Hermético de Vidro Quadrado com Tampa de Bambu 11 Peças - Oikos', value: 250, disponibility: true, category: ['all', 'others'], photo: GIFT_IMAGES_DIR+'/pote.png'
    },
    {
        label: 'Jogo de Xícaras e Pires', value: 200, disponibility: true, category: ['all', 'others'], photo: GIFT_IMAGES_DIR+'/xicara.png'
    },
    {
        label: 'Jogo de Lençol Queen de Algodão', value: 250, disponibility: true, category: ['all', 'others'], photo: GIFT_IMAGES_DIR+'/lencol.png'
    },
    {
        label: 'Flash Limp MOP7800 - Mop Spray com Dispenser de 400 ml, (Borrifa, Limpa e Seca), Verde', value: 120, disponibility: true, category: ['all', 'others'], photo: GIFT_IMAGES_DIR+'/mop.png'
    },
    {
        label: 'Lustre', value: 400, disponibility: true, category: ['all', 'others'], photo: GIFT_IMAGES_DIR+'/lustre.png'
    },
]

module.exports = {GIFT_LIST}