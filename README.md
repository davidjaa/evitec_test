Manuaalne Testimine

| ID | Testjuhtum | Sisend | Oodatud tulemus |
| :--: | :--: | :--: | :--: |
| TC01 | Lisa uus klient | Mari Kask, 49002120011, mari.kask@example.com | Tagastab "Klient on edukalt lisatud DB2 andmebaasi!" |
| TC02 | Lisa sama isikukood uuesti | Mari Kask, 49002120011, mari.kask@example.com | Tagastab "Inimene on juba olemas andmebaasis!" |
| TC03 | Eesnimi sisaldab numbreid või märke | Mari123, Kask!, 49002120011, mari@example.test | Tagastab "Nimi võib sisaldada ainult tähti ja sidekriipsu!" |
| TC04 | Isikukood liiga lühike | Mari, Kask, 12345, mari@example.test | Tagastab "Isikukood peab olema 11 numbrit!" |

