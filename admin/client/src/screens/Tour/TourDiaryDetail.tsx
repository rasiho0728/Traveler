import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { appear_animate, handleScroll, updateHeight } from '../../Comm/CommonFuncAd';
import { Link } from 'react-router-dom';

const TourDiaryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    // 스크롤 이벤트 핸들링
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // 등장 애니메이션 적용
    appear_animate();
  }, []);

  useEffect(() => {
    // 화면 크기 변경 시 높이 갱신
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <div className="blog-page">
      <section className="ftco-section ftco-degree-bg">
        <div className="container">
          <div className="row">
            {/* 블로그 본문 */}
            <div className="col-md-8 ftco-animate">
              <div className="blog-post">
                <h2 className="mb-3">10 Tips For The Traveler</h2>
                <p className="blog-author">
                  By <strong>Admin</strong> | June 27, 2018
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.
                </p>
                <p className='d-flex justify-content-center align-items-center'>
                  <img src="/imgs/img2.jpg" alt="" className="img-fluid blog-img" style={{width:"100%"}}/>
                </p>
                <p>
                  Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!
                </p>

                <h3 className="mt-5">#2. Creative WordPress Themes</h3>
                <p>
                  Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.
                </p>
                <p>
                  <img src="/imgs/img1.jpg" alt="" className="img-fluid blog-img" style={{width:"100%"}}/>
                </p>
                <p>
                  Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.
                </p>

                <div className="post-tags mb-3 mt-5">
                  <span>Tags: </span>
                  <Link to="#">Life</Link>
                  <Link to="#">Sport</Link>
                  <Link to="#">Tech</Link>
                  <Link to="#">Travel</Link>
                </div>

                <div className="about-author d-flex bg-light">
                  <div className="bio align-self-md-center">
                    <img src="/imgs/person_1.jpg" alt="Author" className="img-fluid p-4" />
                  </div>
                  <div className="desc align-self-md-center">
                    <h3>Lance Smith</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!
                    </p>
                  </div>
                </div>

                {/* 댓글 섹션 */}
                


                
              </div>
            </div>



          </div>
        </div>
      </section>
    </div>
  );
};

export default TourDiaryDetail;
