import { newE2EPage } from '@stencil/core/testing';

describe('tag-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<tag-accordion></tag-accordion>');
    const element = await page.find('tag-accordion');
    expect(element).toHaveClass('hydrated');
  });

  it('deve definir texto na label e concatenar com símbolo', async () => {
    const page = await newE2EPage();

    await page.setContent('<tag-accordion></tag-accordion>');
    const component = await page.find('tag-accordion');
    const element = await page.find('tag-accordion >>> div');

    component.setProperty('label', 'Lorem Ipsum');
    await page.waitForChanges();
    expect(element.textContent).toEqual('Lorem Ipsum▼');
  });

  it('deve definir texto no paragráfo', async () => {
    const page = await newE2EPage();

    await page.setContent('<tag-accordion></tag-accordion>');
    const component = await page.find('tag-accordion');
    const element = await page.find('tag-accordion >>> p');

    component.setProperty('description', 'Neque porro quisquam');
    await page.waitForChanges();
    expect(element.textContent).toEqual('Neque porro quisquam');
  });
});
