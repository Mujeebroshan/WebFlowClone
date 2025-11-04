import ComponentPanel from '../ComponentPanel';

export default function ComponentPanelExample() {
  return (
    <div className="h-screen">
      <ComponentPanel onAddElement={(type) => console.log('Add element:', type)} />
    </div>
  );
}
