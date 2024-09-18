describe('Input value test', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    
    cy.get('[data-cy="loadData"]').should('exist').click();
    cy.get('[data-cy="table-container"]')
      .find('.ant-table-row') 
      .should('exist') 
      .then(($rows) => {
        const rows = $rows.toArray();
        const rowsToCheck = rows.slice(0, -1); 
        
        cy.wrap(rowsToCheck).each(($row) => {
          cy.wrap($row)
            .find('.ant-table-cell')
            .eq(0) 
            .invoke('text')
            .then((text) => {
              const trimmedText = text.trim();
              expect(trimmedText).to.match(/^\d+$/); 
            });

          cy.wrap($row)
            .find('.ant-table-cell')
            .eq(4) 
            .invoke('text')
            .then((text) => {
              const trimmedText = text.trim();
              expect(trimmedText).to.not.be.empty; 
            });
            cy.wrap($row)
            .find('.ant-table-cell')
            .eq(5) 
            .invoke('text')
            .then((text) => {
              const trimmedText = text.trim();
              expect(trimmedText).to.not.be.empty; 
            });
        });
      });
  });
});
