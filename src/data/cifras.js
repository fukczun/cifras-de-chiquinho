import { getLetra, getAcordes, getCifra } from "../assets/cifras"
import { aleluia, amem, benditoSejasOReiDaGloria, canticoDeAdoracao, celebremosNossaPascoa, cordeiroDeDeus, dancaDaAmizade, euConfesso, euCreioNumMundoNovo, euNavegarei, euSouDoSenhor, gloriaADeusNasAlturas, gloriaADeusNosAltosCeus, molimMolim, oCeuSeAbre, oSenhorRessurgiu, parabensPraVoce, passaFogo, pescadorDeCristo, pipoca, quemEEssaQueAvancaComoAurora_AEscolhida, ruah, santo } from "./letras"

const acordes = {
    molimMolim: getAcordes(molimMolim, ['G', 'Em', 'C', 'D', '(D7)']),
    passaFogo: getAcordes(passaFogo, ['D', 'G', '(A7)', '(D4)', 'A']),
    dancaDaAmizade: getAcordes(dancaDaAmizade, ['D', 'A', 'G', '(A7)']),
    euSouDoSenhor: getAcordes(euSouDoSenhor, ['G', 'Em', 'Am', 'D7']),
    euNavegarei: getAcordes(euNavegarei, ['Am', 'Em', 'F', 'Dm', 'E']),
    canticoDeAdoracao: getAcordes(canticoDeAdoracao, ['Dm', 'Bb', 'Gm7', 'A4', '(A7)', 'C']),
    ruah: getAcordes(ruah, ['C7M', 'D', 'Em', 'G', 'C', 'Am7', 'Bm7']),
    pescadorDeCristo: getAcordes(pescadorDeCristo, ['G', 'Em', 'C', 'D', '(D4)']),
    pipoca: getAcordes(pipoca, ['E', 'B7', 'B']),
    oCeuSeAbre: getAcordes(oCeuSeAbre, ['B', 'D#m', 'E', 'A', 'F#4', 'F#', 'C#m', 'B7M', 'B/D#', 'E7M', 'G#m']),
    oSenhorRessurgiu: getAcordes(oSenhorRessurgiu, ['B', 'D#m7', 'E', 'C#m', 'F#', '(F#4)', '(F#)', 'D#m', 'G#m', 'G#m7', 'B7', 'C#7']),
    euConfesso: getAcordes(euConfesso, ['Am', 'Dm', 'E', 'G7', 'Dm7', 'E7', 'C', 'G/B', '(A7)', '(E7)']),
    gloriaADeusNasAlturas: getAcordes(gloriaADeusNasAlturas, ['Dm', 'C', 'A', '(A7)', 'F', 'A7', 'C', '(Bb)', 'Gm', 'Bb', '(A)']),
    aleluia: getAcordes(aleluia, ['A', '(A7)', 'D', 'E', 'F#m', 'C#m', 'Bm', '(E7)']),
    euCreioNumMundoNovo: getAcordes(euCreioNumMundoNovo, ['A', 'E', '(A)', 'D', 'B', '(E7)']),
    santo: getAcordes(santo, ['A', 'F#m','D', 'E', '(E7)']),
    amem: getAcordes(amem, ['(D)', 'D#º','Em', 'C', 'G', 'D7', 'D', '(Em)']),
    cordeiroDeDeus: getAcordes(cordeiroDeDeus, ['Dm', 'A7', 'D7', 'Gm', 'C', 'F', 'Bb', '(A7)']),
    celebremosNossaPascoa: getAcordes(celebremosNossaPascoa, ['Am', 'Dm', 'E', 'F']),
    parabensPraVoce: getAcordes(parabensPraVoce, ['E', 'B7', 'A', 'Am', 'E7', 'C#m', 'F#m', '(E7)']),
    quemEEssaQueAvancaComoAurora_AEscolhida: getAcordes(quemEEssaQueAvancaComoAurora_AEscolhida, ['D', 'A', 'Bm', 'G', 'F#m', 'E', '(A7)', '(Bm)', 'A7', '(A)']),
    benditoSejasOReiDaGloria: getAcordes(benditoSejasOReiDaGloria, ['Dm', 'A7', 'A#', 'F', 'Gm', 'C7', '(C)', '(A7)', 'D', 'G', 'E7']),
    gloriaADeusNosAltosCeus: getAcordes(gloriaADeusNosAltosCeus, ['D', '(Bm)', 'Em', 'E7', 'A', 'G', '(A7)']),
}

