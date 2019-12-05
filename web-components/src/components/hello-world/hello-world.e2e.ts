import { newE2EPage } from '@stencil/core/testing';

describe('hello-world', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<hello-world></hello-world>');
    const element = await page.find('hello-world');
    expect(element).toHaveClass('hydrated');
  });

  it('deve renderizar component com texto pré-definido', async () => {
    const page = await newE2EPage();

    await page.setContent('<hello-world></hello-world>');
    const element = await page.find('hello-world >>> div');
    expect(element.textContent).toEqual(`My first Web Component`);
  });
});
