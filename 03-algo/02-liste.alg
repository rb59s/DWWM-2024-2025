<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER trucs[i]" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2etat="inactif" F2para="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" epaisseurPoint="2" epaisseurLigne="2" totalBoucles="5000000" maxBoucle="500000" nbDecimales="8" arrondiAuto="vrai"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#LISTE#trucs" algoitem="trucs EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#trucs#33#0" algoitem="trucs[0] PREND_LA_VALEUR 33"/>
        <item code="5#trucs#18#1" algoitem="trucs[1] PREND_LA_VALEUR 18"/>
        <item code="5#trucs#99#2" algoitem="trucs[2] PREND_LA_VALEUR 99"/>
        <item code="3#trucs#1#2" algoitem="AFFICHER trucs[2]"/>
        <item code="2#i#pasliste" algoitem="LIRE i"/>
        <item code="3#trucs#1#i" algoitem="AFFICHER trucs[i]"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
