import { ChangeEvent, useEffect } from "react";
import { InputField } from "../../components/input";

import { Manager } from "socket.io-client";
import { useQueueStore } from "../../store/store";

const manager = new Manager("http://localhost:3001/socket.io/socket.io.js");

const socket = manager.socket("/queue");

export const HomeContainer = () => {
  const { state, handleChangeState, getQueue, queue } = useQueueStore();


  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    handleChangeState({ name: value });
  };
  const handleSubmit = () => {
    socket.emit("add-to-queue", state);
  };

  useEffect(() => {
    // Initial queue fetch
    socket.emit("get-queue");

    socket.on("queue", (data) => {
      getQueue(data);
    });
  }, []);

  return (
    <div className="bg-slate-200 w-screen h-screen flex justify-center items-center">
      <div className="w-1/2">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">Agregar a cola</h2>
            <div className="w-full h-px bg-gray-200 border-b border-gray-300 mb-1"></div>
            <div className="flex justify-center items-center flex-col">
              <InputField
                id="name"
                label="Nombre Completo"
                name="name"
                placeholder="Escriba su nombre aquí"
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={handleSubmit}
                className="g-blue-500 bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-4/5 mt-3"
              >
                Agregar a la cola
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden mt-5">
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">Cola</h2>
            <div className="w-full h-px bg-gray-200 border-b border-gray-300 mb-1"></div>
            <div className="flex justify-center items-center flex-col">
              <ul>
                {queue.map((item, index) => (
                  <li key={index} className="text-gray-800">
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
