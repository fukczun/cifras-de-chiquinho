import { getCifra } from "../assets/cifras"
import { cifrasSemEstrutura } from "./cifras"

export const repertorios = {
    novena: {
        titulo: 'Novena',
        cifras: {
            alegresVamosACasaDoPai: getCifra(Object.assign({}, cifrasSemEstrutura.alegresVamosACasaDoPai), 'novena', 'alegresVamosACasaDoPai'),
            primeiraCrista: getCifra(Object.assign({}, cifrasSemEstrutura.primeiraCrista), 'novena', 'primeiraCrista'),
            aveMaria: getCifra(Object.assign({}, cifrasSemEstrutura.aveMaria), 'novena', 'aveMaria'),
            aleluiaAlegriaMinhaGente: getCifra(Object.assign({}, cifrasSemEstrutura.aleluiaAlegriaMinhaGente), 'novena', 'aleluiaAlegriaMinhaGente'),
            ladainhaDosEmpobrecidos: getCifra(Object.assign({}, cifrasSemEstrutura.ladainhaDosEmpobrecidos), 'novena', 'ladainhaDosEmpobrecidos'),
            quemEEssaQueAvancaComoAurora_AEscolhida: getCifra(Object.assign({}, cifrasSemEstrutura.quemEEssaQueAvancaComoAurora_AEscolhida), 'novena', 'quemEEssaQueAvancaComoAurora_AEscolhida')
        }
    },
    missaTempoComum: {
        titulo: 'Missa (Tempo Comum)',
        cifras: {
            euConfesso: getCifra(Object.assign({}, cifrasSemEstrutura.euConfesso), 'missaTempoComum', 'euConfesso'),
            gloriaADeusNasAlturas: getCifra(Object.assign({}, cifrasSemEstrutura.gloriaADeusNasAlturas), 'missaTempoComum', 'gloriaADeusNasAlturas'),
            aleluia: getCifra(Object.assign({}, cifrasSemEstrutura.aleluia), 'missaTempoComum', 'aleluia'),
            santo: getCifra(Object.assign({}, cifrasSemEstrutura.santo), 'missaTempoComum', 'santo'),
            cristoEONossoAmem: getCifra(Object.assign({}, cifrasSemEstrutura.cristoEONossoAmem), 'missaTempoComum', 'cristoEONossoAmem'),
            anjosDeDeus: getCifra(Object.assign({}, cifrasSemEstrutura.anjosDeDeus), 'missaTempoComum', 'anjosDeDeus'),
            cordeiroDeDeus: getCifra(Object.assign({}, cifrasSemEstrutura.cordeiroDeDeus), 'missaTempoComum', 'cordeiroDeDeus'),
            vemEEuMostrarei: getCifra(Object.assign({}, cifrasSemEstrutura.vemEEuMostrarei), 'missaTempoComum', 'vemEEuMostrarei'),
            consagracaoANossaSenhora: getCifra(Object.assign({}, cifrasSemEstrutura.consagracaoANossaSenhora), 'missaTempoComum', 'consagracaoANossaSenhora'),
            parabensPraVoce: getCifra(Object.assign({}, cifrasSemEstrutura.parabensPraVoce), 'missaTempoComum', 'parabensPraVoce'),
            quemEEssaQueAvancaComoAurora_AEscolhida: getCifra(Object.assign({}, cifrasSemEstrutura.quemEEssaQueAvancaComoAurora_AEscolhida), 'missaPascoa', 'quemEEssaQueAvancaComoAurora_AEscolhida')
        }
    },
    missaPascoa: {
        titulo: 'Missa (Páscoa)',
        cifras: {
            oSenhorRessurgiu: getCifra(Object.assign({}, cifrasSemEstrutura.oSenhorRessurgiu), 'missaPascoa', 'oSenhorRessurgiu'),
            euConfesso: getCifra(Object.assign({}, cifrasSemEstrutura.euConfesso), 'missaPascoa', 'euConfesso'),
            gloriaADeusNasAlturas: getCifra(Object.assign({}, cifrasSemEstrutura.gloriaADeusNasAlturas), 'missaPascoa', 'gloriaADeusNasAlturas'),
            salmo46: getCifra(Object.assign({}, cifrasSemEstrutura.salmo46), 'missaPascoa', 'salmo46'),
            aleluia: getCifra(Object.assign({}, cifrasSemEstrutura.aleluia), 'missaPascoa', 'aleluia'),
            benditoSejasOReiDaGloria: getCifra(Object.assign({}, cifrasSemEstrutura.benditoSejasOReiDaGloria), 'missaPascoa', 'benditoSejasOReiDaGloria'),
            santo: getCifra(Object.assign({}, cifrasSemEstrutura.santo), 'missaPascoa', 'santo'),
            cristoEONossoAmem: getCifra(Object.assign({}, cifrasSemEstrutura.cristoEONossoAmem), 'missaPascoa', 'cristoEONossoAmem'),
            anjosDeDeus: getCifra(Object.assign({}, cifrasSemEstrutura.anjosDeDeus), 'missaPascoa', 'anjosDeDeus'),
            cordeiroDeDeus: getCifra(Object.assign({}, cifrasSemEstrutura.cordeiroDeDeus), 'missaPascoa', 'cordeiroDeDeus'),
            celebremosNossaPascoa: getCifra(Object.assign({}, cifrasSemEstrutura.celebremosNossaPascoa), 'missaPascoa', 'celebremosNossaPascoa'),
            consagracaoANossaSenhora: getCifra(Object.assign({}, cifrasSemEstrutura.consagracaoANossaSenhora), 'missaPascoa', 'consagracaoANossaSenhora'),
            parabensPraVoce: getCifra(Object.assign({}, cifrasSemEstrutura.parabensPraVoce), 'missaPascoa', 'parabensPraVoce'),
            quemEEssaQueAvancaComoAurora_AEscolhida: getCifra(Object.assign({}, cifrasSemEstrutura.quemEEssaQueAvancaComoAurora_AEscolhida), 'missaPascoa', 'quemEEssaQueAvancaComoAurora_AEscolhida')
        }
    },
    crisma: {
        titulo: 'Crisma',
        cifras: {
            molimMolim: getCifra(Object.assign({}, cifrasSemEstrutura.molimMolim), 'crisma', 'molimMolim'), 
            passaFogo: getCifra(Object.assign({}, cifrasSemEstrutura.passaFogo), 'crisma', 'passaFogo'), 
            pescadorDeCristo: getCifra(Object.assign({}, cifrasSemEstrutura.pescadorDeCristo), 'crisma', 'pescadorDeCristo'),
            pipoca: getCifra(Object.assign({}, cifrasSemEstrutura.pipoca), 'crisma', 'pipoca')
        }
    },
    animacaoJantar: {
        titulo: 'Animação Jantar',
        cifras: {
            passeioDeCarangueijo: getCifra(Object.assign({}, cifrasSemEstrutura.passeioDeCarangueijo), 'animacaoJantar', 'passeioDeCarangueijo'),
            oSenhorERei: getCifra(Object.assign({}, cifrasSemEstrutura.oSenhorERei), 'animacaoJantar', 'oSenhorERei'),
            vemVemVemEspiritoSanto: getCifra(Object.assign({}, cifrasSemEstrutura.vemVemVemEspiritoSanto), 'animacaoJantar', 'vemVemVemEspiritoSanto'),
            quemEEssaQueAvancaComoAurora_AEscolhida: getCifra(Object.assign({}, cifrasSemEstrutura.quemEEssaQueAvancaComoAurora_AEscolhida), 'animacaoJantar', 'quemEEssaQueAvancaComoAurora_AEscolhida'),
            aparecida: getCifra(Object.assign({}, cifrasSemEstrutura.aparecida), 'animacaoJantar', 'aparecida'),
            regacoAcolhedor: getCifra(Object.assign({}, cifrasSemEstrutura.regacoAcolhedor), 'animacaoJantar', 'regacoAcolhedor'),
            mariaDeNazare: getCifra(Object.assign({}, cifrasSemEstrutura.mariaDeNazare), 'animacaoJantar', 'mariaDeNazare'),
            todaTua: getCifra(Object.assign({}, cifrasSemEstrutura.todaTua), 'animacaoJantar', 'todaTua'),
            aAlegriaEstaNoCoracao: getCifra(Object.assign({}, cifrasSemEstrutura.aAlegriaEstaNoCoracao), 'animacaoJantar', 'aAlegriaEstaNoCoracao'),
            euSouDoSenhor: getCifra(Object.assign({}, cifrasSemEstrutura.euSouDoSenhor), 'animacaoJantar', 'euSouDoSenhor'),
            chuvaDeGraca: getCifra(Object.assign({}, cifrasSemEstrutura.chuvaDeGraca), 'animacaoJantar', 'chuvaDeGraca'),
            aAlegriaDoSenhor: getCifra(Object.assign({}, cifrasSemEstrutura.aAlegriaDoSenhor), 'animacaoJantar', 'aAlegriaDoSenhor')
        }
    }
}