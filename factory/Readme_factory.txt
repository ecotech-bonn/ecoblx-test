Werkseinstellungen (Knopf "Werkseinstellungen" unter "Erweitert")
==================================================================

ACHTUNG: Alles in diesem Ordner wird mit der App veroeffentlicht (envilog.app, GitHub)
und ist fuer jeden lesbar. Keine Zugangsdaten (APN-Passwort, API-Key, Server) eintragen!

index.json
----------
Welche Dateien es je Geraetetyp gibt. Schluessel = Geraetetyp (Zahl als Text).
Jeder Teil ist optional. Beispiel:

{
  "1700": {
    "name": "enviLog mini LTE",
    "iparam": "1700_iparam.lxp",
    "sys_param": "1700_sys_param.lxp",
    "crun": "1700.crun"
  }
}

Ablauf in der App: Uebersicht -> je Teil Liste der Aenderungen -> Bestaetigen -> Senden.
Abbrechen bei einem Teil ueberspringt den Rest.

iparam (Geraete- und Kanalparameter)
------------------------------------
Logger wie gewuenscht einstellen, im Editor "In Datei speichern".
Vom Logger bleiben immer: Geraetetyp, Max. Kanaele, HK-Flags, Geraetename, Zeitstempel.
Alles andere (auch Service-Felder wie Config0, Netzmodus) kommt aus der Datei.

sys_param (Systemparameter)
---------------------------
Wie iparam ("In Datei speichern" im Systemparameter-Editor).
Eine Zeile, die nur "*" enthaelt, behaelt den Wert des Loggers.
So bleiben z.B. APN, Server, Script/ID und API-Key unveraendert und stehen nicht in der Datei.
Die max. Ringpuffer-Groesse bleibt immer vom Logger.

crun (Sensor-/Modem-Befehle)
----------------------------
Wie die Skripte in crun/ (siehe crun/Readme_crun.txt). Immer beginnen mit:
.expect connected
.expect type 1700
Das Skript bricht beim ersten Fehler ab. Laeuft im Terminal der App.

Neue Dateien
------------
In appdev/sw.js in PRECACHE_URLS eintragen (z.B. './factory/1700_iparam.lxp') und CACHE_NAME
erhoehen, sonst sind sie offline nicht verfuegbar.
