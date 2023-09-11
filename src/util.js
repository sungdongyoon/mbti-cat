import Abyssinian from '../src/img/abyssinian.jpg';
import Ameshort from '../src/img/ameshort.png';
import Bengal from '../src/img/bengal.jpg';
import British from '../src/img/british.jpg';
import Exotic from '../src/img/exotic.jpg';
import Korshort from '../src/img/korshort.jpg';
import Mainecoon from '../src/img/mainecoon.jpeg';
import Munchkin from '../src/img/munchkin.jpg';
import Norwegianforest from '../src/img/norwegianforest.jpg';
import Persian from '../src/img/persian.jpg';
import Ragdoll from '../src/img/ragdoll.jpg';
import Russianblue from '../src/img/russianblue.jpg';
import Scottishfold from '../src/img/scottishfold.jpg';
import Siamese from '../src/img/siamese.jpg';
import Sphinx from '../src/img/sphinx.jpg';
import Turkishangora from '../src/img/turkishangora.jpg';

export const getCatImg = (catId) => {
  const targetCatImg = String(catId);
  switch(targetCatImg) {
    case "1":
      return Russianblue;
    case "2":
      return Siamese;
    case "3":
      return Persian;
    case "4":
      return Bengal;
    case "5":
      return Turkishangora;
    case "6":
      return Abyssinian;
    case "7":
      return Norwegianforest;
    case "8":
      return Ameshort;
    case "9":
      return Korshort;
    case "10":
      return Exotic;
    case "11":
      return Scottishfold;
    case "12":
      return Munchkin;
    case "13":
      return Ragdoll;
    case "14":
      return British;
    case "15":
      return Sphinx;
    case "16":
      return Mainecoon;
    default:
      return null;
  }
}