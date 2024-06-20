// import React from "react";

// const Contact = () => {
//   return (
//     <div className="w-full mt-6">
//       <h1 className="text-3xl font-bold text-center">Contact Us</h1>
//       <div className="max-w-2xl mx-auto border-2 shadow-md rounded-md mt-5">
//         <div className="flex flex-col">
//           <p className="bg-slate-600 text-white w-full text-center text-xl py-2 font-bold">
//             Customer Support
//           </p>
//           <div className="max-h-[400px] min-h-[400px] overflow-y-auto border">
//             <div className="flex w-full justify-start mt-2">
//               <p className="bg-gray-100 w-[40%] px-2 py-1 border rounded-md rounded-tr-none mx-2 ">
//                 hello afshan  hello afshan  hello afshan 
//               </p>
//             </div>
//             <div className="flex w-full justify-end mt-2">
//               <p className="bg-blue-500 text-white w-[40%] px-2 py-1 border rounded-md rounded-tr-none mx-2">
//               hello afshan  hello afshan  hello afshan
//               </p>
//             </div>
            
//             {/* rough */}
//           {/* rough */}
//           </div>

//           <div className="flex w-full justify-between px-8 py-4">
//                 <input
//                 className="bg-slate-100 py-2 px-4 font-medium w-[80%] border rounded-md"
//                  type="text" placeholder="Enter text" />
//                 <button className="bg-blue-900 text-white px-4 py-1 border rounded-md">Send</button>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from "react";

const Contact = () => {
  const [messages, setMessages] = useState([
    { text: "Hello, how can I help you?", sender: "support" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleMessageSend = () => {
    if (newMessage.trim() === "") return; // Prevent sending empty messages

    // Simulate sending message to backend (in this case, just log it)
    console.log("Sending message:", newMessage);

    // Update messages state with new message from user
    setMessages([
      ...messages,
      { text: newMessage, sender: "user" }
    ]);

    // Clear input field after sending message
    setNewMessage("");
  };

  return (
    <div className="w-full mt-6">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      <div className="max-w-2xl mx-auto border-2 shadow-md rounded-md mt-5">
        <div className="flex flex-col">
          <p className="bg-slate-600 text-white w-full text-center text-xl py-2 font-bold">
            Customer Support
          </p>
          <div className="max-h-[400px] min-h-[400px] overflow-y-auto border">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex w-full justify-${message.sender === 'user' ? 'end' : 'start'} mt-2`}
              >
                <p className={`bg-${message.sender === 'user' ? 'gray-100' : 'blue-500'} ${message.sender === 'user' ? 'rounded-tr-none mx-2' : 'text-white'} w-[40%] px-2 py-1 border rounded-md`}>
                  {message.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex w-full justify-between px-8 py-4">
            <input
              className="bg-slate-100 py-2 px-4 font-medium w-[80%] border rounded-md"
              type="text"
              placeholder="Enter text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              className="bg-blue-900 text-white px-4 py-1 border rounded-md"
              onClick={handleMessageSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
