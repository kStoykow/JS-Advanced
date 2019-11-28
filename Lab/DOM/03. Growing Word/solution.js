function growingWord() {
  let text = document.querySelector('#exercise p');

  if (text == null) {
    throw new Error('Missing element');
  }

  let colors = document.querySelector('#colors').firstElementChild;
  let currColor = colors.textContent;

  const colorsMap = {
    Blue: text.style.color = `${currColor}`,
    Red: text.style.color = `${currColor}`,
    Green: text.style.color = `${currColor}`,
  }

  colorsMap[currColor]
  currColor = colors.nextElementSibling;
  // if (currColor == 'Blue') {
  //   text.style.color = `${currColor.textContent}`;
  //   currColor = colors.nextElementSibling.textContent;
  // }
  // text.style.color = `${currColor.textContent}`;
  console.log(currColor.textContent);

  let currSize = text.style.fontSize;
  if (currSize === "") {
    text.style.fontSize = '2px'
    currSize = Number(text.style.fontSize.replace('px', '')) * 2;
  } else {
    let nextSize = Number(text.style.fontSize.replace('px', '')) * 2
    text.style.fontSize = `${nextSize}px`;
    currSize = nextSize;
  }
}