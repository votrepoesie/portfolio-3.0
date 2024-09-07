// ------------------------------ TABLE OF CONTENTS ------------------------------
// 1. Special Header
//    -- 1.1 Special Header / HTML
//    -- 1.2 Special Header / Hover Effects / Logo
//    -- 1.3 Special Header / Hover Effects / Menu Items

// 2. Special Footer
//    -- 2.1 Special Footer / HTML
//    -- 2.2 Special Footer / Hover Effects / Icons

// 3. Homepage 
//    -- 3.1 Arrow Animaton
// -------------------------------------------------------------------------------

// special header / HTML
class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <div class="logo">
                    <a href="index.html">
                        <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle id="flower" cx="24.5" cy="24.5" r="24" stroke="#D6BDFF" stroke-width="1.5"/>
                            <circle id="circle" cx="24.5014" cy="24.5" r="12.2826" stroke="#D6BDFF"/>
                            <path id="jun" d="M18.3394 34.0388H33.209V35.9612H18.3394V34.0388ZM17.4631 27.1977H34.4246V37.2898H32.1913V29.0917H19.5833V37.3181H17.4631V27.1977ZM14.5231 12.5825H33.7462V24.286H14.1838V22.4485H31.5694V14.42H14.5231V12.5825ZM11.4983 17.4448H36.7992V19.3388H11.4983V17.4448ZM22.0144 13.2892L24.2194 13.6567C22.6646 21.6852 19.6681 28.9787 12.3181 32.9929C12.0071 32.5123 11.3852 31.7208 10.9894 31.2967C17.9437 27.6217 20.7706 20.6958 22.0144 13.2892Z" fill="#D6BDFF"/>
                        </svg>
                        <h6 id="home">home</h6>
                    </a>
                </div>

                <div class="nav-items">
                    <a href="#">
                        <div class="nav-item">
                            <div class="icon"></div>
                            <h6>work</h6>
                        </div>
                    </a>

                    <a href="#">
                        <div class="nav-item">
                            <div class="icon"></div>
                            <h6>about</h6>
                        </div>
                    </a>

                    <a href="#">
                        <div class="nav-btn">
                            <h6>resume</h6>
                        </div>
                    </a>
                </div>
            </nav>
        `;
    }
}
customElements.define('special-header', SpecialHeader);


// special header / hover effeccts / logo
let logo = document.querySelector('.logo');
let flower = document.getElementById('flower');
let circle = document.getElementById('circle');
let jun = document.getElementById('jun');
let home = document.getElementById('home');

logo.addEventListener('mouseenter', logoChange);
logo.addEventListener('mouseleave', logoChangeBack);

function logoChange() {

    anime({
        targets: flower,
        r: 11.5,
        easing: 'easeInOutQuad',
        duration: 400
    });

    anime({
        targets: circle,
        fill: '#D6BDFF',
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 400
    })

    anime({
        targets: jun,
        fill: '#000000',
        opacity: 0,
        easing: 'easeInOutQuad',
        duration: 400
    })

    anime({
        targets: home,
        opacity: 1,
        duration: 300,
        easing: 'linear',
    });
};

function logoChangeBack() {
    anime({
        targets: flower,
        r: 22.5,
        easing: 'easeInOutQuad',
        duration: 400
    });

    anime({
        targets: circle,
        opacity: 0,
        fill: '#000000',
        easing: 'easeInOutQuad',
        duration: 400
    })

    anime({
        targets: jun,
        fill: '#D6BDFF',
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 450
    })

    anime({
        targets: home,
        opacity: 0,
        duration: 300,
        easing: 'linear',
    });
}

// special header / hover effeccts / menu items 
let navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    let icon = item.querySelector('.icon');
    let text = item.querySelector('h6');

    item.addEventListener('mouseenter', () => {
        anime({
            targets: icon,
            backgroundColor: '#ffffff',
            borderColor: '#ffffff',
            easing: 'linear',
            duration: 200
        });

        anime({
            targets: text,
            color: '#ffffff',
            easing: 'linear',
            duration: 200
        });
    });

    item.addEventListener('mouseleave', () => {
        anime({
            targets: icon,
            backgroundColor: '#000000',
            borderColor: '#BCBCBC',
            easing: 'linear',
            duration: 200
        });

        anime({
            targets: text,
            color: '#BCBCBC',
            easing: 'linear',
            duration: 200
        });
    });
});

let navBtn = document.querySelector('.nav-btn');
let navBtnText = navBtn.querySelector('h6');
navBtn.addEventListener('mouseenter', () => {
    anime({
        targets: navBtn,
        borderColor: '#ffffff',
        easing: 'linear',
        duration: 200
    });

    anime({
        targets: navBtnText,
        color: '#ffffff',
        easing: 'linear',
        duration: 200
    });
});

navBtn.addEventListener('mouseleave', () => {
    anime({
        targets: navBtn,
        borderColor: '#BCBCBC',
        easing: 'linear',
        duration: 200
    });

    anime({
        targets: navBtnText,
        color: '#BCBCBC',
        easing: 'linear',
        duration: 200
    });
});


// special footer / HTML
class SpecialFooter extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <div class="footer">
                <div class="content">
                    <h3>DON&apos;T YOU WANT TO MAKE A NEW FRIEND?</h3>
                    <div class="icons">
                        <a href="mailto: vivian.ruijun.li@gmail.com" target="_blank" id="mail">
                            <svg xmlns="http://www.w3.org/2000/svg" width="58" height="44" viewBox="0 0 58 44" fill="none">
                                <path id="mail-svg" d="M39.838 22.0072L54.7035 7.54121V36.308L39.838 22.0072ZM20.6827 24.457L25.9029 29.5325C26.7222 30.3121 27.7904 30.7831 28.9577 30.7831H28.9988H29.0302C30.1999 30.7831 31.2681 30.3094 32.0971 29.5244L32.0898 29.5298L37.3101 24.4543L53.1785 39.7188H4.82145L20.6827 24.457ZM4.7997 4.1115H53.2076L29.9558 26.7308C29.6955 26.9647 29.3712 27.091 29.0375 27.0881H29.0036H28.9722C28.6374 27.0908 28.312 26.9636 28.0514 26.7281L28.0538 26.7308L4.7997 4.1115ZM3.29889 7.53851L18.162 22.0045L3.29889 36.2972V7.53851ZM55.5011 0.930826C54.921 0.605991 54.2395 0.416504 53.5169 0.416504H4.49277C3.7926 0.419608 3.10234 0.602015 2.47477 0.949774L2.50135 0.936239C1.75183 1.35171 1.12065 1.99313 0.67876 2.78839C0.236874 3.58365 0.00181103 4.50121 0 5.43791L0 38.387C0.00127945 39.7205 0.47478 40.9989 1.31661 41.9418C2.15843 42.8847 3.29983 43.4151 4.49035 43.4165H53.5096C54.7002 43.4151 55.8416 42.8847 56.6834 41.9418C57.5252 40.9989 57.9987 39.7205 58 38.387V5.43791C58 3.46995 56.9874 1.76457 55.5131 0.944361L55.4866 0.930826H55.5011Z" fill="#9784B4"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/vivian-r-li/" target="_blank" id="linkedin">
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                <path id="linkedin-svg" d="M40.6667 0.0415039C42.0149 0.0415039 43.3078 0.577068 44.2611 1.53038C45.2144 2.48369 45.75 3.77665 45.75 5.12484V40.7082C45.75 42.0564 45.2144 43.3493 44.2611 44.3026C43.3078 45.2559 42.0149 45.7915 40.6667 45.7915H5.08333C3.73515 45.7915 2.44218 45.2559 1.48887 44.3026C0.535564 43.3493 0 42.0564 0 40.7082V5.12484C0 3.77665 0.535564 2.48369 1.48887 1.53038C2.44218 0.577068 3.73515 0.0415039 5.08333 0.0415039H40.6667ZM39.3958 39.4373V25.9665C39.3958 23.769 38.5229 21.6614 36.969 20.1075C35.4151 18.5536 33.3075 17.6807 31.11 17.6807C28.9496 17.6807 26.4333 19.0023 25.2133 20.9848V18.1636H18.1221V39.4373H25.2133V26.9069C25.2133 24.9498 26.7892 23.3486 28.7463 23.3486C29.69 23.3486 30.5951 23.7235 31.2624 24.3908C31.9297 25.0581 32.3046 25.9632 32.3046 26.9069V39.4373H39.3958ZM9.86167 14.1732C10.9941 14.1732 12.0802 13.7233 12.881 12.9225C13.6818 12.1217 14.1317 11.0356 14.1317 9.90317C14.1317 7.53942 12.2254 5.60775 9.86167 5.60775C8.72245 5.60775 7.6299 6.06031 6.82435 6.86585C6.0188 7.6714 5.56625 8.76396 5.56625 9.90317C5.56625 12.2669 7.49792 14.1732 9.86167 14.1732ZM13.3946 39.4373V18.1636H6.35417V39.4373H13.3946Z" fill="#9784B4"/>
                            </svg>
                        </a>
                        <a href="https://github.com/votrepoesie" target="_blank" id="github">
                            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="48" viewBox="0 0 61 48" fill="none">
                                <path id="github-svg" d="M55.9938 22.9187C53.5563 22.5063 51.0173 22.2362 48.9535 22.163L48.5879 22.1508C48.6732 21.968 48.7362 21.8462 48.7565 21.8258C48.8012 21.7893 48.8377 21.6349 48.8418 21.4846C48.8418 21.4033 48.8784 21.1312 48.9352 20.7737C49.4959 20.794 50.2352 20.8102 51.0477 20.8143C54.1677 20.8407 57.434 21.0926 59.6745 21.4887C61.009 21.7243 61.4498 21.7162 60.4666 21.4765C59.4673 21.2327 56.5098 20.8793 54.1535 20.7249C52.4256 20.6215 50.6946 20.5795 48.9637 20.599L49.0937 19.8474C49.2806 18.8237 49.3435 17.7958 49.3476 15.7504C49.3516 12.5816 49.181 11.7082 48.1491 9.60787C47.7596 8.79854 47.2644 8.04447 46.6765 7.36537C47.1782 5.88256 47.164 3.59131 46.646 1.58037C46.2195 -0.0690017 46.0671 -0.174626 44.5741 0.142249C43.3046 0.412405 42.289 0.780061 40.987 1.43616C40.3695 1.74694 39.5204 2.22834 38.9049 2.61022C37.3002 2.04756 35.6407 1.67584 33.8674 1.47272C32.0738 1.26959 27.6721 1.38334 26.1081 1.67178C24.586 1.95615 23.2047 2.30147 21.9643 2.70772C21.3407 2.32584 20.4409 1.80787 19.7949 1.48287C18.4868 0.824749 17.4712 0.459124 16.1996 0.188968C14.7087 -0.129939 14.5543 -0.0222824 14.1277 1.62709C13.5996 3.66444 13.5956 5.99428 14.1176 7.47303C14.1785 7.64162 14.2151 7.76147 14.2293 7.85491C12.1127 10.5199 11.4221 13.5018 11.8812 17.6658C12.0031 18.7485 12.1859 19.7438 12.4459 20.6558C11.0951 20.6477 9.17556 20.6965 7.78618 20.7858C5.42587 20.9422 2.46837 21.2937 1.469 21.5374C0.487901 21.7751 0.92462 21.7812 2.26118 21.5496C4.50165 21.1555 7.76993 20.8996 10.8899 20.8793C11.479 20.8752 12.0274 20.863 12.5027 20.8508C12.6449 21.3316 12.8074 21.7906 12.9902 22.228H12.9801C10.9184 22.3012 8.38134 22.5733 5.94181 22.9796C4.11368 23.2883 1.41212 23.9018 1.09525 24.0765C0.76212 24.2633 1.03431 24.2227 2.45009 23.8632C5.03587 23.2091 8.39759 22.7054 12.5616 22.3601L13.0288 22.3194C13.9226 24.3913 15.2977 25.9757 17.2437 27.2147C18.434 27.9704 20.3413 28.7483 21.3021 28.8702C21.5662 28.9027 22.334 29.0612 23.0084 29.2196C23.6848 29.378 25.0071 29.6157 25.9456 29.7518H25.9659L25.9171 29.7843C24.7796 30.3733 24.0402 31.2955 23.5406 32.7438C23.3171 32.8108 23.0409 32.9022 22.7402 33.0079C21.6637 33.3735 21.2473 33.4466 20.1606 33.4548C19.0292 33.4629 18.759 33.4141 18.0887 33.0973C17.0494 32.586 16.1792 31.7863 15.5821 30.7938C14.5665 29.116 12.8054 27.9297 11.3368 27.9297C10.0856 27.9297 9.8479 28.4376 10.7538 29.179C12.1188 30.2962 13.1385 31.4337 13.557 32.303L14.3634 33.9768C14.5868 34.4379 15.0581 35.0635 15.509 35.4962C16.5693 36.5077 17.5931 36.9912 19.1206 37.2187C20.1443 37.369 20.3962 37.369 21.6048 37.2146C22.1877 37.1435 22.6813 37.0602 23.1201 36.9566V38.6913C23.1201 42.2785 23.0795 43.4323 22.9373 43.7694C22.6671 44.4113 22.0638 45.0694 21.4809 45.368C20.8979 45.6666 20.7171 45.9937 20.9629 46.2943C21.101 46.4568 21.3631 46.4852 22.2426 46.4283C23.9123 46.3268 25.0924 45.7073 25.6957 44.6205C25.8867 44.2691 25.9313 43.5643 25.9923 39.908C26.0573 35.943 26.0857 35.5612 26.3437 34.9924C26.4981 34.6573 26.7235 34.2916 26.8515 34.1921C27.0607 34.0174 27.0749 34.3627 27.0749 39.1077C27.0749 44.3443 27.0201 44.978 26.496 45.9835C26.3782 46.213 26.1548 46.5116 25.9984 46.6538C25.7241 46.9037 25.6084 47.5435 25.7993 47.7365C26.1141 48.0493 27.6924 47.5577 28.5537 46.8793C30.0202 45.7174 30.1949 44.7566 30.2071 37.8199L30.2132 33.7472L30.6601 33.7879L31.1029 33.8285L31.176 39.1504C31.2573 45.1466 31.2695 45.234 32.2891 46.3918C32.8681 47.0458 33.451 47.4074 34.4016 47.6918C35.6691 48.0716 36.051 47.4826 35.1979 46.4608C34.2696 45.3477 34.2229 44.9232 34.2757 38.346C34.3102 34.1291 34.3102 34.1291 34.5804 34.3749C35.1552 34.8949 35.2649 35.748 35.2649 39.7029C35.2649 44.6144 35.4071 45.0816 37.1398 45.9388C37.9523 46.3349 38.1757 46.3857 39.2157 46.3857C40.3207 46.3918 40.3877 46.3755 40.4284 46.0871C40.4629 45.8535 40.3268 45.6951 39.8109 45.3802C39.1739 45.0043 38.6709 44.4381 38.3727 43.7613C38.261 43.5054 38.1859 41.8154 38.1351 38.3379C38.062 33.4751 38.0457 33.2537 37.7431 32.4919C37.3368 31.4682 36.7112 30.6597 35.921 30.1235C35.7179 29.9894 35.5107 29.8797 35.2446 29.7944C35.5696 29.7633 35.8865 29.7261 36.1952 29.6827C39.3884 29.2562 41.0763 28.9027 42.4312 28.3787C45.2952 27.2757 47.2351 25.4435 48.2852 22.8455C48.3787 22.614 48.4721 22.3946 48.5493 22.2158L49.3618 22.2849C53.5259 22.6363 56.8876 23.138 59.4734 23.7941C60.8912 24.1557 61.1593 24.2004 60.8302 24.0094C60.5215 23.8368 57.8199 23.2254 55.9918 22.9187H55.9938ZM43.7779 22.8537C43.3046 23.8937 41.9843 25.2302 40.9179 25.7543C39.8657 26.2743 38.2163 26.6683 36.3476 26.8593C35.0679 26.9893 27.9443 27.0279 26.7682 26.9121C22.8743 26.5302 20.6948 25.7807 19.084 24.2796C17.5606 22.8537 16.8496 20.9179 16.9715 18.5352C17.0527 17.0443 17.4123 16.1079 18.3527 14.9704C19.2059 13.9344 20.1077 13.2946 21.1681 12.9696C22.0577 12.6974 24.7837 12.673 28.444 12.9087C30.0629 13.0102 31.4015 13.0102 33.0184 12.9087C36.8493 12.6649 39.4066 12.6933 40.3512 12.9858C41.834 13.4449 43.1888 14.6799 44.0013 16.3252C44.367 17.0605 44.4401 17.3733 44.4929 18.5088C44.566 20.0729 44.2959 21.7324 43.782 22.8516L43.7779 22.8537ZM24.4607 16.1383C22.2812 15.7565 21.036 19.4899 22.7077 21.3932C23.4999 22.2951 24.2048 22.4433 25.0843 21.8949C25.9029 21.3871 26.3437 20.4324 26.3437 19.1974C26.3437 17.548 25.5962 16.3374 24.4587 16.1343L24.4607 16.1383ZM37.6902 16.3618C35.5107 15.9799 34.2635 19.7072 35.9352 21.6146C36.7335 22.5185 37.4384 22.6708 38.3199 22.1163C39.1324 21.6085 39.5793 20.6538 39.5793 19.4188C39.5793 17.7776 38.8277 16.5629 37.6902 16.3618ZM31.8281 23.6987C31.7793 23.849 31.5518 24.0724 31.3202 24.1922C30.7413 24.4908 30.3249 24.3872 29.7095 23.8266C29.3296 23.4854 29.157 23.3046 29.0391 23.6641C28.9335 23.9972 29.6079 24.6655 30.132 24.8707C30.6113 25.0637 30.9546 25.0697 31.4726 24.8504C31.9906 24.6371 32.4415 24.0582 32.4415 23.6824C32.4415 23.333 31.9398 23.3493 31.826 23.7027L31.8281 23.6987ZM31.1821 22.5307C31.5132 22.2362 31.5884 21.6369 31.2715 21.316C30.9546 20.9951 30.3107 21.0458 30.0588 21.4033C29.7643 21.8218 29.9207 22.1407 30.1299 22.4799C30.4549 22.7318 30.8916 22.7846 31.1801 22.5287L31.1821 22.5307Z" fill="#9784B4"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="graphic">
                    <svg width="624" height="342" viewBox="0 0 624 342" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1290_2844)">
                        <circle cx="237.5" cy="228.5" r="122.5" fill="#B4A1BD"/>
                        <rect x="115" y="225" width="245" height="137" fill="#B4A1BD"/>
                        <path d="M120.164 79.7251C119.538 72.5935 127.18 67.7502 132.537 71.8831L208.191 130.248C212.632 133.674 212.142 140.985 207.265 144.076L140.444 186.426C135.566 189.517 129.514 186.353 128.996 180.44L120.164 79.7251Z" fill="#B4A1BD"/>
                        <path d="M355.66 79.6734C356.286 72.5417 348.644 67.6984 343.287 71.8313L267.633 130.197C263.193 133.623 263.682 140.933 268.559 144.024L335.381 186.374C340.258 189.465 346.31 186.301 346.829 180.389L355.66 79.6734Z" fill="#B4A1BD"/>
                        <ellipse cx="192.227" cy="228.909" rx="37.2273" ry="31.9091" fill="white"/>
                        <ellipse cx="302.135" cy="230.091" rx="37.2273" ry="31.9091" fill="white"/>
                        <circle cx="181.5" cy="228.5" r="19.5" fill="#3F3351"/>
                        <circle cx="290.5" cy="228.5" r="19.5" fill="#3F3351"/>
                        <rect x="175" y="216" width="7" height="18" rx="3.5" fill="white"/>
                        <rect x="281" y="215" width="7" height="18" rx="3.5" fill="white"/>
                        <path d="M251.885 278.543C248.684 282.783 242.316 282.783 239.115 278.543L233.096 270.57C229.116 265.3 232.876 257.75 239.48 257.75L251.52 257.75C258.124 257.75 261.884 265.3 257.904 270.57L251.885 278.543Z" fill="#A46B6B"/>
                        <rect x="200" y="111" width="18" height="51" rx="8" fill="#7B6686"/>
                        <rect x="229" y="108" width="18" height="62" rx="8" fill="#7B6686"/>
                        <rect x="258" y="111" width="18" height="51" rx="8" fill="#7B6686"/>
                        <rect x="426.467" y="246.896" width="77" height="108" transform="rotate(24.3139 426.467 246.896)" fill="#B4A1BD"/>
                        <circle cx="460.111" cy="265.937" r="38.5" transform="rotate(24.3139 460.111 265.937)" fill="#B4A1BD"/>
                        <ellipse cx="456.357" cy="274.402" rx="20.0909" ry="15.4186" transform="rotate(21.6105 456.357 274.402)" fill="#7B6686"/>
                        <ellipse cx="442.658" cy="248.752" rx="7.47568" ry="7.94291" transform="rotate(-10.4458 442.658 248.752)" fill="#7B6686"/>
                        <ellipse cx="462.262" cy="246.816" rx="8.87737" ry="9.58143" transform="rotate(8.71484 462.262 246.816)" fill="#7B6686"/>
                        <ellipse cx="480.144" cy="255.331" rx="8.41014" ry="9.25809" transform="rotate(53.8513 480.144 255.331)" fill="#7B6686"/>
                        <ellipse cx="485.729" cy="272.758" rx="7.00845" ry="6.07399" transform="rotate(-10.4029 485.729 272.758)" fill="#7B6686"/>
                        <path d="M430.486 189.843C427.728 191.213 424.521 189.084 424.714 186.01L425.851 167.859C426.043 164.786 429.49 163.074 432.056 164.777L447.206 174.837C449.772 176.54 449.531 180.382 446.773 181.752L430.486 189.843Z" fill="#7B6686"/>
                        <ellipse cx="504" cy="123.5" rx="102" ry="71.5" fill="#7B6686"/>
                        <path d="M436.16 123.72L434.48 138H427.36L431.88 108.6L443.8 125.68L455.76 108.6L460.28 138H453.16L451.48 123.72L443.8 135.4L436.16 123.72ZM469.065 138V132.44H483.185V138H469.065ZM469.065 115.56V110H483.185V115.56H469.065ZM469.065 126V120.56H482.385V126H469.065ZM464.585 110H471.065V138H464.585V110ZM494.247 124C494.247 125.653 494.567 127.12 495.207 128.4C495.873 129.653 496.793 130.64 497.967 131.36C499.167 132.08 500.567 132.44 502.167 132.44C503.74 132.44 505.113 132.08 506.287 131.36C507.487 130.64 508.407 129.653 509.047 128.4C509.713 127.12 510.047 125.653 510.047 124C510.047 122.347 509.727 120.893 509.087 119.64C508.447 118.36 507.54 117.36 506.367 116.64C505.193 115.92 503.793 115.56 502.167 115.56C500.567 115.56 499.167 115.92 497.967 116.64C496.793 117.36 495.873 118.36 495.207 119.64C494.567 120.893 494.247 122.347 494.247 124ZM487.087 124C487.087 121.84 487.46 119.867 488.207 118.08C488.98 116.293 490.047 114.747 491.407 113.44C492.767 112.133 494.367 111.133 496.207 110.44C498.047 109.72 500.033 109.36 502.167 109.36C504.327 109.36 506.313 109.72 508.127 110.44C509.967 111.133 511.567 112.133 512.927 113.44C514.287 114.747 515.34 116.293 516.087 118.08C516.833 119.867 517.207 121.84 517.207 124C517.207 126.16 516.833 128.147 516.087 129.96C515.367 131.773 514.327 133.347 512.967 134.68C511.633 136.013 510.047 137.053 508.207 137.8C506.367 138.52 504.353 138.88 502.167 138.88C499.953 138.88 497.927 138.52 496.087 137.8C494.247 137.053 492.647 136.013 491.287 134.68C489.953 133.347 488.913 131.773 488.167 129.96C487.447 128.147 487.087 126.16 487.087 124ZM546.327 125.96L551.767 110H559.807L547.687 139.64L538.647 122.76L529.647 139.64L517.527 110H525.527L531.047 125.96L538.647 108.6L546.327 125.96ZM566.224 131.44L561.464 131.24C561.384 130.947 561.344 130.627 561.344 130.28C561.344 129.613 561.424 128.973 561.584 128.36C561.771 127.72 562.104 127.107 562.584 126.52C563.144 125.827 563.811 125.267 564.584 124.84C565.358 124.387 566.411 124.16 567.744 124.16C568.358 124.16 568.918 124.24 569.424 124.4C569.931 124.533 570.451 124.747 570.984 125.04C571.518 125.333 572.104 125.693 572.744 126.12C573.358 126.547 573.891 126.88 574.344 127.12C574.824 127.36 575.238 127.48 575.584 127.48C576.038 127.48 576.371 127.333 576.584 127.04C576.798 126.72 576.904 126.347 576.904 125.92C576.904 125.68 576.878 125.453 576.824 125.24C576.771 125 576.704 124.787 576.624 124.6L581.464 124.8C581.518 124.96 581.558 125.133 581.584 125.32C581.611 125.507 581.624 125.707 581.624 125.92C581.624 126.56 581.544 127.213 581.384 127.88C581.251 128.547 580.944 129.173 580.464 129.76C579.958 130.427 579.358 130.947 578.664 131.32C577.998 131.693 577.104 131.88 575.984 131.88C575.184 131.88 574.398 131.707 573.624 131.36C572.878 131.013 572.011 130.52 571.024 129.88C570.598 129.587 570.198 129.347 569.824 129.16C569.451 128.947 569.091 128.787 568.744 128.68C568.398 128.573 568.051 128.52 567.704 128.52C567.064 128.52 566.611 128.72 566.344 129.12C566.104 129.493 565.984 129.893 565.984 130.32C565.984 130.587 566.011 130.8 566.064 130.96C566.118 131.12 566.171 131.28 566.224 131.44Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1290_2844">
                        <rect width="624" height="362" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        `;
    }
}

