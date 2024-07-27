"use client";

import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const flowersFaq = [
  {
    value: "item-1",
    question: "How does the Buy Bot work?",
    content:
      "Crypton Super Bot is a game-changer for your trading endeavors on the TON blockchain. This highly efficient bot stands out for its remarkable speed and accuracy, redefining how you navigate the market. Specifically designed for executing liquidity snipes, placing limit orders, and acquiring tokens, Crypton Super Bot ensures you're always one step ahead. Its lightning-fast transactions not only optimize your trading strategy but also guarantee that you secure the most advantageous deals available.",
  },
  {
    value: "item-2",
    question: "How does the Buy Bot work?",
    content:
      "Crypton Super Bot is a game-changer for your trading endeavors on the TON blockchain. This highly efficient bot stands out for its remarkable speed and accuracy, redefining how you navigate the market. Specifically designed for executing liquidity snipes, placing limit orders, and acquiring tokens, Crypton Super Bot ensures you're always one step ahead. Its lightning-fast transactions not only optimize your trading strategy but also guarantee that you secure the most advantageous deals available.",
  },
  {
    value: "item-3",
    question: "How does the Buy Bot work?",
    content:
      "Crypton Super Bot is a game-changer for your trading endeavors on the TON blockchain. This highly efficient bot stands out for its remarkable speed and accuracy, redefining how you navigate the market. Specifically designed for executing liquidity snipes, placing limit orders, and acquiring tokens, Crypton Super Bot ensures you're always one step ahead. Its lightning-fast transactions not only optimize your trading strategy but also guarantee that you secure the most advantageous deals available.",
  },
  {
    value: "item-4",
    question: "How does the Buy Bot work?",
    content:
      "Crypton Super Bot is a game-changer for your trading endeavors on the TON blockchain. This highly efficient bot stands out for its remarkable speed and accuracy, redefining how you navigate the market. Specifically designed for executing liquidity snipes, placing limit orders, and acquiring tokens, Crypton Super Bot ensures you're always one step ahead. Its lightning-fast transactions not only optimize your trading strategy but also guarantee that you secure the most advantageous deals available.",
  },
  {
    value: "item-5",
    question: "How does the Buy Bot work?",
    content:
      "Crypton Super Bot is a game-changer for your trading endeavors on the TON blockchain. This highly efficient bot stands out for its remarkable speed and accuracy, redefining how you navigate the market. Specifically designed for executing liquidity snipes, placing limit orders, and acquiring tokens, Crypton Super Bot ensures you're always one step ahead. Its lightning-fast transactions not only optimize your trading strategy but also guarantee that you secure the most advantageous deals available.",
  },
];

export const FAQsSection = () => {
  const [openItem, setOpenItem] = useState<string>("item-1");

const handleValueChange = (value: string) => {
  setOpenItem(value === openItem ? "" : value);
};

  return (
    <section className="bg-[#120e11] text-white w-screen py-12 md:px-5 px-3">
      <div className="w-[95%] md:w-[90%] mx-auto">
      <h1 className="text-2xl text-center md:text-4xl font-bold mb-12">
        Frequently Asked Questions
      </h1>
      <Accordion.Root
        type="single"
        collapsible
        className="flex flex-col gap-4 container mx-auto"
        value={openItem}
        onValueChange={handleValueChange}
      >
        {flowersFaq.map((item) => (
          <Accordion.Item
            key={item.value}
            value={item.value}
            className={`w-full mx-auto border-[1px] rounded-3xl border-[#464446] overflow-hidden data-[state=open]:bg-gradient-FAQs data-[state=open]:text-black data-[state=open]:py-5`}
          >
            <Accordion.Header>
              <Accordion.Trigger
                className="my-4 flex items-center justify-between md:px-20 px-5 py-1 w-full"
              >
                <div>
                  <h1 className="md:text-2xl text-xl font-bold text-start">
                    {item.question}
                  </h1>
                </div>
                <div className="text-xl">
                  {openItem === item.value ? <IoChevronUp /> : <IoChevronDown />}
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="leading-6 md:px-20 px-5">
              <div className="mb-4">
                <p>{item.content}</p>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
      </div>
    </section>
  );
};

export default FAQsSection;