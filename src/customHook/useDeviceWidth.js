import { useEffect, useState } from 'react'

const useWindowWidth = () => {
  const [size, setSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

export default useWindowWidth;