customElements.define('special-footer', SpecialFooter);

// special footer / hover effects / icons
let icons = document.querySelectorAll('.icons a');

icons.forEach(icon => {

    let target = icon.querySelector('svg path');

    icon.addEventListener('mouseenter', () => {
        changeColortoWhite(target);
        console.log(target);
    });

    icon.addEventListener('mouseleave', () => {
        changeColorBack(target);
    });
});

function changeColortoWhite(svg) {
    // svg.setAttribute('fill', 'white');
    anime({
        targets: svg,
        fill: '#ffffff',
        duration: 200,
        easing: 'linear'
    });
}

function changeColorBack(svg) {
    anime({
        targets: svg,
        fill: '#9784B4',
        duration: 200,
        easing: 'linear'
    });
}

// homepage / arrow animation
let arrow = document.querySelector('#arrow');
anime({
    targets: arrow,
    translateY: 8,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
    duration: 600
});

// homepage / arm animation
let arm = document.querySelector('#arm');
function wave() {
    anime({
        targets: arm,
        translateX: 54,
        rotate: 10,
        translateY: -114,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        duration: 800
    });
}

wave();

// homepage / laptop animation
let laptopTop = document.querySelector('#laptop-top');
let laptopBottom = document.querySelector('#laptop-bottom');

