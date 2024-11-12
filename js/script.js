
const myInput = document.getElementById('myInput');
let hideAtiveToggle = document.querySelectorAll('.hide-active-toggle');
let sectionDropdownBtn = document.querySelectorAll('.section-toggle-dropdown');
let queryCardsDropdownBtn = document.querySelectorAll('.hide-query-card-active-toggle');
let queryCardsDropdown = document.querySelectorAll('.query-cards-dropdown');
let activeButonToggle = document.querySelectorAll('.active-button-toggle');
let tweakActiveCheckbox = document.querySelectorAll('.tweak-active-checkbox');
let tweakHideDropdown = document.querySelectorAll('.tweak-checkbox-body');
let tweakEmptyCheckbox = document.querySelectorAll('.empty-checkbox-icon');
let tweakblueCheckbox = document.querySelectorAll('.blue-checkbox-icon');
let quizAnswerContainer = document.querySelectorAll('.quiz-answer-container');
let quizAnswerBtn = document.querySelectorAll('.quiz-answer-icon-btn');
let AddOptionBtn = document.querySelectorAll('.multichoice-add-option-btn');
let optionBox = document.querySelectorAll('.multichoice-option-area');
let checkboxAddOptionBtn = document.querySelectorAll('.checkbox-add-option-btn');
let checkboxOptionBox = document.querySelectorAll('.checkbox-option-area');
let dropdownAddOptionBtn = document.querySelectorAll('.dropdown-add-option-btn');
let dropdownoptionBox = document.querySelectorAll('.dropdown-option-area');
let contactAddOptionBtn = document.querySelectorAll('.contact-add-option-btn');
let contactoptionBox = document.querySelectorAll('.contact-option-area');
let multiGridAddOptionBtn = document.querySelectorAll('.multichoice-grid-column-btn');
let multiGridOptionBox = document.querySelectorAll('.multichoice-grid-option-area');
let multiRowAddOptionBtn = document.querySelectorAll('.multichoice-grid-row-btn');
let multiRowOptionBox = document.querySelectorAll('.multichoice-row-option-area');
let checkboxRowAddOptionBtn = document.querySelectorAll('.checkbox-grid-row-btn');
let checkboxRowOptionBox = document.querySelectorAll('.checkbox-row-option-area');
let checkboxColumnAddOptionBtn = document.querySelectorAll('.checkbox-grid-column-btn');
let checkboxColumnOptionBox = document.querySelectorAll('.checkbox-grid-option-area');
let libraryImgToggle = document.querySelectorAll('.library-img-toggle');
let useImgBtn = document.querySelectorAll('.use-img-btn');
let activeImgIcon = document.querySelectorAll('.active-img-icon');

function selectedicon() {
  let selectValue = document.getElementById('select-value').value;
  let icons = document.querySelectorAll('.icon-values');
  icons.forEach((element) => {
    element.classList.add('hidden');
  });
  let specificIcon = document.getElementById(selectValue);
  specificIcon.classList.remove('hidden');
  console.log(selectValue);
}

// modal survay button
function survaybtn(contexts) {
  let survayBtn = document.querySelector(`#${contexts}.survay-form-builder`);
  let contextbtn = document.getElementById(contexts);
  let continueBtn = document.querySelector('.modal-continue-btn');
  let surveyLink;

  if (contexts == 'survaybtnone') {
    survayBtn.style.border = '1px solid rgba(0, 62, 128, 0.4)';
    surveyLink = '/build-query.html';
    continueBtn.style.opacity = '1';
  } else if (contexts == 'quizform') {
    survayBtn.style.border = '1px solid rgba(0, 62, 128, 0.4)';
    surveyLink = '/analytics.html';
    continueBtn.style.opacity = '1';
  }

  continueBtn.setAttribute('href', surveyLink);
}
// modal survay button

// changing modal button text
let querySectorBox = document.querySelectorAll('.query-sectors');
let changeButtonText = document.querySelector('.change-button-text');
let textChanged = document.querySelectorAll('.query-sectors-text');

