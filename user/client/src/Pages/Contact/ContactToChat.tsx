// 2025.02.14. 19:05 생성자: 이학수
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { appear_animate, handleScroll, updateHalfHeight } from '../../Comm/CommomFunc';
import axios from 'axios';

interface ChatLogs {
  logfile: string;
  cdate: string;
}

interface Chating {
  isBot: boolean;
  date: string;
  chats: Array<{ isUser: boolean; name: string; content: string; }>;
}

const ContactToChat: React.FC = () => {
  const [userName, setUserName] = useState('UserName');
  const [chats, setChats] = useState<ChatLogs[]>([]);
  const [chatBots, setChatBots] = useState<ChatLogs[]>([]);
  const [chatings, setChatings] = useState<Chating[]>([]);
  const [isLoading, setIsLoading] = useState(0);
  const [isListVisiable, setIsListVisiable] = useState(true);
  const [chat, setChat] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const chatBotContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setChats([
      {
        logfile: 'Log_UserName_20250214.log',
        cdate: '2025.02.14',
      }, {
        logfile: 'Log_UserName_20250215.log',
        cdate: '2025.02.15',
      },
    ]);
    setChatBots([
      {
        logfile: 'Log_BOT_UserName_20250212.log',
        cdate: '2025.02.12',
      }, {
        logfile: 'Log_BOT_UserName_20250213.log',
        cdate: '2025.02.13',
      }, {
        logfile: 'Log_BOT_UserName_20250214.log',
        cdate: '2025.02.14',
      }, {
        logfile: 'Log_BOT_UserName_20250215.log',
        cdate: '2025.02.15',
      }, {
        logfile: 'Log_BOT_UserName_20250216.log',
        cdate: '2025.02.16',
      },
    ]);
    setChatings([{
      isBot: false,
      date: new Date().toLocaleDateString(),
      chats: []
    }])
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    appear_animate();
  }, []);

  useEffect(() => {
    updateHalfHeight();
    window.addEventListener('resize', updateHalfHeight);
    return () => {
      window.removeEventListener('resize', updateHalfHeight);
    };
  }, []);

  const handleSubmit = () => {
    console.log(chat);
    setChat('');
  }

  const handleKeyEnter = (e: React.KeyboardEvent) => {
    if (e.key.toLowerCase() === 'enter') {
      handleSubmit();
    }
  }

  useEffect(() => {
    fetchLogContent(chats)
  }, [chats])

  useEffect(() => {
    setIsLoading(0);
    if (chatings.length > 0) test(chatings[0].isBot);
  }, [chatings])

  useEffect(() => {
    if (isLoading === 0) {
      if (chatings.length > 0) test(chatings[0].isBot);
    }
  }, [isLoading])

  const fetchLogContent = async (chatList: ChatLogs[], isBot: boolean = false) => {
    const data: Chating[] = [];
    setIsLoading(1);
    await Promise.all(
      chatList.map(async (chatData) => {
        try {
          const response = await axios(`/LOGS/${chatData.logfile}`);  // public 폴더 기준 경로
          const text = await response.data;
          const chats: any[] = [];
          text.split('\n').map(async (line: string) => {
            const [name, type, content] = line.split('||');
            const isUser = type === 'user' ? true : false;
            chats.push({ isUser: isUser, name: name, content: content })
          });
          data.push({ isBot, date: chatData.cdate, chats: chats })
        } catch (error) {
          data.push({ isBot, date: chatData.cdate, chats: [] })
          // console.error('Failed to fetch log file:', error);
        }
      })
    );
    setChatings(data);
  }

  const test = (isBot: boolean = false) => {
    const isNotInToday = new Date(chatings[chatings.length - 1]?.date).toLocaleDateString() !== new Date().toLocaleDateString()
    const id = `chat${isBot ? 'Bot' : ''}${chatings.length - (isNotInToday ? 0 : 1)}`;
    if (isBot) {
      handleChatScroll(chatBotContainerRef, id, false)
    } else {
      handleChatScroll(chatContainerRef, id,false)
    }
  }

  const handleChatScroll = (ref: React.RefObject<HTMLDivElement>, id: string, animate:boolean = true) => {
    const element = document.getElementById(id);
    if (element) {
      if (ref.current) {
        ref.current.scrollTo(animate ? {
          top: element.offsetTop - 90, // 요소의 상단 위치
          behavior: 'smooth'      // 부드럽게 스크롤
        }:{top: element.offsetTop - 90,});
      }

    }
  }

  const drawChatUI = (chatList: ChatLogs[], isBot: boolean = false) => {
    const isNotToday = (date: string) => { return new Date(date).toLocaleDateString() !== new Date().toLocaleDateString() };
    const isNotInToday = new Date(chatList[chatList.length - 1]?.cdate).toLocaleDateString() !== new Date().toLocaleDateString()

    return (
      <div className="row mb-5">
        <div className='col-md-3 border p-0' style={{ height: '500px', overflowY: 'auto', display: isListVisiable ? 'block' : 'none' }}>
          <button className='border-bottom d-flex align-items-center justify-content-center btn btn-light rounded-0 w-100'
            style={{ height: '80px', color: '#bbb' }}
            onClick={_ => { handleChatScroll(isBot ? chatBotContainerRef : chatContainerRef, `chat${isBot ? 'Bot' : ''}${chatList.length - (isNotInToday ? 0 : 1)}`) }}>
            <span className='h6 m-0 text-dark'>{new Date().toLocaleDateString()} 문의</span>
          </button>
          {
            [...chatList].reverse().map((chat, idx) => {
              if (!isNotToday(chat.cdate)) return <></>
              return (
                <button key={idx}
                  className='border-bottom d-flex align-items-center justify-content-center btn btn-light rounded-0 w-100'
                  style={{ height: '80px', color: '#bbb' }}
                  onClick={_ => { handleChatScroll(isBot ? chatBotContainerRef : chatContainerRef, `chat${isBot ? 'Bot' : ''}${chatList.length - 1 - idx}`) }}
                >
                  <span className='h6 m-0 text-dark'>문의 내역: {new Date(chat.cdate).toLocaleDateString()}</span>
                </button>)
            })
          }
        </div>
        <div className={`${isListVisiable ? 'col-md-9' : 'col-md-12'} border pt-3 bg-opacity-10`}
          style={{
            background: 'linear-gradient(160deg,rgba(0, 165, 0, 0.45) 50%, rgba(251, 255, 0, 0.45)) ',
            height: '500px'
          }}>
          {
            isListVisiable ? (
              <i className='h5 icon-arrow-left' style={{ zIndex: 10 }} onClick={_ => setIsListVisiable(false)} />
            ) : (
              <i className='h5 icon-arrow-right' style={{ zIndex: 10 }} onClick={_ => setIsListVisiable(true)} />
            )
          }
          <div
            ref={isBot ? chatBotContainerRef : chatContainerRef}
            style={{
              height: '400px',
              overflowY: 'auto',
              padding: '10px',
            }}>
            {
              !isLoading ? <>
                {
                  chatings.length > 0 && chatings.map((chating, idx) => (
                    <div key={'chat' + idx} className='mb-3' id={`chat${isBot ? 'Bot' : ''}${idx}`}>
                      <div className='text-center mb-3'>
                        <span className='bg-light p-2 rounded'>{chating.date}</span>
                      </div>
                      <div className='mb-3'>
                        {
                          chating.chats.length > 0 && chating.chats.map((chat, idx) => (
                            <div key={idx} className={`${chat.isUser ? 'text-start' : 'text-end'} mx-4 mb-2`}>
                              <p className='mb-1'>{chat.name}</p>
                              <span className='bg-light p-2 rounded'
                                style={{
                                  boxShadow: '3px 3px 3px 1px rgba(0, 0, 0, 0.5)'
                                }}>
                                {chat.content}
                              </span>
                            </div>
                          ))
                        }
                      </div>
                      {isNotToday(chating.date) && <hr className='my-5' />}
                    </div>))
                }
                {
                  isNotInToday && <>
                    <div className='text-center mb-3' id={`chat${isBot ? 'Bot' : ''}${chatings.length}`}>
                      <span className='bg-light p-2 rounded'>{new Date().toLocaleDateString()}</span>
                    </div>
                    <div className='mb-3'>
                      <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                        <h2 className='text-light bg-secondary p-2'
                          style={{ borderRadius: '1rem' }}>
                          금일 문의 내역이 없습니다.
                        </h2>
                      </div>
                    </div>
                  </>
                }
              </> : <>
                <div className='text-center mb-3'>
                  <span className='bg-light p-2 rounded'>{new Date().toLocaleDateString()}</span>
                </div>
                <div className='mb-3'>
                  <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                    <h2 className='text-light bg-secondary p-2'
                      style={{ borderRadius: '1rem' }}>
                      데이터 로딩 중
                    </h2>
                  </div>
                </div>
              </>
            }
          </div>
          <div style={{
            height: '50px',
            display: 'flex'
          }}>
            <input type="text"
              className='bg-light rounded-top rounded-bottom form-control me-3'
              placeholder='문의 내역을 입력해주세요'
              value={chat}
              onChange={e => setChat(e.target.value)}
              onKeyDown={handleKeyEnter} />
            <button type='button'
              className='btn btn-success rounded-top rounded-bottom'
              onClick={handleSubmit}>
              전송
            </button>
          </div>
        </div>
      </div >)
  }

  return (
    <div>
      <div className="hero-wrap js-halfheight" style={{ backgroundImage: "url('/images/bg_2.jpg')" }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-halfheight align-items-center justify-content-center" data-scrollax-parent="true">
            <div className="col-md-9 ftco-animate text-center" data-scrollax='{"properties": {"translateY": "70%"}}'>
              <p className="breadcrumbs" data-scrollax='{"properties": {"translateY": "30%", "opacity": 1.6}}'>
                <span className="mr-2"><Link to="/traveler/home">Home</Link></span> <span>Contact</span>
              </p>
              <h1 className="mb-3 bread" data-scrollax='{"properties": {"translateY": "30%", "opacity": 1.6}}'>문의 하기</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section contact-section ftco-degree-bg">
        <div className="container">
          <div className="mb-4">
            <h3>문의하기</h3>
          </div>
          <div className="col-md-12 nav-link-wrap mb-4">
            <div className="nav ftco-animate nav-pills nav-fill" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button className="nav-link active" id="v-pills-whatwedo-tab"
                data-bs-toggle="pill" data-bs-target="#v-pills-whatwedo" role="tab"
                aria-controls="v-pills-whatwedo" aria-selected="true"
                onClick={_ => { fetchLogContent(chats); test(); }}
              >
                문의 내역
              </button>

              <button className="nav-link" id="v-pills-mission-tab"
                data-bs-toggle="pill" data-bs-target="#v-pills-mission" role="tab"
                aria-controls="v-pills-mission" aria-selected="false"
                onClick={_ => { fetchLogContent(chatBots, true); test(true) }}
              >
                챗봇 내역
              </button>

              <button className="nav-link" id="v-pills-goal-tab"
                data-bs-toggle="pill" data-bs-target="#v-pills-goal" role="tab"
                ria-controls="v-pills-goal" aria-selected="false">
                연락처 정보
              </button>
            </div>
          </div>
          <div className="tab-content ftco-animate" id="v-pills-tabContent">
            <div className="tab-pane show active" id="v-pills-whatwedo" role="tabpanel" aria-labelledby="v-pills-whatwedo-tab">
              {
                drawChatUI(chats)
              }
            </div>

            <div className="tab-pane" id="v-pills-mission" role="tabpanel" aria-labelledby="v-pills-mission-tab">
              {
                drawChatUI(chatBots, true)
              }
            </div>

            <div className="tab-pane" id="v-pills-goal" role="tabpanel" aria-labelledby="v-pills-goal-tab">
              <div className="row d-flex contact-info mb-4">
                <div className="col-md-12 mb-4">
                  <h2 className="h4">연락처 정보</h2>
                </div>
                <div className="w-100"></div>
                <div className="col-md-3">
                  <p><span>주소:</span> 서울 서초구 서초대로77길 41 4층</p>
                </div>
                <div className="col-md-3">
                  <p><span>전화번호:</span> <Link to="tel://1234567920">+ 1235 2355 98</Link></p>
                </div>
                <div className="col-md-3">
                  <p><span>이메일:</span> <Link to="mailto:info@yoursite.com">info@yoursite.com</Link></p>
                </div>
                <div className="col-md-3">
                  <p><span>Website</span> <Link to="#">yoursite.com</Link></p>
                </div>
              </div>

              {/* 회사 오시는 길 추가 */}
              <div className='row'>
                <div className='col-md-6'>
                  {/* Google Maps 삽입 */}
                  <div className="map-responsive">
                    <iframe
                      title="회사 오시는 길"
                      width="100%"
                      height="300"
                      src="https://www.google.com/maps/embed/v1/place?q=서울+서초구+서초대로77길+41&key=api...key"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="h5 mb-3">회사 오시는 길</h3>
                  <p>서울 서초구 서초대로77길 41 4층에 위치해 있습니다.</p>
                  <p>🚇 지하철: 2호선 강남역 5번 출구 도보 10분</p>
                  <p>🚗 주차: 건물 내 유료 주차 가능</p>
                </div>
              </div>

            </div>
          </div>


        </div>
      </section >
    </div >
  );
};

export default ContactToChat;
