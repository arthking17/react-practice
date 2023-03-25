# Learning ReactJs with Typescript

## create a project with vip

```sh
npm create vite@latest
```

> Vite is a tool for creating js project with React, Vue, etc...

## install package dependencies

```sh
npm i
```

## Launch the server

```sh
npm run dev
```

## Extensions of folder

***ts*** for plain Typescript file and ***tsx*** for react component file

## Create a react component: 2 ways

- use a javascript class
- use a function (more popular and recommended)

## Shortcut for react class code snippets

- rafce : ReactArrowFunctionComponent
- rafc : ReactArrowFunctionExportComponent
- rafcp: ReactArrowFunctionComponentWithPropTypes
- rcc: ReactClassComponent
- rccp: ReactClassComponentPropTypes

## How react works ?

React take the component tree and build javascript component named a virtual Dom is a lightweight in-memory representation of component tree where each node represent a component and its properties. When the state or data of a component changes, react updates the corresponding node in the virtual Dom to reflect the new state then it compares the current version of virtual Dom with the previous version to identify the node that should be updated. Updated is taked by react Dom.

***React.StrictMode*** component helps to identify potential problems and don't have virtual representation.
***React Dom*** library take App component tree and rendering it or displaying inside in an element with id ***root***.

## What is React ?

***React*** is a javascript library for building user interfaces

### Difference between library and framework

*Library* is a tool that provides specific functionnality while a *framework* is a set of tools and guidelines for building apps.

## Install bootstrap library

```sh
npm -i bootstrap@5.2.3
```

## Fragment

It helps to grab multiple html element in a react file

## useState

it's a react function called hook that can tell react that this component can have data or state that we'll change over time.

> Exemple:

```ts
const [selectedIndex, setSelectedIndex] = useState(-1);
```

## Props

it's a property defined inside in a component.

> Example:

```ts
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
```

### Props vs State

> Props

- Input passed to a component
- Similar to function args
- Immutable
- cause a re-render

> State

- Data managed by a component
- Similar to local variables
- Mutable
- cause a re-render
