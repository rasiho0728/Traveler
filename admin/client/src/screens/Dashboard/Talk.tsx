import React, { useEffect, useState } from "react";
// import { chatAppData } from "../../components/Data/AppData";
import BagTalk from "../../components/Dashboard/BagTalk";
import axios from "axios";
import Chattile from "../../components/Pages/Chattile";

interface ChatLogs {
  logfile: string;
  cdate: string;
  type: number;
}

interface ChatLogByUsers {
  username: string;
  chatlog: Array<ChatLogs>;
}

interface Chating {
  date: string;
  chats: Array<{ isUser: boolean; name: string; content: string; }>;
}

interface ChatingLog {
  Name: string;
  data: { date: string; messages: Array<{ message: string; type: string; }> }
}

const Talk: React.FC = () => {
  const [chats, setChats] = useState<ChatLogByUsers[]>([]);
  const [chatings, setChatings] = useState<Chating[]>([]);
  const [isLoading, setIsLoading] = useState(0);
  const [isConnect, setIsConnect] = useState(true);
  const [isBot, setIsBot] = useState(false);
  const [chatAppData, setChatAppData] = useState<ChatingLog[]>([]);

  const getFileList = async () => {
    const result = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/chat`);
    const chatLogByUsers = result.data;
    setChats(chatLogByUsers);
    // const chats = await result.data.filter((item: ChatLogs) => item.type === 0);
    // const chatBots = await result.data.filter((item: ChatLogs) => item.type === 1);
    // const sortedChats = await chats.sort((a: ChatLogs, b: ChatLogs) => a.cdate.localeCompare(b.cdate))
    // setChats(sortedChats);
    // fetchLogContent(sortedChats);
  }

  const test = async (chatList: ChatLogByUsers[]) => {
    const chatAppData: ChatingLog[] = []
    await Promise.all(
      chatList.map(async (chat) => {
        const name = chat.username;
        const chatlog = chat.chatlog.filter((item: ChatLogs) => item.type === (isBot ? 1 : 0));
        const chats = await fetchLogContent(chatlog);
        const data: any = [];
        chats.map((chat) => {
          const date = chat.date;
          const messages: any[] = []
          chat.chats.map((c) => {
            messages.push({ messages: c.content, type: c.isUser ? 'user' : 'admin' })
          })
          data.push({ date, messages })
        })
        chatAppData.push({ Name: name, data: data })
      })
    )
    // console.log(chatAppData[0].Name)
    setChatAppData(chatAppData)
  }

  useEffect(() => {
    if (chats.length > 0) {
      test(chats);
    }
  }, [chats, isBot])

  const fetchLogContent = async (chatList: ChatLogs[]) => {
    const data: Chating[] = [];
    setIsLoading(1);
    await Promise.all(
      chatList.map(async (chatData) => {
        try {
          const response = await axios(`${process.env.REACT_APP_FILES_URL}/logs/${chatData.logfile}`);  // public 폴더 기준 경로
          const text = await response.data;
          // console.log(1, text)
          const chats: any[] = [];
          text.split('\n').map(async (line: string) => {
            const [name, type, content] = line.split('||');
            const isUser = type === 'user' ? true : false;
            chats.push({ isUser: isUser, name: name, content: content })
          });
          data.push({ date: chatData.cdate, chats: chats })
        } catch (error) {
          data.push({ date: chatData.cdate, chats: [] })
          // console.error('Failed to fetch log file:', error);
        }
      })
    );
    setChatings(data);
    // console.log(data);
    return data;
  }

  useEffect(() => {
    getFileList();
  }, []);

  useEffect(() => {
    const ws = new WebSocket(`${process.env.REACT_APP_BACK_END_URL}/ws/folder-watch`);

    ws.onmessage = (event) => {
      getFileList();
    };

    ws.onopen = () => {
      setIsConnect(true);
      // console.log("WebSocket 연결됨");
    };

    ws.onclose = () => {
      setIsConnect(false);
      // console.log("WebSocket 연결 종료됨");
    };

    return () => ws.close();
  }, []);

  // const fetchLogContent = async (chatList: ChatLogByUsers) => {
  //   const data: Chating[] = [];
  //   setIsLoading(1);
  //   await Promise.all(
  //     chatList.chatlog.filter((item: ChatLogs) => item.type === (isBot ? 1 : 0)).map(async (chatData) => {
  //       try {
  //         const response = await axios(`${process.env.REACT_APP_FILES_URL}/logs/${chatData.logfile}`);  // public 폴더 기준 경로
  //         const text = await response.data;
  //         // console.log(1, text)
  //         const chats: any[] = [];
  //         text.split('\n').map(async (line: string) => {
  //           const [name, type, content] = line.split('||');
  //           const isUser = type === 'user' ? true : false;
  //           chats.push({ isUser: isUser, name: name, content: content })
  //         });
  //         data.push({ date: chatData.cdate, chats: chats })
  //       } catch (error) {
  //         data.push({ date: chatData.cdate, chats: [] })
  //         // console.error('Failed to fetch log file:', error);
  //       }
  //     })
  //   );
  //   setChatings(data);
  //   console.log(data);
  // }


  // const chatAppData: ChatingLog[] = [
  //   {
  //     Name: "나그네",
  //     // lastSeen: "12:37 PM",
  //     data: {
  //       date: '2025-02-19',
  //       messages: [
  //         {
  //           message: "안녕하세요, 다음주 월~수 호텔 000 예약했는데 수영장 운영하나요?",
  //           type: "user",
  //           // time: "10:10 AM, Today"
  //         },
  //         {
  //           message: "네 문의해보니 시간은 1300~1800 입니다",
  //           type: 'admin',
  //           // time: "10:10 AM, Today"
  //         },
  //         {
  //           message: "감사합니다 입장료 무료맞죠?",
  //           type: 'user',
  //           // time: "10:10 AM, Today"
  //         },
  //         {
  //           message: "네 맞습니다",
  //           type: 'admin',
  //           // time: "10:10 AM, Today"
  //         },
  //         {
  //           message: "감사합니다",
  //           type: 'user',
  //           // time: "10:10 AM, Today"
  //         },
  //       ]
  //     }
  //   },
  // ]

  if(chatAppData.length > 0){
    return <></>
  }

  return (
    <div className="container-xxl">
      <div className="row clearfix g-3">
        {/* <Chattile data={chatAppData} /> */}
        <BagTalk data={chatAppData} setIsBot={e => setIsBot} />
      </div>
    </div>
  )

}

export default Talk;