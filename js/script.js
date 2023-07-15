document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('adForm');
  const previewBtn = document.getElementById('previewBtn');
  const previewSection = document.getElementById('previewSection');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle saving the ad or generating a new ad campaign
    // You will need to integrate with the Facebook Ads API for this step
  });

  previewBtn.addEventListener('click', () => {
    const adCreativeInput = document.getElementById('adCreative');
    const adTextInput = document.getElementById('adText');
    
    const adCreative = adCreativeInput.value;
    const adText = adTextInput.value;
    
    // Update the preview section with the modified ad creative and text
    previewSection.innerHTML = `
      <h2>Preview:</h2>
      <div>${adCreative}</div>
      <div>${adText}</div>
    `;
  });
});
