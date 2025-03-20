import { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Position,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: 'main-power',
    type: 'input',
    data: { 
      label: 'Hauptstromversorgung',
    },
    position: { x: 250, y: 0 },
    style: {
      background: '#fff',
      border: '1px solid #3b82f6',
      borderRadius: '8px',
      padding: '10px',
      width: 180,
      color: '#1f2937',
    },
  },
  {
    id: 'solar',
    data: { 
      label: 'Solar System\n850W',
    },
    position: { x: 0, y: 100 },
    style: {
      background: '#fff',
      border: '1px solid #22c55e',
      borderRadius: '8px',
      padding: '10px',
      width: 150,
      color: '#1f2937',
    },
  },
  {
    id: 'battery',
    data: { 
      label: 'Batteriespeicher\n75% geladen',
    },
    position: { x: 500, y: 100 },
    style: {
      background: '#fff',
      border: '1px solid #eab308',
      borderRadius: '8px',
      padding: '10px',
      width: 150,
      color: '#1f2937',
    },
  },
  {
    id: 'hvac',
    data: { 
      label: 'HVAC System\n22°C',
    },
    position: { x: 100, y: 200 },
    style: {
      background: '#fff',
      border: '1px solid #06b6d4',
      borderRadius: '8px',
      padding: '10px',
      width: 150,
      color: '#1f2937',
    },
  },
  {
    id: 'lighting',
    data: { 
      label: 'Beleuchtung\n45% Helligkeit',
    },
    position: { x: 250, y: 200 },
    style: {
      background: '#fff',
      border: '1px solid #f59e0b',
      borderRadius: '8px',
      padding: '10px',
      width: 150,
      color: '#1f2937',
    },
  },
  {
    id: 'security',
    data: { 
      label: 'Sicherheitssystem\nAktiv',
    },
    position: { x: 400, y: 200 },
    style: {
      background: '#fff',
      border: '1px solid #dc2626',
      borderRadius: '8px',
      padding: '10px',
      width: 150,
      color: '#1f2937',
    },
  },
  {
    id: 'monitoring',
    type: 'output',
    data: { 
      label: 'Monitoring & Kontrolle',
    },
    position: { x: 250, y: 300 },
    style: {
      background: '#fff',
      border: '1px solid #8b5cf6',
      borderRadius: '8px',
      padding: '10px',
      width: 180,
      color: '#1f2937',
    },
  },
];

const initialEdges = [
  {
    id: 'main-solar',
    source: 'main-power',
    target: 'solar',
    animated: true,
    style: { stroke: '#22c55e' },
  },
  {
    id: 'main-battery',
    source: 'main-power',
    target: 'battery',
    animated: true,
    style: { stroke: '#eab308' },
  },
  {
    id: 'solar-hvac',
    source: 'solar',
    target: 'hvac',
    animated: true,
    style: { stroke: '#06b6d4' },
  },
  {
    id: 'battery-lighting',
    source: 'battery',
    target: 'lighting',
    animated: true,
    style: { stroke: '#f59e0b' },
  },
  {
    id: 'main-security',
    source: 'main-power',
    target: 'security',
    animated: true,
    style: { stroke: '#dc2626' },
  },
  {
    id: 'hvac-monitoring',
    source: 'hvac',
    target: 'monitoring',
    animated: true,
    style: { stroke: '#8b5cf6' },
  },
  {
    id: 'lighting-monitoring',
    source: 'lighting',
    target: 'monitoring',
    animated: true,
    style: { stroke: '#8b5cf6' },
  },
  {
    id: 'security-monitoring',
    source: 'security',
    target: 'monitoring',
    animated: true,
    style: { stroke: '#8b5cf6' },
  },
];

export default function SystemDiagram() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: any) => {
    console.log('handle new connections', params);
  }, []);

  return (
    <div style={{ width: '100%', height: '500px', background: 'white' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="bottom-left"
      >
        <Controls />
        <MiniMap 
          nodeStrokeColor="#666"
          nodeColor="#fff"
          nodeBorderRadius={8}
        />
        <Background color="#f1f5f9" gap={16} />
      </ReactFlow>
    </div>
  );
}