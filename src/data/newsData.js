import image1 from "../assets/news/image1.jpg"
import image2 from "../assets/news/image2.jpg"
import image3 from "../assets/news/image3.jpg"
import image4 from "../assets/news/image4.jpg"
import image5 from "../assets/news/image5.jpg"
import image6 from "../assets/news/image6.jpg"
import image7 from "../assets/news/image7.jpg"


const newsData = [
  {
    id: 1,
    imageUrl:[image1],
    imageAlt: "FOTO-ECHIPA-NATIONALA",
    type: "transfer",
    title: "Israel - România, ASTĂZI",
    text1:
      "Astăzi, de la ora 21:45, naționala României se va confrunta cu Israel într-un meci crucial pentru șansele de calificare la Euro 2024. Cu inima plină de speranță și susținerea fanilor, echipa națională se pregătește să dea totul pe teren pentru a obține un loc la competiția europeană de fotbal.",
    text2:
      "Deși partida este programată inițial în Israel, din cauza contextului tensionat din zonă, locul de desfășurare a fost schimbat în Ungaria. Cu toate acestea, suporterii români sunt hotărâți să-și susțină echipa cu aceeași pasiune și încredere.",
    text3:
      "Așadar, hai România! Înfruntați provocarea cu inima și determinare, iar susținătorii sunt invitați să-și arate sprijinul pentru echipă folosind hashtag-urile #Euro2024 și #HaiRomania pe rețelele sociale. Fie ca acest meci să aducă bucurie și mândrie țării noastre! 🇷🇴💪",
    secondTitle:
      "Partida se va desfășura în Ungaria, în ciuda contextului tensionat din Israel.",
    subtitle:
      "Ne jucăm cu șansa de a ne califica la Euro 2024! Hai România, susținem echipa cu inima! 🇷🇴",
    date: "10.12.2023",
    league: "ECHIPA NATIONALA",
    leagueImg: "https://i.ytimg.com/vi/vRq6_FXVUhI/maxresdefault.jpg",
    readingTime: "10 min. de citire",
  },
  {
    id: 2,
    imageUrl:[image2],
    imageAlt: "FOTO-IANIS-HAGI-IN-TRICOUL-NATIONALEI",
    type: "ANIVERSARE",
    title: "La mulți ani, IANIS HAGI!",
    text1:
      "Într-un gest de apreciere din partea oficialilor spanioli, talentatul fotbalist român Ianis Hagi a primit o nouă poreclă care îl va însoți pe terenul de fotbal. Cu ocazia zilei sale de naștere, spaniolii au găsit o modalitate originală de a-i transmite urările lor către mijlocașul talentat.",
    text2:
      "Echipa sa actuală, Deportivo Alaves, a transmis urări speciale, îndemnându-l pe Hagi să își sărbătorească ziua de naștere cu o victorie de neuitat pe terenul de fotbal al lui Villarreal, cunoscut sub numele de El Madrigal. Mesajul lor a fost primit cu căldură, iar Ianis Hagi și-a asumat provocarea cu determinare și dorința de a oferi fanilor săi o bucurie suplimentară în ziua sa specială.",
    text3:
      "Cu susținerea echipei și cu privirea fixată pe victorie, Ianis Hagi speră să își marcheze ziua de naștere cu un succes remarcabil pe El Madrigal.",
    secondTitle:
      "Ianis Hagi, Îndrumat să Își Sărbătorească Ziua de Naștere cu O Victorie pe 'El Madrigal'",
    subtitle:
      "Ianis Hagi sărbătorește 25 de ani, iar un cadou de neuitat ar putea fi o victorie împotriva lui Villarreal.",
    date: "10.12.2023",
    league: "",
    leagueImg: "https://i.ytimg.com/vi/vRq6_FXVUhI/maxresdefault.jpg",
    readingTime: "8 min. de citire",
  },
  {
    id: 3,
    imageUrl:[image3],
    imageAlt: "FOTO-OVIDIU-HATEGAN",
    type: "record",
    title: "Un adevărat exemplu de dedicare!",
    text1:
      "Aventura sa în lumea arbitrajului a debutat acum mai bine de 17 ani, iar Hațegan a devenit un nume de referință în fotbalul românesc.",
    text2:
      "Începând cu ora 18:00, Universitatea Craiova și Petrolul Ploiești se vor întâlni pe stadionul ”Ion Oblemenco” în cadrul etapei a 13-a din SuperLiga României. Meciul va fi transmis ÎN DIRECT pe Digi Sport 1 și în format Live Video pe digisport.ro, oferind fanilor oportunitatea de a urmări îndeaproape această confruntare palpitantă.",
    text3:
      "Într-o carieră notabilă, Ovidiu Hațegan a trecut prin numeroase momente, inclusiv o perioadă dificilă în martie 2022, când a suferit un infarct. Cu determinare și voință, Hațegan a depășit aceste probleme de sănătate și a revenit pe teren, continuând să fie un pilon în lumea arbitrajului românesc.",
    secondTitle:
      "Arbitrul originar din Arad, va marca un moment de referință în cariera sa, conducând meciul cu numărul 300 în SuperLiga României.",
    subtitle:
      "Ovidiu Hațegan va oficia cel de-al 300-lea său meci pe prima scenă din România",
    date: "20.01.2024",
    league: "INTERN",
    leagueImg:
      "https://superbet-content.freetls.fastly.net/assets/d4e090f2-125b-4da4-93e8-1e407bbd4d0e",
    readingTime: "8 min. de citire",
  },
  {
    id: 4,
    imageUrl:[image4],
    type: "zi de meci",
    imageAlt: "FOTO-AFIS-FCSB-VS-UCLUJ",
    title: "FCSB se întoarce pe Arena Națională pentru meciul cu U Cluj!",
    text1:
      "După o perioadă de absență, FCSB se pregătește să facă un spectaculos revenire pe Arena Națională în cadrul meciului programat împotriva echipei U Cluj. Roș-albaștrii vor să ofere fanilor lor o experiență memorabilă pe cel mai mare stadion al țării.",
    text2:
      "Suporterii sunt invitați să își pregătească tricourile, steagurile și sloganurile pentru a crea o atmosferă de neuitat pe Arena Națională. Echipa are nevoie de sprijinul lor neîncetat, iar reîntoarcerea acasă să marcheze un nou început pentru FCSB. ",
    text3:
      " Atmosfera electrică de pe Arena Națională, împreună cu susținerea ferventă a fanilor, creează ingredientele perfecte pentru o seară memorabilă în lumea fotbalului românesc. Nu ratați acest eveniment deosebit și fiți alături de FCSB în această revenire extraordinară pe terenul de acasă!",
    secondTitle:
      "FCSB și U Cluj se vor întâlni într-o confruntare palpitantă, bătălie directă pentru locul 1!",
    subtitle:
      "Roș-albaștrii revin pe cel mai mare stadion al țării după o pauză.",
    date: "20.01.2024",
    league: "SUPERLIGA",
    leagueImg:
      "https://superbet-content.freetls.fastly.net/assets/d4e090f2-125b-4da4-93e8-1e407bbd4d0e",
    readingTime: "8 min. de citire",
  },
  {
    id: 5,
    imageUrl:[image5],
    type: "REMINDER",
    imageAlt: "FOTO-TROFEU-UCL",
    title: "7 zile ramase",
    text1:
      " Începând de astăzi, pasionații de fotbal din întreaga lume sunt invitați să-și pregătească sufletele pentru o călătorie epică în lumea fascinantă a UEFA Champions League. Cu doar 7 zile rămase până la debutul celui mai prestigios turneu de cluburi din fotbal, entuziasmul atinge cote maxime, iar anticiparea se resimte în aer.",
    text2:
      "Cu stadioanele pline de fani entuziaști, transmisiunile live captivante și momente de geniu fotbalistic, UEFA Champions League promite să ofere o experiență de neuitat. Așadar, pregătiți-vă să vă teleportați în lumea magică a fotbalului european și să vă bucurați de fiecare clipă a acestui spectacol extraordinar. Este timpul să fim martorii unor performanțe remarcabile și să celebrăm spiritul competitiv care definește această competiție de prestigiu!",
    text3:
      " Ce echipă susții cu pasiune? Și cine crezi că va deveni Campioana Europei în acest sezon? ",
    secondTitle: "În Curând: Teleportați-vă în Magia UEFA Champions League!",
    subtitle:
      "7 zile și ne teleportăm în lumea magică a UEFA Champions League! ",
    date: "21.01.2024",
    league: "EXTERN",
    leagueImg:
      "https://m.media-amazon.com/images/M/MV5BN2E3OWQ3YjQtNWZkMS00M2Q2LWFiYWYtMjQzYzYzMzBlNGEwXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
    readingTime: "8 min. de citire",
  },
  {
    id: 6,
    imageUrl:[image6],
    type: "FINAL DE MECI",
    imageAlt: "FOTO-FCSB-vs-UCLUJ",
    title: "FCSB-U Cluj 2-2",
    text1:
      "Partida a adunat în tribune 13.243 de spectatori, conform numărului oficial raportat de clubul gazdă.",
    text2:
      "FCSB a deschis scorul cu un gol marcat de Dawa în minutul 8, iar avantajul lor s-a consolidat odată cu reușita lui Șut în minutul 39. Cu toate acestea, U Cluj nu a renunțat și a revenit în forță, cu Nistor marcând în minutul 26 și Mitrea aducând egalarea în minutul 88.",
    text3:
      "Cum apreciați rezultatul și evoluția echipelor în acest meci? A fost o remiză echitabilă sau credeți că una dintre echipe merita victoria?",
    secondTitle:
      "Spectacol pe Arena Națională: FCSB și U Cluj Împart Punctele într-un Meci Șocant 2-2",
    subtitle:
      "Remiză spectaculoasă pe Arena Națională! Goluri pentru FCSB: Dawa '8 și Șut '39, iar pentru U Cluj: Nistor '26 și Mitrea '88.",
    date: "20.01.2024",
    league: "SUPERLIGA",
    leagueImg:
      "https://superbet-content.freetls.fastly.net/assets/d4e090f2-125b-4da4-93e8-1e407bbd4d0e",
    readingTime: "4 min. de citire",
  },
  {
    id: 7,
    imageUrl:[image7],
    type: "zi de meci",
    imageAlt: "FOTO-UTA-vs-RAPID",
    title:
      "UTA Arad și Rapid București sunt echipele care trag cortina pentru ETAPA 13!",
    text1:
      " Într-o etapă plină de anticipare, UTA Arad și Rapid București sunt echipele care vor trage cortina pentru Etapa 13, oferind fanilor un duel incendiar. Rapid vine cu un impresionant șir de 5 victorii și două remize în campionat, consolidându-și poziția în fruntea clasamentului. În schimb, UTA nu a mai cunoscut gustul victoriei de 6 etape, iar echipa este hotărâtă să revină pe drumul succesului.",
    text2:
      "Factorii de decizie pot include forma recentă, strategiile tactice adoptate și evoluția jucătorilor cheie. Va fi interesant de urmărit dacă Rapid își poate menține seria pozitivă sau dacă UTA reușește să oprească acest val și să își recupereze forma.",
    text3:
      "Cu aceste premise, care este pronosticul tău pentru duelul de diseară? Crezi că seria impresionantă a Rapidului va continua sau UTA va reuși să întrerupă această tendință și să obțină cele trei puncte?",
    secondTitle: "Etapa #13 Superligii: UTA vs. Rapid !",
    subtitle:
      "Rapid vine cu o serie de 5 victorii și două remize în campionat, în timp ce UTA nu a mai gustat victoria de 6 runde! Ultima confruntare directă s-a încheiat 1-1",
    date: "18.12.2023",
    league: "superliga",
    leagueImg:
      "https://superbet-content.freetls.fastly.net/assets/d4e090f2-125b-4da4-93e8-1e407bbd4d0e",
    readingTime: "8 min. de citire",
  },
];

export default newsData;
