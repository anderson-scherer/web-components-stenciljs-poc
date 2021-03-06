/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */



tWowQaujCKiHv4U9SipAYmxHabk=
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface HelloWorld {}
tWowQaujCKiHv4U9SipAYmxHabk=  interface TagAccordion {
    'color': string;
    'description': string;
    'label': string;
    'width': string;
  }
}

declare global {


  interface HTMLHelloWorldElement extends Components.HelloWorld, HTMLStencilElement {}
  var HTMLHelloWorldElement: {
    prototype: HTMLHelloWorldElement;
    new (): HTMLHelloWorldElement;
  };

  interface HTMLTagAccordionElement extends Components.TagAccordion, HTMLStencilElement {}
  var HTMLTagAccordionElement: {
    prototype: HTMLTagAccordionElement;
    new (): HTMLTagAccordionElement;
  };
  interface HTMLElementTagNameMap {
    'hello-world': HTMLHelloWorldElement;
    'tag-accordion': HTMLTagAccordionElement;
  }
}

declare namespace LocalJSX {
  interface HelloWorld {}
  interface TagAccordion {
    'color'?: string;
    'description'?: string;
    'label'?: string;
    'onToogle'?: (event: CustomEvent<any>) => void;
    'width'?: string;
  }

  interface IntrinsicElements {
    'hello-world': HelloWorld;
    'tag-accordion': TagAccordion;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'hello-world': LocalJSX.HelloWorld & JSXBase.HTMLAttributes<HTMLHelloWorldElement>;
      'tag-accordion': LocalJSX.TagAccordion & JSXBase.HTMLAttributes<HTMLTagAccordionElement>;
    }
  }
}


