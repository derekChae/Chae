/* ================================
   정보보안 전문가 포트폴리오 JavaScript
   ================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // ================================
    // 부드러운 스크롤 네비게이션
    // ================================
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // 유효한 href인지 확인
            if (!targetId || targetId === '#' || targetId.length <= 1) {
                console.warn('잘못된 링크:', targetId);
                return;
            }
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // 네비게이션 바 높이 고려
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // 모바일에서 네비게이션 메뉴 닫기
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse);
                    bootstrapCollapse.hide();
                }
            } else {
                console.warn('타겟 섹션을 찾을 수 없습니다:', targetId);
            }
        });
    });
    
    // ================================
    // 스크롤 시 네비게이션 바 변화
    // ================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.98)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
        
        // 현재 섹션 하이라이트
        highlightCurrentSection();
    });
    
    // ================================
    // 현재 섹션 하이라이트 기능
    // ================================
    function highlightCurrentSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // ================================
    // 프로젝트 필터링 기능
    // ================================
    const filterButtons = document.querySelectorAll('[data-filter]');
    const projectRows = document.querySelectorAll('.project-row');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 버튼 활성화 상태 변경
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // 프로젝트 행 필터링
            projectRows.forEach(row => {
                if (filterValue === 'all') {
                    row.style.display = '';
                    row.classList.remove('hide');
                } else {
                    const category = row.getAttribute('data-category');
                    if (category === filterValue) {
                        row.style.display = '';
                        row.classList.remove('hide');
                    } else {
                        row.style.display = 'none';
                        row.classList.add('hide');
                    }
                }
            });
        });
    });
    
    // ================================
    // 페이드인 애니메이션
    // ================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);
    
    // 애니메이션 대상 요소들
    const animateElements = document.querySelectorAll(`
        .card,
        .timeline-item,
        .projects-table,
        .contact-item
    `);
    
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // ================================
    // 타이핑 효과 (히어로 섹션)
    // ================================
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // 페이지 로드 시 타이핑 효과 실행
    const heroTitle = document.querySelector('.hero-section h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 500);
    }
    
    // ================================
    // 프로젝트 테이블 행 클릭 이벤트
    // ================================
    const tableRows = document.querySelectorAll('.projects-table tbody tr');
    
    tableRows.forEach(row => {
        // 버튼 클릭은 모달에서 처리하므로 행 클릭 이벤트는 제거
        row.addEventListener('mouseenter', function() {
            this.style.cursor = 'default';
        });
    });
    
    // ================================
    // 스크롤 상단 버튼
    // ================================
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    scrollTopBtn.className = 'btn btn-primary position-fixed';
    scrollTopBtn.style.cssText = `
        bottom: 2rem;
        right: 2rem;
        z-index: 1000;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    // 스크롤 상단 버튼 표시/숨김
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });
    
    // 스크롤 상단 버튼 클릭 이벤트
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ================================
    // 카운터 애니메이션 (통계용)
    // ================================
    function animateCounter(element, finalValue, duration = 2000) {
        const startValue = 0;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentValue = Math.floor(startValue + (finalValue - startValue) * progress);
            element.textContent = currentValue + '+';
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        
        requestAnimationFrame(updateCounter);
    }
    
    // 통계 카운터 요소가 있다면 애니메이션 실행
    const counters = document.querySelectorAll('[data-counter]');
    counters.forEach(counter => {
        const finalValue = parseInt(counter.getAttribute('data-counter'));
        
        const counterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target, finalValue);
                    counterObserver.unobserve(entry.target);
                }
            });
        });
        
        counterObserver.observe(counter);
    });
    
    // ================================
    // 다크 모드 토글 (선택사항)
    // ================================
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    }
    
    // 다크 모드 상태 복원
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
    
    // ================================
    // 폼 유효성 검사 (연락처 폼이 있을 경우)
    // ================================
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 간단한 유효성 검사
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('is-invalid');
                    isValid = false;
                } else {
                    input.classList.remove('is-invalid');
                    input.classList.add('is-valid');
                }
            });
            
            if (isValid) {
                // 성공 메시지 표시
                alert('메시지가 성공적으로 전송되었습니다!');
                this.reset();
                inputs.forEach(input => {
                    input.classList.remove('is-valid');
                });
            }
        });
    }
    
    // ================================
    // 초기화 완료 로그
    // ================================
    console.log('🔒 정보보안 전문가 포트폴리오 JavaScript 초기화 완료');
    
});

// ================================
// 페이지 로딩 상태 관리
// ================================
window.addEventListener('load', function() {
    // 로딩 스피너가 있다면 숨김
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
    
    // 페이지 로드 완료 후 애니메이션 시작
    document.body.classList.add('page-loaded');
});
