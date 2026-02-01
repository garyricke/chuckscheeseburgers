// SWAP THIS URL TO CHANGE BUSINESSES:
// - Chuck's Cheeseburgers: https://assets.codepen.io/3457845/zerocms-business-data-chucks.json
// - Bloom & Petal Florist: https://assets.codepen.io/3457845/zerocms-business-data-example-florist.json

const dataUrl = './zerocms-business-data-chucks.json';

// Add timestamp to bypass cache and always fetch fresh data
fetch(dataUrl + '?t=' + Date.now())
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to load business data');
    }
    return response.json();
  })
  .then(businessData => {
    setTimeout(() => {
      renderPage(businessData);
    }, 300);
  })
  .catch(error => {
    console.error('Error loading business data:', error);
    document.getElementById('app').innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; height: 100vh; flex-direction: column; font-family: sans-serif; color: #fff; background: #1A1A1A;">
        <h1>Error Loading Page</h1>
        <p>Could not load business data. Please check console for details.</p>
      </div>
    `;
  });
