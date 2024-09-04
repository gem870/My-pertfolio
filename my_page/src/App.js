import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import MessageBox from "./components/MessageBox";
import Message from "./components/Message";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App flex flex-col">
        <Navbar />

        <div className="pt-[300px]  animate-fadeIn relative ">
          <About />
          <Project />
        </div>
        <MessageBox />
        <Message />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
