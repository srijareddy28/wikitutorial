let currentStep=1;
const totalSteps = document.querySelectorAll('.step').length;
function showStep(stepNumber) {
  document.querySelectorAll('.step').forEach(step => {
    step.style.display = 'none';
  });
  document.getElementById(`step${stepNumber}`).style.display = 'block';
  // Update progress bar
  const progressBar = document.getElementById('progressBar');
  const progressPercent = (stepNumber / totalSteps) * 100;
  progressBar.style.width = `${progressPercent}%`;
}

function nextStep() {
  if (currentStep < totalSteps) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
}
function createAcct() {
const wikiAcct='https://en.wikipedia.org/w/index.php?title=Special:CreateAccount';
window.location.href=wikiAcct;
}
function openArticlePicker() {
  alert('Article picker will open.');
  const articleTitle=document.getElementById('article').value;
   const wikiDomain='en.wikipedia.org';
const url='https://'+wikiDomain+'/wiki/'+encodeURIComponent(articleTitle);
  window.location.href=url;
  // For demonstration purposes, we'll just proceed to the next step
  nextStep();
}

function previewEdit() {
  const editTextArea = document.getElementById('editTextArea');
  const editPreview = document.getElementById('preview');
  editPreview.innerHTML = '<h3>Preview:</h3>' + editTextArea.value;
}

function publishEdit() {
  alert('Your edit has been published successfully!');
  currentStep = 1;
  showStep(currentStep);
}

