"use client";
import ContextProvider from "@/context/provider";
import { permistor, store } from "@/redux/store/store";
import { Content } from "antd/es/layout/layout";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { oswald } from "./ui/fonts";
import FooterPage from "./ui/footer";
import { Header } from "./ui/header";
import MenuPage from "./ui/menu";
import { PersistGate } from "redux-persist/integration/react";

<meta
  name="format-detection"
  content="telephone=no, date=no, email=no, address=no"
/>;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={permistor}>
            <ContextProvider>
              <Header>
                <MenuPage />
              </Header>
              <Content>{children}</Content>
              <FooterPage />
            </ContextProvider>
          </PersistGate>
        </Provider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
