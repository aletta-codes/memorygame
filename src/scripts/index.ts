import '../styles/index.scss';

console.log('webpack starterkit2');

import {Croupier} from './croupier';

(function(){
    document.addEventListener('DOMContentLoaded', () => {
        //by default 5 pairs of memory cards
        let croupier = new Croupier(10);
    });
})();