for (let i = 0; i < querySectorBox.length; i++) {
  querySectorBox[i].addEventListener('click', function () {
    changeButtonText.textContent = textChanged[i].textContent;
  });
}
// changing modal button text ends here

// querySectorBox.forEach(element => {
//   element.addEventListener("click", ()=>{
//   element.querySelector("change-button-text") = textChanged[i].textContent
//   })
// });

// for(let i = 0; i < libraryImgToggle.length; i++){
//   libraryImgToggle[i].addEventListener("click",function(){
//     useImgBtn[i].classList.toggle("visible")
//     activeImgIcon[i].classList.toggle("visible")
//   })
// }

// multichoice count option box
for (let i = 0; i < AddOptionBtn.length; i++) {
  let parentContainer = document.querySelector('.multichoice-option-area');
  AddOptionBtn[i].addEventListener('click', function () {
    let postElement = document.createElement('div');
    postElement.classList.add('multichoice-option-area');
    postElement.innerHTML = `

      <div class="multichoice-option-area">
        <div class="option-box-container">
          <div class="option-box">
            <div class="option-box-input">
              <input type="radio" name="opt-radio" id="">
              <div class="quetion-box" id="myeditablediv" contenteditable="true">
                Add options...
              </div>
              <!-- <input type="text" name="" class="iput-item" id="" placeholder="Option 1"> -->
            </div>

            <button class="option-box-tooltip-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <g id="Group 6056">
                <g id="Group 5164">
                <g id="Group 4961">
                <circle id="Ellipse 79" cx="15" cy="15" r="15" fill="#EDF2FA"></circle>
                </g>
                </g>
                <g id="Group 5176">
                <g id="Group 5173">
                <g id="Group 4961_2">
                <circle id="Ellipse 79_2" cx="11.5252" cy="14.9838" r="1.04763" fill="#003E80"></circle>
                </g>
                </g>
                <g id="Group 5174">
                <g id="Group 4961_3">
                <circle id="Ellipse 79_3" cx="15.0144" cy="14.9837" r="1.04763" fill="#003E80"></circle>
                </g>
                </g>
                <g id="Group 5175">
                <g id="Group 4961_4">
                <circle id="Ellipse 79_4" cx="18.5081" cy="14.9837" r="1.04763" fill="#003E80"></circle>
                </g>
                </g>
                </g>
                </g>
              </svg>
              <div class="option-box-tooltip">
                <div class="option-box-tooltip-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 17" fill="none">
                    <path id="Vector" d="M2.99489 17C2.46292 17 2.00857 16.8222 1.63182 16.4666C1.25505 16.1109 1.06667 15.6821 1.06667 15.1799V2.40088H0V0.890648H4.79999V0H11.2V0.890648H16V2.40088H14.9333V15.1799C14.9333 15.6885 14.7467 16.119 14.3733 16.4714C14 16.8238 13.5439 17 13.0051 17H2.99489ZM13.3333 2.40088H2.66665V15.1799C2.66665 15.2703 2.69742 15.3445 2.75897 15.4026C2.82052 15.4607 2.89916 15.4898 2.99489 15.4898H13.0051C13.0872 15.4898 13.1624 15.4575 13.2308 15.393C13.2992 15.3284 13.3333 15.2574 13.3333 15.1799V2.40088ZM5.23079 13.4761H6.83077V4.41456H5.23079V13.4761ZM9.16923 13.4761H10.7692V4.41456H9.16923V13.4761Z" fill="#FF0303"></path>
                  </svg>
                  <p>Delete</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
     `;
    parentContainer.appendChild(postElement);
  });
}
// multichoice count option box ends here

