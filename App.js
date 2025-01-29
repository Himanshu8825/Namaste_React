const heading = React.createElement(
  'h1',
  {
    id: 'title',
    xyz: 'attribute',
  },
  'Hellow World from React!'
);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
