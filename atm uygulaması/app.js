let bakiye=3000;
const yeniSatir="\r\n";
let metin="1-Bakiye görüntüleme"+ yeniSatir+
"2-para çekme"+ yeniSatir+
"3-para yatırma"+yeniSatir+
"4-çıkış"+yeniSatir+
"lütfen yapmak istediğiniz işlemi seçin";

let secim=prompt(metin);
switch(secim){
    case "1":
        console.log("bakiyeniz "+bakiye);
        alert("bakiyeniz "+ bakiye);
        
    break;

    case "2":
        let cekilenPara=Number(prompt("ne kadar para çekmek istersiniz"));
        if(cekilenPara>bakiye){
            console.log("yetersiz bakiye, bakiyeniz="+bakiye);
            alert("yetersiz bakiye, bakiyeniz= "+bakiye);
        }
        else{
            console.log("kalan bakiyeniz "+ (bakiye-cekilenPara));
            alert("kalan bakiyeniz "+ (bakiye-cekilenPara));
        }
    break;

    case "3":
        let yatırılacakTutar= Number(prompt("yatırılacak tutarı girin"));
        console.log("bakiyeniz "+ (bakiye+yatırılacakTutar));
        alert("bakiyeniz "+(bakiye+yatırılacakTutar));
    break;

    case "4":
        console.log("çıkış yaptınız");
        alert("çıkış yaptınız");
    break;
        
    default:
        console.log("lütfen geçerli bir işlem seçiniz");
        alert("lütfen geçerli bir işlem seçiniz");
    break;
}
