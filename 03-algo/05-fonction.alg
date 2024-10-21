<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="APPELER_FONCTION likes(choix)" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2etat="inactif" F2para="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" epaisseurPoint="2" epaisseurLigne="2" totalBoucles="5000000" maxBoucle="500000" nbDecimales="8" arrondiAuto="vrai"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES">
        <item code="201#likes#food" algoitem="FONCTION likes(food)">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION">
                <item code="1#CHAINE#n1" algoitem="n1 EST_DU_TYPE CHAINE"/>
            </item>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="4#J'aime les #0" algoitem="AFFICHER &quot;J'aime les &quot;"/>
            <item code="5#n1#food#pasliste" algoitem="n1 PREND_LA_VALEUR food"/>
            <item code="3#n1#1#pasliste" algoitem="AFFICHER n1"/>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
    </item>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#CHAINE#choix" algoitem="choix EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Quel est votre nourriture favorite?#1" algoitem="AFFICHER &quot;Quel est votre nourriture favorite?&quot;"/>
        <item code="2#choix#pasliste" algoitem="LIRE choix"/>
        <item code="206#likes(choix)" algoitem="APPELER_FONCTION likes(choix)"/>
        <item code="4#Un autre choix?#1" algoitem="AFFICHER &quot;Un autre choix?&quot;"/>
        <item code="2#choix#pasliste" algoitem="LIRE choix"/>
        <item code="206#likes(choix)" algoitem="APPELER_FONCTION likes(choix)"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
