/* eslint-disable react/prop-types */
import { useState } from "react";
import AgoraUIKit, { layout } from "agora-react-uikit";
// import { APP_ID } from "../.env/app_id";
// import ChatsScreen from "./components/ChatScreen";
import { FaWindowMaximize, FaWindowMinimize } from "react-icons/fa";

const VideoCall = ({ role }) => {
  const [videocall, setVideocall] = useState(true);
  const [isPinned, setPinned] = useState(false);
  const [username, setUsername] = useState("");
  return (
    <div className="pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="lg:grid grid-cols-12 gap-4 mx-auto px-1">
        {/* <div className="col-span-2">
          <ListOfUsers people={people}/>
        </div> */}
        <div className="col-span-12">
          <div className="flex flex-1 w-[calc(75vw)-100px] h-[calc(90vh)]">
            <div className="flex flex-col flex-1">
              {videocall ? (
                <>
                  <button
                    className="absolute top-16 z-20 text-white rounded pinter px-1 py-2"
                    onClick={() => setPinned(!isPinned)}
                  >
                    {isPinned ? (
                      <FaWindowMaximize size={24} />
                    ) : (
                      <FaWindowMinimize size={24} />
                    )}
                  </button>
                  <AgoraUIKit
                    styleProps={{
                      UIKitContainer: { height: "100%", width: "100%" },
                      localBtnContainer: {
                        backgroundColor: "#5724FF",
                      },
                      remoteBtnContainer: {
                        backgroundColor: "#5724FF",
                      },
                      maxViewStyles: {
                        borderColor: "#5724FF",
                        borderWidth: 1,
                      },
                    }}
                    rtcProps={{
                      appId: "87bed5f277064fbebc114bc9162b0783",
                      channel: "test",
                      token: null, // add your token if using app in secured mode
                      role: role || "admin", //role
                      layout: isPinned ? layout.pin : layout.grid,
                      enableScreensharing: true,
                      grid: 2,
                    }}
                    rtmProps={{
                      username: username || "user",
                      displayUsername: true,
                    }}
                    callbacks={{
                      EndCall: () => setVideocall(false),
                      ChageView: () => setPinned(!isPinned),
                    }}
                  />
                </>
              ) : (
                <div className="flex justify-around">
                  <input
                    className="flex self-center text-md"
                    placeholder="nickname"
                    type="text"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                  <button
                    className="bg-indigo-600 text-white rounded pinter px-1 py-2"
                    onClick={() => setVideocall(true)}
                  >
                    Start Call
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <div className="col-span-3">
          <ChatsScreen messages={messages} />
        </div> */}
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default VideoCall;
