import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router";
import { ModalProvider } from "./providers/modal-context";
import { Modal } from "@/components/modal/modal";

export const App = () => {
  return (
    <ModalProvider>
      <RouterProvider router={router} />
      <Modal />
    </ModalProvider>
  );
};
