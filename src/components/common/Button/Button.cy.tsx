import { Button } from '~/components/common/Button/Button';

describe('<Button />', () => {
    it('renders', () => {
        const handleClick = cy.stub().as('handleClick');

        cy.mount(<Button onClick={handleClick} />);
        cy.get('.button').click();
        cy.get('@handleClick').should('have.been.called');
    });
});
