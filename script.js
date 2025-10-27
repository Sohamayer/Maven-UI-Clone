document.addEventListener('DOMContentLoaded', () => {
  const slidesWrapper = document.querySelector('.slides-wrapper');
  const leftArrow = document.querySelector('.nav-arrow.left');
  const rightArrow = document.querySelector('.nav-arrow.right');
  const totalSlides = document.querySelectorAll('.slide').length;
  const slider = document.getElementById("slider");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const navbar = document.querySelector(".navbar"); 

  const cardWidth = 320; // card width + margin

  let currentSlide = 0;
  let lastScrollTop = 0;

  rightArrow.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateSlidePosition();
    }
  });

  leftArrow.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlidePosition();
    }
  });

  function updateSlidePosition() {
    slidesWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  prev.addEventListener("click", () => {
    slider.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    });
  });

  next.addEventListener("click", () => {
    slider.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scrolling down
      navbar.classList.add("navbar-hide");
    } else {
      // Scrolling up
      navbar.classList.remove("navbar-hide");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Avoid negative scroll
  });
});

// Password visibility toggle with proper eye icons
document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.getElementById('password');
  const toggleBtn = document.querySelector('.togglePassword');
  const eyeIcon = document.getElementById('eyeIcon');

  // SVG icons for open and closed eye (closed with a slash)
  const openEyeSVG = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round">
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  `;
  // Closed eye (with a slash)
  const closedEyeSVG = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round">
      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.81 21.81 0 0 1 5.06-6.06"/>
      <path d="M1 1l22 22"/>
      <path d="M9.53 9.53A3 3 0 0 0 12 15a3 3 0 0 0 2.47-5.47"/>
      <path d="M14.47 14.47A3 3 0 0 1 12 9a3 3 0 0 1-2.47 5.47"/>
      <path d="M22.94 12.94A10.94 10.94 0 0 0 12 5c-2.5 0-4.78.81-6.72 2.19"/>
    </svg>
  `;

  // Toggle password visibility
  if (passwordInput && toggleBtn && eyeIcon) {
    eyeIcon.innerHTML = closedEyeSVG;
    toggleBtn.addEventListener('click', function () {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.innerHTML = openEyeSVG;
      } 
      else {
        passwordInput.type = 'password';
        eyeIcon.innerHTML = closedEyeSVG;
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  let newScrollTop = 0;
  const hearnavbar = document.querySelector('.hear-header');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > newScrollTop) {
      // Scrolling down
      hearnavbar.classList.add('hear-header-hide');
    } else {
      // Scrolling up
      hearnavbar.classList.remove('hear-header-hide');
    }
    newScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const previous = document.getElementById("left-arrow");
  const next = document.getElementById("right-arrow");

  const slides = [
      {
        logo:`sofi.png`,
        quote:`“Our employees are so very appreciative of Maven.<br />
                I’ve had people call me and say, ‘I couldn’t have come<br />
                back to work without the support through Maven and<br />
                SoFi.”`,
        author:`Debbie Westover, Director of Benefits at SoFi`
      },
      {
        logo:`buzzfeed.png`,
        quote:`“For us, being inclusive means that no matter who you <br />
                are, what your individuality is, what your preferences<br />
                are… you should be able to find something that is<br /> 
                helpful for you. And Maven offers that.”`,
        author:`Hannah Wilkowski, Senior Global Benefits Manager at Buzzfeed`,
      },
      {
        logo: `UTA.png`,
        quote: `“Prior to having Maven, women felt like they had to<br /> 
                choose between their career or becoming a mom.<br /> 
                Now they’ve been able to return to work because<br /> 
                Maven is supporting them.”`,
        author: `Lucy Avsharyan, Global Benefits Manager at United Talent Agency`,
      },
      {
        logo: `red dog.png`,
        quote: `“Having a partner like Maven supporting our<br /> 
                employees and their families throughout the entire<br /> 
                process is priceless.”`,
        author: `Director of Benefits at Zynga`,
      },
      {
        logo: `White case.png`,
        quote: `“I think one of the main reasons that Maven's fertility<br /> 
                benefits are so helpful is that the fertility landscape is<br /> 
                very confusing. Maven's fertility program helps make<br /> 
                a really confusing and scary process a lot simpler.”`,
        author: `Todd McCafferty, Benefits Manager at White & Case`,
      }
    ];

  let index = 0;

  window.onload = () => {
    quote.innerHTML = slides[index].quote;
  }

  function updateSlide(index) {
    const logo = document.getElementById("logo-employee");
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");

    logo.src = slides[index].logo;
    quote.innerHTML = slides[index].quote;
    author.textContent = slides[index].author;
  }

  next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlide(index);
  });

  previous.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide(index);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const inputEmail = document.getElementById("join-email");
  const warning = document.getElementById("input-email-alert");

  if (inputEmail && warning) {
    inputEmail.addEventListener("focusout", () => {
      if (inputEmail.value.trim() === "") {
        warning.textContent = "Please complete this required field.";
        warning.style.color = "#64726f";
        warning.style.fontSize = "17px";
      } else {
        warning.textContent = "";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let exploreScrollTop = 0;
  const exploreHeader = document.querySelector(".explore-header");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > exploreScrollTop) {
      // Scrolling down
      exploreHeader.classList.add('explore-header-hide');
    } else {
      // Scrolling up
      exploreHeader.classList.remove('explore-header-hide');
    }
    exploreScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sliderTrack = document.querySelector(".explore-slider-track");
  const totalSlides = document.querySelectorAll(".explore-image-content-slides").length;
  const left = document.querySelector(".explore-left");
  const right = document.querySelector(".explore-right");

  let currentSlide = 0;

  function updateExploreSlides() {
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  right.addEventListener("click", () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateExploreSlides();
    }
  });

  left.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateExploreSlides();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const topics = document.querySelectorAll(".explore-topics");

  topics.forEach(topic => {
    topic.addEventListener("click", () => {
      // Remove active class from all
      topics.forEach(t => t.classList.remove("active"));
      // Add active class to clicked one
      topic.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const exploreCard1 = document.getElementById("explore-topics1");
  const exploreCard2 = document.getElementById("explore-topics2");
  const exploreCard3 = document.getElementById("explore-topics3");
  const exploreCard4 = document.getElementById("explore-topics4");
  const exploreCard5 = document.getElementById("explore-topics5");
  const backgroundImage = document.getElementById("explore-five-background-image");
  const chat = document.getElementById("explore-five-chats");
  const title = document.getElementById("explore-all-five-topics");
  const description = document.getElementById("explore-five-topics-content");

  window.onload = () => {
    exploreCard1.classList.add("active");
    backgroundImage.src = "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/62eaa574b9d8d18d6577e44e_Maven-solutions_personilized-care-photo.webp";
    chat.src = "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/62ec2b0a52527cb93701922a_Maven_solutions-personilized-care-mobile-screen-p-500.webp";
    title.textContent = "24/7 Access";
    description.innerHTML = "Members can book same-day appointments with providers across 30+<br /> specialties and Care Advocates—available around the world and<br /> around the clock";
  }

  exploreCard1.addEventListener("click", () => {
    backgroundImage.src = "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/62eaa574b9d8d18d6577e44e_Maven-solutions_personilized-care-photo.webp";
    chat.src = "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/62ec2b0a52527cb93701922a_Maven_solutions-personilized-care-mobile-screen-p-500.webp";
    title.textContent = "24/7 Access";
    description.innerHTML = "Members can book same-day appointments with providers across 30+<br /> specialties and Care Advocates—available around the world and<br /> around the clock";
  });

  exploreCard2.addEventListener("click", () => {
    backgroundImage.src = "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/62eaa6103f3e8932f60e8952_Maven-solutions_on-demand-support_photo.webp";
    chat.src = "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/62ec2b6da4f21f83289c404e_Maven_solutions_fertility-mobile-screen-p-500.webp";
    title.textContent = "Personalized Care Plans";
    description.innerHTML = "Tailored guidance for members, including action plans and<br /> interventions, that drive better outcomes";
  });

  exploreCard3.addEventListener("click", () => {
    backgroundImage.src = "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/62eab258baef827be26004ae_Maven-solutions_inclusive-care_photo.webp";
    chat.src = "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/62ec307708e2d828a723669d_Maven-solutions_inclusive-care-mobile-screen-p-500.webp";
    title.textContent = "Inclusive Care";
    description.innerHTML = "Programs and providers attuned to the unique needs and preferences<br /> of each individual";
  });

  exploreCard4.addEventListener("click", () => {
    backgroundImage.src = "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/62eaa7328192a82af18485e7_Maven-solutions_emotional-support_photo.webp";
    chat.src = "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/62ec30ac32aa510f81b2ff90_Maven-solutions-mentalhealthsupport_mobile-screen-p-500.webp";
    title.textContent = "Emotional & Mental Well-being";
    description.innerHTML = "Proactive, ongoing mental health support throughout every member’s<br /> health journey";
  });

  exploreCard5.addEventListener("click", () => {
    backgroundImage.src = "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/62eab2338ca536078bcc7f07_Maven-solutions_financial-support_photo2.webp";
    chat.src = "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/62ec30ec25917902164ead2b_Maven-solutions-financial-support-p-500.webp";
    title.textContent = "Financial Support";
    description.innerHTML = "A flexible, easy-to-use solution that enables employers to extend<br /> financial support for fertility treatment, adoption, surrogacy, or doula<br /> care—integrated seamlessly into Maven’s platform";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let employerscrollTop = 0;
  const employerHeader = document.querySelector(".employer-header");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > employerscrollTop) {
      // Scrolling down
      employerHeader.classList.add('employer-header-hide');
    } else {
      // Scrolling up
      employerHeader.classList.remove('employer-header-hide');
    }
    employerscrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const allPoints = document.querySelectorAll(".maven-employer-benefits-point");

  allPoints.forEach(point => {
    point.addEventListener("click", () => {
      // Remove active class from all
      allPoints.forEach(p => p.classList.remove("active"));

      // Add active class to the clicked one
      point.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const point1 = document.getElementById("point1");
  const point2 = document.getElementById("point2");
  const point3 = document.getElementById("point3");
  const point4 = document.getElementById("point4");
  const image = document.querySelector(".maven-employer-benefits-image");
  const title = document.getElementById("title");
  const description = document.getElementById("description");

  window.onload = () => {
    point1.classList.add("active");
    image.src = "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/637bf15aef06ff90f6ee88b5_tab1_employers-p-1080.webp";
    title.textContent = "Benefit Management";
    description.innerHTML = "Flexible benefit design and an easy-to-use payment<br /> platform to meet your organization’s needs—from<br /> fertility benefit administration to reimbursements for<br /> adoption, surrogacy, or doula care.";
  }

  point1.addEventListener("click", () => {
    image.src = "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/637bf15aef06ff90f6ee88b5_tab1_employers-p-1080.webp";
    title.textContent = "Benefit Management";
    description.innerHTML = "Flexible benefit design and an easy-to-use payment<br /> platform to meet your organization’s needs—from<br /> fertility benefit administration to reimbursements for<br /> adoption, surrogacy, or doula care.";
  });

  point2.addEventListener("click", () => {
    image.src = "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/637bf15aef06ff389eee88ba_tab2_employers.webp";
    title.textContent = "Care Advocacy & Navigation";
    description.innerHTML = "Members connect with a real person who helps them<br /> curate a team of specialists based on their preferences<br /> (including language, race, gender, and sexual identity),<br /> meet health goals, navigate their company benefits,<br /> and can also provide referrals to in-person providers."
  });

  point3.addEventListener("click", () => {
    image.src = "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/637bf15aef06ff91fcee88bf_tab3_employers.webp";
    title.textContent = "Virtual Care";
    description.innerHTML = "Members have 24/7 access to providers across 30+<br /> specialties, including mental health providers, doulas,<br /> nutritionists, and fertility awareness educators."
  });

  point4.addEventListener("click", () => {
    image.src = "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/637bf15aef06ffaeb3ee88c4_tab4_employers.webp";
    title.textContent = "Content & Community";
    description.innerHTML = "Personalized content libraries containing articles,<br /> quizzes, live and on-demand classes, peer-to-peer<br /> communities—all tailored to meet members where they<br /> are on their journey."
  });
});  

document.addEventListener("DOMContentLoaded", () => {
  let healthPlansScrollTop = 0;
  const healthPlansHeader = document.querySelector(".health-plans-header");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if(currentScroll > healthPlansScrollTop){
      healthPlansHeader.classList.add("health-plans-header-hide");
    }
    else{
      healthPlansHeader.classList.remove("health-plans-header-hide");
    }
    healthPlansScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const allPoints = document.querySelectorAll(".consultant-points-together");

  allPoints.forEach(point => {
    point.addEventListener("click", () => {
      allPoints.forEach(p => p.classList.remove("active"));
      point.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const point1 = document.getElementById("consultant-point1");
  const point2 = document.getElementById("consultant-point2");
  const point3 = document.getElementById("consultant-point3");
  const point4 = document.getElementById("consultant-point4");
  const imgDisplay = document.getElementById("details-of-the-photo");
  const imageTitle = document.getElementById("title-of-image");
  const imageDescription = document.getElementById("image-description");

  window.onload = () => {
    point1.classList.add("active");
    imgDisplay.src = "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/66620a17acf8423b438e9bea_benefit-management-p-1080.webp";
    imageTitle.textContent = "Benefit Management";
    imageDescription.innerHTML = "Flexible benefit design and an easy-to-use payment<br /> platform to meet your client’s needs—from fertility<br /> benefit administration to reimbursements for adoption,<br /> surrogacy, or doula care.";
  };

  point1.addEventListener("click", () => {
    imgDisplay.src = "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/66620a17acf8423b438e9bea_benefit-management-p-1080.webp";
    imageTitle.textContent = "Benefit Management";
    imageDescription.innerHTML = "Flexible benefit design and an easy-to-use payment<br /> platform to meet your client’s needs—from fertility<br /> benefit administration to reimbursements for adoption,<br /> surrogacy, or doula care.";
  });

  point2.addEventListener("click", () => {
    imgDisplay.src = "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/66620a174761dd6c6ac8c3cc_care-advocacy.webp";
    imageTitle.textContent = "Care Advocacy & Navigation";
    imageDescription.innerHTML = "Members connect with a real person who helps them<br /> curate a team of specialists based on their preferences<br /> (including language, race, gender, and sexual identity),<br /> meet health goals, navigate their company benefits,<br /> and can also provide referrals to in-person providers."
  });

  point3.addEventListener("click", () => {
    imgDisplay.src = "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/66620a17f0f342b7fef654de_virtual-care.webp";
    imageTitle.textContent = "Virtual Care";
    imageDescription.innerHTML = "Members have 24/7 access to providers across 30+<br /> specialties, including mental health providers, doulas,<br /> nutritionists, and fertility awareness educators."
  });

  point4.addEventListener("click", () => {
    imgDisplay.src = "https://cdn.prod.website-files.com/5fb2b678e994739660d95086/66620a177f25c06a9c37d27b_content-community.webp";
    imageTitle.textContent = "Content & Community";
    imageDescription.innerHTML = "Personalized content libraries containing articles,<br /> quizzes, live and on-demand classes, peer-to-peer<br /> communities—all tailored to meet members where they<br /> are on their journey."
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const consultantHeader = document.querySelector(".consultant-header");
  let consultantscrollTop = 0; 

  window.addEventListener("scroll", ()=> {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > consultantscrollTop) {
      consultantHeader.classList.add("consultant-header-hide");
    } else {
      consultantHeader.classList.remove("consultant-header-hide");
    }
    consultantscrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.1});
  document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const dropdownHeader = document.getElementById("dropdown-header");
  const dropdownList = document.querySelector(".dropdown-list-navigation");

  dropdownHeader.addEventListener("click", () => {
    if(dropdownList.style.display === "none"){
      dropdownList.style.display = "block";
    }
    else{
      dropdownList.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const ans1 = document.getElementById("answer1");
  const icon1 = document.getElementById("icon1");
  const ans2 = document.getElementById("answer2");
  const icon2 = document.getElementById("icon2");
  const ans3 = document.getElementById("answer3");
  const icon3 = document.getElementById("icon3");

  icon1.addEventListener("click", () => {
    if (icon1.src.includes("pulse.png")) {
      icon1.src = "minus.png";
      ans1.classList.add("show");
    } 
    else {
      icon1.src = "pulse.png";
      ans1.classList.remove("show");
    }
  });

  icon2.addEventListener("click", () => {
    if(icon2.src.includes("pulse.png")){
      icon2.src = "minus.png";
      ans2.classList.add("show");
    }
    else{
      icon2.src = "pulse.png";
      ans2.classList.remove("show");
    }
  });

  icon3.addEventListener("click", () => {
    if(icon3.src.includes("pulse.png")){
      icon3.src = "minus.png";
      ans3.classList.add("show");
    }
    else{
      icon3.src = "pulse.png";
      ans3.classList.remove("show");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const individualheader = document.querySelector(".individual-header");
  let individualScrollTop = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > individualScrollTop && currentScroll > 100) {
      individualheader.classList.add("individual-header-hide");
    } else {
      individualheader.classList.remove("individual-header-hide");
    }

    individualScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".request-maven").addEventListener("click", () => {
    document.querySelector(".refer-first-section").scrollIntoView({
      behavior: "smooth"
    });
  });
});