// checkbox count option box
for (let i = 0; i < checkboxAddOptionBtn.length; i++) {
  let parentContainer = document.querySelector('.checkbox-option-area');
  checkboxAddOptionBtn[i].addEventListener('click', function () {
    let postElement = document.createElement('div');
    postElement.classList.add('checkbox-option-area');
    postElement.innerHTML = `

      <div class="checkbox-option-area">
       <div class="option-box-container">
        <div class="option-box">
          <div class="option-box-input">
            <input type="checkbox" name="checkbox" id="">
            <div class="quetion-box" id="myeditablediv" contenteditable="true">
              Add options...
            </div>
          </div>

          <button class="option-box-tooltip-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <g id="Group 6056">
              <g id="Group 5164">
              <g id="Group 4961">
              <circle id="Ellipse 79" cx="15" cy="15" r="15" fill="#EDF2FA"></circle>
              </g>
              </g>
              <g id="Group 5176">
              <g id="Group 5173">
              <g id="Group 4961_2">
              <circle id="Ellipse 79_2" cx="11.5252" cy="14.9838" r="1.04763" fill="#003E80"></circle>
              </g>
              </g>
              <g id="Group 5174">
              <g id="Group 4961_3">
              <circle id="Ellipse 79_3" cx="15.0144" cy="14.9837" r="1.04763" fill="#003E80"></circle>
              </g>
              </g>
              <g id="Group 5175">
              <g id="Group 4961_4">
              <circle id="Ellipse 79_4" cx="18.5081" cy="14.9837" r="1.04763" fill="#003E80"></circle>
              </g>
              </g>
              </g>
              </g>
            </svg>
            <div class="option-box-tooltip">
              <div class="option-box-tooltip-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 17" fill="none">
                  <path id="Vector" d="M2.99489 17C2.46292 17 2.00857 16.8222 1.63182 16.4666C1.25505 16.1109 1.06667 15.6821 1.06667 15.1799V2.40088H0V0.890648H4.79999V0H11.2V0.890648H16V2.40088H14.9333V15.1799C14.9333 15.6885 14.7467 16.119 14.3733 16.4714C14 16.8238 13.5439 17 13.0051 17H2.99489ZM13.3333 2.40088H2.66665V15.1799C2.66665 15.2703 2.69742 15.3445 2.75897 15.4026C2.82052 15.4607 2.89916 15.4898 2.99489 15.4898H13.0051C13.0872 15.4898 13.1624 15.4575 13.2308 15.393C13.2992 15.3284 13.3333 15.2574 13.3333 15.1799V2.40088ZM5.23079 13.4761H6.83077V4.41456H5.23079V13.4761ZM9.16923 13.4761H10.7692V4.41456H9.16923V13.4761Z" fill="#FF0303"></path>
                </svg>
                <p>Delete</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
   `;
    parentContainer.appendChild(postElement);
  });
}
// checkbox count option box ends here

// dropdown count option box
for (let i = 0; i < dropdownAddOptionBtn.length; i++) {
  let parentContainer = document.querySelector('.dropdown-option-area');
  dropdownAddOptionBtn[i].addEventListener('click', function () {
    let postElement = document.createElement('div');
    postElement.classList.add('dropdown-option-area');
    postElement.innerHTML = `

      <div class="dropdown-option-area">
        <div class="option-box-container">
          <div class="option-box">
            <div class="option-box-input">
              <div class="quetion-box" id="myeditablediv" contenteditable="true">
                Add options...
              </div>
            </div>

            <button class="option-box-tooltip-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <g id="Group 6056">
                <g id="Group 5164">
                <g id="Group 4961">
                <circle id="Ellipse 79" cx="15" cy="15" r="15" fill="#EDF2FA"></circle>
                </g>
                </g>
                <g id="Group 5176">
                <g id="Group 5173">
                <g id="Group 4961_2">
                <circle id="Ellipse 79_2" cx="11.5252" cy="14.9838" r="1.04763" fill="#003E80"></circle>
                </g>
                </g>
                <g id="Group 5174">
                <g id="Group 4961_3">
                <circle id="Ellipse 79_3" cx="15.0144" cy="14.9837" r="1.04763" fill="#003E80"></circle>
                </g>
                </g>
                <g id="Group 5175">
                <g id="Group 4961_4">
                <circle id="Ellipse 79_4" cx="18.5081" cy="14.9837" r="1.04763" fill="#003E80"></circle>
                </g>
                </g>
                </g>
                </g>
              </svg>
              <div class="option-box-tooltip">
                <div class="option-box-tooltip-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 17" fill="none">
                    <path id="Vector" d="M2.99489 17C2.46292 17 2.00857 16.8222 1.63182 16.4666C1.25505 16.1109 1.06667 15.6821 1.06667 15.1799V2.40088H0V0.890648H4.79999V0H11.2V0.890648H16V2.40088H14.9333V15.1799C14.9333 15.6885 14.7467 16.119 14.3733 16.4714C14 16.8238 13.5439 17 13.0051 17H2.99489ZM13.3333 2.40088H2.66665V15.1799C2.66665 15.2703 2.69742 15.3445 2.75897 15.4026C2.82052 15.4607 2.89916 15.4898 2.99489 15.4898H13.0051C13.0872 15.4898 13.1624 15.4575 13.2308 15.393C13.2992 15.3284 13.3333 15.2574 13.3333 15.1799V2.40088ZM5.23079 13.4761H6.83077V4.41456H5.23079V13.4761ZM9.16923 13.4761H10.7692V4.41456H9.16923V13.4761Z" fill="#FF0303"></path>
                  </svg>
                  <p>Delete</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
        `;
    parentContainer.appendChild(postElement);
  });
}
// dropdown count option box ends here