function lift() {
    anime({
        targets: [laptopTop, laptopBottom],
        translateY: -10,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        duration: 800,
        delay: 1000
    });
}

lift();

// homepage / case studies / populate 

const caseStudies = [
    {
      title: "FUTURE FRAME",
      description: "How might we encourage high school students to make well-informed decisions regarding classes and career paths?",
      tags: ["ed-tech", "creativity"],
      redirectUrl: "future-frame.html",
    },

    {
      title: "BUMBLE: CHANCE ENCOUNTERS",
      description: "How might we encourage more organic interactions between Bumble users through a new geolocation feature?",
      tags: ["mobile", "interaction-design"],
      redirectUrl: "chance-encounters.html",
    },

    {
      title: "VR GAME FOR SELF-COMPASSION",
      description: "How might we empower young adults to manage stress and overcome feelings of inadequacy?",
      tags: ["rapid-prototyping", "mental-health"],
      redirectUrl: "vr-game.html",
    },
];

const caseStudiesContainer = document.querySelector('.case-studies');

caseStudies.forEach(caseStudy => {
  // Create the case study container
  const caseStudyDiv = document.createElement('div');
  caseStudyDiv.classList.add('case-study');
  
  // Create the graphic div
  const graphicDiv = document.createElement('div');
  graphicDiv.classList.add('graphic');
  
  // Create the content div
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content');
  
  // Create the title
  const title = document.createElement('h4');
  title.textContent = caseStudy.title;
  
  // Create the description
  const description = document.createElement('p');
  description.textContent = caseStudy.description;
  
  // Create the tags container
  const tagsDiv = document.createElement('div');
  tagsDiv.classList.add('tags');
  
  // Create and append each tag
  caseStudy.tags.forEach(tag => {
    const tagDiv = document.createElement('div');
    tagDiv.classList.add('tag');
    tagDiv.textContent = tag;
    tagsDiv.appendChild(tagDiv);
  });
  
  // Append title, description, and tags to contentDiv
  contentDiv.appendChild(title);
  contentDiv.appendChild(description);
  contentDiv.appendChild(tagsDiv);
  
  // Append graphic and contentDiv to caseStudyDiv
  caseStudyDiv.appendChild(graphicDiv);
  caseStudyDiv.appendChild(contentDiv);
  
  // Add click event to redirect to the corresponding page
  caseStudyDiv.addEventListener('click', () => {
    window.location.href = caseStudy.redirectUrl;
  });
  
  // Append the caseStudyDiv to the case studies container
  caseStudiesContainer.appendChild(caseStudyDiv);
});

  

