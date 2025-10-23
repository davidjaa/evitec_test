## Ülevaade

Spring Boot + DB2 rakendus, mis võimaldab hallata klientide andmeid.
Süsteem koosneb:
- Backendist (Java, Spring Boot)
- Frontendist (React)
- DB2 andmebaasist

Rakendus võimaldab lisada uusi kliente ning kontrollib, et:
- Isikukood on unikaalne
- Nimi sisaldab ainult tähti ja sidekriipse
- Isikukood on 11 numbrit pikk
- Kui klient juba eksisteerib, tagastatakse teade ega lisata duplikaati


## Manuaalne Testimine

| ID | Testjuhtum | Sisend | Oodatud tulemus |
| :--: | :--: | :--: | :--: |
| TC01 | Lisa uus klient | Mari Kask, 49002120011, mari.kask@example.com | Tagastab "Klient on edukalt lisatud DB2 andmebaasi!" |
| TC02 | Lisa sama isikukood uuesti | Mari Kask, 49002120011, mari.kask@example.com | Tagastab "Inimene on juba olemas andmebaasis!" |
| TC03 | Eesnimi sisaldab numbreid või märke | Mari123, Kask!, 49002120011, mari@example.test | Tagastab "Nimi võib sisaldada ainult tähti ja sidekriipsu!" |
| TC04 | Isikukood liiga lühike | Mari, Kask, 12345, mari@example.test | Tagastab "Isikukood peab olema 11 numbrit!" |


## Käivitamine

### Andmebaas
- Muuda src/main/resources/application.properties DB2 andmebaasi nimi, kasutajanimi ja parool käsitsi:
  
  spring.datasource.url=jdbc:db2://localhost:50000/YOUR_DB
  spring.datasource.username=YOUR_USERNAME
  spring.datasource.password=YOUR_PASSWORD
- Ava “DB2 Command Window (Administrator)”
- db2start
- db2 connect to YOUR_DB user YOUR_USERNAME using YOUR_PASSWORD

### Backend
- cd backend
- mvn spring-boot:run

### Frontend
- cd frontend
- npm start

# Testimine
- npx cypress open