// contact count option box
for (let i = 0; i < contactAddOptionBtn.length; i++) {
  let parentContainer = document.querySelector('.contact-option-area');
  contactAddOptionBtn[i].addEventListener('click', function () {
    let postElement = document.createElement('div');
    postElement.classList.add('contact-option-area');
    postElement.innerHTML = `
        <div class="contact-option-area">
          <div class="query-cards-dropdown">
            <div class="tweak-section-body">
              <div class="tweak-checkbox-padd">
                <div class="tweak-dropdown-section">
                  <div class="tweak-content-dropdown">
                    <div class="contact-input-conainer">
                      <div class="contact-input-label">
                        <input type="text" name="" id="" placeholder="Name">
                      </div>

                      <div class="contact-input-body">
                        <input type="text" name="" id="" class="contact-input-area" placeholder="Bright">
                        <input type="checkbox" name="" id="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
    parentContainer.appendChild(postElement);
  });
}
// contact count option box ends here

// multi row count option box
for (let i = 0; i < multiGridAddOptionBtn.length; i++) {
  let parentContainer = document.querySelector('.multichoice-row-option-area');
  multiRowAddOptionBtn[i].addEventListener('click', function () {
    let postElement = document.createElement('div');
    postElement.classList.add('multichoice-row-option-area');
    postElement.innerHTML = `
      <div class="multichoice-row-option-area">
        <div class="option-box-container">
          <div class="option-box">
            <div class="option-box-input">
              <h6>1.</h6>
              <div class="quetion-box" contenteditable="true">
                Add Row text..
              </div>
            </div>

            <button class="option-box-tooltip-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <g id="Group 6056">
                <g id="Group 5164">
                <g id="Group 4961">
                <circle id="Ellipse 79" cx="15" cy="15" r="15" fill="#EDF2FA"></circle>
                </g>
                </g>
                <g id="Group 5176">
                <g id="Group 5173">
                <g id="Group 4961_2">
                <circle id="Ellipse 79_2" cx="11.5252" cy="14.9838" r="1.04763" fill="#003E80"></circle>
                </g>
                </g>
                <g id="Group 5174">
                <g id="Group 4961_3">
                <circle id="Ellipse 79_3" cx="15.0144" cy="14.9837" r="1.04763" fill="#003E80"></circle>
                </g>
                </g>
                <g id="Group 5175">
                <g id="Group 4961_4">
                <circle id="Ellipse 79_4" cx="18.5081" cy="14.9837" r="1.04763" fill="#003E80"></circle>
                </g>
                </g>
                </g>
                </g>
              </svg>
              <div class="option-box-tooltip">
                <div class="option-box-tooltip-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 17" fill="none">
                    <path id="Vector" d="M2.99489 17C2.46292 17 2.00857 16.8222 1.63182 16.4666C1.25505 16.1109 1.06667 15.6821 1.06667 15.1799V2.40088H0V0.890648H4.79999V0H11.2V0.890648H16V2.40088H14.9333V15.1799C14.9333 15.6885 14.7467 16.119 14.3733 16.4714C14 16.8238 13.5439 17 13.0051 17H2.99489ZM13.3333 2.40088H2.66665V15.1799C2.66665 15.2703 2.69742 15.3445 2.75897 15.4026C2.82052 15.4607 2.89916 15.4898 2.99489 15.4898H13.0051C13.0872 15.4898 13.1624 15.4575 13.2308 15.393C13.2992 15.3284 13.3333 15.2574 13.3333 15.1799V2.40088ZM5.23079 13.4761H6.83077V4.41456H5.23079V13.4761ZM9.16923 13.4761H10.7692V4.41456H9.16923V13.4761Z" fill="#FF0303"></path>
                  </svg>
                  <p>Delete</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      `;
    parentContainer.appendChild(postElement);
  });
}
//  multi row  count option box ends here

// multi grid count option box
for (let i = 0; i < multiGridAddOptionBtn.length; i++) {
  let parentContainer = document.querySelector('.multichoice-grid-option-area');
  multiGridAddOptionBtn[i].addEventListener('click', function () {
    let postElement = document.createElement('div');
    postElement.classList.add('multichoice-grid-option-area');
    postElement.innerHTML = `
      <div class="multichoice-grid-option-area">
        <div class="option-box-container">
          <div class="option-box">
            <div class="option-box-input">
              <input type="radio" name="opt-radio" id="">
              <div class="quetion-box" contenteditable="true">
                Add column text..
              </div>
            </div>

            <button class="option-box-tooltip-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <g id="Group 6056">
                <g id="Group 5164">
                <g id="Group 4961">
                <circle id="Ellipse 79" cx="15" cy="15" r="15" fill="#EDF2FA"></circle>
                </g>
                </g>
                <g id="Group 5176">
                <g id="Group 5173">
                <g id="Group 4961_2">
                <circle id="Ellipse 79_2" cx="11.5252" cy="14.9838" r="1.04763" fill="#003E80"></circle>
                </g>
                </g>
                <g id="Group 5174">
                <g id="Group 4961_3">
                <circle id="Ellipse 79_3" cx="15.0144" cy="14.9837" r="1.04763" fill="#003E80"></circle>
                </g>
                </g>
                <g id="Group 5175">
                <g id="Group 4961_4">
                <circle id="Ellipse 79_4" cx="18.5081" cy="14.9837" r="1.04763" fill="#003E80"></circle>
                </g>
                </g>
                </g>
                </g>
              </svg>
              <div class="option-box-tooltip">
                <div class="option-box-tooltip-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 17" fill="none">
                    <path id="Vector" d="M2.99489 17C2.46292 17 2.00857 16.8222 1.63182 16.4666C1.25505 16.1109 1.06667 15.6821 1.06667 15.1799V2.40088H0V0.890648H4.79999V0H11.2V0.890648H16V2.40088H14.9333V15.1799C14.9333 15.6885 14.7467 16.119 14.3733 16.4714C14 16.8238 13.5439 17 13.0051 17H2.99489ZM13.3333 2.40088H2.66665V15.1799C2.66665 15.2703 2.69742 15.3445 2.75897 15.4026C2.82052 15.4607 2.89916 15.4898 2.99489 15.4898H13.0051C13.0872 15.4898 13.1624 15.4575 13.2308 15.393C13.2992 15.3284 13.3333 15.2574 13.3333 15.1799V2.40088ZM5.23079 13.4761H6.83077V4.41456H5.23079V13.4761ZM9.16923 13.4761H10.7692V4.41456H9.16923V13.4761Z" fill="#FF0303"></path>
                  </svg>
                  <p>Delete</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
        `;
    parentContainer.appendChild(postElement);
  });
}
//  multi grid  count option box ends here

// checkbox row count option box
for (let i = 0; i < checkboxRowAddOptionBtn.length; i++) {
  let parentContainer = document.querySelector('.checkbox-row-option-area');
  checkboxRowAddOptionBtn[i].addEventListener('click', function () {
    let postElement = document.createElement('div');
    postElement.classList.add('checkbox-row-option-area');
    postElement.innerHTML = `
      <div class="checkbox-row-option-area">
        <div class="option-box-container">
          <div class="option-box">
            <div class="option-box-input">
              <h6>1.</h6>
              <div class="quetion-box" contenteditable="true">
                Add Row text..
              </div>
            </div>
            <button class="option-box-tooltip-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <g id="Group 6056">
                <g id="Group 5164">
                <g id="Group 4961">
                <circle id="Ellipse 79" cx="15" cy="15" r="15" fill="#EDF2FA"></circle>
                </g>
                </g>
                <g id="Group 5176">
                <g id="Group 5173">
                <g id="Group 4961_2">
                <circle id="Ellipse 79_2" cx="11.5252" cy="14.9838" r="1.04763" fill="#003E80"></circle>
                </g>
                </g>
                <g id="Group 5174">
                <g id="Group 4961_3">
                <circle id="Ellipse 79_3" cx="15.0144" cy="14.9837" r="1.04763" fill="#003E80"></circle>
                </g>
                </g>
                <g id="Group 5175">
                <g id="Group 4961_4">
                <circle id="Ellipse 79_4" cx="18.5081" cy="14.9837" r="1.04763" fill="#003E80"></circle>
                </g>
                </g>
                </g>
                </g>
              </svg>
              <div class="option-box-tooltip">
                <div class="option-box-tooltip-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 17" fill="none">
                    <path id="Vector" d="M2.99489 17C2.46292 17 2.00857 16.8222 1.63182 16.4666C1.25505 16.1109 1.06667 15.6821 1.06667 15.1799V2.40088H0V0.890648H4.79999V0H11.2V0.890648H16V2.40088H14.9333V15.1799C14.9333 15.6885 14.7467 16.119 14.3733 16.4714C14 16.8238 13.5439 17 13.0051 17H2.99489ZM13.3333 2.40088H2.66665V15.1799C2.66665 15.2703 2.69742 15.3445 2.75897 15.4026C2.82052 15.4607 2.89916 15.4898 2.99489 15.4898H13.0051C13.0872 15.4898 13.1624 15.4575 13.2308 15.393C13.2992 15.3284 13.3333 15.2574 13.3333 15.1799V2.40088ZM5.23079 13.4761H6.83077V4.41456H5.23079V13.4761ZM9.16923 13.4761H10.7692V4.41456H9.16923V13.4761Z" fill="#FF0303"></path>
                  </svg>
                  <p>Delete</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
        `;
    parentContainer.appendChild(postElement);
  });
}
// checkbox row count option box ends here

// checkbox column count option box
for (let i = 0; i < checkboxColumnAddOptionBtn.length; i++) {
  let parentContainer = document.querySelector('.checkbox-grid-option-area');
  checkboxColumnAddOptionBtn[i].addEventListener('click', function () {
    let postElement = document.createElement('div');
    postElement.classList.add('checkbox-grid-option-area');
    postElement.innerHTML = `
      <div class="checkbox-grid-option-area">
        <div class="option-box-container">
          <div class="option-box">
            <div class="option-box-input">
              <input type="checkbox" name="opt-radio" id="">
              <div class="quetion-box" contenteditable="true">
                Add Column text..
              </div>
            </div>
            <button class="option-box-tooltip-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <g id="Group 6056">
                <g id="Group 5164">
                <g id="Group 4961">
                <circle id="Ellipse 79" cx="15" cy="15" r="15" fill="#EDF2FA"></circle>
                </g>
                </g>
                <g id="Group 5176">
                <g id="Group 5173">
                <g id="Group 4961_2">
                <circle id="Ellipse 79_2" cx="11.5252" cy="14.9838" r="1.04763" fill="#003E80"></circle>
                </g>
                </g>
                <g id="Group 5174">
                <g id="Group 4961_3">
                <circle id="Ellipse 79_3" cx="15.0144" cy="14.9837" r="1.04763" fill="#003E80"></circle>
                </g>
                </g>
                <g id="Group 5175">
                <g id="Group 4961_4">
                <circle id="Ellipse 79_4" cx="18.5081" cy="14.9837" r="1.04763" fill="#003E80"></circle>
                </g>
                </g>
                </g>
                </g>
              </svg>
              <div class="option-box-tooltip">
                <div class="option-box-tooltip-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 17" fill="none">
                    <path id="Vector" d="M2.99489 17C2.46292 17 2.00857 16.8222 1.63182 16.4666C1.25505 16.1109 1.06667 15.6821 1.06667 15.1799V2.40088H0V0.890648H4.79999V0H11.2V0.890648H16V2.40088H14.9333V15.1799C14.9333 15.6885 14.7467 16.119 14.3733 16.4714C14 16.8238 13.5439 17 13.0051 17H2.99489ZM13.3333 2.40088H2.66665V15.1799C2.66665 15.2703 2.69742 15.3445 2.75897 15.4026C2.82052 15.4607 2.89916 15.4898 2.99489 15.4898H13.0051C13.0872 15.4898 13.1624 15.4575 13.2308 15.393C13.2992 15.3284 13.3333 15.2574 13.3333 15.1799V2.40088ZM5.23079 13.4761H6.83077V4.41456H5.23079V13.4761ZM9.16923 13.4761H10.7692V4.41456H9.16923V13.4761Z" fill="#FF0303"></path>
                  </svg>
                  <p>Delete</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
        `;
    parentContainer.appendChild(postElement);
  });
}
// checkbox column  count option box ends here

for (let i = 0; i < quizAnswerContainer.length; i++) {
  quizAnswerContainer[i].addEventListener('click', function () {
    quizAnswerBtn[i].classList.toggle('quiz-answer-active');
  });
}

// checkbox toggle btn
const checkboxToggleBtn = document.querySelectorAll('.tweak-checkbox-cont');
checkboxToggleBtn.forEach((element) => {
  element.addEventListener('click', () => {
    element.querySelector('.tweak-active-checkbox').classList.toggle('visible');
    element.nextElementSibling.classList.toggle('visible');
  });
});
// checkbox toggle btn

// color picker input
function colorvalue() {
  let colorInput = document.getElementById('color-input');
  let color = colorInput.value;
  // console.log(color);
  let colorIcons = document.querySelectorAll('.icon-values');
  colorIcons.forEach((element) => {
    element.style.fill = color;
    console.log(colorIcons);
  });
}
// color picker input

let rangeInput = document.getElementById('rangeInput');
let rangeSlider = document.querySelector('.custom-slider');

if (rangeInput) {
  rangeInput.oninput = () => {
    let rangeInputValue = rangeInput.value;
    rangeSlider.textContent = rangeInputValue;
    rangeSlider.style.left = rangeInputValue / 2 + '%';
  };
}

// console.log(rangeSlider);

for (let i = 0; i < sectionDropdownBtn.length; i++) {
  sectionDropdownBtn[i].addEventListener('click', function () {
    hideAtiveToggle[i].classList.toggle('hide-active-');
    activeButonToggle[i].classList.toggle('remove-active-light-toggle');
  });
}

for (let i = 0; i < queryCardsDropdownBtn.length; i++) {
  queryCardsDropdownBtn[i].addEventListener('click', function () {
    queryCardsDropdown[i].classList.toggle('hide-active-');
  });
}

// // boostrap modal
// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus();
// });
// // boostrap modal ends here

// boostrap modal
// if (myModal) {
//   myModal.addEventListener('shown.bs.modal', () => {
//     myInput.focus()
//  })
// }
// boostrap modal ends here

var options = {
  chart: {
    type: 'line',
  },
  series: [
    {
      name: 'sales',
      data: [30, 40, 35],
    },
  ],
  xaxis: {
    categories: [1991, 1992, 1993],
  },
};

var chart = new ApexCharts(document.querySelector('#chart'), options);

chart.render();
