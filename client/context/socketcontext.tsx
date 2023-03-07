import { createContext, useContext, useEffect, useState } from "react";
const SocketContext = createContext({});
function SocketProvider(props: any) {
  return <SocketContext.Provider value={{}} {...props} />;
}
export const useSockets = () => useContext(SocketContext);
export default SocketProvider;
