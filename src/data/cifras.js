import { getLetra, getAcordes, getCifra } from "../assets/cifras"
import { aAlegriaDoSenhor, aAlegriaEstaNoCoracao, aEleAGloria, alegresVamosACasaDoPai, aleluia, aleluia2, aleluiaAlegriaMinhaGente, aleluiaUmGrandeProfetaSurgiu, amem, amemSenhor, anjosDeDeus, aparecida, aveMaria, benditoSejaDeus, benditoSejasOReiDaGloria, cantarABelezaDaVida, canticoDeAdoracao, celebremosNossaPascoa, chuvaDeGraca, conhecoUmCoracao, consagracaoANossaSenhora, cordeiroDeDeus, cordeiroDeDeus2, cordeiroDeDeus3, cristoEONossoAmem, dancaDaAmizade, eisMeAquiSenhor, emTuaPresenca, euConfesso, euCreioNumMundoNovo, euNavegarei, euSouDoSenhor, forcaEVitoria, gloriaADeusNasAlturas, gloriaADeusNosAltosCeus, ladainhaDosEmpobrecidos, mariaDeNazare, meuCoracaoEParaTi, molimMolim, oCeuSeAbre, oPaoDaVidaComunhao, oSenhorEMinhaLuz, oSenhorERei, oSenhorRessurgiu, parabensPraVoce, passaFogo, passeioDeCarangueijo, perfeitoEQuemTeCriou, pescadorDeCristo, pipoca, povoDeDeusFoiAssim, primeiraCrista, quemEEssaQueAvancaComoAurora, quemEEssaQueAvancaComoAurora_AEscolhida, refrigeraMinhaAlma_SopraEmNos, regacoAcolhedor, ruah, sabesSenhor, salmo129_130, salmo46, santo, senhorTendePiedadeEPerdoaiANossaCulpa, taoSublime, todaTua, todoTeu, vemEEuMostrarei, vemODeusDaVida, vemVemVemEspiritoSanto } from "./letras"

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
    aleluia: aleluia.map(letra => getAcordes(letra, ['A', '(A7)', 'D', 'E', 'Bm', '(E7)'])),
    euCreioNumMundoNovo: euCreioNumMundoNovo.map(letra => getAcordes(letra, ['A', 'E', '(A)', 'D', 'B', '(E7)'])),
    santo: santo.map(letra => getAcordes(letra, ['A', 'F#m','D', 'E', '(E7)', '(A)'])),
    amem: amem.map(letra => getAcordes(letra, ['(D)', 'D#º','Em', 'C', 'G', 'D7', 'D', '(Em)'])),
    cordeiroDeDeus: cordeiroDeDeus.map(letra => getAcordes(letra, ['Dm', 'A7', 'D7', 'Gm', 'C', 'F', 'Bb', '(A7)', 'A'])),
    celebremosNossaPascoa: celebremosNossaPascoa.map(letra => getAcordes(letra, ['Am', 'Dm', 'E', 'F'])),
    parabensPraVoce: parabensPraVoce.map(letra => getAcordes(letra, ['E', 'B7', 'A', 'Am', 'E7', 'C#m', 'F#m', '(E7)'])),
    quemEEssaQueAvancaComoAurora_AEscolhida: quemEEssaQueAvancaComoAurora_AEscolhida.map(letra => getAcordes(letra, ['D', 'A', 'Bm', 'G', 'F#m', 'E', '(A7)', '(Bm)', 'A7', '(A)'])),
    benditoSejasOReiDaGloria: benditoSejasOReiDaGloria.map(letra => getAcordes(letra, ['Dm', 'A7', 'Bb', 'F', 'Gm', 'C7', '(C)', '(A7)', 'D', 'G', 'E7', 'A', 'C'])),
    gloriaADeusNosAltosCeus: gloriaADeusNosAltosCeus.map(letra => getAcordes(letra, ['D', '(Bm)', 'Em', 'E7', 'A', 'G', '(A7)', 'E', 'Gm', 'A7', 'D7', 'D9'])),
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
    vemEEuMostrarei: vemEEuMostrarei.map(letra => getAcordes(letra, ['D', 'Bm', 'G', 'A7', 'F#'])),
    alegresVamosACasaDoPai: alegresVamosACasaDoPai.map(letra => getAcordes(letra, ['C', 'G7', '(C7)', 'F', '(A7)', 'Dm', 'Am', 'A7', 'D7'])),
    primeiraCrista: primeiraCrista.map(letra => getAcordes(letra, ['C', 'G', 'Dm', 'G7', '(G7)', '(C7)', 'F', 'Am'])),
    aveMaria: aveMaria.map(letra => getAcordes(letra, ['G', 'F', 'C', 'C7M', 'D/C'])),
    aleluiaAlegriaMinhaGente: aleluiaAlegriaMinhaGente.map(letra => getAcordes(letra, ['C', 'Am', 'Dm', '(G7)', 'F', 'G', 'G7', 'A7'])),
    ladainhaDosEmpobrecidos: ladainhaDosEmpobrecidos.map(letra => getAcordes(letra, ['D', 'E7', 'A', 'F#m', 'Bm', '(A7)'])),
    oPaoDaVidaComunhao: oPaoDaVidaComunhao.map(letra => getAcordes(letra, ['C', 'Dm', '(G7)', 'F', '(C7)'])),
    povoDeDeusFoiAssim: povoDeDeusFoiAssim.map(letra => getAcordes(letra, ['C', 'G', 'Am', 'Em', 'F', 'D7', 'G7', '(G7)', 'D'])),
    emTuaPresenca: emTuaPresenca.map(letra => getAcordes(letra, ['C9', '(C#º)', 'Dm7', 'Em7', 'F9', 'G', 'C', '(G)', 'G/B', 'Am', 'Am7', 'Dm', 'F', '(F)', 'Em', 'A4', 'A7'])),
    taoSublime: taoSublime.map(letra => getAcordes(letra, ['C', 'G7', 'Am', 'Dm', 'F'])),
    meuCoracaoEParaTi: meuCoracaoEParaTi.map(letra => getAcordes(letra, ['A', 'B7', 'E', 'C#m', 'F#m', '(E7)', 'G#m'])),
    eisMeAquiSenhor: eisMeAquiSenhor.map(letra => getAcordes(letra, ['D', 'G', 'A', 'D7', '(D7)', 'A/G', 'F#7', 'Bm', 'Em'])),
    sabesSenhor: sabesSenhor.map(letra => getAcordes(letra, ['C', 'Dm', 'G', 'Gm', 'F', '(F)', 'A'])),
    cantarABelezaDaVida: cantarABelezaDaVida.map(letra => getAcordes(letra, ['C', 'G', 'Am', 'Em', 'F', 'D7', 'G7', 'D'])),
    vemODeusDaVida: vemODeusDaVida.map(letra => getAcordes(letra, ['G', 'A', 'D'])),
    aEleAGloria: aEleAGloria.map(letra => getAcordes(letra, ['C', 'Em', 'Am', 'Am/G', 'F', 'Dm', 'G7', 'Bb', 'G4', 'G'])),
    forcaEVitoria: forcaEVitoria.map(letra => getAcordes(letra, ['F#m', 'B9', 'E', 'B/D#', 'C#m', '(C#7)', 'G#', 'C#7'])),
    refrigeraMinhaAlma_SopraEmNos: refrigeraMinhaAlma_SopraEmNos.map(letra => getAcordes(letra, ['E', 'E7M', 'A9', '(F#m7)', '(B9)', 'C#m', 'B9', 'B', 'B4', 'B7', 'B/D#'])),
    benditoSejaDeus: benditoSejaDeus.map(letra => getAcordes(letra, ['Am', 'Dm', 'G', 'C', 'E7', 'A7', '(A7)'])),
    perfeitoEQuemTeCriou: perfeitoEQuemTeCriou.map(letra => getAcordes(letra, ['F', 'F7M', 'Gm', 'Am', 'Dm', 'C', 'C/E', 'C#7M', 'C#', 'G#', 'D#', 'Bbm', 'Bb', '(C7)', 'Cm'])),
    todoTeu: todoTeu.map(letra => getAcordes(letra, ['C9', 'G9', 'Am', 'F', 'Dm', 'C/E', 'G', '(A)', 'D9', 'A9', 'Bm', 'A', 'D', 'Gm', 'A7'])),
    cordeiroDeDeus2: cordeiroDeDeus2.map(letra => getAcordes(letra, ['E', 'G#m', 'A', 'B7', 'C#m', 'Am', 'F#m'])),
    cordeiroDeDeus3: cordeiroDeDeus3.map(letra => getAcordes(letra, ['E', 'G#m7', 'A9', 'B7', 'F#m7', 'B', 'A'])),
    conhecoUmCoracao: conhecoUmCoracao.map(letra => getAcordes(letra, ['C', 'Em', 'Dm', 'G', 'F', '(E7)', 'Am', '(G4)', '(G7)', 'C', 'G/B', '(F)', '(C)'])),
    salmo129_130: salmo129_130.map(letra => getAcordes(letra, ['F#', 'B', 'Bbm', '(G#m)', '(D#m7)', '(B)', 'G#m', 'C#7'])),
    oSenhorEMinhaLuz: oSenhorEMinhaLuz.map(letra => getAcordes(letra, ['Am', 'Dm', 'E', 'G', 'C'])),
    amemSenhor: amemSenhor.map(letra => getAcordes(letra, ['D', 'Bm', 'G', 'A7', '(E)', 'E', 'C#m', 'A', 'B7'])),
    aleluia2: aleluia2.map(letra => getAcordes(letra, ['A', 'E', 'F#m', 'D', '(E7)'])),
    aleluiaUmGrandeProfetaSurgiu: aleluiaUmGrandeProfetaSurgiu.map(letra => getAcordes(letra, ['C', 'Bb', 'Am', 'G', 'Gm', 'F'])),
    senhorTendePiedadeEPerdoaiANossaCulpa: senhorTendePiedadeEPerdoaiANossaCulpa.map(letra => getAcordes(letra, ['A', 'D', 'E', 'F#m', 'Bm', 'E7', '(A7)', '(E7)', 'Dm', 'A9'])),
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
        isRelativa: false,
        preparacao: 'G'
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
    },
    vemEEuMostrarei: {
        titulo: 'Vem e Eu Mostrarei', 
        autor: 'Músicas Católicas',
        tomPadrao: 'D',
        letra: vemEEuMostrarei.map((letra, index) => getLetra(letra, acordes.vemEEuMostrarei[index])),
        acordes: acordes.vemEEuMostrarei,
        isRelativa: false
    },
    alegresVamosACasaDoPai: {
        titulo: 'Alegres Vamos à Casa do Pai', 
        autor: 'CNBB',
        tomPadrao: 'C',
        letra: alegresVamosACasaDoPai.map((letra, index) => getLetra(letra, acordes.alegresVamosACasaDoPai[index])),
        acordes: acordes.alegresVamosACasaDoPai,
        isRelativa: false
    },
    primeiraCrista: {
        titulo: 'Primeira Cristã', 
        autor: 'Cantores de Deus',
        tomPadrao: 'C',
        letra: primeiraCrista.map((letra, index) => getLetra(letra, acordes.primeiraCrista[index])),
        acordes: acordes.primeiraCrista,
        isRelativa: false,
        preparacao: 'C'
    },
    aveMaria: {
        titulo: 'Ave Maria', 
        autor: 'Músicas de Chiquinho',
        tomPadrao: 'C',
        letra: aveMaria.map((letra, index) => getLetra(letra, acordes.aveMaria[index])),
        acordes: acordes.aveMaria,
        isRelativa: false,
        preparacao: 'C'
    },
    aleluiaAlegriaMinhaGente: {
        titulo: 'Aleluia, Alegria, Minha Gente', 
        autor: 'Músicas Católicas',
        tomPadrao: 'C',
        letra: aleluiaAlegriaMinhaGente.map((letra, index) => getLetra(letra, acordes.aleluiaAlegriaMinhaGente[index])),
        acordes: acordes.aleluiaAlegriaMinhaGente,
        isRelativa: false,
        preparacao: 'C'
    },
    ladainhaDosEmpobrecidos: {
        titulo: 'Ladainha dos Empobrecidos', 
        autor: 'Paulo Roberto',
        tomPadrao: 'A',
        letra: ladainhaDosEmpobrecidos.map((letra, index) => getLetra(letra, acordes.ladainhaDosEmpobrecidos[index])),
        acordes: acordes.ladainhaDosEmpobrecidos,
        isRelativa: false
    },
    oPaoDaVidaComunhao: {
        titulo: 'O Pão Da Vida - Comunhao', 
        autor: 'Músicas Católicas',
        tomPadrao: 'C',
        letra: oPaoDaVidaComunhao.map((letra, index) => getLetra(letra, acordes.oPaoDaVidaComunhao[index])),
        acordes: acordes.oPaoDaVidaComunhao,
        isRelativa: false,
        preparacao: 'C'
    },
    povoDeDeusFoiAssim: {
        titulo: 'Povo de Deus Foi Assim', 
        autor: 'Músicas Católicas',
        tomPadrao: 'C',
        letra: povoDeDeusFoiAssim.map((letra, index) => getLetra(letra, acordes.povoDeDeusFoiAssim[index])),
        acordes: acordes.povoDeDeusFoiAssim,
        isRelativa: false,
        preparacao: 'C'
    },
    emTuaPresenca: {
        titulo: 'Em Tua Presença', 
        autor: 'Padre Fábio de Melo',
        tomPadrao: 'C',
        letra: emTuaPresenca.map((letra, index) => getLetra(letra, acordes.emTuaPresenca[index])),
        acordes: acordes.emTuaPresenca,
        isRelativa: false,
        preparacao: 'C'
    },
    taoSublime: {
        titulo: 'Tão Sublime', 
        autor: 'Músicas Católicas',
        tomPadrao: 'C',
        letra: taoSublime.map((letra, index) => getLetra(letra, acordes.taoSublime[index])),
        acordes: acordes.taoSublime,
        isRelativa: false
    },
    meuCoracaoEParaTi: {
        titulo: 'Meu Coração é Para Ti', 
        autor: 'Padre Zeca',
        tomPadrao: 'E',
        letra: meuCoracaoEParaTi.map((letra, index) => getLetra(letra, acordes.meuCoracaoEParaTi[index])),
        acordes: acordes.meuCoracaoEParaTi,
        isRelativa: false
    },
    eisMeAquiSenhor: {
        titulo: 'Eis-me Aqui Senhor', 
        autor: 'Músicas Católicas',
        tomPadrao: 'D',
        letra: eisMeAquiSenhor.map((letra, index) => getLetra(letra, acordes.eisMeAquiSenhor[index])),
        acordes: acordes.eisMeAquiSenhor,
        isRelativa: false
    },
    sabesSenhor: {
        titulo: 'Sabes Senhor', 
        autor: 'Músicas Católicas',
        tomPadrao: 'C',
        letra: sabesSenhor.map((letra, index) => getLetra(letra, acordes.sabesSenhor[index])),
        acordes: acordes.sabesSenhor,
        isRelativa: false,
        preparacao: 'C'
    },
    cantarABelezaDaVida: {
        titulo: 'Cantar a Beleza da Vida', 
        autor: 'Músicas Católicas',
        tomPadrao: 'C',
        letra: cantarABelezaDaVida.map((letra, index) => getLetra(letra, acordes.cantarABelezaDaVida[index])),
        acordes: acordes.cantarABelezaDaVida,
        isRelativa: false
    },
    vemODeusDaVida: {
        titulo: 'Vem ó Deus da Vida', 
        autor: 'CNBB',
        tomPadrao: 'D',
        letra: vemODeusDaVida.map((letra, index) => getLetra(letra, acordes.vemODeusDaVida[index])),
        acordes: acordes.vemODeusDaVida,
        isRelativa: false
    },
    aEleAGloria: {
        titulo: 'A Ele a Glória', 
        autor: 'Músicas Católicas',
        tomPadrao: 'C',
        letra: aEleAGloria.map((letra, index) => getLetra(letra, acordes.aEleAGloria[index])),
        acordes: acordes.aEleAGloria,
        isRelativa: false,
        preparacao: 'C'
    },
    forcaEVitoria: {
        titulo: 'Força e Vitória', 
        autor: 'Eliana Ribeiro',
        tomPadrao: 'C#m',
        letra: forcaEVitoria.map((letra, index) => getLetra(letra, acordes.forcaEVitoria[index])),
        acordes: acordes.forcaEVitoria,
        isRelativa: true
    },
    refrigeraMinhaAlma_SopraEmNos: {
        titulo: 'Refrigera Minh`alma/ Sopra Em Nos (pout-porri)', 
        autor: 'Músicas de Chiquinho',
        tomPadrao: 'E',
        letra: refrigeraMinhaAlma_SopraEmNos.map((letra, index) => getLetra(letra, acordes.refrigeraMinhaAlma_SopraEmNos[index])),
        acordes: acordes.refrigeraMinhaAlma_SopraEmNos,
        isRelativa: false,
        preparacao: 'B9'
    },
    benditoSejaDeus: {
        titulo: 'Bendito Seja Deus (Bendito e Louvado Seja o Pai, Nosso Criador)', 
        autor: 'Músicas Católicas',
        tomPadrao: 'Am',
        letra: benditoSejaDeus.map((letra, index) => getLetra(letra, acordes.benditoSejaDeus[index])),
        acordes: acordes.benditoSejaDeus,
        isRelativa: true,
        preparacao: 'Am'
    },
    perfeitoEQuemTeCriou: {
        titulo: 'Perfeito é Quem te Criou', 
        autor: 'Vida Reluz',
        tomPadrao: 'F',
        letra: perfeitoEQuemTeCriou.map((letra, index) => getLetra(letra, acordes.perfeitoEQuemTeCriou[index])),
        acordes: acordes.perfeitoEQuemTeCriou,
        isRelativa: false
    },
    todoTeu: {
        titulo: 'Todo Teu', 
        autor: 'Ministério Missionário Shalom',
        tomPadrao: 'C',
        letra: todoTeu.map((letra, index) => getLetra(letra, acordes.todoTeu[index])),
        acordes: acordes.todoTeu,
        isRelativa: false,
        preparacao: 'F'
    },
    cordeiroDeDeus2: {
        titulo: 'Cordeiro de Deus', 
        autor: 'Comunidade Católica Shalom',
        tomPadrao: 'E',
        letra: cordeiroDeDeus2.map((letra, index) => getLetra(letra, acordes.cordeiroDeDeus2[index])),
        acordes: acordes.cordeiroDeDeus2,
        isRelativa: false
    },
    cordeiroDeDeus3: {
        titulo: 'Cordeiro de Deus', 
        autor: 'Ministério Amor e Adoração',
        tomPadrao: 'E',
        letra: cordeiroDeDeus3.map((letra, index) => getLetra(letra, acordes.cordeiroDeDeus3[index])),
        acordes: acordes.cordeiroDeDeus3,
        isRelativa: false
    },
    conhecoUmCoracao: {
        titulo: 'Conheço um Coração', 
        autor: 'Padre Joãozinho',
        tomPadrao: 'C',
        letra: conhecoUmCoracao.map((letra, index) => getLetra(letra, acordes.conhecoUmCoracao[index])),
        acordes: acordes.conhecoUmCoracao,
        isRelativa: false
    },
    salmo129_130: {
        titulo: 'Salmo 129 (130)', 
        autor: 'Músicas de Chiquinho',
        tomPadrao: 'F#',
        letra: salmo129_130.map((letra, index) => getLetra(letra, acordes.salmo129_130[index])),
        acordes: acordes.salmo129_130,
        isRelativa: false
    },
    oSenhorEMinhaLuz: {
        titulo: 'O Senhor é Minha Luz', 
        autor: 'CNBB',
        tomPadrao: 'Am',
        letra: oSenhorEMinhaLuz.map((letra, index) => getLetra(letra, acordes.oSenhorEMinhaLuz[index])),
        acordes: acordes.oSenhorEMinhaLuz,
        isRelativa: true,
        preparacao: 'Am'
    },
    amemSenhor: {
        titulo: 'Amém Senhor', 
        autor: 'Músicas de Chiquinho',
        tomPadrao: 'D',
        letra: amemSenhor.map((letra, index) => getLetra(letra, acordes.amemSenhor[index])),
        acordes: acordes.amemSenhor,
        isRelativa: false
    },
    aleluia2: {
        titulo: 'Aleluia', 
        autor: 'Músicas de Chiquinho',
        tomPadrao: 'A',
        letra: aleluia2.map((letra, index) => getLetra(letra, acordes.aleluia2[index])),
        acordes: acordes.aleluia2,
        isRelativa: false
    },
    aleluiaUmGrandeProfetaSurgiu: {
        titulo: 'Aleluia um Grande Profeta Surgiu', 
        autor: 'Arquidiocese de Goiânia',
        tomPadrao: 'C',
        letra: aleluiaUmGrandeProfetaSurgiu.map((letra, index) => getLetra(letra, acordes.aleluiaUmGrandeProfetaSurgiu[index])),
        acordes: acordes.aleluiaUmGrandeProfetaSurgiu,
        isRelativa: false,
        preparacao: 'C'
    },
    senhorTendePiedadeEPerdoaiANossaCulpa: {
        titulo: 'Senhor Tende Piedade e Perdoai a Nossa Culpa', 
        autor: 'Hinário Litúrgico',
        tomPadrao: 'A',
        letra: senhorTendePiedadeEPerdoaiANossaCulpa.map((letra, index) => getLetra(letra, acordes.senhorTendePiedadeEPerdoaiANossaCulpa[index])),
        acordes: acordes.senhorTendePiedadeEPerdoaiANossaCulpa,
        isRelativa: false,
        preparacao: 'A'
    },
}

export const cifras = Object.fromEntries(
    Object.entries(cifrasSemEstrutura).map(([chave, valor]) => [
        chave,
        getCifra({ ...valor }, 'geral', chave)
    ])
)
