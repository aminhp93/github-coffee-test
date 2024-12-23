// Import libraries
import React from "react";
import { TreeMethods } from "@minoru/react-dnd-treeview";

// Import local files: relative path
import { SystemTree } from "@/components/system-tree";
// import SampleData from "./sample_data.json";
import SampleData from "./data2.json";

const ClickedSystemTreeWithPathTemplate = () => {
  const ref = React.useRef<TreeMethods | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [treeData, setTreeData] = React.useState<any>([]);
  const [clickedNodeId, setClickedNodeId] = React.useState<string>("");

  React.useEffect(() => {
    setTreeData(SampleData);
    setTimeout(() => {
      setClickedNodeId("d558b4e1-6976-431e-b75a-7ddddb9bddc3");
    }, 2000);
  }, []);

  if (treeData.length === 0) return null;

  return <SystemTree clickedNodeId={clickedNodeId} tree={treeData} ref={ref} />;
};

export default ClickedSystemTreeWithPathTemplate;
