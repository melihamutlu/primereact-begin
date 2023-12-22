import "./App.css";
import { useState, useEffect } from "react";
import { Tree } from "primereact/tree";
import { NodeService } from "./service/NodeService";

function App() {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    NodeService.getTreeNodes().then((data: any) => setNodes(data));
  }, []);

  return (
    <div className="card flex justify-content-center">
      <Tree
        value={nodes}
        dragdropScope="demo"
        onDragDrop={(e: any) => setNodes(e.value)}
        className="w-full md:w-30rem"
      />
    </div>
  );
}

export default App;
