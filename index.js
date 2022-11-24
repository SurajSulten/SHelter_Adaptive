// Humburger // 

const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation')
const petsBurgerLine = document.querySelector('.pets_burger')
const petsBurger = document.querySelector('.burger_pets_page')
if (burger) {
    
    const header = document.querySelector('.header')
    burger.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        burger.classList.toggle('burger_active');
        navigation.classList.toggle('__active');
        petsBurgerLine.classList.toggle('pets_burger_line')
        petsBurger.classList.toggle('burger__active')
    })
}

const navLinks = document.querySelectorAll('.navigation_list__item[data-goto]');
if(navLinks.length > 0) {
    navLinks.forEach(navLink => {
        navLink.addEventListener("click", onNavLinkClick);
    });

    function onNavLinkClick(e) {
        const navLink = e.target;
        if(navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
            const gotoBlock = document.querySelector(navLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            console.log(burger.classList)
            if(burger.classList.contains('burger_active')) {
                document.body.classList.remove('_lock');
                burger.classList.remove('burger_active');
                navigation.classList.remove('__active'); 
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
// ------------------ //

// Pets slider //

    let position = 0
    
    const slidesToScroll = 1;
    const block = document.querySelector('.pets_block');
    const container = document.querySelector('.pets_container');
    // const card = document.querySelector('.pets_card');
    const btnBack = document.querySelector('.btn_back');
    const btnNext  = document.querySelector('.btn_next');
    const cards = document.querySelectorAll('.pets_card');
    let slidesToShow; 
    console.log(block.clientWidth)
    if(block.clientWidth === 810) {
        slidesToShow = 3;
    } else if (block.clientWidth === 540) {
        slidesToShow = 2;
    }else {
        slidesToShow = 1
    };
   
    const cardsCount = cards.length;
    const cardWidth = block.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * cardWidth;
    cards.forEach((card) => {
        card.style.minWidth = `${cardWidth}px`;
    })
    
    
    btnNext.addEventListener('click', () => {
        const cardsLeft = cardsCount - (Math.abs(position) + slidesToShow * cardWidth) / cardWidth;

        position -= cardsLeft >= slidesToScroll ? movePosition : cardsLeft * cardWidth;

        setPosition();
        checkBtns();
    })

    btnBack.addEventListener('click', () => {
        const cardsLeft = Math.abs(position) / cardWidth

        position += cardsLeft >= slidesToScroll ? movePosition : cardsLeft * cardWidth;
        ;

        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        container.style.transform = `translateX(${position}px)`;
    };

    const checkBtns = () => {
        btnBack.disabled = position === 0;
        btnNext.disabled = position <= -(cardsCount - slidesToShow) * cardWidth;
    };

// ------------------------- //

// POP-UP //
const popUpData = [
    {
      "name": "Jennifer",
      "img": "./assets/img/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "./assets/img/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "./assets/img/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "./assets/img/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "./assets/img/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "./assets/img/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "./assets/img/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "./assets/img/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]; 
  
console.log(popUpData[0].name); 
const petsCardButtons = document.querySelectorAll('.pets__card_button');
const popUp = document.querySelector('.pop-up');
const closeBtn = document.querySelector('.pop-up_button')
const popUpContainer = document.querySelector(".pop-up_container");


if(petsCardButtons.length > 0) {
    petsCardButtons.forEach(petsCardButton => {
        petsCardButton.addEventListener("click", showCardInfo);
    });

    function showCardInfo(e) {
        const petsCardButton = e.target;
        const petsParent = petsCardButton.parentElement;
        const petsChildren = petsParent.children;
        let petName = "";
        let myPet = {};

        for (let i = 0; i < petsChildren.length; i++) {
            if(petsChildren[i].tagName === "H3"){
                petName = petsChildren[i].textContent;  
            }
        }
        for (let j = 0; j < popUpData.length; j++) {
            if(petName === popUpData[j].name){
                myPet = popUpData[j]
                console.log(myPet);
            }
        }

        
        const popUpContent = document.createElement('div');
        const popUpImg = document.createElement('div');        
        const tagImg = document.createElement("img");
        const tagH2 = document.createElement("h2");
        const tagBreed  = document.createElement("p");
        const tagDescription = document.createElement("p");
        const tagInfo1 = document.createElement("p");
        const tagInfo2 = document.createElement("p");
        const tagInfo3 = document.createElement("p");
        const tagInfo4 = document.createElement("p");


        tagImg.setAttribute("src", myPet.img)
        const tagH2Text = document.createTextNode(myPet.name);
        const tagBreedText = document.createTextNode(`${myPet.type} - ${myPet.breed}`);
        const tagDescriptionText = document.createTextNode(myPet.description);
        const tagInfo1Text = document.createTextNode(`Age: ${myPet.age}`);
        const tagInfo2Text = document.createTextNode(`Inoculations: ${myPet.inoculations}`);
        const tagInfo3Text = document.createTextNode(`Diseases: ${myPet.diseases}`);
        const tagInfo4Text = document.createTextNode(`Parasites: ${myPet.parasites}`);

        tagH2.appendChild(tagH2Text); 
        tagBreed.appendChild(tagBreedText); 
        tagDescription.appendChild(tagDescriptionText); 
        tagInfo1.appendChild(tagInfo1Text); 
        tagInfo2.appendChild(tagInfo2Text); 
        tagInfo3.appendChild(tagInfo3Text); 
        tagInfo4.appendChild(tagInfo4Text); 
        
        popUpContent.className = "pop-up_content";
        popUpImg.className = "pop-up_img";

        tagH2.className = "pop-up_name";
        tagBreed.className = "pop-up_breed"
        tagDescription.className = "pop-up_description"
        tagInfo1.className = "pop-up_data"
        tagInfo2.className = "pop-up_data"
        tagInfo3.className = "pop-up_data"
        tagInfo4.className = "pop-up_data"

        popUpContainer.appendChild(popUpImg);
        popUpContainer.appendChild(popUpContent);
        popUpContent.appendChild(tagH2);
        popUpContent.appendChild(tagBreed);
        popUpContent.appendChild(tagDescription);
        popUpContent.appendChild(tagInfo1);
        popUpContent.appendChild(tagInfo2);
        popUpContent.appendChild(tagInfo3);
        popUpContent.appendChild(tagInfo4);
        popUpImg.appendChild(tagImg)
        console.log(petName);

        document.body.classList.toggle('_lock');        
        // const div = document.createElement("div")
        
        // div.append()
        popUp.classList.toggle('pop-up_active')
    }
};

closeBtn.addEventListener("click", () => {
        document.body.classList.remove('_lock');
        popUp.classList.remove('pop-up_active');

        document.querySelector(".pop-up_container").removeChild(document.querySelector(".pop-up_content"));
        document.querySelector(".pop-up_container").removeChild(document.querySelector(".pop-up_img"));

});


// ------------------ //