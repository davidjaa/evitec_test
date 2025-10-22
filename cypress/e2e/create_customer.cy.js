describe('Uue kliendi loomine React + Java + DB2 süsteemis', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Lisab uue kliendi ja kuvab edukuse teadet', () => {
    cy.get('input[name="firstName"]').type('Mari')
    cy.get('input[name="lastName"]').type('Kask')
    cy.get('input[name="personalCode"]').type('49002120011')
    cy.get('input[name="email"]').type('mari.kask@example.com')
    cy.get('button[type="submit"]').click()
    cy.contains('Klient on edukalt lisatud DB2 andmebaasi!').should('be.visible')
  })

  it('Ei luba sama isikukoodiga inimest teist korda lisada', () => {
    cy.get('input[name="firstName"]').type('Mari')
    cy.get('input[name="lastName"]').type('Kask')
    cy.get('input[name="personalCode"]').type('49002120011')
    cy.get('input[name="email"]').type('mari.kask@example.com')
    cy.get('button[type="submit"]').click()
    cy.contains('Inimene on juba olemas tabelis!').should('be.visible')
  })

  it('Annab vea kui nimi sisaldab keelatud sümboleid', () => {
    cy.get('input[name="firstName"]').type('Mari123')
    cy.get('input[name="lastName"]').type('Kask!')
    cy.get('input[name="personalCode"]').type('49002120011')
    cy.get('input[name="email"]').type('mari@fail.test')
    cy.get('button[type="submit"]').click()
    cy.contains('Nimi võib sisaldada ainult tähti ja sidekriipsu!').should('be.visible')
  })

  it('Annab vea kui isikukood on vale pikkusega', () => {
    cy.get('input[name="firstName"]').type('Karl')
    cy.get('input[name="lastName"]').type('Erik')
    cy.get('input[name="personalCode"]').type('12345')
    cy.get('input[name="email"]').type('karl.erik@example.com')
    cy.get('button[type="submit"]').click()
    cy.contains('Isikukood peab olema 11 numbrit!').should('be.visible')
  })
})
