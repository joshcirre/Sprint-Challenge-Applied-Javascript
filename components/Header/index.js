// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function header() {
  // Create Elements for the Component

  let headerContainer = document.createElement('div');
  headerContainer.classList.add('header');

  let headerSpan = document.createElement('span');
  headerSpan.textContent = 'MARCH 28, 2019';
  let headerHeading = document.createElement('h1');
  headerHeading.textContent = 'Lambda Times';

  let headerTemp = document.createElement('span');
  headerTemp.classList.add('temp');
  headerTemp.textContent = '98°';

  // Append Elements
  headerContainer.appendChild(headerHeading);
  headerContainer.appendChild(headerSpan);
  headerContainer.appendChild(headerTemp);

  // return the container
  return headerContainer;
}

// Append Component to DOM
document.querySelector('.header-container').appendChild(header());
