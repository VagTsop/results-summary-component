const summaryList = document.getElementById('summary-list');

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const li = document.createElement('li');

      // Define text color and background color based on category
      let textColor = '';
      let backgroundColor = '';
      switch (item.category) {
        case 'Reaction':
          textColor = 'hsl(0, 100%, 67%)';         // Red text
          backgroundColor = 'hsla(0, 100%, 67%, 0.1)'; // Light red background
          break;
        case 'Memory':
          textColor = 'hsl(39, 100%, 56%)';         // Orange text
          backgroundColor = 'hsla(39, 100%, 56%, 0.1)'; // Light orange background
          break;
        case 'Verbal':
          textColor = 'hsl(166, 100%, 37%)';        // Green text
          backgroundColor = 'hsla(166, 100%, 37%, 0.1)'; // Light green background
          break;
        case 'Visual':
          textColor = 'hsl(234, 85%, 45%)';         // Blue text
          backgroundColor = 'hsla(234, 85%, 45%, 0.1)'; // Light blue background
          break;
        default:
          textColor = '#333';
          backgroundColor = '#f5f5f5';
      }

      li.style.backgroundColor = backgroundColor;

      li.innerHTML = `
        <div style="display:flex; align-items:center;">
          <img src="${item.icon}" alt="${item.category} icon" width="20" />
          <span style="padding-left:10px; color:${textColor}; font-weight:bold;">${item.category}</span>
        </div>
        <div>
          <span style="font-weight:bold;">${item.score}</span>
          <span style="color:gray;"> / 100</span>
        </div>
      `;

      summaryList.appendChild(li);
    });
  });
