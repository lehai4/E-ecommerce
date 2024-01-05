"use client";
import ContextProvider from "@/context/provider";
import { store } from "@/redux/store/store";
import { Content } from "antd/es/layout/layout";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { oswald } from "./ui/fonts";
import FooterPage from "./ui/footer";
import { Header } from "./ui/header";
import MenuPage from "./ui/menu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Provider store={store}>
          <ContextProvider>
            <Header>
              <MenuPage />
            </Header>
            <Content>{children}</Content>
            <FooterPage />
          </ContextProvider>
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
