import { getLetra, getAcordes, getCifra } from "../assets/cifras"
import { aAlegriaDoSenhor, aAlegriaEstaNoCoracao, aleluia, amem, anjosDeDeus, aparecida, benditoSejasOReiDaGloria, canticoDeAdoracao, celebremosNossaPascoa, chuvaDeGraca, consagracaoANossaSenhora, cordeiroDeDeus, cristoEONossoAmem, dancaDaAmizade, euConfesso, euCreioNumMundoNovo, euNavegarei, euSouDoSenhor, gloriaADeusNasAlturas, gloriaADeusNosAltosCeus, mariaDeNazare, molimMolim, oCeuSeAbre, oSenhorERei, oSenhorRessurgiu, parabensPraVoce, passaFogo, passeioDeCarangueijo, pescadorDeCristo, pipoca, quemEEssaQueAvancaComoAurora, quemEEssaQueAvancaComoAurora_AEscolhida, regacoAcolhedor, ruah, salmo46, santo, todaTua, vemVemVemEspiritoSanto } from "./letras"

const acordes = {
    molimMolim: molimMolim.map(letra => getAcordes(letra, ['G', 'Em', 'C', 'D', '(D7)'])),
    passaFogo: passaFogo.map(letra => getAcordes(letra, ['D', 'G', '(A7)', '(D4)', 'A'])),
    dancaDaAmizade: dancaDaAmizade.map(letra => getAcordes(letra, ['D', 'A', 'G', '(A7)'])),
    euSouDoSenhor: euSouDoSenhor.map(letra => getAcordes(letra, ['G', 'Em', 'Am', 'D7'])),
    euNavegarei: euNavegarei.map(letra => getAcordes(letra, ['Am', 'Em', 'F', 'Dm', 'E'])),
    canticoDeAdoracao: canticoDeAdoracao.map(letra => getAcordes(letra, ['Dm', 'Bb', 'Gm7', 'A4', '(A7)', 'C'])),
    ruah: ruah.map(letra => getAcordes(letra, ['C7M', 'D', 'Em', 'G', 'C', 'Am7', 'Bm7'])),
    pescadorDeCristo: pescadorDeCristo.map(letra => getAcordes(letra, ['G', 'Em', 'C', 'D', '(D4)'])),
    pipoca: pipoca.map(letra => getAcordes(letra, ['E', 'B7', 'B'])),
    oCeuSeAbre: oCeuSeAbre.map(letra => getAcordes(letra, ['B', 'D#m', 'E', 'A', 'F#4', 'F#', 'C#m', 'B7M', 'B/D#', 'E7M', 'G#m'])),
    oSenhorRessurgiu: oSenhorRessurgiu.map(letra => getAcordes(letra, ['B', 'D#m7', 'E', 'C#m', 'F#', '(F#4)', '(F#)', 'D#m', 'G#m', 'G#m7', 'B7', 'C#m7'])),
    euConfesso: euConfesso.map(letra => getAcordes(letra, ['Am', 'Dm', 'E', 'G7', 'Dm7', 'E7', 'C', '(G/B)', '(A7)', '(E7)', '(E)', 'G', '(G)'])),
    gloriaADeusNasAlturas: gloriaADeusNasAlturas.map(letra => getAcordes(letra, ['Dm', 'C', 'A', '(A7)', 'F', 'A7', 'C', '(Bb)', 'Gm', 'Bb', '(A)'])),
    aleluia: aleluia.map(letra => getAcordes(letra, ['A', '(A7)', 'D', 'E', 'F#m', 'C#m', 'Bm', '(E7)'])),
    euCreioNumMundoNovo: euCreioNumMundoNovo.map(letra => getAcordes(letra, ['A', 'E', '(A)', 'D', 'B', '(E7)'])),
    santo: santo.map(letra => getAcordes(letra, ['A', 'F#m','D', 'E', '(E7)', '(A)'])),
    amem: amem.map(letra => getAcordes(letra, ['(D)', 'D#º','Em', 'C', 'G', 'D7', 'D', '(Em)'])),
    cordeiroDeDeus: cordeiroDeDeus.map(letra => getAcordes(letra, ['Dm', 'A7', 'D7', 'Gm', 'C', 'F', 'Bb', '(A7)', 'A'])),
    celebremosNossaPascoa: celebremosNossaPascoa.map(letra => getAcordes(letra, ['Am', 'Dm', 'E', 'F'])),
    parabensPraVoce: parabensPraVoce.map(letra => getAcordes(letra, ['E', 'B7', 'A', 'Am', 'E7', 'C#m', 'F#m', '(E7)'])),
    quemEEssaQueAvancaComoAurora_AEscolhida: quemEEssaQueAvancaComoAurora_AEscolhida.map(letra => getAcordes(letra, ['D', 'A', 'Bm', 'G', 'F#m', 'E', '(A7)', '(Bm)', 'A7', '(A)'])),
    benditoSejasOReiDaGloria: benditoSejasOReiDaGloria.map(letra => getAcordes(letra, ['Dm', 'A7', 'Bb', 'F', 'Gm', 'C7', '(C)', '(A7)', 'D', 'G', 'E7', 'A', 'C'])),
    gloriaADeusNosAltosCeus: gloriaADeusNosAltosCeus.map(letra => getAcordes(letra, ['D', '(Bm)', 'Em', 'E7', 'A', 'G', '(A7)', 'E'])),
    quemEEssaQueAvancaComoAurora: quemEEssaQueAvancaComoAurora.map(letra => getAcordes(letra, ['D', 'A', 'Bm'])),
    consagracaoANossaSenhora: consagracaoANossaSenhora.map(letra => getAcordes(letra, ['G', 'Bm7', 'Am', 'D9', '(Dm7)', 'Em7', 'D7', '(Am7)', '(D7)', 'Am7', 'D', 'B4', 'B7', 'Cm', '(Dm)', '(G)'])),
    anjosDeDeus: anjosDeDeus.map(letra => getAcordes(letra, ['C', 'G', 'F'])),
    salmo46: salmo46.map(letra => getAcordes(letra, ['E', 'A', 'B', 'F#m', 'C#m'])),
    cristoEONossoAmem: cristoEONossoAmem.map(letra => getAcordes(letra, ['A7', 'Dm', 'Gm'])),
    passeioDeCarangueijo: passeioDeCarangueijo.map(letra => getAcordes(letra, ['C', 'G', 'Am', 'F', '(G)', '(C7)', '(G/B)', 'Dm'])),
    oSenhorERei: oSenhorERei.map(letra => getAcordes(letra, ['Bm', 'D', 'A', '(Bm)', '(A)', 'G', '(A7)'])),
    vemVemVemEspiritoSanto: vemVemVemEspiritoSanto.map(letra => getAcordes(letra, ['D', '(Bm7)', 'G', 'A7', '(A7)', '(D7)', 'A', 'F#m', 'Bm', 'Am7', ''])),
    aparecida: aparecida.map(letra => getAcordes(letra, ['G#7M', 'Bb', 'Cm', '(D#)', 'D#', 'Fm', '(Bb)', 'G#'])),
    regacoAcolhedor: regacoAcolhedor.map(letra => getAcordes(letra, ['G#7M', 'Bb9', 'Cm7', 'D#', 'Bb/D', 'G#', 'Bb', 'Cm', '(Bb)', 'G#'])),
    mariaDeNazare: mariaDeNazare.map(letra => getAcordes(letra, ['F#m7', 'B7', 'E', 'Bm7', 'A', 'Am', 'C#m', 'Cm', '(Bb)', 'G#'])),
    todaTua: todaTua.map(letra => getAcordes(letra, ['A9', 'C#m', 'E', 'B9', 'F#m', 'B4', '(B7)', 'Cm', '(Bb)', 'G#'])),
    aAlegriaEstaNoCoracao: aAlegriaEstaNoCoracao.map(letra => getAcordes(letra, ['C', 'F', '(Bb)', '(F)', 'D7', 'C7', 'G', 'Cm', '(Bb)', 'G#'])),
    chuvaDeGraca: chuvaDeGraca.map(letra => getAcordes(letra, ['G', 'D', 'Em', 'C'])),
    aAlegriaDoSenhor: aAlegriaDoSenhor.map(letra => getAcordes(letra, ['D', 'G', 'A', 'Em'])),
}

