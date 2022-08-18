import { View, Text } from "react-native";
import React from "react";

const HamButton = (props) => {
  return (
    <button className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500">
      {props.children}
    </button>
  );
};

export default HamButton;
