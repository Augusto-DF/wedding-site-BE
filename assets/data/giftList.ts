const GIFT_LIST = [
    {
        label: 'Passeio em Campos do Jordão', value: 300, disponibility: true, category: ['all', 'honey_moon'],
    }, 
    {
        label: 'Passeio em Campos do Jordão', value: 300, disponibility: true, category: ['all', 'honey_moon'],
    },
    {
        label: 'Passeio em São Paulo', value: 300, disponibility: true, category: ['all', 'honey_moon'],
    },
    {
        label: 'Passeio em São Paulo', value: 300, disponibility: true, category: ['all', 'honey_moon'],
    },
    {
        label: 'Aspirador de pó Sem Fio vertical Electrolux 2 em 1 luz led ERG25N bivolt cor azul ou preto', value: 850, disponibility: true, category: ['all', 'eletronic'],
    },
    {
        label: 'Purificador de água  Electrolux pure 4x, painel touch BRANCO PE12B Bivolt', value: 300, disponibility: true, category: ['all', 'eletronic'],
    },
    {
        label: 'Cafeteira Expresso Arno Nescafé Dolce Gusto Genio S Plus de Cápsula 15 Bar Preto', value: 500, disponibility: true, category: ['all', 'eletronic'],
    },
    {
        label: 'Fogão', value: 3500, disponibility: true, category: ['all', 'eletronic'],
    },
    {
        label: 'Micro-ondas Panasonic NN-ST27LWRUK - 220V, 21L, Branco, Porta Espelhada', value: 850, disponibility: true, category: ['all', 'eletronic'],
    },
    {
        label: 'Smart TV 55" UHD 4K 55CU7700 2023', value: 2500, disponibility: true, category: ['all', 'eletronic'],
    },
    {
        label: 'Ar Condicionado Split LG 12.000 BTUs - Dual Inverter Voice Artcool UV Nano - Quente e Frio - S4NW12JARXB.EB2GAMZ', value: 3500, disponibility: true, category: ['all', 'eletronic'],
    },
    {
        label: 'Churrasqueira Elétrica Philco Pcq1500d 1500w 220v', value: 350, disponibility: true, category: ['all', 'eletronic'],
    },
    {
        label: 'Panela Elétrica de Pressão Oster Digital 5 Litros Preto/Inox 220V OPAN920-220', value: 600, disponibility: true, category: ['all', 'eletronic'],
    },
    {
        label: 'Panela Elétrica para Fondue Oster Cinza', value: 250, disponibility: true, category: ['all', 'eletronic'],
    },
    {
        label: 'Máquina de Waffle Perform 180, Preto, 220v, Oster', value: 250, disponibility: true, category: ['all', 'eletronic'],
    },
    {
        label: 'Batedeira Planetária Oster 4l 850w Preto/inox 220v Obat641-220', value: 500, disponibility: true, category: ['all', 'eletronic'],
    },
    {
        label: 'Pipoqueira Pop Time Sem Óleo Branco B-02 Britânia - 220v', value: 250, disponibility: true, category: ['all', 'eletronic'],
    },
    {
        label: 'Fechadura Digital de Sobrepor Touch Screen FR 201 Preto Intelbras', value: 750, disponibility: true, category: ['all', 'eletronic'],
    },
    {
        label: 'Conjunto De Bowls Tigelas De Inox Com Tampa Plástica - Electrolux', value: 150, disponibility: true, category: ['all', 'others'],
    },
    {
        label: 'Kit de Ferramentas Sparta Aço Carbono com Maleta 129 Peças 13564', value: 150, disponibility: true, category: ['all', 'others'],
    },
    {
        label: 'Frigideira Wok', value: 300, disponibility: true, category: ['all', 'others'],
    },
    {
        label: 'Cama queen', value: 4000, disponibility: true, category: ['all', 'others'],
    },
    {
        label: 'Mesa e Cadeiras de Jantar', value: 2000, disponibility: true, category: ['all', 'others'],
    },
    {
        label: 'Sofá', value: 3000, disponibility: true, category: ['all', 'others'],
    },
    {
        label: 'Guarda roupa', value: 2500, disponibility: true, category: ['all', 'others'],
    },
    {
        label: 'Armários de cozinha', value: 2500, disponibility: true, category: ['all', 'others'],
    },
    {
        label: 'Chuveiro Elétrico', value: 500, disponibility: true, category: ['all', 'others'],
    },
    {
        label: 'Kit Churrasco Inox 15pc Polywoo Cas Tramontina Castanho No Voltagev', value: 500, disponibility: true, category: ['all', 'others'],
    },
    {
        label: 'Jogo de Facas Oster Bloco de madeira e facas Baldwyn, aço inoxidável, 14 peças, cetim escovado', value: 350, disponibility: true, category: ['all', 'others'],
    },
    {
        label: 'Jogo de Taças para Suco', value: 100, disponibility: true, category: ['all', 'others'],
    },
    {
        label: 'Jogo de Taças para Vinho', value: 200, disponibility: true, category: ['all', 'others'],
    },
    {
        label: 'Jogo de Prato Completo', value: 400, disponibility: true, category: ['all', 'others'],
    },
    {
        label: 'Fruteira', value: 400, disponibility: true, category: ['all', 'others'],
    },
    {
        label: 'Escorredor de Louça de Inox', value: 200, disponibility: true, category: ['all', 'others'],
    },
    {
        label: 'Kit de Pote Hermético de Vidro Quadrado com Tampa de Bambu 11 Peças - Oikos', value: 250, disponibility: true, category: ['all', 'others'],
    },
    {
        label: 'Jogo de Xícaras e Pires', value: 200, disponibility: true, category: ['all', 'others'],
    },
    {
        label: 'Jogo de Lençol Queen de Algodão', value: 250, disponibility: true, category: ['all', 'others'],
    },
    {
        label: 'Flash Limp MOP7800 - Mop Spray com Dispenser de 400 ml, (Borrifa, Limpa e Seca), Verde', value: 120, disponibility: true, category: ['all', 'others'],
    },
    {
        label: 'Lustre', value: 400, disponibility: true, category: ['all', 'others'],
    },
]

module.exports = {GIFT_LIST}