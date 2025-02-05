// 2025.01.24. 09:00 생성자: 이학수, HTML템플릿을 리엑트로 조정
import React, { useEffect } from 'react'
import { appear_animate, handleScroll, updateHeight } from '../../Comm/CommomFuncAd';
import { Link } from 'react-router-dom';

const BlogDetail: React.FC = () => {
    // 차후 사용시 주석 해제
    // const num = useParams()

    useEffect(() => {
        // 요소의 [data-scrollax] 옵션을 분석 적용
        handleScroll()
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // ftco-animate 클래스를 가진 요소에 등장 효과 적용
        appear_animate()
    }, []);

    useEffect(() => {
        // js-fullheight 클래스를 가진 요소의 높이를 화면의 크기로 갱신
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, []);
    return (
        <div>
            <div className="hero-wrap js-fullheight" style={{ backgroundImage: "url('/images/bg_4.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate text-center" data-scrollax={"{\"properties\": {\"translateY\": \"70%\"}}"}>
                            <p className="breadcrumbs" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}><span className="mr-2"><Link to="/traveler/home">Home</Link></span> <span className="mr-2"><Link to="/traveler/blog">Blog</Link></span> <span>Blog Single</span></p>
                            <h1 className="mb-3 bread" data-scrollax={"{\"properties\": {\"translateY\": \"30%\", \"opacity\": 1.6}}"}>Tips &amp; Articles</h1>
                        </div>
                    </div>
                </div>
            </div>


            <section className="ftco-section ftco-degree-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 ftco-animate">
                            <h2 className="mb-3">10 Tips For The Traveler</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
                            <p>
                                <img src="/images/image_7.jpg" alt="" className="img-fluid" />
                            </p>
                            <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
                            <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
                            <p>Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.</p>
                            <p>
                                <img src="/images/image_8.jpg" alt="" className="img-fluid" />
                            </p>
                            <p>Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.</p>
                            <p>Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.</p>
                            <p>Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!</p>
                            <p>Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?</p>
                            <div className="tag-widget post-tag-container mb-5 mt-5">
                                <div className="tagcloud">
                                    <Link to="#" className="tag-cloud-link">Life</Link>
                                    <Link to="#" className="tag-cloud-link">Sport</Link>
                                    <Link to="#" className="tag-cloud-link">Tech</Link>
                                    <Link to="#" className="tag-cloud-link">Travel</Link>
                                </div>
                            </div>

                            <div className="about-author d-flex p-5 bg-light">
                                <div className="bio align-self-md-center mr-5">
                                    <img src="/images/person_1.jpg" alt="placeholder" className="img-fluid mb-4" />
                                </div>
                                <div className="desc align-self-md-center">
                                    <h3>Lance Smith</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                                </div>
                            </div>


                            <div className="pt-5 mt-5">
                                <h3 className="mb-5">6 Comments</h3>
                                <ul className="comment-list">
                                    <li className="comment">
                                        <div className="vcard bio">
                                            <img src="/images/person_1.jpg" alt="placeholder" />
                                        </div>
                                        <div className="comment-body">
                                            <h3>John Doe</h3>
                                            <div className="meta">June 27, 2018 at 2:21pm</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                            <p><Link to="#" className="reply">Reply</Link></p>
                                        </div>
                                    </li>

                                    <li className="comment">
                                        <div className="vcard bio">
                                            <img src="/images/person_1.jpg" alt="placeholder" />
                                        </div>
                                        <div className="comment-body">
                                            <h3>John Doe</h3>
                                            <div className="meta">June 27, 2018 at 2:21pm</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                            <p><Link to="#" className="reply">Reply</Link></p>
                                        </div>

                                        <ul className="children">
                                            <li className="comment">
                                                <div className="vcard bio">
                                                    <img src="/images/person_1.jpg" alt="placeholder" />
                                                </div>
                                                <div className="comment-body">
                                                    <h3>John Doe</h3>
                                                    <div className="meta">June 27, 2018 at 2:21pm</div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                    <p><Link to="#" className="reply">Reply</Link></p>
                                                </div>


                                                <ul className="children">
                                                    <li className="comment">
                                                        <div className="vcard bio">
                                                            <img src="/images/person_1.jpg" alt="placeholder" />
                                                        </div>
                                                        <div className="comment-body">
                                                            <h3>John Doe</h3>
                                                            <div className="meta">June 27, 2018 at 2:21pm</div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                            <p><Link to="#" className="reply">Reply</Link></p>
                                                        </div>

                                                        <ul className="children">
                                                            <li className="comment">
                                                                <div className="vcard bio">
                                                                    <img src="/images/person_1.jpg" alt="placeholder" />
                                                                </div>
                                                                <div className="comment-body">
                                                                    <h3>John Doe</h3>
                                                                    <div className="meta">June 27, 2018 at 2:21pm</div>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                                    <p><Link to="#" className="reply">Reply</Link></p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="comment">
                                        <div className="vcard bio">
                                            <img src="/images/person_1.jpg" alt="placeholder" />
                                        </div>
                                        <div className="comment-body">
                                            <h3>John Doe</h3>
                                            <div className="meta">June 27, 2018 at 2:21pm</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                            <p><Link to="#" className="reply">Reply</Link></p>
                                        </div>
                                    </li>
                                </ul>
                                {/* END comment-list */}

                                <div className="comment-form-wrap pt-5">
                                    <h3 className="mb-5">Leave a comment</h3>
                                    <form action="#" className="p-5 bg-light">
                                        <div className="form-group">
                                            <label htmlFor="name">Name *</label>
                                            <input type="text" className="form-control" id="name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email *</label>
                                            <input type="email" className="form-control" id="email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="website">Website</label>
                                            <input type="url" className="form-control" id="website" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea name="" id="message" cols={30} rows={10} className="form-control"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary" />
                                        </div>

                                    </form>
                                </div>
                            </div>

                        </div> {/* .col-md-8 */}
                        <div className="col-md-4 sidebar ftco-animate">
                            <div className="sidebar-box">
                                <form action="#" className="search-form">
                                    <div className="form-group">
                                        <span className="icon fa fa-search"></span>
                                        <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                                    </div>
                                </form>
                            </div>
                            <div className="sidebar-box ftco-animate">
                                <div className="categories">
                                    <h3>Categories</h3>
                                    <li><Link to="#">Tour <span>(12)</span></Link></li>
                                    <li><Link to="#">Hotel <span>(22)</span></Link></li>
                                    <li><Link to="#">Coffee <span>(37)</span></Link></li>
                                    <li><Link to="#">Drinks <span>(42)</span></Link></li>
                                    <li><Link to="#">Foods <span>(14)</span></Link></li>
                                    <li><Link to="#">Travel <span>(140)</span></Link></li>
                                </div>
                            </div>

                            <div className="sidebar-box ftco-animate">
                                <h3>Recent Blog</h3>
                                <div className="block-21 mb-4 d-flex">
                                    <Link to="" className="blog-img mr-4" style={{ backgroundImage: "url(/images/image_1.jpg)" }}></Link>
                                    <div className="text">
                                        <h3 className="heading"><Link to="#">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
                                        <div className="meta">
                                            <div><Link to=""><span className="icon-calendar"></span> July 12, 2018</Link></div>
                                            <div><Link to=""><span className="icon-person"></span> Admin</Link></div>
                                            <div><Link to=""><span className="icon-chat"></span> 19</Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-21 mb-4 d-flex">
                                    <Link to="" className="blog-img mr-4" style={{ backgroundImage: "url(/images/image_2.jpg)" }}></Link>
                                    <div className="text">
                                        <h3 className="heading"><Link to="#">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
                                        <div className="meta">
                                            <div><Link to=""><span className="icon-calendar"></span> July 12, 2018</Link></div>
                                            <div><Link to=""><span className="icon-person"></span> Admin</Link></div>
                                            <div><Link to=""><span className="icon-chat"></span> 19</Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-21 mb-4 d-flex">
                                    <Link to="" className="blog-img mr-4" style={{ backgroundImage: "url(/images/image_3.jpg)" }}></Link>
                                    <div className="text">
                                        <h3 className="heading"><Link to="#">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
                                        <div className="meta">
                                            <div><Link to=""><span className="icon-calendar"></span> July 12, 2018</Link></div>
                                            <div><Link to=""><span className="icon-person"></span> Admin</Link></div>
                                            <div><Link to=""><span className="icon-chat"></span> 19</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar-box ftco-animate">
                                <h3>Tag Cloud</h3>
                                <div className="tagcloud">
                                    <Link to="" className="tag-cloud-link">dish</Link>
                                    <Link to="" className="tag-cloud-link">menu</Link>
                                    <Link to="" className="tag-cloud-link">food</Link>
                                    <Link to="" className="tag-cloud-link">sweet</Link>
                                    <Link to="" className="tag-cloud-link">tasty</Link>
                                    <Link to="" className="tag-cloud-link">delicious</Link>
                                    <Link to="" className="tag-cloud-link">desserts</Link>
                                    <Link to="" className="tag-cloud-link">drinks</Link>
                                </div>
                            </div>

                            <div className="sidebar-box ftco-animate">
                                <h3>Paragraph</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogDetail