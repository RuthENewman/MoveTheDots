const fill = document.querySelector('.fill');
const emptyDots = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (let dot of emptyDots) {
  dot.addEventListener('dragover', dragOver)
  dot.addEventListener('dragenter', dragEnter)
  dot.addEventListener('dragleave', dragLeave)
  dot.addEventListener('drop', dragDrop)
}

function dragStart() {
  this.className += ' hold';
  setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(event) {
  event.preventDefault()
}

function dragEnter(event) {
  event.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}
