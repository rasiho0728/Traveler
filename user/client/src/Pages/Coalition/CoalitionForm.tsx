import React, { useEffect } from 'react'
import { appear_animate, handleScroll, updateHeight } from '../../Comm/CommomFunc';
import { useLocation } from 'react-router-dom';

const CoalitionForm: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // 현재 경로에 따라 사이드 네이게이션 버튼의 색깔이 동적 변화
        const entitys = document.querySelectorAll<HTMLLinkElement>('div.list-group .list-group-item-action');
        entitys.forEach((entity, i) => {
            const e = entity.children[0] as HTMLElement
            if (entity.getAttribute('href') === pathname) {
                e.style.color = 'orange'
            } else {
                e.style.color = 'black'
            }
        })
    }, [pathname])

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

        </div>
    )
}

export default CoalitionForm