import googleLogo from "./google-logo.png";

export function Welcome() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-white gap-5 -mt-[140px]">
      <img className="w-[272px] h-[110px]" src={googleLogo} alt="google logo"/>

      {/* SEARCH BAR */}
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <path fill="currentColor" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5
            1.5l-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 
            9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5"/>
        </svg>

        <input 
          type="text"
          name="Google.com" 
          className="bg-white
                    rounded-[50px] 
                    h-[45px] 
                    w-[580px] 
                    shadow-[0px_3px_7px_1px_rgba(0,_0,_0,_0.2)] 
                    text-[#000000]
                    font-lighter
                    text-[0.95rem] 
                    outline-none
                    pl-[50px]
                    pr-[130px]"/>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="absolute right-24 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
          <path fill="currentColor" d="M19 10h-2V8h2m0 5h-2v-2h2m-3-1h-2V8h2m0 5h-2v-2h2m0 6H8v-2h8m-9-5H5V8h2m0
           5H5v-2h2m1 0h2v2H8m0-5h2v2H8m3 1h2v2h-2m0-5h2v2h-2m9-5H4c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="absolute right-14 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
          <path fill="currentColor" d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0
           3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2a5 5 0 0 0 5 5a5 5 0 0 0 5-5z"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
          <path fill="currentColor" d="M20 4h-3.17L15 2H9L7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0
           2-2V6a2 2 0 0 0-2-2m0 14H4V6h4.05l1.83-2h4.24l1.83 2H20zM12 7a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0
            5-5a5 5 0 0 0-5-5m0 8a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3"/>
        </svg>
      </div>

      {/* BUTTONS */}
      <div className="w-[20%] h-[80px] top-[10px] flex justify-center items-center gap-[10px]">
        <button className="bg-gray-100 hover:shadow-[inset_0px_0px_2px_0px_rgba(0,0,0,_0.2)] cursor-pointer text-gray-800 w-[130px] h-[40px] text-[0.9rem] rounded-[7px]">Google Search</button>
        <button className="bg-gray-100 hover:shadow-[inset_0px_0px_2px_0px_rgba(0,0,0,_0.2)] cursor-pointer text-gray-800 w-[150px] h-[40px] text-[0.9rem] rounded-[7px]">I'm Feeling Lucky</button>
      </div>
    </div>
  );
}
