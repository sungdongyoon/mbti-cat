import Abyssinian from '../src/img/아비시니안.jpg';
import Ameshort from '../src/img/아메리칸숏헤어.jpg';
import Bengal from '../src/img/뱅갈.jpg';
import British from '../src/img/브리티시숏헤어.jpg';
import Exotic from '../src/img/엑죠틱.jpg';
import Korshort from '../src/img/코리안숏헤어.jpg';
import Mainecoon from '../src/img/메인쿤.jpg';
import Munchkin from '../src/img/먼치킨.jpg';
import Norwegianforest from '../src/img/노르웨이숲.jpg';
import Persian from '../src/img/페르시안.jpg';
import Ragdoll from '../src/img/랙돌.jpg';
import Russianblue from '../src/img/러시안블루.jpg';
import Scottishfold from '../src/img/스코티시폴드.jpg';
import Siamese from '../src/img/샴.jpg';
import Sphinx from '../src/img/스핑크스.jpg';
import Turkishangora from '../src/img/터키시앙고라.jpg';

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