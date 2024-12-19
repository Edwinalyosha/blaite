// Function to detect when the section comes into view
function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Function to add the 'card-visible' class when the card is in view
function checkCardInView() {
    const card = document.querySelector('.coming-soon-card');
    
    if (isElementInView(card)) {
        card.classList.add('card-visible');
    }
}

// Check when the page loads and on scroll
document.addEventListener('DOMContentLoaded', checkCardInView);
window.addEventListener('scroll', checkCardInView);

const milestones = document.querySelectorAll('.milestone');
  const contentBox = document.getElementById('node-content');
  const title = document.getElementById('node-title');
  const description = document.getElementById('node-description');

  milestones.forEach(node => {
    node.addEventListener('mouseenter', () => {
      // For desktop hover
      const dataTitle = node.getAttribute('data-title');
      const dataContent = node.getAttribute('data-content');
      title.innerText = dataTitle;
      description.innerText = dataContent;
      contentBox.classList.add('active');

      const rect = node.getBoundingClientRect();
      var left=`${rect.left + rect.width / 2.2 - contentBox.offsetWidth /2}px`;
      contentBox.style.left = left // Center relative to node // Position below node
      const viewportWidth = window.innerWidth;
        if (left < 0) {
        left = 10; // Padding from the left edge
        contentBox.style.left = `${left}px`;
        } else if (left + contentBox.offsetWidth > viewportWidth) {
        left = viewportWidth - contentBox.offsetWidth - 10; // Padding from the right edge
        contentBox.style.left = `${left}px`;
        }
        
        contentBox.classList.add('active');
    });

    node.addEventListener('mouseleave', () => {
        setTimeout(5000, contentBox.classList.remove('active'));
    //   contentBox.classList.remove('active');
    });

    node.addEventListener('click', () => {
      // Mobile tap functionality
      const rect = node.getBoundingClientRect();
      node.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      const dataTitle = node.getAttribute('data-title');
      const dataContent = node.getAttribute('data-content');
      title.innerText = dataTitle;
      description.innerText = dataContent;
      contentBox.classList.add('active');
    });
  });




    const canvas = document.getElementById('lineCanvas');
    const context = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  
    function drawLines() {
      const milestones = document.querySelectorAll('.milestone .node');
      const canvasRect = canvas.getBoundingClientRect();
      
      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);
  
      milestones.forEach((node, index) => {
        if (index < milestones.length - 1) {
          const startNode = node.getBoundingClientRect();
          const endNode = milestones[index + 1].getBoundingClientRect();
  
          // Calculate the coordinates relative to the canvas
          const startX = startNode.left + startNode.width / 2 - canvasRect.left;
          const startY = startNode.top + startNode.height / 2 - canvasRect.top;
          const endX = endNode.left + endNode.width / 2 - canvasRect.left;
          const endY = endNode.top + endNode.height / 2 - canvasRect.top;
  
          // Draw the line
          context.beginPath();
          context.moveTo(startX, startY);
          context.lineTo(endX, endY);
          context.strokeStyle = '#444343';
          context.lineWidth = 2;
          context.stroke();
        }
      });
    }
  
    // Redraw the lines on load and window resize
    window.addEventListener('load', () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drawLines();
    });
  
    window.addEventListener('resize', () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drawLines();
    });