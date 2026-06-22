/* ============================================================
   BANQUE DE QUESTIONS — Le Cabinet
   ------------------------------------------------------------
   Ajoute autant de questions que tu veux dans chaque degré (1, 2, 3).
   À chaque partie, 15 questions sont tirées au hasard dans le degré choisi.

   FORMAT — question à choix multiple :
     {t:'qcm', q:"Énoncé ?", o:["A","B","C","D"], r:2, e:"Explication."}
       o = options (2 à 4)   r = index de la bonne réponse (0 = la 1re)

   FORMAT — réponse ouverte :
     {t:'open', q:"Énoncé ?", a:["forme1","forme2"], e:"Explication."}
       a = formes acceptées, EN MINUSCULES SANS ACCENTS
           (les accents, articles et la casse sont ignorés automatiquement ;
            mets plusieurs variantes : ["newton","isaac newton"])

   Degrés : 1 = Connaisseur (20 pts) · 2 = Érudit (30 pts) · 3 = Extrême (40 pts)
   ============================================================ */
window.QUESTIONS = {
  1:[ /* ===== CONNAISSEUR ===== */
    {t:'qcm',q:"En quelle année débute la Première Guerre mondiale ?",o:["1912","1914","1918","1939"],r:1,e:"1914, après l'attentat de Sarajevo."},
    {t:'open',q:"Quel gaz les plantes absorbent-elles pour la photosynthèse ?",a:["dioxyde de carbone","co2","gaz carbonique"],e:"Le dioxyde de carbone (CO₂)."},
    {t:'qcm',q:"Qui a peint La Nuit étoilée ?",o:["Monet","Van Gogh","Picasso","Cézanne"],r:1,e:"Vincent van Gogh, en 1889."},
    {t:'open',q:"Quelle est la capitale du Canada ?",a:["ottawa"],e:"Ottawa, et non Toronto ou Montréal."},
    {t:'qcm',q:"Quel métal est liquide à température ambiante ?",o:["Fer","Mercure","Plomb","Zinc"],r:1,e:"Le mercure."},
    {t:'open',q:"Qui a élaboré la théorie de la relativité ?",a:["einstein","albert einstein"],e:"Albert Einstein."},
    {t:'qcm',q:"Quel philosophe grec fut le précepteur d'Alexandre le Grand ?",o:["Platon","Socrate","Aristote","Épicure"],r:2,e:"Aristote."},
    {t:'open',q:"En quelle année un homme a-t-il marché sur la Lune pour la première fois ?",a:["1969"],e:"1969, mission Apollo 11."},
    {t:'qcm',q:"Combien d'os compte le squelette d'un adulte ?",o:["186","206","256","306"],r:1,e:"206 os."},
    {t:'open',q:"Quel écrivain a publié Madame Bovary ?",a:["flaubert","gustave flaubert"],e:"Gustave Flaubert, en 1857."},
    {t:'qcm',q:"Quelle est la monnaie du Japon ?",o:["Won","Yuan","Yen","Roupie"],r:2,e:"Le yen."},
    {t:'open',q:"Quel est le plus long fleuve du monde ?",a:["nil","amazone"],e:"Le Nil (≈6 650 km) selon la mesure classique ; l'Amazone est parfois donnée en tête. Les deux sont acceptées."},
    {t:'qcm',q:"Quelle est la capitale de l'Espagne ?",o:["Barcelone","Madrid","Séville","Valence"],r:1,e:"Madrid."},
    {t:'open',q:"Combien de planètes compte le système solaire ?",a:["8","huit"],e:"Huit, depuis le déclassement de Pluton en 2006."},
    {t:'qcm',q:"Qui a peint Guernica ?",o:["Dalí","Picasso","Miró","Goya"],r:1,e:"Pablo Picasso, en 1937."},
    {t:'open',q:"Quel est le plus haut sommet du monde ?",a:["everest","mont everest"],e:"L'Everest, 8 849 m."},
    {t:'qcm',q:"En quelle année débute la Révolution française ?",o:["1776","1789","1799","1804"],r:1,e:"1789, avec la prise de la Bastille."},
    {t:'open',q:"Quel est le plus grand océan du monde ?",a:["pacifique","ocean pacifique"],e:"L'océan Pacifique."},
    {t:'qcm',q:"Qui a écrit Roméo et Juliette ?",o:["Molière","Shakespeare","Goethe","Dante"],r:1,e:"William Shakespeare."},
    {t:'open',q:"Quelle est la capitale de l'Allemagne ?",a:["berlin"],e:"Berlin."},
    {t:'qcm',q:"Combien de joueurs compte une équipe de football sur le terrain ?",o:["9","10","11","12"],r:2,e:"Onze joueurs, gardien compris."},
    {t:'open',q:"Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",a:["azote","diazote","n2"],e:"L'azote, qui représente environ 78 % de l'air."},
    {t:'qcm',q:"Quelle monnaie est utilisée en France, en Allemagne et en Italie ?",o:["Le franc","La lire","L'euro","Le mark"],r:2,e:"L'euro."},
    {t:'open',q:"Quel navigateur a atteint l'Amérique en 1492 ?",a:["christophe colomb","colomb"],e:"Christophe Colomb."},
    {t:'qcm',q:"Quel est le symbole chimique de l'oxygène ?",o:["O","Ox","Og","Oy"],r:0,e:"O."},
    {t:'open',q:"Quelle planète est surnommée « la planète rouge » ?",a:["mars"],e:"Mars."}
  ],
  2:[ /* ===== ÉRUDIT ===== */
    {t:'qcm',q:"Qui a formulé le principe d'incertitude en mécanique quantique ?",o:["Bohr","Heisenberg","Schrödinger","Planck"],r:1,e:"Werner Heisenberg, en 1927."},
    {t:'open',q:"Quel élément chimique a pour symbole « Au » ?",a:["or"],e:"L'or (du latin aurum)."},
    {t:'qcm',q:"En quelle année est tombé le mur de Berlin ?",o:["1987","1989","1991","1993"],r:1,e:"Le 9 novembre 1989."},
    {t:'open',q:"Quel philosophe a écrit la Critique de la raison pure ?",a:["kant","emmanuel kant"],e:"Emmanuel Kant, en 1781."},
    {t:'qcm',q:"Quelle est la plus grande lune de Jupiter ?",o:["Europe","Io","Ganymède","Callisto"],r:2,e:"Ganymède, plus grande que la planète Mercure."},
    {t:'open',q:"Quel traité a mis fin à la Première Guerre mondiale en 1919 ?",a:["traite de versailles","versailles"],e:"Le traité de Versailles."},
    {t:'qcm',q:"Qui a composé La Flûte enchantée ?",o:["Bach","Mozart","Beethoven","Haydn"],r:1,e:"Wolfgang Amadeus Mozart, en 1791."},
    {t:'open',q:"Comment se nomme la galaxie qui abrite notre système solaire ?",a:["voie lactee"],e:"La Voie lactée."},
    {t:'qcm',q:"Quel théorème, énoncé au XVIIᵉ siècle, fut démontré par Andrew Wiles en 1994 ?",o:["d'Euler","de Fermat","de Gauss","de Pascal"],r:1,e:"Le dernier théorème de Fermat."},
    {t:'open',q:"Quelle civilisation a édifié le Machu Picchu ?",a:["incas","inca","les incas"],e:"La civilisation inca, au XVᵉ siècle."},
    {t:'qcm',q:"Quel est l'organe le plus étendu du corps humain ?",o:["Le foie","La peau","Le poumon","L'intestin"],r:1,e:"La peau."},
    {t:'open',q:"Qui a écrit À la recherche du temps perdu ?",a:["proust","marcel proust"],e:"Marcel Proust."},
    {t:'qcm',q:"Quel est l'élément le plus abondant dans l'univers ?",o:["Hydrogène","Hélium","Oxygène","Carbone"],r:0,e:"L'hydrogène, environ 75 % de la matière baryonique."},
    {t:'open',q:"Qui a écrit La Divine Comédie ?",a:["dante","dante alighieri"],e:"Dante Alighieri, au XIVᵉ siècle."},
    {t:'qcm',q:"Quelle bataille marque la défaite définitive de Napoléon en 1815 ?",o:["Austerlitz","Iéna","Waterloo","Leipzig"],r:2,e:"Waterloo."},
    {t:'open',q:"Quel scientifique a énoncé les trois lois du mouvement ?",a:["newton","isaac newton"],e:"Isaac Newton."},
    {t:'qcm',q:"Quel philosophe a écrit Ainsi parlait Zarathoustra ?",o:["Kant","Hegel","Nietzsche","Schopenhauer"],r:2,e:"Friedrich Nietzsche."},
    {t:'open',q:"Quelle est la plus grande planète du système solaire ?",a:["jupiter"],e:"Jupiter."},
    {t:'qcm',q:"En quelle année est signée la Déclaration d'indépendance des États-Unis ?",o:["1773","1776","1789","1791"],r:1,e:"1776."},
    {t:'open',q:"Quel peintre a réalisé La Persistance de la mémoire (les montres molles) ?",a:["dali","salvador dali"],e:"Salvador Dalí, en 1931."},
    {t:'qcm',q:"Quel est le plus petit os du corps humain ?",o:["Le marteau","L'enclume","L'étrier","La rotule"],r:2,e:"L'étrier, dans l'oreille moyenne."},
    {t:'open',q:"Quel empereur romain a fait bâtir un mur dans le nord de la Grande-Bretagne ?",a:["hadrien"],e:"Hadrien (le mur d'Hadrien)."},
    {t:'qcm',q:"Qui a composé la 9ᵉ symphonie contenant l'« Hymne à la joie » ?",o:["Bach","Mozart","Beethoven","Brahms"],r:2,e:"Ludwig van Beethoven."},
    {t:'open',q:"Quel est le symbole chimique du sodium ?",a:["na"],e:"Na (du latin natrium)."},
    {t:'qcm',q:"Qui fut le premier président de la Ve République française ?",o:["Auriol","Coty","De Gaulle","Pompidou"],r:2,e:"Charles de Gaulle, en 1959."},
    {t:'open',q:"Quel mathématicien grec a donné son nom au théorème sur le triangle rectangle ?",a:["pythagore"],e:"Pythagore."}
  ],
  3:[ /* ===== EXTRÊME ===== */
    {t:'open',q:"Quel élément chimique porte le numéro atomique 79 ?",a:["or"],e:"L'or (Au)."},
    {t:'qcm',q:"Quel logicien a démontré les théorèmes d'incomplétude ?",o:["Hilbert","Gödel","Turing","Cantor"],r:1,e:"Kurt Gödel, en 1931."},
    {t:'open',q:"En quelle année sont signés les traités de Westphalie, qui mettent fin à la guerre de Trente Ans ?",a:["1648"],e:"1648."},
    {t:'qcm',q:"Quelle particule est le médiateur de l'interaction électromagnétique ?",o:["Le gluon","Le photon","Le boson W","Le graviton"],r:1,e:"Le photon."},
    {t:'open',q:"Quel écrivain irlandais a publié le roman Ulysse en 1922 ?",a:["james joyce","joyce"],e:"James Joyce."},
    {t:'qcm',q:"Quel philosophe a écrit la Phénoménologie de l'esprit (1807) ?",o:["Kant","Fichte","Hegel","Schelling"],r:2,e:"Georg Wilhelm Friedrich Hegel."},
    {t:'open',q:"Quel est l'os le plus long du corps humain ?",a:["femur"],e:"Le fémur."},
    {t:'qcm',q:"Quelle dynastie chinoise précède immédiatement la dynastie Han ?",o:["Zhou","Qin","Tang","Ming"],r:1,e:"La dynastie Qin (221–206 av. J.-C.)."},
    {t:'open',q:"Quelle unité mesure la résistance électrique ?",a:["ohm"],e:"L'ohm (Ω)."},
    {t:'qcm',q:"Qui a peint Le Jardin des délices ?",o:["Bruegel","Bosch","Van Eyck","Memling"],r:1,e:"Jérôme Bosch, vers 1500."},
    {t:'open',q:"Quel traité de 1957 institue la Communauté économique européenne ?",a:["traite de rome","rome"],e:"Le traité de Rome."},
    {t:'qcm',q:"Quelle est la capitale du Kazakhstan ?",o:["Astana","Almaty","Tachkent","Bichkek"],r:0,e:"Astana (nom rétabli en 2022)."},
    {t:'open',q:"Quel philosophe a fondé l'école du Lycée à Athènes ?",a:["aristote"],e:"Aristote."},
    {t:'qcm',q:"Quel élément chimique a pour symbole « W » ?",o:["Uranium","Tungstène","Tantale","Titane"],r:1,e:"Le tungstène (du nom allemand wolfram)."},
    {t:'open',q:"Quel mathématicien suisse a popularisé les notations « e » et « i » ?",a:["euler","leonhard euler"],e:"Leonhard Euler."},
    {t:'qcm',q:"En quelle année Constantinople tombe-t-elle aux mains des Ottomans ?",o:["1204","1389","1453","1492"],r:2,e:"1453."},
    {t:'open',q:"Quel organe produit l'insuline ?",a:["pancreas"],e:"Le pancréas."},
    {t:'qcm',q:"Quel écrivain russe a écrit Crime et Châtiment ?",o:["Tolstoï","Dostoïevski","Tchekhov","Gogol"],r:1,e:"Fiodor Dostoïevski, en 1866."},
    {t:'open',q:"Quelle planète possède la rotation la plus lente (le jour le plus long) ?",a:["venus"],e:"Vénus, dont la rotation dure plus longtemps que son année."},
    {t:'qcm',q:"Quel est le symbole chimique du potassium ?",o:["P","Po","K","Pt"],r:2,e:"K (du latin kalium)."},
    {t:'open',q:"Quel sociologue français a publié Le Suicide en 1897 ?",a:["durkheim","emile durkheim"],e:"Émile Durkheim."},
    {t:'qcm',q:"Quelle comète revient près de la Terre environ tous les 76 ans ?",o:["Encke","Halley","Hale-Bopp","Tempel"],r:1,e:"La comète de Halley."},
    {t:'open',q:"Quel pharaon est associé au tombeau découvert par Howard Carter en 1922 ?",a:["toutankhamon"],e:"Toutânkhamon."},
    {t:'qcm',q:"Quel est le seul mammifère capable de vol actif ?",o:["L'écureuil volant","La chauve-souris","Le colugo","Le pétrel"],r:1,e:"La chauve-souris ; les autres ne font que planer."},
    {t:'open',q:"Quelle grandeur physique vaut environ 299 792 458 m/s dans le vide ?",a:["la vitesse de la lumiere","vitesse de la lumiere","celerite de la lumiere"],e:"La vitesse de la lumière dans le vide (c)."},
    {t:'qcm',q:"Qui a écrit Le Capital ?",o:["Engels","Marx","Proudhon","Bakounine"],r:1,e:"Karl Marx."}
  ]
};
