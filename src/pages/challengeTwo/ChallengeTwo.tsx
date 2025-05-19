export const ChallengeTwo = () => {
  return (
    <div className="bg-stone-300 w-screen h-screen flex justify-center items-center">
      <AIassitant />
    </div>
  );
};

const AIassitant = () => {
  return (
    <div className="bg-white min-w-[500px] rounded-lg shadow-lg overflow-hidden max-w-2xl flex flex-col h-[800px] border-1 border-gray-50">
      <div className="flex-1 overflow-y-auto bg-gray-100 w-full p-8">
        <BlankState />
      </div>
      {/* Input panel */}
      <div className="bg-white w-full p-8 flex items-center justify-between border-t border-gray-200">
        <div className="flex gap-6">
          {/* extra menu */}
          <button>+</button>
          <input id="chatInput" type="text" placeholder="Ask me something" />
        </div>
        <button className="">Send</button>
      </div>
    </div>
  );
};

const BlankState = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img
        src="https://images.unsplash.com/photo-1527877083249-88d406b6ac27?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="AI Assistant"
        className="mb-4 rounded-full object-cover w-24 h-24 shadow-md"
      />
      <h1 className="text-2xl font-bold mb-4 text-center">
        Hi I am Nora,
        <br /> how can I help you?
      </h1>
      <p className="text-gray-500 mb-4">Type your question in the input box below.</p>
    </div>
  );
};