export const cifrasSemEstrutura = {
    molimMolim: {
        titulo: 'Molim Molim',
        autor: 'Ministério Unidos Em Cristo',
        tomPadrao: 'G',
        letra: getLetra(molimMolim, acordes.molimMolim),
        acordes: acordes.molimMolim,
        isRelativa: false
    },
    passaFogo: {
        titulo: 'Passa Fogo',
        autor: 'DDD Doidin de Deus',
        tomPadrao: 'D',
        letra: getLetra(passaFogo, acordes.passaFogo),
        acordes: acordes.passaFogo,
        isRelativa: false
    },
    dancaDaAmizade: {
        titulo: 'Danca da Amizade',
        autor: 'Comunidade Recado',
        tomPadrao: 'D',
        letra: getLetra(dancaDaAmizade, acordes.dancaDaAmizade),
        acordes: acordes.dancaDaAmizade,
        isRelativa: false
    },
    euSouDoSenhor: {
        titulo: 'Eu Sou do Senhor',
        autor: 'Ministério Louva Deus',
        tomPadrao: 'G',
        letra: getLetra(euSouDoSenhor, acordes.euSouDoSenhor),
        acordes: acordes.euSouDoSenhor,
        isRelativa: false
    },
    euNavegarei: {
        titulo: 'Eu Navegarei',
        autor: 'Harpa Cristã',
        tomPadrao: 'Am',
        letra: getLetra(euNavegarei, acordes.euNavegarei),
        acordes: acordes.euNavegarei,
        isRelativa: true
    },
    canticoDeAdoracao: {
        titulo: 'Cântico de Adoração',
        autor: 'Eliana Ribeiro',
        tomPadrao: 'Dm',
        letra: getLetra(canticoDeAdoracao, acordes.canticoDeAdoracao),
        acordes: acordes.canticoDeAdoracao,
        isRelativa: true
    },
    ruah: {
        titulo: 'Ruah',
        autor: 'Comunidade Católica Shalom',
        tomPadrao: 'G',
        letra: getLetra(ruah, acordes.ruah),
        acordes: acordes.ruah,
        isRelativa: false
    },
    pescadorDeCristo: {
        titulo: 'Pescador de Cristo',
        autor: 'Banda Dom',
        tomPadrao: 'G',
        letra: getLetra(pescadorDeCristo, acordes.pescadorDeCristo),
        acordes: acordes.pescadorDeCristo,
        isRelativa: false
    },
    pipoca: {
        titulo: 'Pipoca',
        autor: 'Cosme',
        tomPadrao: 'E',
        letra: getLetra(pipoca, acordes.pipoca),
        acordes: acordes.pipoca,
        isRelativa: false
    },
    oCeuSeAbre: {
        titulo: 'O Céu Se Abre',
        autor: 'Walmir Alencar',
        tomPadrao: 'B',
        letra: getLetra(oCeuSeAbre, acordes.oCeuSeAbre),
        acordes: acordes.oCeuSeAbre,
        isRelativa: false
    },
    oSenhorRessurgiu: {
        titulo: 'O Senhor Ressurgiu',
        autor: 'CNBB',
        tomPadrao: 'B',
        letra: getLetra(oSenhorRessurgiu, acordes.oSenhorRessurgiu),
        acordes: acordes.oSenhorRessurgiu,
        isRelativa: false
    },
    euConfesso: {
        titulo: 'Eu Confesso',
        autor: 'Músicas Católicas',
        tomPadrao: 'Am',
        letra: getLetra(euConfesso, acordes.euConfesso),
        acordes: acordes.euConfesso,
        isRelativa: true
    },
    gloriaADeusNasAlturas: {
        titulo: 'Glória à Deus nas Alturas',
        autor: 'Músicas Católicas',
        tomPadrao: 'Dm',
        letra: getLetra(gloriaADeusNasAlturas, acordes.gloriaADeusNasAlturas),
        acordes: acordes.gloriaADeusNasAlturas,
        isRelativa: true
    },
    aleluia: {
        titulo: 'Aleluia',
        autor: 'Músicas Católicas',
        tomPadrao: 'A',
        letra: getLetra(aleluia, acordes.aleluia),
        acordes: acordes.aleluia,
        isRelativa: false
    },
    euCreioNumMundoNovo: {
        titulo: 'Eu Creio Num Mundo Novo',
        autor: 'Músicas Católicas',
        tomPadrao: 'A',
        letra: getLetra(euCreioNumMundoNovo, acordes.euCreioNumMundoNovo),
        acordes: acordes.euCreioNumMundoNovo,
        isRelativa: false
    },
    santo: {
        titulo: 'Santo',
        autor: 'Músicas Católicas',
        tomPadrao: 'A',
        letra: getLetra(santo, acordes.santo),
        acordes: acordes.santo,
        isRelativa: false
    },
    amem: {
        titulo: 'Amém',
        autor: 'Músicas Católicas',
        tomPadrao: 'Em',
        letra: getLetra(amem, acordes.amem),
        acordes: acordes.amem,
        isRelativa: true,
        preparacao: 'D'
    },
    cordeiroDeDeus: {
        titulo: 'Cordeiro de Deus',
        autor: 'Paulo Roberto',
        tomPadrao: 'Dm',
        letra: getLetra(cordeiroDeDeus, acordes.cordeiroDeDeus),
        acordes: acordes.cordeiroDeDeus,
        isRelativa: true,
    },
    celebremosNossaPascoa: {
        titulo: 'Celebremos Nossa Páscoa',
        autor: 'CNBB',
        tomPadrao: 'Am',
        letra: getLetra(celebremosNossaPascoa, acordes.celebremosNossaPascoa),
        acordes: acordes.celebremosNossaPascoa,
        isRelativa: true,
    },
    parabensPraVoce: {
        titulo: 'Parabéns Pra Você',
        autor: 'Músicas Católicas',
        tomPadrao: 'E',
        letra: getLetra(parabensPraVoce, acordes.parabensPraVoce),
        acordes: acordes.parabensPraVoce,
        isRelativa: false,
        preparacao: 'E'
    },
    quemEEssaQueAvancaComoAurora_AEscolhida: {
        titulo: 'Quem É Essa Que Avanca Como Aurora/ A Escolhida (pout-porri)',
        autor: 'Músicas de Chiquinho',
        tomPadrao: 'D',
        letra: getLetra(quemEEssaQueAvancaComoAurora_AEscolhida, acordes.quemEEssaQueAvancaComoAurora_AEscolhida),
        acordes: acordes.quemEEssaQueAvancaComoAurora_AEscolhida,
        isRelativa: false,
        preparacao: 'E'
    },
    benditoSejasOReiDaGloria: {
        titulo: 'Bendito Sejas Ó Rei Da Glória',
        autor: 'Ministério Theos Xadaí',
        tomPadrao: 'Dm',
        letra: getLetra(benditoSejasOReiDaGloria, acordes.benditoSejasOReiDaGloria),
        acordes: acordes.benditoSejasOReiDaGloria,
        isRelativa: true
    },
    gloriaADeusNosAltosCeus: {
        titulo: 'Glória a Deus nos Altos Céus',
        autor: 'Músicas Católicas',
        tomPadrao: 'D',
        letra: getLetra(gloriaADeusNosAltosCeus, acordes.gloriaADeusNosAltosCeus),
        acordes: acordes.gloriaADeusNosAltosCeus,
        isRelativa: true
    },
}

export const cifras = Object.fromEntries(
    Object.entries(cifrasSemEstrutura).map(([chave, valor]) => [
        chave,
        getCifra({ ...valor }, 'geral', chave)
    ])
)
