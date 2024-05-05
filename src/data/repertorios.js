import { getCifra } from "../assets/cifras"
import { cifrasSemEstrutura } from "./cifras"

export const repertorios = {
    missaPascoa: {
        titulo: 'Missa (Páscoa)',
        cifras: {
            oSenhorRessurgiu: getCifra(Object.assign({}, cifrasSemEstrutura.oSenhorRessurgiu), 'missaPascoa', 'oSenhorRessurgiu'),
            euConfesso: getCifra(Object.assign({}, cifrasSemEstrutura.euConfesso), 'missaPascoa', 'euConfesso'),
            gloriaADeusNosAltosCeus: getCifra(Object.assign({}, cifrasSemEstrutura.gloriaADeusNosAltosCeus), 'missaPascoa', 'gloriaADeusNosAltosCeus'),
            aleluia: getCifra(Object.assign({}, cifrasSemEstrutura.aleluia), 'missaPascoa', 'aleluia'),
            benditoSejasOReiDaGloria: getCifra(Object.assign({}, cifrasSemEstrutura.benditoSejasOReiDaGloria), 'missaPascoa', 'benditoSejasOReiDaGloria'),
            santo: getCifra(Object.assign({}, cifrasSemEstrutura.santo), 'missaPascoa', 'santo'),
            amem: getCifra(Object.assign({}, cifrasSemEstrutura.amem), 'missaPascoa', 'amem'),
            cordeiroDeDeus: getCifra(Object.assign({}, cifrasSemEstrutura.cordeiroDeDeus), 'missaPascoa', 'cordeiroDeDeus'),
            celebremosNossaPascoa: getCifra(Object.assign({}, cifrasSemEstrutura.celebremosNossaPascoa), 'missaPascoa', 'celebremosNossaPascoa'),
            parabensPraVoce: getCifra(Object.assign({}, cifrasSemEstrutura.parabensPraVoce), 'missaPascoa', 'parabensPraVoce'),
            quemEEssaQueAvancaComoAurora: getCifra(Object.assign({}, cifrasSemEstrutura.quemEEssaQueAvancaComoAurora), 'missaPascoa', 'quemEEssaQueAvancaComoAurora')
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
    }
}