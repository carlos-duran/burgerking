import { FC, ReactNode, createContext, useContext, useState } from "react";

type TNotifyContext = (message: string) => void;

const NotifyContext = createContext<TNotifyContext>((message: string) => {
  message;
});

type Props = { children: ReactNode };

let timeout: number;

export const NotifyProvider: FC<Props> = ({ children }) => {
  const [message, setMessage] = useState("");

  const notify = (message: string) => {
    clearTimeout(timeout);
    setMessage("");
    setTimeout(() => {
      setMessage(message);
      timeout = setTimeout(() => {
        setMessage("");
      }, 3000);
    }, 100);
  };

  return (
    <>
      <NotifyContext.Provider value={notify}>{children}</NotifyContext.Provider>

      {message && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-300 text-black px-4 py-2 rounded-md">
          {message}
        </div>
      )}
    </>
  );
};

export const useNotify = () => useContext(NotifyContext);
