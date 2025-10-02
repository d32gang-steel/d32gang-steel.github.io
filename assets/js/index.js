// 返回顶部功能
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 平滑滚动导航
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 表单提交处理
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('感谢您的留言！我会尽快回复您。');
        contactForm.reset();
    });
}

// 添加卡片悬停动画
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});

// 添加标语悬停动画
const sloganContainer = document.querySelector('.slogan-container');
if (sloganContainer) {
    sloganContainer.addEventListener('mouseenter', () => {
        sloganContainer.style.transform = 'scale(1.05)';
        sloganContainer.style.background = 'rgba(255, 255, 255, 0.25)';
    });
    
    sloganContainer.addEventListener('mouseleave', () => {
        sloganContainer.style.transform = 'scale(1)';
        sloganContainer.style.background = 'rgba(255, 255, 255, 0.15)';
    });
}