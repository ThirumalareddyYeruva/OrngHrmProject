describe("loginpage", function () {
    
    beforeEach(function () {
        cy.fixture('Login').then((data) => {
            this.data = data; // Store fixture data in `this`
        });
    })

    it.only("correct credentials", function () {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.xpath("//input[@name='username']").click().type(this.data.username); // Use `this.data`
        cy.get("input[placeholder='Password']").click().type(this.data.password);
        cy.get('.oxd-button').click();
        cy.get('.oxd-userdropdown-name').should('be.visible')

    });
    it("Verify login with invalid credentials",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.xpath("//input[@name='username']").click().type("datausername"); 
        cy.get("input[placeholder='Password']").click().type("password");
        cy.get('.oxd-button').click();
        cy.wait(5000)
        cy.get('.oxd-alert-content > .oxd-text').should(be.visible)
    })
    it("Check orgot Password fnctionality",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header").click()
        cy.get('.oxd-input').click().type("thirumalareddy")



    })




});







