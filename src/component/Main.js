import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CardList from "./cardList";

function Main() {
  return (
    <div>
      <Header />
      <CardList />
      <hr className="h-0 my-5 md:mx-14 mx-8 opacity-20 border-[#00ED64] border-1 border-dashed" />
      <Footer />
    </div>
  );
}

export default Main;
