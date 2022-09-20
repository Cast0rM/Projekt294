# Projekt294
This projekt, can index Tasks, remove them and create new Tasks.
To use it, start the backend and host your file to make your Webapplication useful.

### __Testprotkoll:__<br>
Firefox v91.13.0esr<br>
Castor Manuel Fernández Lado<br>
20.09.2022<br> 
Modul 294 ZLI 

| ID  | Aufgaben                                                                                                                                                                                                   | Anwendung                                                                                                                                                                                                                                                                           | Durchführung |
|-----|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|
| 1   | 1. Aufrufen der Anwendung 2. Listet alle Aufgaben auf                                                                                                                                                      | Anwendung wird aufgerufen und lässt einen Error  in die Konsole, "GET ERROR 404" aus einem Unbekannten Grund.  Die Aufgabe wird folgender Weise aufgelistet:  1 \| Feed Pets \| ❌ \| 🗑️ 🖊️                                                                                            | erfüllt      |
| 2   | 1. Aufrufen der Anwendung 2. Eingabe in Input-Field  "Dies ist ein Test" 3. Klicken von "Save task"  fügt die Aufgabe zu den andern hinzu 4. Weiterleitung zur Seite wo man die  Aufgaben aufgelistet hat. | Anwendung wird korrekt aufgerufen und die neu hinzugefügte Aufgabe wird auch mit den anderen angezeigt:  1 \| Feed Pets \| ❌ \| 🗑️ 🖊️ 2 \| Dies ist ein Test \| ❌ \| 🗑️ 🖊️                                                                                                              | erfüllt      |
| 2.1 | 1. Aufrufen der Anwendung 2. Beim leer lassen, des Input-fields wird error angezeigt.                                                                                                                      | Anwendung wird korrekt aufgerufen und lässt beim leer lassen des Input-Fields einen Warning:  "Bitte füllen Sie dieses Feld aus."                                                                                                                                                   | erfüllt      |
| 3   | 1. Aufrufen der Anwendung beim clicken eines Buttons.  2. Bestehende Daten bearbeiten und speichern. 3. Aktualisierte Aufgabe auflisten.                                                                   | Anwendung wird beim clicken des Buttons aufgerufen bei dem ein Input field mit der Aufgabe die sie bereits  haben, erscheint die man verändern und abspeichern kann:  Update  _____________ \|__Feed Pets__\| \|abrechen  \| ok \|                                                  | erfüllt      |
| 3.1 | 1. Aufrufen der Anwendung beim clicken eines Buttons.  2. Leer lassen des Input-Fields gibt error und macht einen neuen Input-Field, damit  man einen neuen Wert einsetzen kann.                           | Anwendung wird ausgeführt und beim leer lassen des  Inputs einen alert ausgeführt der beim akzeptieren einen 2 prompt aufmacht der die Eingabe des Values ermöglicht.                                                                                                               | erfüllt      |
| 3.2 | 1. Aufrufen der Anwendung beim clicken eines Buttons.  2. Beim updaten der Task, kommt nach der änderung eine Alert box, in der steht, was zu was verändert wurde.                                         | Anwendung wird ausgeführt und beim "submiten" des updates eine alert box ausgeführt, in der steht: "You updated: "Dies ist ein Test" To: "Test2"                                                                                                                                     | erfült       |
| 4   | 1. Aufruen der Anwendung beim clicken eines Buttons.   2. Löscht die angeklickte Aufgabe vom Backend und von der Liste                                                                                     | Anwendung wird durch das clicken des Buttons aufgerugen die Aufgabe wird von Backend und von der Liste gelöscht.  1 \| Feed Pets \| ❌ \| 🗑️                                                                                                                                          | erfüllt      |
| 4.1 | 1.Aufrufen der Anwendung beim clicken eines Buttons. 2. Löscht die angeclickte Aufgabe vom Backend und von der Liste und gibt ein alert aus in der steht welche Aufgabe gelöscht wurde.                    | Anwendung wid durh das clicken des Buttons ausgeführt und Löscht die angeclickte aufgabe und gibt ein alert: "You removed: "Feed Pets" from your Tasklist"                                                                                                                          |              |
| 5   | 1. Der Quellcode des Projektes wird mit git Versioniert                                                                                                                                                    | Quellcode wurde seit erster Tag jeden Tag commited und gepusht.                                                                                                                                                                                                                     | erfüllt      |
| 6   | 1. Die einhaltung der Coderichtlinien wird überprüft und sichergestellt.                                                                                                                                   | Die Coderichtlinien wurden bei allen Dateien überprüft und sichergestellt, aussert beim indexTask.JS in dieser Datei, wird noch eine unbekannte Fehlermeldung in der Console angezeigt.                                                                                             | erfüllt      |
| 7   | 1. Die Applikation ist benutzerfreundlich und ansprechend gestaltet                                                                                                                                        | Alle Seiten sehen vom layout her sehr änlich aus, die Buttons wurden so gestaltet, dass für jede Anwendung die korrekten Farben enthalten und vom Design aus nicht wie im Default aussehen,  es wurden auch Grafiken für die einfache erkennung der Buttons und Anwendungenbenutzt. | erfüllt      |





### __Handling:__

### npm i:

*to install backend*

### npm run start

*To start Backend in localhost:3000*

### Create Task:

*Write your new Task in Input-label and save that Task to<br>
add it to your Task-list.*

### Edit Task:

*Click in the Button with the Pen "🖊" to edit your Task,<br>
You've to Write something in that input label to update your Task<br>
or click the button bellow "cancel"*

### Delete Task:

*Click the Button with a trashcan "🗑️" to delete your Task,<br>
you'll get an alert Box that notificates you, that you<br>
removed the Task that you deleted.*