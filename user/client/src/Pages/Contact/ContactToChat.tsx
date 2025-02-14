// 2025.02.14. 19:05 생성자: 이학수
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { appear_animate, handleScroll, updateHalfHeight } from '../../Comm/CommomFunc';
import axios from 'axios';

interface ChatLogs {
  logfile: string;
  cdate: string;
}

interface Chating {
  date: string;
  chats: Array<{ isUser: boolean; name: string; content: string; }>;
}

const ContactToChat: React.FC = () => {
  const [chats, setChats] = useState<ChatLogs[]>([]);
  const [chatBots, setChatBots] = useState<ChatLogs[]>([]);
  const [chating, setChating] = useState<Chating | null>(null)
  const [isListVisiable, setIsListVisiable] = useState(true)

  useEffect(() => {
    setChats([
      {
        logfile: 'Log_UserName_20250215.log',
        cdate: '2025.02.15',
      }, {
        logfile: 'Log_UserName_20250214.log',
        cdate: '2025.02.14',
      },
    ]);
    setChatBots([
      {
        logfile: 'Log_UserName_20250215.log',
        cdate: '2025.02.15',
      }, {
        logfile: 'Log_UserName_20250214.log',
        cdate: '2025.02.14',
      }, {
        logfile: 'Log_UserName_20250213.log',
        cdate: '2025.02.13',
      }, {
        logfile: 'Log_UserName_20250212.log',
        cdate: '2025.02.12',
      },
    ]);
    setChating({
      date: new Date().toLocaleDateString(),
      chats: [
        {
          isUser: true,
          name: 'user1',
          content: '안녕?',
        }, {
          isUser: false,
          name: '관리자',
          content: '안녕하세요.',
        }
      ]
    })
  }, []);


  const fetchLogContent = async (chatData: ChatLogs) => {
    try {
      const response = await axios(`/LOGS/${chatData.logfile}`);  // public 폴더 기준 경로
      const text = await response.data;
      const chats: any[] = [];
      text.split('\n').map((line: string) => {
        const [name, type, content] = line.split('||');
        const isUser = type === 'user' ? true : false;
        chats.push({ isUser: isUser, name: name, content: content })
      });
      setChating({ date: chatData.cdate, chats: chats });
    } catch (error) {
      console.error('Failed to fetch log file:', error);
    }
  };

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

  const drawChatUI = (chatList: ChatLogs[]) => {
    return (<div className="row mb-5">
      <div className='col-md-3 border p-0' style={{ height: '500px', overflowY: 'auto', display: isListVisiable ? 'block' : 'none' }}>
        <button className='border-bottom d-flex align-items-center justify-content-center btn btn-light rounded-0 w-100'
          style={{ height: '80px', color: '#bbb' }}
          onClick={_ => fetchLogContent(chatList[0])}>
          <span className='h6 m-0 text-dark'>{new Date().toLocaleDateString()} 문의</span>
        </button>
        {
          chatList.map((chat, idx) => {
            if (new Date(chat.cdate).toLocaleDateString() === new Date().toLocaleDateString()) return <></>
            return (
              <button key={idx}
                className='border-bottom d-flex align-items-center justify-content-center btn btn-light rounded-0 w-100'
                style={{ height: '80px', color: '#bbb' }}
                onClick={_ => fetchLogContent(chat)}>
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
        <div className='text-center mb-3'>
          <span className='bg-light p-2 rounded-top rounded-bottom'>{chating?.date}</span>
        </div>
        <div className='mb-3'
          style={{
            height: (new Date(chating?.date as string).toLocaleDateString() === new Date().toLocaleDateString()) ? '330px' : '400px',
            overflowY: 'auto'
          }}>
          {
            chating?.chats.map((chat, idx) => (
              <div key={idx} className={`${chat.isUser ? 'text-start' : 'text-end'} mx-4`}>
                <p className='mb-1'>{chat.name}</p>
                <span className='bg-light p-2 rounded-top rounded-bottom'
                  style={{
                    boxShadow: '3px 3px 3px 1px rgba(0, 0, 0, 0.5)'
                  }}>
                  {chat.content}
                </span>
              </div>
            ))
          }
        </div>
        <div style={{
          height: '50px',
          display: (new Date(chating?.date as string).toLocaleDateString() === new Date().toLocaleDateString()) ? 'flex' : 'none'
        }}>
          <input type="text" className='bg-light rounded-top rounded-bottom form-control me-3' placeholder='문의 내역을 입력해주세요' />
          <button className='btn btn-success rounded-top rounded-bottom'>전송</button>
        </div>
      </div>
    </div>)
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
                aria-controls="v-pills-whatwedo" aria-selected="true">
                문의 내역
              </button>

              <button className="nav-link" id="v-pills-mission-tab"
                data-bs-toggle="pill" data-bs-target="#v-pills-mission" role="tab"
                aria-controls="v-pills-mission" aria-selected="false">
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
            <div className="tab-pane fade show active" id="v-pills-whatwedo" role="tabpanel" aria-labelledby="v-pills-whatwedo-tab">
              {
                drawChatUI(chats)
              }
            </div>

            <div className="tab-pane fade" id="v-pills-mission" role="tabpanel" aria-labelledby="v-pills-mission-tab">
              {
                drawChatUI(chatBots)
              }
            </div>

            <div className="tab-pane fade" id="v-pills-goal" role="tabpanel" aria-labelledby="v-pills-goal-tab">
              <div className="row d-flex contact-info">
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
