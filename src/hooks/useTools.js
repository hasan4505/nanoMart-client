import { useEffect, useState } from "react";

const useTools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("https://glacial-meadow-36697.herokuapp.com/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return [tools, setTools];
};

export default useTools;
