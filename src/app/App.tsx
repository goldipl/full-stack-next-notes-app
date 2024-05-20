import TabComponent from "@/components/TabComponent";
import Title from "@/components/Title";
import React from "react";

const App = () => {
  return (
    <section className="bg-white rounded-xl p-4 shadow-lg w-[800px] h-[420px]">
      <Title />
      <TabComponent />
    </section>
  );
};

export default App;