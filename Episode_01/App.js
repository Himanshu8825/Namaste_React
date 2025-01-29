const heading = React.createElement(
  'h1',
  {
    id: 'title',
    xyz: 'attribute',
  },
  'Hellow World from React!'
);

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement(
      'h1',
      {},
      'Hellow World from React in nested components'
    ),
    React.createElement(
      'h2',
      {},
      'Hellow World from React in nested components siblings'
    ),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement(
      'h1',
      {},
      'Hellow World from React in nested components'
    ),
    React.createElement(
      'h2',
      {},
      'Hellow World from React in nested components siblings'
    ),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
