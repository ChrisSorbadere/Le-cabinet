/* ============================================================
   BANQUE DE QUESTIONS — Le Cabinet
   ------------------------------------------------------------
   À chaque partie, 15 questions sont tirées au hasard dans le degré choisi.

   FORMAT — choix multiple :
     {t:'qcm', d:"domaine", q:"Énoncé ?", o:["A","B","C","D"], r:2, e:"Explication."}
       o = options (2 à 4)   r = index de la bonne réponse (0 = la 1re)

   FORMAT — réponse ouverte (réponse UNIVOQUE : nom propre, date, terme unique) :
     {t:'open', d:"domaine", q:"Énoncé ?", a:["forme1","forme2"], e:"Explication."}
       a = formes acceptées en MINUSCULES SANS ACCENTS
           (accents, articles, ligatures et casse sont gérés automatiquement)

   d = domaine (optionnel, sert à l'équilibrage) : histoire, littérature,
       philosophie, sciences, mathématiques, arts, géographie,
       sciences humaines, religions, mythologie, linguistique, étymologie,
       histoire des sciences.

   Degrés : 1 = Connaisseur (20 pts) · 2 = Érudit (30 pts) · 3 = Extrême (40 pts)
   ============================================================ */
window.QUESTIONS = {
  1:[ /* ===== CONNAISSEUR — bloc pilote ===== */
    {t:'qcm',d:"étymologie",q:"Le mot « candidat » vient du latin candidus, « blanc ». Pourquoi ?",o:["Les candidats portaient une toge blanchie à la craie","Le vote se faisait avec des cailloux blancs","Les élus étaient couronnés de fleurs blanches","Le blanc symbolisait la noblesse"],r:0,e:"À Rome, ceux qui briguaient une charge revêtaient la toga candida, blanchie à la craie, gage de pureté d'intention. D'où « candidat »."},
    {t:'qcm',d:"histoire",q:"En 1453, deux événements ferment le Moyen Âge sur deux fronts : la chute de Constantinople et la fin de quel long conflit en Europe occidentale ?",o:["La guerre de Cent Ans","La guerre des Deux-Roses","La Reconquista","La guerre de Trente Ans"],r:0,e:"La même année, Constantinople tombe et la guerre de Cent Ans s'achève à la bataille de Castillon."},
    {t:'open',d:"géographie",q:"Quel détroit, large d'à peine 14 km à son point le plus étroit, sépare l'Europe de l'Afrique ?",a:["gibraltar","detroit de gibraltar"],e:"Le détroit de Gibraltar ; son nom vient de l'arabe Jabal Tariq, « la montagne de Tariq », du chef qui y débarqua en 711."},
    {t:'qcm',d:"philosophie",q:"Quel philosophe, cherchant une certitude indubitable, conclut que l'acte même de douter prouve l'existence du sujet pensant ?",o:["Pascal","Descartes","Spinoza","Montaigne"],r:1,e:"Descartes : on peut douter de tout, sauf du fait qu'on doute — donc qu'on pense, donc qu'on est (Discours de la méthode, 1637)."},
    {t:'open',d:"sciences",q:"Quelle force unique fait à la fois tomber une pomme et retient la Lune sur son orbite, selon Newton ?",a:["gravitation","gravite","gravitation universelle","la gravitation"],e:"La gravitation universelle : Newton comprend que la chute des corps et le mouvement des astres obéissent à la même loi."},
    {t:'qcm',d:"sciences",q:"Pourquoi le sang humain est-il rouge ?",o:["À cause du fer de l'hémoglobine","À cause du cuivre du plasma","À cause des globules blancs","À cause du dioxyde de carbone"],r:0,e:"L'hémoglobine contient du fer qui, lié à l'oxygène, donne le rouge. Le crabe limule, lui, a le sang bleu, à base de cuivre."},
    {t:'qcm',d:"sciences",q:"Pourquoi répand-on du sel sur les routes verglacées ?",o:["Il abaisse le point de congélation de l'eau","Il réchauffe la glace","Il augmente la friction des pneus","Il absorbe l'humidité de l'air"],r:0,e:"Le sel abaisse la température de congélation : l'eau salée reste liquide en dessous de 0 °C, donc la glace fond."},
    {t:'open',d:"mathématiques",q:"Quelle constante irrationnelle exprime le rapport entre la circonférence d'un cercle et son diamètre ?",a:["pi"],e:"π ≈ 3,14159… Sa transcendance, prouvée par Lindemann en 1882, démontre qu'on ne peut pas « quarrer le cercle » à la règle et au compas."},
    {t:'qcm',d:"arts",q:"Quel mouvement pictural doit son nom à une toile de Monet, « Impression, soleil levant », d'abord lancé par un critique comme une moquerie ?",o:["Le fauvisme","L'impressionnisme","Le cubisme","Le pointillisme"],r:1,e:"En 1874, le critique Louis Leroy raille le flou du tableau ; les peintres adoptent fièrement le terme « impressionnisme »."},
    {t:'qcm',d:"arts",q:"Quel compositeur acheva sa 9ᵉ symphonie alors qu'il était devenu sourd ?",o:["Mozart","Beethoven","Schubert","Haydn"],r:1,e:"Beethoven, devenu sourd, composa la 9ᵉ Symphonie (1824) en « entendant » la musique dans sa tête."},
    {t:'open',d:"arts",q:"Quel architecte catalan a conçu la Sagrada Família, encore inachevée à Barcelone ?",a:["gaudi","antoni gaudi"],e:"Antoni Gaudí ; le chantier, ouvert en 1882, se poursuit plus d'un siècle après sa mort en 1926."},
    {t:'qcm',d:"arts",q:"Quel réalisateur, surnommé « le maître du suspense », a tourné Psychose et Les Oiseaux ?",o:["Stanley Kubrick","Alfred Hitchcock","Orson Welles","Fritz Lang"],r:1,e:"Alfred Hitchcock ; la scène de la douche de Psychose (1960) reste un sommet du montage."},
    {t:'qcm',d:"mythologie",q:"Dans la mythologie grecque, qui est condamné à rouler éternellement un rocher au sommet d'une colline d'où il redescend toujours ?",o:["Tantale","Prométhée","Sisyphe","Atlas"],r:2,e:"Sisyphe ; Camus en fit le symbole de l'absurde : « Il faut imaginer Sisyphe heureux »."},
    {t:'qcm',d:"histoire des sciences",q:"Quel naturaliste a exposé la théorie de l'évolution par sélection naturelle dans L'Origine des espèces (1859) ?",o:["Lamarck","Darwin","Mendel","Buffon"],r:1,e:"Charles Darwin ; Alfred Wallace ayant abouti à une idée proche, leur travail fut présenté ensemble en 1858."},
    {t:'open',d:"histoire des sciences",q:"Quel astronome polonais a placé le Soleil, et non la Terre, au centre du système, amorçant la révolution scientifique ?",a:["copernic","nicolas copernic"],e:"Nicolas Copernic ; son De revolutionibus (1543) déloge la Terre du centre du cosmos."},
    {t:'qcm',d:"linguistique",q:"Quelle pierre, découverte en Égypte sous Bonaparte, permit à Champollion de déchiffrer les hiéroglyphes ?",o:["La pierre de Rosette","La stèle de Mérenptah","Le disque de Phaistos","La pierre de Palerme"],r:0,e:"La pierre de Rosette portait le même décret en trois écritures ; Champollion en perça le code en 1822."},
    {t:'open',d:"littérature",q:"Quel poète florentin a écrit La Divine Comédie, voyage à travers l'Enfer, le Purgatoire et le Paradis ?",a:["dante","dante alighieri"],e:"Dante Alighieri ; écrite en toscan, son œuvre a contribué à fonder l'italien littéraire."},
    {t:'qcm',d:"littérature",q:"Quel romancier français, prix Goncourt 1949, est l'auteur de Week-end à Zuydcoote et de la saga Fortune de France ?",o:["Robert Merle","Romain Gary","Jean Giono","Marcel Pagnol"],r:0,e:"Robert Merle ; Week-end à Zuydcoote raconte Dunkerque, qu'il vécut comme soldat."},
    {t:'qcm',d:"géographie",q:"Quel pays d'Amérique du Sud porte en espagnol le nom de la ligne imaginaire qui le traverse ?",o:["Le Pérou","La Colombie","L'Équateur","Le Venezuela"],r:2,e:"L'Équateur (Ecuador) ; la ligne équatoriale passe tout près de sa capitale, Quito."},
    {t:'open',d:"philosophie",q:"Quel philosophe grec, condamné à boire la ciguë, n'a rien écrit et nous est surtout connu par les dialogues de Platon ?",a:["socrate"],e:"Socrate ; sa méthode du questionnement (la maïeutique) est au fondement de la philosophie occidentale."},
    {t:'qcm',d:"sciences",q:"Quelle équation, formulée par Einstein en 1905, exprime l'équivalence entre la masse et l'énergie ?",o:["E=mc²","F=ma","PV=nRT","λ=h/p"],r:0,e:"E=mc² : une faible masse recèle une énergie colossale — principe au cœur de l'énergie nucléaire."},
    {t:'qcm',d:"religions",q:"Quelle religion monothéiste, fondée sur la Torah, compte Abraham parmi ses patriarches et est la plus ancienne des trois religions abrahamiques ?",o:["L'islam","Le judaïsme","Le christianisme","Le zoroastrisme"],r:1,e:"Le judaïsme ; judaïsme, christianisme et islam se réclament tous d'Abraham, d'où le terme « abrahamique »."},
    {t:'open',d:"histoire",q:"Quelle cité romaine, ensevelie par l'éruption du Vésuve en 79 apr. J.-C., fut redécouverte figée sous les cendres ?",a:["pompei"],e:"Pompéi ; les cendres ont préservé la vie quotidienne romaine, offrant un témoignage archéologique unique."},
    {t:'qcm',d:"mathématiques",q:"Quel système de numération, d'origine indienne et transmis par les Arabes, introduisit le zéro comme véritable chiffre ?",o:["Romain","Indo-arabe","Grec","Babylonien"],r:1,e:"Le système indo-arabe ; le zéro positionnel, venu d'Inde, a révolutionné le calcul écrit."},
    {t:'open',d:"sciences",q:"Quel savant français a mis au point le vaccin contre la rage et donné son nom à un procédé de conservation des aliments ?",a:["pasteur","louis pasteur"],e:"Louis Pasteur ; la pasteurisation chauffe brièvement un liquide pour tuer les microbes sans l'altérer."}
  ],
  2:[ /* ===== ÉRUDIT — à construire ===== */
  ],
  3:[ /* ===== EXTRÊME — à construire ===== */
  ]
};
