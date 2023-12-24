"use client";
import ContextProvider from "@/context/provider";
import { store } from "@/redux/store/store";
import { Content } from "antd/es/layout/layout";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./(overview)/loading";
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
        <ContextProvider>
          <Provider store={store}>
            <Header>
              <MenuPage />
            </Header>
            <Content>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </Content>
            <FooterPage />
          </Provider>
        </ContextProvider>
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
