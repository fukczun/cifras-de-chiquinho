import { getCifra } from "../assets/cifras"
import { cifrasSemEstrutura } from "./cifras"

export const repertorios = {
    missaPascoa: {
        titulo: 'Missa (Páscoa)',
        cifras: {
            oSenhorRessurgiu: getCifra(Object.assign({}, cifrasSemEstrutura.oSenhorRessurgiu), 'missaPascoa', 'oSenhorRessurgiu'),
            euConfesso: getCifra(Object.assign({}, cifrasSemEstrutura.euConfesso), 'missaPascoa', 'euConfesso'),
            gloriaADeusNasAlturas: getCifra(Object.assign({}, cifrasSemEstrutura.gloriaADeusNasAlturas), 'missaPascoa', 'gloriaADeusNasAlturas')
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