export const cifrasSemEstrutura = {
    molimMolim: {
        titulo: 'Molim Molim',
        autor: 'Ministério Unidos Em Cristo',
        tomPadrao: 'G',
        letra: molimMolim.map((letra, index) => getLetra(letra, acordes.molimMolim[index])),
        acordes: acordes.molimMolim,
        isRelativa: false
    },
    passaFogo: {
        titulo: 'Passa Fogo',
        autor: 'DDD Doidin de Deus',
        tomPadrao: 'D',
        letra: passaFogo.map((letra, index) => getLetra(letra, acordes.passaFogo[index])),
        acordes: acordes.passaFogo,
        isRelativa: false
    },
    dancaDaAmizade: {
        titulo: 'Danca da Amizade',
        autor: 'Comunidade Recado',
        tomPadrao: 'D',
        letra: dancaDaAmizade.map((letra, index) => getLetra(letra, acordes.dancaDaAmizade[index])),
        acordes: acordes.dancaDaAmizade,
        isRelativa: false
    },
    euSouDoSenhor: {
        titulo: 'Eu Sou do Senhor',
        autor: 'Ministério Louva Deus',
        tomPadrao: 'G',
        letra: euSouDoSenhor.map((letra, index) => getLetra(letra, acordes.euSouDoSenhor[index])),
        acordes: acordes.euSouDoSenhor,
        isRelativa: false
    },
    euNavegarei: {
        titulo: 'Eu Navegarei',
        autor: 'Harpa Cristã',
        tomPadrao: 'Am',
        letra: euNavegarei.map((letra, index) => getLetra(letra, acordes.euNavegarei[index])),
        acordes: acordes.euNavegarei,
        isRelativa: true
    },
    canticoDeAdoracao: {
        titulo: 'Cântico de Adoração',
        autor: 'Eliana Ribeiro',
        tomPadrao: 'Dm',
        letra: canticoDeAdoracao.map((letra, index) => getLetra(letra, acordes.canticoDeAdoracao[index])),
        acordes: acordes.canticoDeAdoracao,
        isRelativa: true
    },
    ruah: {
        titulo: 'Ruah',
        autor: 'Comunidade Católica Shalom',
        tomPadrao: 'G',
        letra: ruah.map((letra, index) => getLetra(letra, acordes.ruah[index])),
        acordes: acordes.ruah,
        isRelativa: false
    },
    pescadorDeCristo: {
        titulo: 'Pescador de Cristo',
        autor: 'Banda Dom',
        tomPadrao: 'G',
        letra: pescadorDeCristo.map((letra, index) => getLetra(letra, acordes.pescadorDeCristo[index])),
        acordes: acordes.pescadorDeCristo,
        isRelativa: false
    },
    pipoca: {
        titulo: 'Pipoca',
        autor: 'Cosme',
        tomPadrao: 'E',
        letra: pipoca.map((letra, index) => getLetra(letra, acordes.pipoca[index])),
        acordes: acordes.pipoca,
        isRelativa: false
    },
    oCeuSeAbre: {
        titulo: 'O Céu Se Abre',
        autor: 'Walmir Alencar',
        tomPadrao: 'B',
        letra: oCeuSeAbre.map((letra, index) => getLetra(letra, acordes.oCeuSeAbre[index])),
        acordes: acordes.oCeuSeAbre,
        isRelativa: false
    },
    oSenhorRessurgiu: {
        titulo: 'O Senhor Ressurgiu',
        autor: 'CNBB',
        tomPadrao: 'B',
        letra: oSenhorRessurgiu.map((letra, index) => getLetra(letra, acordes.oSenhorRessurgiu[index])),
        acordes: acordes.oSenhorRessurgiu,
        isRelativa: false
    },
    euConfesso: {
        titulo: 'Eu Confesso',
        autor: 'Músicas Católicas',
        tomPadrao: 'Am',
        letra: euConfesso.map((letra, index) => getLetra(letra, acordes.euConfesso[index])),
        acordes: acordes.euConfesso,
        isRelativa: true
    },
    gloriaADeusNasAlturas: {
        titulo: 'Glória à Deus nas Alturas',
        autor: 'Músicas Católicas',
        tomPadrao: 'Dm',
        letra: gloriaADeusNasAlturas.map((letra, index) => getLetra(letra, acordes.gloriaADeusNasAlturas[index])),
        acordes: acordes.gloriaADeusNasAlturas,
        isRelativa: true
    },
    aleluia: {
        titulo: 'Aleluia',
        autor: 'Músicas Católicas',
        tomPadrao: 'A',
        letra: aleluia.map((letra, index) => getLetra(letra, acordes.aleluia[index])),
        acordes: acordes.aleluia,
        isRelativa: false
    },
    euCreioNumMundoNovo: {
        titulo: 'Eu Creio Num Mundo Novo',
        autor: 'Músicas Católicas',
        tomPadrao: 'A',
        letra: euCreioNumMundoNovo.map((letra, index) => getLetra(letra, acordes.euCreioNumMundoNovo[index])),
        acordes: acordes.euCreioNumMundoNovo,
        isRelativa: false
    },
    santo: {
        titulo: 'Santo',
        autor: 'Músicas Católicas',
        tomPadrao: 'A',
        letra: santo.map((letra, index) => getLetra(letra, acordes.santo[index])),
        acordes: acordes.santo,
        isRelativa: false
    },
    amem: {
        titulo: 'Amém',
        autor: 'Músicas Católicas',
        tomPadrao: 'Em',
        letra: amem.map((letra, index) => getLetra(letra, acordes.amem[index])),
        acordes: acordes.amem,
        isRelativa: true,
        preparacao: 'D'
    },
    cordeiroDeDeus: {
        titulo: 'Cordeiro de Deus',
        autor: 'Paulo Roberto',
        tomPadrao: 'Dm',
        letra: cordeiroDeDeus.map((letra, index) => getLetra(letra, acordes.cordeiroDeDeus[index])),
        acordes: acordes.cordeiroDeDeus,
        isRelativa: true,
    },
    celebremosNossaPascoa: {
        titulo: 'Celebremos Nossa Páscoa',
        autor: 'CNBB',
        tomPadrao: 'Am',
        letra: celebremosNossaPascoa.map((letra, index) => getLetra(letra, acordes.celebremosNossaPascoa[index])),
        acordes: acordes.celebremosNossaPascoa,
        isRelativa: true,
    },
    parabensPraVoce: {
        titulo: 'Parabéns Pra Você',
        autor: 'Músicas Católicas',
        tomPadrao: 'E',
        letra: parabensPraVoce.map((letra, index) => getLetra(letra, acordes.parabensPraVoce[index])),
        acordes: acordes.parabensPraVoce,
        isRelativa: false,
        preparacao: 'E'
    },
    quemEEssaQueAvancaComoAurora_AEscolhida: {
        titulo: 'Quem É Essa Que Avança Como Aurora/ A Escolhida (pout-porri)',
        autor: 'Músicas de Chiquinho',
        tomPadrao: 'D',
        letra: quemEEssaQueAvancaComoAurora_AEscolhida.map((letra, index) => getLetra(letra, acordes.quemEEssaQueAvancaComoAurora_AEscolhida[index])),
        acordes: acordes.quemEEssaQueAvancaComoAurora_AEscolhida,
        isRelativa: false
    },
    benditoSejasOReiDaGloria: {
        titulo: 'Bendito Sejas Ó Rei Da Glória',
        autor: 'Ministério Theos Xadaí',
        tomPadrao: 'Dm',
        letra: benditoSejasOReiDaGloria.map((letra, index) => getLetra(letra, acordes.benditoSejasOReiDaGloria[index])),
        acordes: acordes.benditoSejasOReiDaGloria,
        isRelativa: true
    },
    gloriaADeusNosAltosCeus: {
        titulo: 'Glória a Deus nos Altos Céus',
        autor: 'Músicas Católicas',
        tomPadrao: 'D',
        letra: gloriaADeusNosAltosCeus.map((letra, index) => getLetra(letra, acordes.gloriaADeusNosAltosCeus[index])),
        acordes: acordes.gloriaADeusNosAltosCeus,
        isRelativa: true
    },
    quemEEssaQueAvancaComoAurora: {
        titulo: 'Quem É Essa Que Avança Como Aurora',
        autor: 'Tony Alysson',
        tomPadrao: 'D',
        letra: quemEEssaQueAvancaComoAurora.map((letra, index) => getLetra(letra, acordes.quemEEssaQueAvancaComoAurora[index])),
        acordes: acordes.quemEEssaQueAvancaComoAurora,
        isRelativa: false
    },
    consagracaoANossaSenhora: {
        titulo: 'Consagração à Nossa Senhora',
        autor: 'Eliana Ribeiro',
        tomPadrao: 'G',
        letra: consagracaoANossaSenhora.map((letra, index) => getLetra(letra, acordes.consagracaoANossaSenhora[index])),
        acordes: acordes.consagracaoANossaSenhora,
        isRelativa: false
    },
    anjosDeDeus: {
        titulo: 'Anjos de Deus',
        autor: 'Padre Marcelo Rossi',
        tomPadrao: 'C',
        letra: anjosDeDeus.map((letra, index) => getLetra(letra, acordes.anjosDeDeus[index])),
        acordes: acordes.anjosDeDeus,
        isRelativa: false
    },
    salmo46: {
        titulo: 'Salmo 46', 
        autor: 'Músicas de Chiquinho',
        tomPadrao: 'E',
        letra: salmo46.map((letra, index) => getLetra(letra, acordes.salmo46[index])),
        acordes: acordes.salmo46,
        isRelativa: false
    },
    cristoEONossoAmem: {
        titulo: 'Cristo É o Nosso Amém', 
        autor: 'Músicas de Chiquinho',
        tomPadrao: 'Dm',
        letra: cristoEONossoAmem.map((letra, index) => getLetra(letra, acordes.cristoEONossoAmem[index])),
        acordes: acordes.cristoEONossoAmem,
        isRelativa: true,
        preparacao: 'Dm'
    },
    passeioDeCarangueijo: {
        titulo: 'Passeio De Carangueijo', 
        autor: 'DDD Doidin de Deus',
        tomPadrao: 'C',
        letra: passeioDeCarangueijo.map((letra, index) => getLetra(letra, acordes.passeioDeCarangueijo[index])),
        acordes: acordes.passeioDeCarangueijo,
        isRelativa: false,
    },
    oSenhorERei: {
        titulo: 'O Senhor É Rei', 
        autor: 'Padre Marcelo Rossi',
        tomPadrao: 'D',
        letra: oSenhorERei.map((letra, index) => getLetra(letra, acordes.oSenhorERei[index])),
        acordes: acordes.oSenhorERei,
        isRelativa: false,
    },
    vemVemVemEspiritoSanto: {
        titulo: 'Vem Vem Vem Espírito Santo', 
        autor: 'Músicas Católicas',
        tomPadrao: 'D',
        letra: vemVemVemEspiritoSanto.map((letra, index) => getLetra(letra, acordes.vemVemVemEspiritoSanto[index])),
        acordes: acordes.vemVemVemEspiritoSanto,
        isRelativa: false,
    },
    aparecida: {
        titulo: 'Aparecida', 
        autor: 'Comunidade Católica Colo de Deus',
        tomPadrao: 'D#',
        letra: aparecida.map((letra, index) => getLetra(letra, acordes.aparecida[index])),
        acordes: acordes.aparecida,
        isRelativa: false,
    },
    regacoAcolhedor: {
        titulo: 'Regaço Acolhedor', 
        autor: 'Ir. Kelly Patrícia',
        tomPadrao: 'D#',
        letra: regacoAcolhedor.map((letra, index) => getLetra(letra, acordes.regacoAcolhedor[index])),
        acordes: acordes.regacoAcolhedor,
        isRelativa: false,
    },
    mariaDeNazare: {
        titulo: 'Maria De Nazaré', 
        autor: 'Padre Zezinho',
        tomPadrao: 'E',
        letra: mariaDeNazare.map((letra, index) => getLetra(letra, acordes.mariaDeNazare[index])),
        acordes: acordes.mariaDeNazare,
        isRelativa: false,
        preparacao: 'E'
    },
    todaTua: {
        titulo: 'Toda Tua', 
        autor: 'Comunidade Católica Colo de Deus',
        tomPadrao: 'E',
        letra: todaTua.map((letra, index) => getLetra(letra, acordes.todaTua[index])),
        acordes: acordes.todaTua,
        isRelativa: false,
        preparacao: 'B'
    },
    aAlegriaEstaNoCoracao: {
        titulo: 'A Alegria Está No Coração', 
        autor: 'Corinhos Evangélicos',
        tomPadrao: 'C',
        letra: aAlegriaEstaNoCoracao.map((letra, index) => getLetra(letra, acordes.aAlegriaEstaNoCoracao[index])),
        acordes: acordes.aAlegriaEstaNoCoracao,
        isRelativa: false
    },
    chuvaDeGraca: {
        titulo: 'Chuva De Graca', 
        autor: 'Eliana Ribeiro',
        tomPadrao: 'G',
        letra: chuvaDeGraca.map((letra, index) => getLetra(letra, acordes.chuvaDeGraca[index])),
        acordes: acordes.chuvaDeGraca,
        isRelativa: false,
        preparacao: 'G'
    },
    aAlegriaDoSenhor: {
        titulo: 'A Alegria Do Senhor', 
        autor: 'Músicas de Chiquinho',
        tomPadrao: 'D',
        letra: aAlegriaDoSenhor.map((letra, index) => getLetra(letra, acordes.aAlegriaDoSenhor[index])),
        acordes: acordes.aAlegriaDoSenhor,
        isRelativa: false
    }
}

export const cifras = Object.fromEntries(
    Object.entries(cifrasSemEstrutura).map(([chave, valor]) => [
        chave,
        getCifra({ ...valor }, 'geral', chave)
    ])
)
