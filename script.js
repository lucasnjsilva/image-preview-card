window.onload = function() {
  const pictureInput = document.getElementById('picture-input');  
  pictureInput.addEventListener('change', function() {
    readURL(this);
  });
}

function readURL(input) {
  if(input.files && input.files[0]) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
      const picturePreview = document.getElementById('picture-preview');
      picturePreview.setAttribute('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
}