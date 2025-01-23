// 2025.01.22. 11:32 생성자: 이학수, 공통 함수 집합

// 등장 애니메이션 적용 함수
export const appear_animate = () => {
    const elements = document.querySelectorAll<HTMLElement>(".ftco-animate");
    if (!elements) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const element = entry.target as HTMLElement;

                if (entry.isIntersecting && !element.classList.contains("ftco-animated")) {
                    element.classList.add("item-animate");

                    setTimeout(() => {
                        document.querySelectorAll(".ftco-animate.item-animate").forEach((item, index) => {
                            const el = item as HTMLElement;
                            setTimeout(() => {
                                const effect = el.dataset.animateEffect || "fadeInUp"; // Default effect
                                if (effect === "fadeIn") {
                                    el.classList.add("fadeIn", "ftco-animated");
                                } else if (effect === "fadeInLeft") {
                                    el.classList.add("fadeInLeft", "ftco-animated");
                                } else if (effect === "fadeInRight") {
                                    el.classList.add("fadeInRight", "ftco-animated");
                                } else {
                                    el.classList.add("fadeInUp", "ftco-animated");
                                }
                                el.classList.remove("item-animate");
                            }, index * 50);
                        });
                    }, 100);
                }
            });
        },
        { threshold: 0.1 } // Equivalent to offset: '95%'
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
        elements.forEach((el) => observer.unobserve(el));
    };
}